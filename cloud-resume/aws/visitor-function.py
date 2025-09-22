import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('replace-with-table')

def lambda_handler(event, context):
    response = table.get_item(Key= {'pKey' : 'replace-me'})

    count = response["Item"]["replace-me"]
    print("Get Response = ", response)
    print("Count = ", count)
    
    # increment string version of visit count
    new_count = str(int(count)+1)
    response = table.update_item(
        Key={'pKey': 'replace-me'},
        UpdateExpression='set Quantity = :c',
        ExpressionAttributeValues={':c': new_count},
        ReturnValues='UPDATED_NEW'
        )
    
    print("Update Response =  ", response)
    return {'body': new_count}
