// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.Channel');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.lnrpc.HTLC');

goog.forwardDeclare('proto.lnrpc.CommitmentType');
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
proto.lnrpc.Channel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.Channel.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.Channel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.Channel.displayName = 'proto.lnrpc.Channel';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.Channel.repeatedFields_ = [15];



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
proto.lnrpc.Channel.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.Channel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.Channel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.Channel.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    remotePubkey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    channelPoint: jspb.Message.getFieldWithDefault(msg, 3, ""),
    chanId: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    capacity: jspb.Message.getFieldWithDefault(msg, 5, 0),
    localBalance: jspb.Message.getFieldWithDefault(msg, 6, 0),
    remoteBalance: jspb.Message.getFieldWithDefault(msg, 7, 0),
    commitFee: jspb.Message.getFieldWithDefault(msg, 8, 0),
    commitWeight: jspb.Message.getFieldWithDefault(msg, 9, 0),
    feePerKw: jspb.Message.getFieldWithDefault(msg, 10, 0),
    unsettledBalance: jspb.Message.getFieldWithDefault(msg, 11, 0),
    totalSatoshisSent: jspb.Message.getFieldWithDefault(msg, 12, 0),
    totalSatoshisReceived: jspb.Message.getFieldWithDefault(msg, 13, 0),
    numUpdates: jspb.Message.getFieldWithDefault(msg, 14, 0),
    pendingHtlcsList: jspb.Message.toObjectList(msg.getPendingHtlcsList(),
    proto.lnrpc.HTLC.toObject, includeInstance),
    csvDelay: jspb.Message.getFieldWithDefault(msg, 16, 0),
    pb_private: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    initiator: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    chanStatusFlags: jspb.Message.getFieldWithDefault(msg, 19, ""),
    localChanReserveSat: jspb.Message.getFieldWithDefault(msg, 20, 0),
    remoteChanReserveSat: jspb.Message.getFieldWithDefault(msg, 21, 0),
    staticRemoteKey: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    commitmentType: jspb.Message.getFieldWithDefault(msg, 26, 0),
    lifetime: jspb.Message.getFieldWithDefault(msg, 23, 0),
    uptime: jspb.Message.getFieldWithDefault(msg, 24, 0),
    closeAddress: jspb.Message.getFieldWithDefault(msg, 25, ""),
    pushAmountSat: jspb.Message.getFieldWithDefault(msg, 27, 0),
    thawHeight: jspb.Message.getFieldWithDefault(msg, 28, 0)
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
 * @return {!proto.lnrpc.Channel}
 */
proto.lnrpc.Channel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.Channel;
  return proto.lnrpc.Channel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.Channel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.Channel}
 */
