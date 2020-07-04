const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');



const db = require('../../../cfg/db')

const WorkspaceServices = (() => {
  return {
    create:async (config, nodes) => {
      let wsId = await new Workspace({
        name: config.workspaceName,
        server_config: {
          rpc_listen_port: config.rpcport,
          rest_listen_port: config.restport,
        },
        blockchain_config: {
          minepace: config.minepace,
        },
      })
      .save()
      .then(ws => {
        logger.info("Success Saving Workspace Config!");
        return ws._id;
      })
      .catch(err => logger.error(err))
      return wsId;
    },
    find: async () => {
      let workspaces = await Workspace.find()
        .then(res => {
          return res
        });

      return workspaces;
    },
    findOne: async (wsname) => {
      let ws = await Workspace.findOne({name: wsname})
        .then(res => {
          return res
        })
      return ws
    },
    update: () => {

    },
    delete: () => {
      
    },
    findId: async (wsname) => {
      let wsId = await Workspace.findOne({name: wsname}, {$set: "_id"})
        .then((res) => {
          return res;
        })
      return wsId;
    },
  }
})()

module.exports = WorkspaceServices;