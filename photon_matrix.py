import json

json_string ='{"name":"Bob","age":"23"}'
user = json.loads(json_string)

user['name'] ='Karl'

print(json.dumps(user))