proto.lnrpc.Channel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemotePubkey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelPoint(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setChanId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapacity(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLocalBalance(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRemoteBalance(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommitFee(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommitWeight(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeePerKw(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnsettledBalance(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalSatoshisSent(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalSatoshisReceived(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumUpdates(value);
      break;
    case 15:
      var value = new proto.lnrpc.HTLC;
      reader.readMessage(value,proto.lnrpc.HTLC.deserializeBinaryFromReader);
      msg.addPendingHtlcs(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCsvDelay(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrivate(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInitiator(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setChanStatusFlags(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLocalChanReserveSat(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRemoteChanReserveSat(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStaticRemoteKey(value);
      break;
    case 26:
      var value = /** @type {!proto.lnrpc.CommitmentType} */ (reader.readEnum());
      msg.setCommitmentType(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLifetime(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUptime(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setCloseAddress(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPushAmountSat(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setThawHeight(value);
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
proto.lnrpc.Channel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.Channel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.Channel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.Channel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRemotePubkey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChannelPoint();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getChanId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getLocalBalance();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getRemoteBalance();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCommitFee();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getCommitWeight();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getFeePerKw();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getUnsettledBalance();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getTotalSatoshisSent();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getTotalSatoshisReceived();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getNumUpdates();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getPendingHtlcsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.lnrpc.HTLC.serializeBinaryToWriter
    );
  }
  f = message.getCsvDelay();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = message.getPrivate();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getInitiator();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getChanStatusFlags();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getLocalChanReserveSat();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getRemoteChanReserveSat();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getStaticRemoteKey();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getCommitmentType();
  if (f !== 0.0) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = message.getLifetime();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getUptime();
  if (f !== 0) {
    writer.writeInt64(
      24,
      f
    );
  }
  f = message.getCloseAddress();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getPushAmountSat();
  if (f !== 0) {
    writer.writeUint64(
      27,
      f
    );
  }
  f = message.getThawHeight();
  if (f !== 0) {
    writer.writeUint32(
      28,
      f
    );
  }
};


/**
 * optional bool active = 1;
 * @return {boolean}
 */
proto.lnrpc.Channel.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string remote_pubkey = 2;
 * @return {string}
 */
proto.lnrpc.Channel.prototype.getRemotePubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setRemotePubkey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string channel_point = 3;
 * @return {string}
 */
proto.lnrpc.Channel.prototype.getChannelPoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setChannelPoint = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 chan_id = 4;
 * @return {string}
 */
proto.lnrpc.Channel.prototype.getChanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setChanId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional int64 capacity = 5;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setCapacity = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 local_balance = 6;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getLocalBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setLocalBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 remote_balance = 7;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getRemoteBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setRemoteBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 commit_fee = 8;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getCommitFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setCommitFee = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 commit_weight = 9;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getCommitWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setCommitWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 fee_per_kw = 10;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getFeePerKw = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setFeePerKw = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 unsettled_balance = 11;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getUnsettledBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setUnsettledBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 total_satoshis_sent = 12;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getTotalSatoshisSent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setTotalSatoshisSent = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 total_satoshis_received = 13;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getTotalSatoshisReceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setTotalSatoshisReceived = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 num_updates = 14;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getNumUpdates = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setNumUpdates = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * repeated HTLC pending_htlcs = 15;
 * @return {!Array<!proto.lnrpc.HTLC>}
 */
proto.lnrpc.Channel.prototype.getPendingHtlcsList = function() {
  return /** @type{!Array<!proto.lnrpc.HTLC>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.HTLC, 15));
};


/**
 * @param {!Array<!proto.lnrpc.HTLC>} value
 * @return {!proto.lnrpc.Channel} returns this
*/
proto.lnrpc.Channel.prototype.setPendingHtlcsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.lnrpc.HTLC=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lnrpc.HTLC}
 */
proto.lnrpc.Channel.prototype.addPendingHtlcs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.lnrpc.HTLC, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.clearPendingHtlcsList = function() {
  return this.setPendingHtlcsList([]);
};


/**
 * optional uint32 csv_delay = 16;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getCsvDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setCsvDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional bool private = 17;
 * @return {boolean}
 */
proto.lnrpc.Channel.prototype.getPrivate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setPrivate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool initiator = 18;
 * @return {boolean}
 */
proto.lnrpc.Channel.prototype.getInitiator = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setInitiator = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional string chan_status_flags = 19;
 * @return {string}
 */
proto.lnrpc.Channel.prototype.getChanStatusFlags = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setChanStatusFlags = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional int64 local_chan_reserve_sat = 20;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getLocalChanReserveSat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setLocalChanReserveSat = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional int64 remote_chan_reserve_sat = 21;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getRemoteChanReserveSat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setRemoteChanReserveSat = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional bool static_remote_key = 22;
 * @return {boolean}
 */
proto.lnrpc.Channel.prototype.getStaticRemoteKey = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setStaticRemoteKey = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional CommitmentType commitment_type = 26;
 * @return {!proto.lnrpc.CommitmentType}
 */
proto.lnrpc.Channel.prototype.getCommitmentType = function() {
  return /** @type {!proto.lnrpc.CommitmentType} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.lnrpc.CommitmentType} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setCommitmentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 26, value);
};


/**
 * optional int64 lifetime = 23;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getLifetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setLifetime = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional int64 uptime = 24;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getUptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setUptime = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional string close_address = 25;
 * @return {string}
 */
proto.lnrpc.Channel.prototype.getCloseAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setCloseAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional uint64 push_amount_sat = 27;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getPushAmountSat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setPushAmountSat = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * optional uint32 thaw_height = 28;
 * @return {number}
 */
proto.lnrpc.Channel.prototype.getThawHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Channel} returns this
 */
proto.lnrpc.Channel.prototype.setThawHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};

