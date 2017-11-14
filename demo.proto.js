/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * Status enum.
 * @exports Status
 * @enum {string}
 * @property {number} UNKNOWN=0 UNKNOWN value
 * @property {number} SUCCESS=200 SUCCESS value
 * @property {number} REQUEST_INVALID=400 REQUEST_INVALID value
 * @property {number} UNAUTHORIZED=401 UNAUTHORIZED value
 * @property {number} FORBBIDEN=403 FORBBIDEN value
 * @property {number} SERVER_ERROR=500 SERVER_ERROR value
 */
$root.Status = (function() {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN"] = 0;
    values[valuesById[200] = "SUCCESS"] = 200;
    values[valuesById[400] = "REQUEST_INVALID"] = 400;
    values[valuesById[401] = "UNAUTHORIZED"] = 401;
    values[valuesById[403] = "FORBBIDEN"] = 403;
    values[valuesById[500] = "SERVER_ERROR"] = 500;
    return values;
})();

/**
 * RequestType enum.
 * @exports RequestType
 * @enum {string}
 * @property {number} NORMAL=0 NORMAL value
 * @property {number} ASYNC=1 ASYNC value
 * @property {number} BATCH=2 BATCH value
 * @property {number} ASYNC_BATCH=3 ASYNC_BATCH value
 */
$root.RequestType = (function() {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NORMAL"] = 0;
    values[valuesById[1] = "ASYNC"] = 1;
    values[valuesById[2] = "BATCH"] = 2;
    values[valuesById[3] = "ASYNC_BATCH"] = 3;
    return values;
})();

export const Request = $root.Request = (() => {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {string} [endpoint] Request endpoint
     * @property {RequestType} [requestType] Request requestType
     * @property {string} [token] Request token
     * @property {Object.<string,string>} [params] Request params
     * @property {string} [body] Request body
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        this.params = {};
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Request endpoint.
     * @member {string}endpoint
     * @memberof Request
     * @instance
     */
    Request.prototype.endpoint = "";

    /**
     * Request requestType.
     * @member {RequestType}requestType
     * @memberof Request
     * @instance
     */
    Request.prototype.requestType = 0;

    /**
     * Request token.
     * @member {string}token
     * @memberof Request
     * @instance
     */
    Request.prototype.token = "";

    /**
     * Request params.
     * @member {Object.<string,string>}params
     * @memberof Request
     * @instance
     */
    Request.prototype.params = $util.emptyObject;

    /**
     * Request body.
     * @member {string}body
     * @memberof Request
     * @instance
     */
    Request.prototype.body = "";

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
        if (message.requestType != null && message.hasOwnProperty("requestType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.requestType);
        if (message.token != null && message.hasOwnProperty("token"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
        if (message.params != null && message.hasOwnProperty("params"))
            for (let keys = Object.keys(message.params), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.params[keys[i]]).ldelim();
        if (message.body != null && message.hasOwnProperty("body"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.body);
        return writer;
    };

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request(), key;
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.endpoint = reader.string();
                break;
            case 2:
                message.requestType = reader.int32();
                break;
            case 3:
                message.token = reader.string();
                break;
            case 4:
                reader.skip().pos++;
                if (message.params === $util.emptyObject)
                    message.params = {};
                key = reader.string();
                reader.pos++;
                message.params[key] = reader.string();
                break;
            case 5:
                message.body = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Request message.
     * @function verify
     * @memberof Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
            if (!$util.isString(message.endpoint))
                return "endpoint: string expected";
        if (message.requestType != null && message.hasOwnProperty("requestType"))
            switch (message.requestType) {
            default:
                return "requestType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.params != null && message.hasOwnProperty("params")) {
            if (!$util.isObject(message.params))
                return "params: object expected";
            let key = Object.keys(message.params);
            for (let i = 0; i < key.length; ++i)
                if (!$util.isString(message.params[key[i]]))
                    return "params: string{k:string} expected";
        }
        if (message.body != null && message.hasOwnProperty("body"))
            if (!$util.isString(message.body))
                return "body: string expected";
        return null;
    };

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        let message = new $root.Request();
        if (object.endpoint != null)
            message.endpoint = String(object.endpoint);
        switch (object.requestType) {
        case "NORMAL":
        case 0:
            message.requestType = 0;
            break;
        case "ASYNC":
        case 1:
            message.requestType = 1;
            break;
        case "BATCH":
        case 2:
            message.requestType = 2;
            break;
        case "ASYNC_BATCH":
        case 3:
            message.requestType = 3;
            break;
        }
        if (object.token != null)
            message.token = String(object.token);
        if (object.params) {
            if (typeof object.params !== "object")
                throw TypeError(".Request.params: object expected");
            message.params = {};
            for (let keys = Object.keys(object.params), i = 0; i < keys.length; ++i)
                message.params[keys[i]] = String(object.params[keys[i]]);
        }
        if (object.body != null)
            message.body = String(object.body);
        return message;
    };

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.objects || options.defaults)
            object.params = {};
        if (options.defaults) {
            object.endpoint = "";
            object.requestType = options.enums === String ? "NORMAL" : 0;
            object.token = "";
            object.body = "";
        }
        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
            object.endpoint = message.endpoint;
        if (message.requestType != null && message.hasOwnProperty("requestType"))
            object.requestType = options.enums === String ? $root.RequestType[message.requestType] : message.requestType;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        let keys2;
        if (message.params && (keys2 = Object.keys(message.params)).length) {
            object.params = {};
            for (let j = 0; j < keys2.length; ++j)
                object.params[keys2[j]] = message.params[keys2[j]];
        }
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = message.body;
        return object;
    };

    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Request;
})();

export const Response = $root.Response = (() => {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {Status} [status] Response status
     * @property {string} [body] Response body
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response status.
     * @member {Status}status
     * @memberof Response
     * @instance
     */
    Response.prototype.status = 0;

    /**
     * Response body.
     * @member {string}body
     * @memberof Response
     * @instance
     */
    Response.prototype.body = "";

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 101, wireType 0 =*/808).int32(message.status);
        if (message.body != null && message.hasOwnProperty("body"))
            writer.uint32(/* id 103, wireType 2 =*/826).string(message.body);
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 101:
                message.status = reader.int32();
                break;
            case 103:
                message.body = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            switch (message.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 200:
            case 400:
            case 401:
            case 403:
            case 500:
                break;
            }
        if (message.body != null && message.hasOwnProperty("body"))
            if (!$util.isString(message.body))
                return "body: string expected";
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        let message = new $root.Response();
        switch (object.status) {
        case "UNKNOWN":
        case 0:
            message.status = 0;
            break;
        case "SUCCESS":
        case 200:
            message.status = 200;
            break;
        case "REQUEST_INVALID":
        case 400:
            message.status = 400;
            break;
        case "UNAUTHORIZED":
        case 401:
            message.status = 401;
            break;
        case "FORBBIDEN":
        case 403:
            message.status = 403;
            break;
        case "SERVER_ERROR":
        case 500:
            message.status = 500;
            break;
        }
        if (object.body != null)
            message.body = String(object.body);
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.status = options.enums === String ? "UNKNOWN" : 0;
            object.body = "";
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = options.enums === String ? $root.Status[message.status] : message.status;
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = message.body;
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Response;
})();

export { $root as default };
