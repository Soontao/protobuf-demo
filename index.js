const { load } = require('protobufjs')
const data = require("./demo.data")

load("./demo.proto")
  .then(root => {
    var Request = root.lookupType("Request");
    var buffer = Request.encode(data.Request).finish();
    var decoded = Request.decode(buffer);

    var Response = root.lookupType("Response");
    var buffer2 = Response.encode(data.Response).finish();
    var decoded2 = Response.decode(buffer2);
    

  }).catch(err => {
    console.error(err)
  })