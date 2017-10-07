import os
import docker
import shutil
import uuid

from docker.errors import APIError
from docker.errors import ContainerError
from docker.errors import ImageNotFound

IMAGE_NAME = 'zhangjw/executor'
client = docker.from_env()

def load_image():
    try:
        client.images.get(IMAGE_NAME)
        print 'image found'
    except ImageNotFound:
        print 'image not found, pulling from docker hub ...'
        client.images.pull(IMAGE_NAME)
    except APIError:
        print 'image not found'
        return

    print 'image loaded'

CUR_DIR = os.path.dirname(os.path.realpath(__file__))
BUILD_DIR = '%s/tmp' % CUR_DIR

CONTAINER_NAME = '%s:latest' % IMAGE_NAME

SOURCE_NAMES = {
    'java' : 'Solution.java',
    'python' : 'Solution.py'
}

BINARY_NAMES = {
    'java' : 'Solution',
    'python' : 'Solution.py'
}

BUILD_COMMANDS = {
    'java' : 'javac',
    'python' : 'python'
}

EXECUTE_COMMANDS = {
    'java' : 'java',
    'python' : 'python'
}

def make_dir(dir):
    try:
        os.mkdir(dir)
        print 'file %s made' % dir
    except OSError as e:
        print 'fail to make file %s, %s' % (dir, e)

def build_and_run(code, lang):
    print "real path : %s" % CUR_DIR
    result = {'build': None, 'run' : None}
    rand_host_dir = uuid.uuid4()
    source_file_host_dir = '%s/%s' % (BUILD_DIR, rand_host_dir)

    source_file_guest_dir = '/test/%s' % rand_host_dir

    make_dir(source_file_host_dir)
    with open('%s/%s' % (source_file_host_dir, SOURCE_NAMES[lang]), 'w') as source_file:
        source_file.write(code)

    try:
        client.containers.run(
            image = IMAGE_NAME,
            command = '%s %s' % (BUILD_COMMANDS[lang], SOURCE_NAMES[lang]),
            volumes = {source_file_host_dir: {'bind': source_file_guest_dir, 'mode': 'rw'}},
            working_dir = source_file_guest_dir
        )

        print 'code built succeed'
        result['build'] = 'Success'
    except ContainerError as e:
        print 'code built fail'
        result['build'] = e.stderr
        shutil.rmtree(source_file_host_dir)
        return result

    try:
        log = client.containers.run(
            image = IMAGE_NAME,
            command = '%s %s' % (EXECUTE_COMMANDS[lang], BINARY_NAMES[lang]),
            volumes = {source_file_host_dir: {'bind': source_file_guest_dir, 'mode': 'rw'}},
            working_dir = source_file_guest_dir
        )
        print 'Executed'
        result['run'] = log
    except ContainerError as e:
        print 'Executed fail'
        result['run'] = e.stderr
        shutil.rmtree(source_file_host_dir)
        return result

    shutil.rmtree(source_file_host_dir)
    return result


