import json
import sys


def run():
    if len(sys.argv) <= 1:
        print("missing argument")
        return

    data = json.loads(sys.argv[1])
    if "message" not in data or "number" not in data:
        print("missing a key in the json object")
        return

    message = data["message"]
    number = data["number"]
    print(json.dumps({"result": message * number}))


"""This program gets as an argument a JSON object of the following format:
    {
        "message": "hello world",
        "number": 3
    }

    The program prints to STDOUT a JSON object containing the message multiplied the specified number of times:
    {
        "result": "hello worldhello worldhello world"
    }
"""
if __name__ == "__main__":
    run()
