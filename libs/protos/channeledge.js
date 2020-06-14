// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.ChannelEdge');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.lnrpc.RoutingPolicy');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelEdge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChannelEdge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.ChannelEdge.displayName = 'proto.lnrpc.ChannelEdge';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelEdge.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelEdge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelEdge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.ChannelEdge.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    chanPoint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastUpdate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    node1Pub: jspb.Message.getFieldWithDefault(msg, 4, ""),
    node2Pub: jspb.Message.getFieldWithDefault(msg, 5, ""),
    capacity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    node1Policy: (f = msg.getNode1Policy()) && proto.lnrpc.RoutingPolicy.toObject(includeInstance, f),
    node2Policy: (f = msg.getNode2Policy()) && proto.lnrpc.RoutingPolicy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelEdge}
 */
proto.lnrpc.ChannelEdge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelEdge;
  return proto.lnrpc.ChannelEdge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelEdge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelEdge}
 */
proto.lnrpc.ChannelEdge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setChannelId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChanPoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastUpdate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNode1Pub(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNode2Pub(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapacity(value);
      break;
    case 7:
      var value = new proto.lnrpc.RoutingPolicy;
      reader.readMessage(value,proto.lnrpc.RoutingPolicy.deserializeBinaryFromReader);
      msg.setNode1Policy(value);
      break;
    case 8:
      var value = new proto.lnrpc.RoutingPolicy;
      reader.readMessage(value,proto.lnrpc.RoutingPolicy.deserializeBinaryFromReader);
      msg.setNode2Policy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelEdge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.ChannelEdge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelEdge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.ChannelEdge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getChanPoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastUpdate();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getNode1Pub();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNode2Pub();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getNode1Policy();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.lnrpc.RoutingPolicy.serializeBinaryToWriter
    );
  }
  f = message.getNode2Policy();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.lnrpc.RoutingPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 channel_id = 1;
 * @return {string}
 */
proto.lnrpc.ChannelEdge.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.ChannelEdge} returns this
 */
proto.lnrpc.ChannelEdge.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string chan_point = 2;
 * @return {string}
 */
proto.lnrpc.ChannelEdge.prototype.getChanPoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.ChannelEdge} returns this
 */
proto.lnrpc.ChannelEdge.prototype.setChanPoint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 last_update = 3;
 * @return {number}
 */
proto.lnrpc.ChannelEdge.prototype.getLastUpdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelEdge} returns this
 */
proto.lnrpc.ChannelEdge.prototype.setLastUpdate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string node1_pub = 4;
 * @return {string}
 */
proto.lnrpc.ChannelEdge.prototype.getNode1Pub = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.ChannelEdge} returns this
 */
proto.lnrpc.ChannelEdge.prototype.setNode1Pub = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string node2_pub = 5;
 * @return {string}
 */
proto.lnrpc.ChannelEdge.prototype.getNode2Pub = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.ChannelEdge} returns this
 */
proto.lnrpc.ChannelEdge.prototype.setNode2Pub = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 capacity = 6;
 * @return {number}
 */
proto.lnrpc.ChannelEdge.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.ChannelEdge} returns this
 */
proto.lnrpc.ChannelEdge.prototype.setCapacity = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional RoutingPolicy node1_policy = 7;
 * @return {?proto.lnrpc.RoutingPolicy}
 */
proto.lnrpc.ChannelEdge.prototype.getNode1Policy = function() {
  return /** @type{?proto.lnrpc.RoutingPolicy} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.RoutingPolicy, 7));
};


/**
 * @param {?proto.lnrpc.RoutingPolicy|undefined} value
 * @return {!proto.lnrpc.ChannelEdge} returns this
*/
proto.lnrpc.ChannelEdge.prototype.setNode1Policy = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lnrpc.ChannelEdge} returns this
 */
proto.lnrpc.ChannelEdge.prototype.clearNode1Policy = function() {
  return this.setNode1Policy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.ChannelEdge.prototype.hasNode1Policy = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RoutingPolicy node2_policy = 8;
 * @return {?proto.lnrpc.RoutingPolicy}
 */
proto.lnrpc.ChannelEdge.prototype.getNode2Policy = function() {
  return /** @type{?proto.lnrpc.RoutingPolicy} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.RoutingPolicy, 8));
};


/**
 * @param {?proto.lnrpc.RoutingPolicy|undefined} value
 * @return {!proto.lnrpc.ChannelEdge} returns this
*/
proto.lnrpc.ChannelEdge.prototype.setNode2Policy = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lnrpc.ChannelEdge} returns this
 */
proto.lnrpc.ChannelEdge.prototype.clearNode2Policy = function() {
  return this.setNode2Policy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.ChannelEdge.prototype.hasNode2Policy = function() {
  return jspb.Message.getField(this, 8) != null;
};

