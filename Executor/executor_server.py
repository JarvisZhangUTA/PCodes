import json
import executor_utils as eu

from flask import Flask
from flask import jsonify
from flask import request

app = Flask(__name__)

@app.route('/code_results', methods=['POST'])
def build_and_run():
    data = json.loads(request.data)

    if 'code' not in data or 'lang' not in data:
        return 'Completely Error'

    code = data['code']
    lang = data['lang']

    print "Got request in %s" % (lang)

    result = eu.build_and_run(code, lang);
    return jsonify(result);

if __name__ == "__main__":
    eu.load_image()
    app.run(debug=True)