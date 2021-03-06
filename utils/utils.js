function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Access-control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    
}

modules.exports.buildResponse = buildResponse;