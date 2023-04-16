"use strict";

var modeloComment = require('../../models').comment;

exports.updateComment = function _callee(req, res) {
  var Comment;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(modeloComment.findByPk(req.params.id));

        case 3:
          Comment = _context.sent;

          if (Comment) {
            _context.next = 7;
            break;
          }

          res.json({
            mensaje: "El comentario no existe"
          });
          return _context.abrupt("return");

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(modeloComment.update(req.body, {
            where: {
              id: req.params.id
            }
          }));

        case 9:
          res.json({
            mensaje: "comentario actualizado"
          });
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          res.send(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};