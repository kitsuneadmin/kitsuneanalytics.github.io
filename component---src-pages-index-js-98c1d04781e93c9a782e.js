webpackJsonp([35783957827783],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GraphQLError = __webpack_require__(36);
	
	Object.defineProperty(exports, 'GraphQLError', {
	  enumerable: true,
	  get: function get() {
	    return _GraphQLError.GraphQLError;
	  }
	});
	
	var _syntaxError = __webpack_require__(408);
	
	Object.defineProperty(exports, 'syntaxError', {
	  enumerable: true,
	  get: function get() {
	    return _syntaxError.syntaxError;
	  }
	});
	
	var _locatedError = __webpack_require__(173);
	
	Object.defineProperty(exports, 'locatedError', {
	  enumerable: true,
	  get: function get() {
	    return _locatedError.locatedError;
	  }
	});
	
	var _formatError = __webpack_require__(407);
	
	Object.defineProperty(exports, 'formatError', {
	  enumerable: true,
	  get: function get() {
	    return _formatError.formatError;
	  }
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GraphQLNonNull = exports.GraphQLList = exports.GraphQLInputObjectType = exports.GraphQLEnumType = exports.GraphQLUnionType = exports.GraphQLInterfaceType = exports.GraphQLObjectType = exports.GraphQLScalarType = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.isType = isType;
	exports.assertType = assertType;
	exports.isInputType = isInputType;
	exports.assertInputType = assertInputType;
	exports.isOutputType = isOutputType;
	exports.assertOutputType = assertOutputType;
	exports.isLeafType = isLeafType;
	exports.assertLeafType = assertLeafType;
	exports.isCompositeType = isCompositeType;
	exports.assertCompositeType = assertCompositeType;
	exports.isAbstractType = isAbstractType;
	exports.assertAbstractType = assertAbstractType;
	exports.getNullableType = getNullableType;
	exports.isNamedType = isNamedType;
	exports.assertNamedType = assertNamedType;
	exports.getNamedType = getNamedType;
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _isNullish = __webpack_require__(25);
	
	var _isNullish2 = _interopRequireDefault(_isNullish);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _assertValidName = __webpack_require__(115);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                           *
	                                                                                                                                                           * This source code is licensed under the MIT license found in the
	                                                                                                                                                           * LICENSE file in the root directory of this source tree.
	                                                                                                                                                           *
	                                                                                                                                                           * 
	                                                                                                                                                           */
	
	// Predicates & Assertions
	
	/**
	 * These are all of the possible kinds of types.
	 */
	function isType(type) {
	  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType || type instanceof GraphQLList || type instanceof GraphQLNonNull;
	}
	
	function assertType(type) {
	  !isType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL type.') : void 0;
	  return type;
	}
	
	/**
	 * These types may be used as input types for arguments and directives.
	 */
	function isInputType(type) {
	  return type instanceof GraphQLScalarType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType || type instanceof GraphQLNonNull && isInputType(type.ofType) || type instanceof GraphQLList && isInputType(type.ofType);
	}
	
	function assertInputType(type) {
	  !isInputType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL input type.') : void 0;
	  return type;
	}
	
	/**
	 * These types may be used as output types as the result of fields.
	 */
	function isOutputType(type) {
	  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLNonNull && isOutputType(type.ofType) || type instanceof GraphQLList && isOutputType(type.ofType);
	}
	
	function assertOutputType(type) {
	  !isOutputType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL output type.') : void 0;
	  return type;
	}
	
	/**
	 * These types may describe types which may be leaf values.
	 */
	function isLeafType(type) {
	  return type instanceof GraphQLScalarType || type instanceof GraphQLEnumType;
	}
	
	function assertLeafType(type) {
	  !isLeafType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL leaf type.') : void 0;
	  return type;
	}
	
	/**
	 * These types may describe the parent context of a selection set.
	 */
	function isCompositeType(type) {
	  return type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
	}
	
	function assertCompositeType(type) {
	  !isCompositeType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL composite type.') : void 0;
	  return type;
	}
	
	/**
	 * These types may describe the parent context of a selection set.
	 */
	function isAbstractType(type) {
	  return type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
	}
	
	function assertAbstractType(type) {
	  !isAbstractType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL abstract type.') : void 0;
	  return type;
	}
	
	/**
	 * These types can all accept null as a value.
	 */
	function getNullableType(type) {
	  return type instanceof GraphQLNonNull ? type.ofType : type;
	}
	
	/**
	 * These named types do not include modifiers like List or NonNull.
	 */
	function isNamedType(type) {
	  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType;
	}
	
	function assertNamedType(type) {
	  !isNamedType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL named type.') : void 0;
	  return type;
	}
	
	/* eslint-disable no-redeclare */
	function getNamedType(type) {
	  /* eslint-enable no-redeclare */
	  if (type) {
	    var unmodifiedType = type;
	    while (unmodifiedType instanceof GraphQLList || unmodifiedType instanceof GraphQLNonNull) {
	      unmodifiedType = unmodifiedType.ofType;
	    }
	    return unmodifiedType;
	  }
	}
	
	/**
	 * Used while defining GraphQL types to allow for circular references in
	 * otherwise immutable type definitions.
	 */
	
	
	function resolveThunk(thunk) {
	  return typeof thunk === 'function' ? thunk() : thunk;
	}
	
	/**
	 * Scalar Type Definition
	 *
	 * The leaf values of any request and input values to arguments are
	 * Scalars (or Enums) and are defined with a name and a series of functions
	 * used to parse input from ast or variables and to ensure validity.
	 *
	 * Example:
	 *
	 *     const OddType = new GraphQLScalarType({
	 *       name: 'Odd',
	 *       serialize(value) {
	 *         return value % 2 === 1 ? value : null;
	 *       }
	 *     });
	 *
	 */
	
	var GraphQLScalarType = exports.GraphQLScalarType = function () {
	  function GraphQLScalarType(config) {
	    _classCallCheck(this, GraphQLScalarType);
	
	    (0, _assertValidName.assertValidName)(config.name);
	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    !(typeof config.serialize === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "serialize" function. If this custom Scalar ' + 'is also used as an input type, ensure "parseValue" and "parseLiteral" ' + 'functions are also provided.') : void 0;
	    if (config.parseValue || config.parseLiteral) {
	      !(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide both "parseValue" and "parseLiteral" ' + 'functions.') : void 0;
	    }
	    this._scalarConfig = config;
	  }
	
	  // Serializes an internal value to include in a response.
	
	
	  GraphQLScalarType.prototype.serialize = function serialize(value) {
	    var serializer = this._scalarConfig.serialize;
	    return serializer(value);
	  };
	
	  // Determines if an internal value is valid for this type.
	  // Equivalent to checking for if the parsedValue is nullish.
	
	
	  GraphQLScalarType.prototype.isValidValue = function isValidValue(value) {
	    return !(0, _isNullish2.default)(this.parseValue(value));
	  };
	
	  // Parses an externally provided value to use as an input.
	
	
	  GraphQLScalarType.prototype.parseValue = function parseValue(value) {
	    var parser = this._scalarConfig.parseValue;
	    return parser && !(0, _isNullish2.default)(value) ? parser(value) : undefined;
	  };
	
	  // Determines if an internal value is valid for this type.
	  // Equivalent to checking for if the parsedLiteral is nullish.
	
	
	  GraphQLScalarType.prototype.isValidLiteral = function isValidLiteral(valueNode) {
	    return !(0, _isNullish2.default)(this.parseLiteral(valueNode));
	  };
	
	  // Parses an externally provided literal value to use as an input.
	
	
	  GraphQLScalarType.prototype.parseLiteral = function parseLiteral(valueNode) {
	    var parser = this._scalarConfig.parseLiteral;
	    return parser ? parser(valueNode) : undefined;
	  };
	
	  GraphQLScalarType.prototype.toString = function toString() {
	    return this.name;
	  };
	
	  return GraphQLScalarType;
	}();
	
	// Also provide toJSON and inspect aliases for toString.
	
	
	GraphQLScalarType.prototype.toJSON = GraphQLScalarType.prototype.inspect = GraphQLScalarType.prototype.toString;
	
	/**
	 * Object Type Definition
	 *
	 * Almost all of the GraphQL types you define will be object types. Object types
	 * have a name, but most importantly describe their fields.
	 *
	 * Example:
	 *
	 *     const AddressType = new GraphQLObjectType({
	 *       name: 'Address',
	 *       fields: {
	 *         street: { type: GraphQLString },
	 *         number: { type: GraphQLInt },
	 *         formatted: {
	 *           type: GraphQLString,
	 *           resolve(obj) {
	 *             return obj.number + ' ' + obj.street
	 *           }
	 *         }
	 *       }
	 *     });
	 *
	 * When two types need to refer to each other, or a type needs to refer to
	 * itself in a field, you can use a function expression (aka a closure or a
	 * thunk) to supply the fields lazily.
	 *
	 * Example:
	 *
	 *     const PersonType = new GraphQLObjectType({
	 *       name: 'Person',
	 *       fields: () => ({
	 *         name: { type: GraphQLString },
	 *         bestFriend: { type: PersonType },
	 *       })
	 *     });
	 *
	 */
	var GraphQLObjectType = exports.GraphQLObjectType = function () {
	  function GraphQLObjectType(config) {
	    _classCallCheck(this, GraphQLObjectType);
	
	    (0, _assertValidName.assertValidName)(config.name, config.isIntrospection);
	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    this.extensionASTNodes = config.extensionASTNodes || [];
	    if (config.isTypeOf) {
	      !(typeof config.isTypeOf === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "isTypeOf" as a function.') : void 0;
	    }
	    this.isTypeOf = config.isTypeOf;
	    this._typeConfig = config;
	  }
	
	  GraphQLObjectType.prototype.getFields = function getFields() {
	    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
	  };
	
	  GraphQLObjectType.prototype.getInterfaces = function getInterfaces() {
	    return this._interfaces || (this._interfaces = defineInterfaces(this, this._typeConfig.interfaces));
	  };
	
	  GraphQLObjectType.prototype.toString = function toString() {
	    return this.name;
	  };
	
	  return GraphQLObjectType;
	}();
	
	// Also provide toJSON and inspect aliases for toString.
	
	
	GraphQLObjectType.prototype.toJSON = GraphQLObjectType.prototype.inspect = GraphQLObjectType.prototype.toString;
	
	function defineInterfaces(type, interfacesThunk) {
	  var interfaces = resolveThunk(interfacesThunk);
	  if (!interfaces) {
	    return [];
	  }
	  !Array.isArray(interfaces) ? (0, _invariant2.default)(0, type.name + ' interfaces must be an Array or a function which returns ' + 'an Array.') : void 0;
	
	  var implementedTypeNames = Object.create(null);
	  interfaces.forEach(function (iface) {
	    !(iface instanceof GraphQLInterfaceType) ? (0, _invariant2.default)(0, type.name + ' may only implement Interface types, it cannot ' + ('implement: ' + String(iface) + '.')) : void 0;
	    !!implementedTypeNames[iface.name] ? (0, _invariant2.default)(0, type.name + ' may declare it implements ' + iface.name + ' only once.') : void 0;
	    implementedTypeNames[iface.name] = true;
	    if (typeof iface.resolveType !== 'function') {
	      !(typeof type.isTypeOf === 'function') ? (0, _invariant2.default)(0, 'Interface Type ' + iface.name + ' does not provide a "resolveType" ' + ('function and implementing Type ' + type.name + ' does not provide a ') + '"isTypeOf" function. There is no way to resolve this implementing ' + 'type during execution.') : void 0;
	    }
	  });
	  return interfaces;
	}
	
	function defineFieldMap(type, fieldsThunk) {
	  var fieldMap = resolveThunk(fieldsThunk);
	  !isPlainObj(fieldMap) ? (0, _invariant2.default)(0, type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
	
	  var fieldNames = Object.keys(fieldMap);
	  !(fieldNames.length > 0) ? (0, _invariant2.default)(0, type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
	
	  var resultFieldMap = Object.create(null);
	  fieldNames.forEach(function (fieldName) {
	    (0, _assertValidName.assertValidName)(fieldName);
	    var fieldConfig = fieldMap[fieldName];
	    !isPlainObj(fieldConfig) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field config must be an object') : void 0;
	    !!fieldConfig.hasOwnProperty('isDeprecated') ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
	    var field = _extends({}, fieldConfig, {
	      isDeprecated: Boolean(fieldConfig.deprecationReason),
	      name: fieldName
	    });
	    !isOutputType(field.type) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field type must be Output Type but ' + ('got: ' + String(field.type) + '.')) : void 0;
	    !isValidResolver(field.resolve) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field resolver must be a function if ' + ('provided, but got: ' + String(field.resolve) + '.')) : void 0;
	    var argsConfig = fieldConfig.args;
	    if (!argsConfig) {
	      field.args = [];
	    } else {
	      !isPlainObj(argsConfig) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' args must be an object with argument ' + 'names as keys.') : void 0;
	      field.args = Object.keys(argsConfig).map(function (argName) {
	        (0, _assertValidName.assertValidName)(argName);
	        var arg = argsConfig[argName];
	        !isInputType(arg.type) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + '(' + argName + ':) argument type must be ' + ('Input Type but got: ' + String(arg.type) + '.')) : void 0;
	        return {
	          name: argName,
	          description: arg.description === undefined ? null : arg.description,
	          type: arg.type,
	          defaultValue: arg.defaultValue,
	          astNode: arg.astNode
	        };
	      });
	    }
	    resultFieldMap[fieldName] = field;
	  });
	  return resultFieldMap;
	}
	
	function isPlainObj(obj) {
	  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
	}
	
	// If a resolver is defined, it must be a function.
	function isValidResolver(resolver) {
	  return resolver == null || typeof resolver === 'function';
	}
	
	/**
	 * Interface Type Definition
	 *
	 * When a field can return one of a heterogeneous set of types, a Interface type
	 * is used to describe what types are possible, what fields are in common across
	 * all types, as well as a function to determine which type is actually used
	 * when the field is resolved.
	 *
	 * Example:
	 *
	 *     const EntityType = new GraphQLInterfaceType({
	 *       name: 'Entity',
	 *       fields: {
	 *         name: { type: GraphQLString }
	 *       }
	 *     });
	 *
	 */
	var GraphQLInterfaceType = exports.GraphQLInterfaceType = function () {
	  function GraphQLInterfaceType(config) {
	    _classCallCheck(this, GraphQLInterfaceType);
	
	    (0, _assertValidName.assertValidName)(config.name);
	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    if (config.resolveType) {
	      !(typeof config.resolveType === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "resolveType" as a function.') : void 0;
	    }
	    this.resolveType = config.resolveType;
	    this._typeConfig = config;
	  }
	
	  GraphQLInterfaceType.prototype.getFields = function getFields() {
	    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
	  };
	
	  GraphQLInterfaceType.prototype.toString = function toString() {
	    return this.name;
	  };
	
	  return GraphQLInterfaceType;
	}();
	
	// Also provide toJSON and inspect aliases for toString.
	
	
	GraphQLInterfaceType.prototype.toJSON = GraphQLInterfaceType.prototype.inspect = GraphQLInterfaceType.prototype.toString;
	
	/**
	 * Union Type Definition
	 *
	 * When a field can return one of a heterogeneous set of types, a Union type
	 * is used to describe what types are possible as well as providing a function
	 * to determine which type is actually used when the field is resolved.
	 *
	 * Example:
	 *
	 *     const PetType = new GraphQLUnionType({
	 *       name: 'Pet',
	 *       types: [ DogType, CatType ],
	 *       resolveType(value) {
	 *         if (value instanceof Dog) {
	 *           return DogType;
	 *         }
	 *         if (value instanceof Cat) {
	 *           return CatType;
	 *         }
	 *       }
	 *     });
	 *
	 */
	var GraphQLUnionType = exports.GraphQLUnionType = function () {
	  function GraphQLUnionType(config) {
	    _classCallCheck(this, GraphQLUnionType);
	
	    (0, _assertValidName.assertValidName)(config.name);
	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    if (config.resolveType) {
	      !(typeof config.resolveType === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "resolveType" as a function.') : void 0;
	    }
	    this.resolveType = config.resolveType;
	    this._typeConfig = config;
	  }
	
	  GraphQLUnionType.prototype.getTypes = function getTypes() {
	    return this._types || (this._types = defineTypes(this, this._typeConfig.types));
	  };
	
	  GraphQLUnionType.prototype.toString = function toString() {
	    return this.name;
	  };
	
	  return GraphQLUnionType;
	}();
	
	// Also provide toJSON and inspect aliases for toString.
	
	
	GraphQLUnionType.prototype.toJSON = GraphQLUnionType.prototype.inspect = GraphQLUnionType.prototype.toString;
	
	function defineTypes(unionType, typesThunk) {
	  var types = resolveThunk(typesThunk);
	
	  !(Array.isArray(types) && types.length > 0) ? (0, _invariant2.default)(0, 'Must provide Array of types or a function which returns ' + ('such an array for Union ' + unionType.name + '.')) : void 0;
	  var includedTypeNames = Object.create(null);
	  types.forEach(function (objType) {
	    !(objType instanceof GraphQLObjectType) ? (0, _invariant2.default)(0, unionType.name + ' may only contain Object types, it cannot contain: ' + (String(objType) + '.')) : void 0;
	    !!includedTypeNames[objType.name] ? (0, _invariant2.default)(0, unionType.name + ' can include ' + objType.name + ' type only once.') : void 0;
	    includedTypeNames[objType.name] = true;
	    if (typeof unionType.resolveType !== 'function') {
	      !(typeof objType.isTypeOf === 'function') ? (0, _invariant2.default)(0, 'Union type "' + unionType.name + '" does not provide a "resolveType" ' + ('function and possible type "' + objType.name + '" does not provide an ') + '"isTypeOf" function. There is no way to resolve this possible type ' + 'during execution.') : void 0;
	    }
	  });
	
	  return types;
	}
	
	/**
	 * Enum Type Definition
	 *
	 * Some leaf values of requests and input values are Enums. GraphQL serializes
	 * Enum values as strings, however internally Enums can be represented by any
	 * kind of type, often integers.
	 *
	 * Example:
	 *
	 *     const RGBType = new GraphQLEnumType({
	 *       name: 'RGB',
	 *       values: {
	 *         RED: { value: 0 },
	 *         GREEN: { value: 1 },
	 *         BLUE: { value: 2 }
	 *       }
	 *     });
	 *
	 * Note: If a value is not provided in a definition, the name of the enum value
	 * will be used as its internal value.
	 */
	var GraphQLEnumType /* <T> */ = exports.GraphQLEnumType = function () {
	  function GraphQLEnumType(config /* <T> */) {
	    _classCallCheck(this, GraphQLEnumType);
	
	    this.name = config.name;
	    (0, _assertValidName.assertValidName)(config.name, config.isIntrospection);
	    this.description = config.description;
	    this.astNode = config.astNode;
	    this._values = defineEnumValues(this, config.values);
	    this._enumConfig = config;
	  }
	
	  GraphQLEnumType.prototype.getValues = function getValues() {
	    return this._values;
	  };
	
	  GraphQLEnumType.prototype.getValue = function getValue(name) {
	    return this._getNameLookup()[name];
	  };
	
	  GraphQLEnumType.prototype.serialize = function serialize(value /* T */) {
	    var enumValue = this._getValueLookup().get(value);
	    return enumValue ? enumValue.name : null;
	  };
	
	  GraphQLEnumType.prototype.isValidValue = function isValidValue(value) {
	    return typeof value === 'string' && this._getNameLookup()[value] !== undefined;
	  };
	
	  GraphQLEnumType.prototype.parseValue = function parseValue(value) /* T */{
	    if (typeof value === 'string') {
	      var enumValue = this._getNameLookup()[value];
	      if (enumValue) {
	        return enumValue.value;
	      }
	    }
	  };
	
	  GraphQLEnumType.prototype.isValidLiteral = function isValidLiteral(valueNode) {
	    return valueNode.kind === Kind.ENUM && this._getNameLookup()[valueNode.value] !== undefined;
	  };
	
	  GraphQLEnumType.prototype.parseLiteral = function parseLiteral(valueNode) /* T */{
	    if (valueNode.kind === Kind.ENUM) {
	      var enumValue = this._getNameLookup()[valueNode.value];
	      if (enumValue) {
	        return enumValue.value;
	      }
	    }
	  };
	
	  GraphQLEnumType.prototype._getValueLookup = function _getValueLookup() {
	    if (!this._valueLookup) {
	      var lookup = new Map();
	      this.getValues().forEach(function (value) {
	        lookup.set(value.value, value);
	      });
	      this._valueLookup = lookup;
	    }
	    return this._valueLookup;
	  };
	
	  GraphQLEnumType.prototype._getNameLookup = function _getNameLookup() {
	    if (!this._nameLookup) {
	      var lookup = Object.create(null);
	      this.getValues().forEach(function (value) {
	        lookup[value.name] = value;
	      });
	      this._nameLookup = lookup;
	    }
	    return this._nameLookup;
	  };
	
	  GraphQLEnumType.prototype.toString = function toString() {
	    return this.name;
	  };
	
	  return GraphQLEnumType;
	}();
	
	// Also provide toJSON and inspect aliases for toString.
	
	
	GraphQLEnumType.prototype.toJSON = GraphQLEnumType.prototype.inspect = GraphQLEnumType.prototype.toString;
	
	function defineEnumValues(type, valueMap /* <T> */
	) {
	  !isPlainObj(valueMap) ? (0, _invariant2.default)(0, type.name + ' values must be an object with value names as keys.') : void 0;
	  var valueNames = Object.keys(valueMap);
	  !(valueNames.length > 0) ? (0, _invariant2.default)(0, type.name + ' values must be an object with value names as keys.') : void 0;
	  return valueNames.map(function (valueName) {
	    (0, _assertValidName.assertValidName)(valueName);
	    !(['true', 'false', 'null'].indexOf(valueName) === -1) ? (0, _invariant2.default)(0, 'Name "' + valueName + '" can not be used as an Enum value.') : void 0;
	
	    var value = valueMap[valueName];
	    !isPlainObj(value) ? (0, _invariant2.default)(0, type.name + '.' + valueName + ' must refer to an object with a "value" key ' + ('representing an internal value but got: ' + String(value) + '.')) : void 0;
	    !!value.hasOwnProperty('isDeprecated') ? (0, _invariant2.default)(0, type.name + '.' + valueName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
	    return {
	      name: valueName,
	      description: value.description,
	      isDeprecated: Boolean(value.deprecationReason),
	      deprecationReason: value.deprecationReason,
	      astNode: value.astNode,
	      value: value.hasOwnProperty('value') ? value.value : valueName
	    };
	  });
	} /* <T> */
	
	
	/**
	 * Input Object Type Definition
	 *
	 * An input object defines a structured collection of fields which may be
	 * supplied to a field argument.
	 *
	 * Using `NonNull` will ensure that a value must be provided by the query
	 *
	 * Example:
	 *
	 *     const GeoPoint = new GraphQLInputObjectType({
	 *       name: 'GeoPoint',
	 *       fields: {
	 *         lat: { type: new GraphQLNonNull(GraphQLFloat) },
	 *         lon: { type: new GraphQLNonNull(GraphQLFloat) },
	 *         alt: { type: GraphQLFloat, defaultValue: 0 },
	 *       }
	 *     });
	 *
	 */
	var GraphQLInputObjectType = exports.GraphQLInputObjectType = function () {
	  function GraphQLInputObjectType(config) {
	    _classCallCheck(this, GraphQLInputObjectType);
	
	    (0, _assertValidName.assertValidName)(config.name);
	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    this._typeConfig = config;
	  }
	
	  GraphQLInputObjectType.prototype.getFields = function getFields() {
	    return this._fields || (this._fields = this._defineFieldMap());
	  };
	
	  GraphQLInputObjectType.prototype._defineFieldMap = function _defineFieldMap() {
	    var _this = this;
	
	    var fieldMap = resolveThunk(this._typeConfig.fields);
	    !isPlainObj(fieldMap) ? (0, _invariant2.default)(0, this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
	    var fieldNames = Object.keys(fieldMap);
	    !(fieldNames.length > 0) ? (0, _invariant2.default)(0, this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
	    var resultFieldMap = Object.create(null);
	    fieldNames.forEach(function (fieldName) {
	      (0, _assertValidName.assertValidName)(fieldName);
	      var field = _extends({}, fieldMap[fieldName], {
	        name: fieldName
	      });
	      !isInputType(field.type) ? (0, _invariant2.default)(0, _this.name + '.' + fieldName + ' field type must be Input Type but ' + ('got: ' + String(field.type) + '.')) : void 0;
	      !(field.resolve == null) ? (0, _invariant2.default)(0, _this.name + '.' + fieldName + ' field type has a resolve property, but ' + 'Input Types cannot define resolvers.') : void 0;
	      resultFieldMap[fieldName] = field;
	    });
	    return resultFieldMap;
	  };
	
	  GraphQLInputObjectType.prototype.toString = function toString() {
	    return this.name;
	  };
	
	  return GraphQLInputObjectType;
	}();
	
	// Also provide toJSON and inspect aliases for toString.
	
	
	GraphQLInputObjectType.prototype.toJSON = GraphQLInputObjectType.prototype.inspect = GraphQLInputObjectType.prototype.toString;
	
	/**
	 * List Modifier
	 *
	 * A list is a kind of type marker, a wrapping type which points to another
	 * type. Lists are often created within the context of defining the fields of
	 * an object type.
	 *
	 * Example:
	 *
	 *     const PersonType = new GraphQLObjectType({
	 *       name: 'Person',
	 *       fields: () => ({
	 *         parents: { type: new GraphQLList(Person) },
	 *         children: { type: new GraphQLList(Person) },
	 *       })
	 *     })
	 *
	 */
	var GraphQLList = exports.GraphQLList = function () {
	  function GraphQLList(type) {
	    _classCallCheck(this, GraphQLList);
	
	    !isType(type) ? (0, _invariant2.default)(0, 'Can only create List of a GraphQLType but got: ' + String(type) + '.') : void 0;
	    this.ofType = type;
	  }
	
	  GraphQLList.prototype.toString = function toString() {
	    return '[' + String(this.ofType) + ']';
	  };
	
	  return GraphQLList;
	}();
	
	// Also provide toJSON and inspect aliases for toString.
	
	
	GraphQLList.prototype.toJSON = GraphQLList.prototype.inspect = GraphQLList.prototype.toString;
	
	/**
	 * Non-Null Modifier
	 *
	 * A non-null is a kind of type marker, a wrapping type which points to another
	 * type. Non-null types enforce that their values are never null and can ensure
	 * an error is raised if this ever occurs during a request. It is useful for
	 * fields which you can make a strong guarantee on non-nullability, for example
	 * usually the id field of a database row will never be null.
	 *
	 * Example:
	 *
	 *     const RowType = new GraphQLObjectType({
	 *       name: 'Row',
	 *       fields: () => ({
	 *         id: { type: new GraphQLNonNull(GraphQLString) },
	 *       })
	 *     })
	 *
	 * Note: the enforcement of non-nullability occurs within the executor.
	 */
	
	var GraphQLNonNull = exports.GraphQLNonNull = function () {
	  function GraphQLNonNull(type) {
	    _classCallCheck(this, GraphQLNonNull);
	
	    !(isType(type) && !(type instanceof GraphQLNonNull)) ? (0, _invariant2.default)(0, 'Can only create NonNull of a Nullable GraphQLType but got: ' + (String(type) + '.')) : void 0;
	    this.ofType = type;
	  }
	
	  GraphQLNonNull.prototype.toString = function toString() {
	    return this.ofType.toString() + '!';
	  };
	
	  return GraphQLNonNull;
	}();
	
	// Also provide toJSON and inspect aliases for toString.
	
	
	GraphQLNonNull.prototype.toJSON = GraphQLNonNull.prototype.inspect = GraphQLNonNull.prototype.toString;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = invariant;
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function invariant(condition, message) {
	  if (!condition) {
	    throw new Error(message);
	  }
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	// Name
	
	var NAME = exports.NAME = 'Name';
	
	// Document
	
	var DOCUMENT = exports.DOCUMENT = 'Document';
	var OPERATION_DEFINITION = exports.OPERATION_DEFINITION = 'OperationDefinition';
	var VARIABLE_DEFINITION = exports.VARIABLE_DEFINITION = 'VariableDefinition';
	var VARIABLE = exports.VARIABLE = 'Variable';
	var SELECTION_SET = exports.SELECTION_SET = 'SelectionSet';
	var FIELD = exports.FIELD = 'Field';
	var ARGUMENT = exports.ARGUMENT = 'Argument';
	
	// Fragments
	
	var FRAGMENT_SPREAD = exports.FRAGMENT_SPREAD = 'FragmentSpread';
	var INLINE_FRAGMENT = exports.INLINE_FRAGMENT = 'InlineFragment';
	var FRAGMENT_DEFINITION = exports.FRAGMENT_DEFINITION = 'FragmentDefinition';
	
	// Values
	
	var INT = exports.INT = 'IntValue';
	var FLOAT = exports.FLOAT = 'FloatValue';
	var STRING = exports.STRING = 'StringValue';
	var BOOLEAN = exports.BOOLEAN = 'BooleanValue';
	var NULL = exports.NULL = 'NullValue';
	var ENUM = exports.ENUM = 'EnumValue';
	var LIST = exports.LIST = 'ListValue';
	var OBJECT = exports.OBJECT = 'ObjectValue';
	var OBJECT_FIELD = exports.OBJECT_FIELD = 'ObjectField';
	
	// Directives
	
	var DIRECTIVE = exports.DIRECTIVE = 'Directive';
	
	// Types
	
	var NAMED_TYPE = exports.NAMED_TYPE = 'NamedType';
	var LIST_TYPE = exports.LIST_TYPE = 'ListType';
	var NON_NULL_TYPE = exports.NON_NULL_TYPE = 'NonNullType';
	
	// Type System Definitions
	
	var SCHEMA_DEFINITION = exports.SCHEMA_DEFINITION = 'SchemaDefinition';
	var OPERATION_TYPE_DEFINITION = exports.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition';
	
	// Type Definitions
	
	var SCALAR_TYPE_DEFINITION = exports.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition';
	var OBJECT_TYPE_DEFINITION = exports.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition';
	var FIELD_DEFINITION = exports.FIELD_DEFINITION = 'FieldDefinition';
	var INPUT_VALUE_DEFINITION = exports.INPUT_VALUE_DEFINITION = 'InputValueDefinition';
	var INTERFACE_TYPE_DEFINITION = exports.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition';
	var UNION_TYPE_DEFINITION = exports.UNION_TYPE_DEFINITION = 'UnionTypeDefinition';
	var ENUM_TYPE_DEFINITION = exports.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition';
	var ENUM_VALUE_DEFINITION = exports.ENUM_VALUE_DEFINITION = 'EnumValueDefinition';
	var INPUT_OBJECT_TYPE_DEFINITION = exports.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition';
	
	// Type Extensions
	
	var TYPE_EXTENSION_DEFINITION = exports.TYPE_EXTENSION_DEFINITION = 'TypeExtensionDefinition';
	
	// Directive Definitions
	
	var DIRECTIVE_DEFINITION = exports.DIRECTIVE_DEFINITION = 'DirectiveDefinition';

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.print = print;
	
	var _visitor = __webpack_require__(50);
	
	/**
	 * Converts an AST into a string, using one set of reasonable
	 * formatting rules.
	 */
	function print(ast) {
	  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   */
	
	var printDocASTReducer = {
	  Name: function Name(node) {
	    return node.value;
	  },
	  Variable: function Variable(node) {
	    return '$' + node.name;
	  },
	
	  // Document
	
	  Document: function Document(node) {
	    return join(node.definitions, '\n\n') + '\n';
	  },
	
	  OperationDefinition: function OperationDefinition(node) {
	    var op = node.operation;
	    var name = node.name;
	    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
	    var directives = join(node.directives, ' ');
	    var selectionSet = node.selectionSet;
	    // Anonymous queries with no directives or variable definitions can use
	    // the query short form.
	    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
	  },
	
	
	  VariableDefinition: function VariableDefinition(_ref) {
	    var variable = _ref.variable,
	        type = _ref.type,
	        defaultValue = _ref.defaultValue;
	    return variable + ': ' + type + wrap(' = ', defaultValue);
	  },
	
	  SelectionSet: function SelectionSet(_ref2) {
	    var selections = _ref2.selections;
	    return block(selections);
	  },
	
	  Field: function Field(_ref3) {
	    var alias = _ref3.alias,
	        name = _ref3.name,
	        args = _ref3.arguments,
	        directives = _ref3.directives,
	        selectionSet = _ref3.selectionSet;
	    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
	  },
	
	  Argument: function Argument(_ref4) {
	    var name = _ref4.name,
	        value = _ref4.value;
	    return name + ': ' + value;
	  },
	
	  // Fragments
	
	  FragmentSpread: function FragmentSpread(_ref5) {
	    var name = _ref5.name,
	        directives = _ref5.directives;
	    return '...' + name + wrap(' ', join(directives, ' '));
	  },
	
	  InlineFragment: function InlineFragment(_ref6) {
	    var typeCondition = _ref6.typeCondition,
	        directives = _ref6.directives,
	        selectionSet = _ref6.selectionSet;
	    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
	  },
	
	  FragmentDefinition: function FragmentDefinition(_ref7) {
	    var name = _ref7.name,
	        typeCondition = _ref7.typeCondition,
	        directives = _ref7.directives,
	        selectionSet = _ref7.selectionSet;
	    return 'fragment ' + name + ' on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ') + selectionSet;
	  },
	
	  // Value
	
	  IntValue: function IntValue(_ref8) {
	    var value = _ref8.value;
	    return value;
	  },
	  FloatValue: function FloatValue(_ref9) {
	    var value = _ref9.value;
	    return value;
	  },
	  StringValue: function StringValue(_ref10) {
	    var value = _ref10.value;
	    return JSON.stringify(value);
	  },
	  BooleanValue: function BooleanValue(_ref11) {
	    var value = _ref11.value;
	    return JSON.stringify(value);
	  },
	  NullValue: function NullValue() {
	    return 'null';
	  },
	  EnumValue: function EnumValue(_ref12) {
	    var value = _ref12.value;
	    return value;
	  },
	  ListValue: function ListValue(_ref13) {
	    var values = _ref13.values;
	    return '[' + join(values, ', ') + ']';
	  },
	  ObjectValue: function ObjectValue(_ref14) {
	    var fields = _ref14.fields;
	    return '{' + join(fields, ', ') + '}';
	  },
	  ObjectField: function ObjectField(_ref15) {
	    var name = _ref15.name,
	        value = _ref15.value;
	    return name + ': ' + value;
	  },
	
	  // Directive
	
	  Directive: function Directive(_ref16) {
	    var name = _ref16.name,
	        args = _ref16.arguments;
	    return '@' + name + wrap('(', join(args, ', '), ')');
	  },
	
	  // Type
	
	  NamedType: function NamedType(_ref17) {
	    var name = _ref17.name;
	    return name;
	  },
	  ListType: function ListType(_ref18) {
	    var type = _ref18.type;
	    return '[' + type + ']';
	  },
	  NonNullType: function NonNullType(_ref19) {
	    var type = _ref19.type;
	    return type + '!';
	  },
	
	  // Type System Definitions
	
	  SchemaDefinition: function SchemaDefinition(_ref20) {
	    var directives = _ref20.directives,
	        operationTypes = _ref20.operationTypes;
	    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
	  },
	
	  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
	    var operation = _ref21.operation,
	        type = _ref21.type;
	    return operation + ': ' + type;
	  },
	
	  ScalarTypeDefinition: function ScalarTypeDefinition(_ref22) {
	    var name = _ref22.name,
	        directives = _ref22.directives;
	    return join(['scalar', name, join(directives, ' ')], ' ');
	  },
	
	  ObjectTypeDefinition: function ObjectTypeDefinition(_ref23) {
	    var name = _ref23.name,
	        interfaces = _ref23.interfaces,
	        directives = _ref23.directives,
	        fields = _ref23.fields;
	    return join(['type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ');
	  },
	
	  FieldDefinition: function FieldDefinition(_ref24) {
	    var name = _ref24.name,
	        args = _ref24.arguments,
	        type = _ref24.type,
	        directives = _ref24.directives;
	    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
	  },
	
	  InputValueDefinition: function InputValueDefinition(_ref25) {
	    var name = _ref25.name,
	        type = _ref25.type,
	        defaultValue = _ref25.defaultValue,
	        directives = _ref25.directives;
	    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
	  },
	
	  InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref26) {
	    var name = _ref26.name,
	        directives = _ref26.directives,
	        fields = _ref26.fields;
	    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
	  },
	
	  UnionTypeDefinition: function UnionTypeDefinition(_ref27) {
	    var name = _ref27.name,
	        directives = _ref27.directives,
	        types = _ref27.types;
	    return join(['union', name, join(directives, ' '), '= ' + join(types, ' | ')], ' ');
	  },
	
	  EnumTypeDefinition: function EnumTypeDefinition(_ref28) {
	    var name = _ref28.name,
	        directives = _ref28.directives,
	        values = _ref28.values;
	    return join(['enum', name, join(directives, ' '), block(values)], ' ');
	  },
	
	  EnumValueDefinition: function EnumValueDefinition(_ref29) {
	    var name = _ref29.name,
	        directives = _ref29.directives;
	    return join([name, join(directives, ' ')], ' ');
	  },
	
	  InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref30) {
	    var name = _ref30.name,
	        directives = _ref30.directives,
	        fields = _ref30.fields;
	    return join(['input', name, join(directives, ' '), block(fields)], ' ');
	  },
	
	  TypeExtensionDefinition: function TypeExtensionDefinition(_ref31) {
	    var definition = _ref31.definition;
	    return 'extend ' + definition;
	  },
	
	  DirectiveDefinition: function DirectiveDefinition(_ref32) {
	    var name = _ref32.name,
	        args = _ref32.arguments,
	        locations = _ref32.locations;
	    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
	  }
	};
	
	/**
	 * Given maybeArray, print an empty string if it is null or empty, otherwise
	 * print all items together separated by separator if provided
	 */
	function join(maybeArray, separator) {
	  return maybeArray ? maybeArray.filter(function (x) {
	    return x;
	  }).join(separator || '') : '';
	}
	
	/**
	 * Given array, print each item on its own line, wrapped in an
	 * indented "{ }" block.
	 */
	function block(array) {
	  return array && array.length !== 0 ? indent('{\n' + join(array, '\n')) + '\n}' : '{}';
	}
	
	/**
	 * If maybeString is not null or empty, then wrap with start and end, otherwise
	 * print an empty string.
	 */
	function wrap(start, maybeString, end) {
	  return maybeString ? start + maybeString + (end || '') : '';
	}
	
	function indent(maybeString) {
	  return maybeString && maybeString.replace(/\n/g, '\n  ');
	}

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.specifiedDirectives = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = exports.GraphQLSkipDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = exports.DirectiveLocation = undefined;
	
	var _definition = __webpack_require__(4);
	
	var _scalars = __webpack_require__(22);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _assertValidName = __webpack_require__(115);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                           *
	                                                                                                                                                           * This source code is licensed under the MIT license found in the
	                                                                                                                                                           * LICENSE file in the root directory of this source tree.
	                                                                                                                                                           *
	                                                                                                                                                           * 
	                                                                                                                                                           */
	
	var DirectiveLocation = exports.DirectiveLocation = {
	  // Operations
	  QUERY: 'QUERY',
	  MUTATION: 'MUTATION',
	  SUBSCRIPTION: 'SUBSCRIPTION',
	  FIELD: 'FIELD',
	  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
	  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
	  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
	  // Schema Definitions
	  SCHEMA: 'SCHEMA',
	  SCALAR: 'SCALAR',
	  OBJECT: 'OBJECT',
	  FIELD_DEFINITION: 'FIELD_DEFINITION',
	  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
	  INTERFACE: 'INTERFACE',
	  UNION: 'UNION',
	  ENUM: 'ENUM',
	  ENUM_VALUE: 'ENUM_VALUE',
	  INPUT_OBJECT: 'INPUT_OBJECT',
	  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
	};
	
	// eslint-disable-line
	
	/**
	 * Directives are used by the GraphQL runtime as a way of modifying execution
	 * behavior. Type system creators will usually not create these directly.
	 */
	var GraphQLDirective = exports.GraphQLDirective = function GraphQLDirective(config) {
	  _classCallCheck(this, GraphQLDirective);
	
	  !config.name ? (0, _invariant2.default)(0, 'Directive must be named.') : void 0;
	  (0, _assertValidName.assertValidName)(config.name);
	  !Array.isArray(config.locations) ? (0, _invariant2.default)(0, 'Must provide locations for directive.') : void 0;
	  this.name = config.name;
	  this.description = config.description;
	  this.locations = config.locations;
	  this.astNode = config.astNode;
	
	  var args = config.args;
	  if (!args) {
	    this.args = [];
	  } else {
	    !!Array.isArray(args) ? (0, _invariant2.default)(0, '@' + config.name + ' args must be an object with argument names as keys.') : void 0;
	    this.args = Object.keys(args).map(function (argName) {
	      (0, _assertValidName.assertValidName)(argName);
	      var arg = args[argName];
	      !(0, _definition.isInputType)(arg.type) ? (0, _invariant2.default)(0, '@' + config.name + '(' + argName + ':) argument type must be ' + ('Input Type but got: ' + String(arg.type) + '.')) : void 0;
	      return {
	        name: argName,
	        description: arg.description === undefined ? null : arg.description,
	        type: arg.type,
	        defaultValue: arg.defaultValue,
	        astNode: arg.astNode
	      };
	    });
	  }
	};
	
	/**
	 * Used to conditionally include fields or fragments.
	 */
	var GraphQLIncludeDirective = exports.GraphQLIncludeDirective = new GraphQLDirective({
	  name: 'include',
	  description: 'Directs the executor to include this field or fragment only when ' + 'the `if` argument is true.',
	  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
	  args: {
	    if: {
	      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	      description: 'Included when true.'
	    }
	  }
	});
	
	/**
	 * Used to conditionally skip (exclude) fields or fragments.
	 */
	var GraphQLSkipDirective = exports.GraphQLSkipDirective = new GraphQLDirective({
	  name: 'skip',
	  description: 'Directs the executor to skip this field or fragment when the `if` ' + 'argument is true.',
	  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
	  args: {
	    if: {
	      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	      description: 'Skipped when true.'
	    }
	  }
	});
	
	/**
	 * Constant string used for default reason for a deprecation.
	 */
	var DEFAULT_DEPRECATION_REASON = exports.DEFAULT_DEPRECATION_REASON = 'No longer supported';
	
	/**
	 * Used to declare element of a GraphQL schema as deprecated.
	 */
	var GraphQLDeprecatedDirective = exports.GraphQLDeprecatedDirective = new GraphQLDirective({
	  name: 'deprecated',
	  description: 'Marks an element of a GraphQL schema as no longer supported.',
	  locations: [DirectiveLocation.FIELD_DEFINITION, DirectiveLocation.ENUM_VALUE],
	  args: {
	    reason: {
	      type: _scalars.GraphQLString,
	      description: 'Explains why this element was deprecated, usually also including a ' + 'suggestion for how to access supported similar data. Formatted ' + 'in [Markdown](https://daringfireball.net/projects/markdown/).',
	      defaultValue: DEFAULT_DEPRECATION_REASON
	    }
	  }
	});
	
	/**
	 * The full list of specified directives.
	 */
	var specifiedDirectives = exports.specifiedDirectives = [GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GraphQLSchema = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _definition = __webpack_require__(4);
	
	var _directives = __webpack_require__(16);
	
	var _introspection = __webpack_require__(26);
	
	var _find = __webpack_require__(37);
	
	var _find2 = _interopRequireDefault(_find);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _typeComparators = __webpack_require__(70);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                           *
	                                                                                                                                                           * This source code is licensed under the MIT license found in the
	                                                                                                                                                           * LICENSE file in the root directory of this source tree.
	                                                                                                                                                           *
	                                                                                                                                                           * 
	                                                                                                                                                           */
	
	/**
	 * Schema Definition
	 *
	 * A Schema is created by supplying the root types of each type of operation,
	 * query and mutation (optional). A schema definition is then supplied to the
	 * validator and executor.
	 *
	 * Example:
	 *
	 *     const MyAppSchema = new GraphQLSchema({
	 *       query: MyAppQueryRootType,
	 *       mutation: MyAppMutationRootType,
	 *     })
	 *
	 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
	 * the exact list of directives represented and allowed. If `directives` is not
	 * provided then a default set of the specified directives (e.g. @include and
	 * @skip) will be used. If you wish to provide *additional* directives to these
	 * specified directives, you must explicitly declare them. Example:
	 *
	 *     const MyAppSchema = new GraphQLSchema({
	 *       ...
	 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
	 *     })
	 *
	 */
	var GraphQLSchema = exports.GraphQLSchema = function () {
	  function GraphQLSchema(config) {
	    var _this = this;
	
	    _classCallCheck(this, GraphQLSchema);
	
	    !((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') ? (0, _invariant2.default)(0, 'Must provide configuration object.') : void 0;
	
	    !(config.query instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Schema query must be Object Type but got: ' + String(config.query) + '.') : void 0;
	    this._queryType = config.query;
	
	    !(!config.mutation || config.mutation instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Schema mutation must be Object Type if provided but got: ' + String(config.mutation) + '.') : void 0;
	    this._mutationType = config.mutation;
	
	    !(!config.subscription || config.subscription instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Schema subscription must be Object Type if provided but got: ' + String(config.subscription) + '.') : void 0;
	    this._subscriptionType = config.subscription;
	
	    !(!config.types || Array.isArray(config.types)) ? (0, _invariant2.default)(0, 'Schema types must be Array if provided but got: ' + String(config.types) + '.') : void 0;
	
	    !(!config.directives || Array.isArray(config.directives) && config.directives.every(function (directive) {
	      return directive instanceof _directives.GraphQLDirective;
	    })) ? (0, _invariant2.default)(0, 'Schema directives must be Array<GraphQLDirective> if provided but got: ' + String(config.directives) + '.') : void 0;
	    // Provide specified directives (e.g. @include and @skip) by default.
	    this._directives = config.directives || _directives.specifiedDirectives;
	    this.astNode = config.astNode || null;
	
	    // Build type map now to detect any errors within this schema.
	    var initialTypes = [this.getQueryType(), this.getMutationType(), this.getSubscriptionType(), _introspection.__Schema];
	
	    var types = config.types;
	    if (types) {
	      initialTypes = initialTypes.concat(types);
	    }
	
	    this._typeMap = initialTypes.reduce(typeMapReducer, Object.create(null));
	
	    // Keep track of all implementations by interface name.
	    this._implementations = Object.create(null);
	    Object.keys(this._typeMap).forEach(function (typeName) {
	      var type = _this._typeMap[typeName];
	      if (type instanceof _definition.GraphQLObjectType) {
	        type.getInterfaces().forEach(function (iface) {
	          var impls = _this._implementations[iface.name];
	          if (impls) {
	            impls.push(type);
	          } else {
	            _this._implementations[iface.name] = [type];
	          }
	        });
	      }
	    });
	
	    // Enforce correct interface implementations.
	    Object.keys(this._typeMap).forEach(function (typeName) {
	      var type = _this._typeMap[typeName];
	      if (type instanceof _definition.GraphQLObjectType) {
	        type.getInterfaces().forEach(function (iface) {
	          return assertObjectImplementsInterface(_this, type, iface);
	        });
	      }
	    });
	  }
	
	  GraphQLSchema.prototype.getQueryType = function getQueryType() {
	    return this._queryType;
	  };
	
	  GraphQLSchema.prototype.getMutationType = function getMutationType() {
	    return this._mutationType;
	  };
	
	  GraphQLSchema.prototype.getSubscriptionType = function getSubscriptionType() {
	    return this._subscriptionType;
	  };
	
	  GraphQLSchema.prototype.getTypeMap = function getTypeMap() {
	    return this._typeMap;
	  };
	
	  GraphQLSchema.prototype.getType = function getType(name) {
	    return this.getTypeMap()[name];
	  };
	
	  GraphQLSchema.prototype.getPossibleTypes = function getPossibleTypes(abstractType) {
	    if (abstractType instanceof _definition.GraphQLUnionType) {
	      return abstractType.getTypes();
	    }
	    !(abstractType instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0) : void 0;
	    return this._implementations[abstractType.name];
	  };
	
	  GraphQLSchema.prototype.isPossibleType = function isPossibleType(abstractType, possibleType) {
	    var possibleTypeMap = this._possibleTypeMap;
	    if (!possibleTypeMap) {
	      this._possibleTypeMap = possibleTypeMap = Object.create(null);
	    }
	
	    if (!possibleTypeMap[abstractType.name]) {
	      var possibleTypes = this.getPossibleTypes(abstractType);
	      !Array.isArray(possibleTypes) ? (0, _invariant2.default)(0, 'Could not find possible implementing types for ' + abstractType.name + ' ' + 'in schema. Check that schema.types is defined and is an array of ' + 'all possible types in the schema.') : void 0;
	      possibleTypeMap[abstractType.name] = possibleTypes.reduce(function (map, type) {
	        return map[type.name] = true, map;
	      }, Object.create(null));
	    }
	
	    return Boolean(possibleTypeMap[abstractType.name][possibleType.name]);
	  };
	
	  GraphQLSchema.prototype.getDirectives = function getDirectives() {
	    return this._directives;
	  };
	
	  GraphQLSchema.prototype.getDirective = function getDirective(name) {
	    return (0, _find2.default)(this.getDirectives(), function (directive) {
	      return directive.name === name;
	    });
	  };
	
	  return GraphQLSchema;
	}();
	
	function typeMapReducer(map, type) {
	  if (!type) {
	    return map;
	  }
	  if (type instanceof _definition.GraphQLList || type instanceof _definition.GraphQLNonNull) {
	    return typeMapReducer(map, type.ofType);
	  }
	  if (map[type.name]) {
	    !(map[type.name] === type) ? (0, _invariant2.default)(0, 'Schema must contain unique named types but contains multiple ' + ('types named "' + type.name + '".')) : void 0;
	    return map;
	  }
	  map[type.name] = type;
	
	  var reducedMap = map;
	
	  if (type instanceof _definition.GraphQLUnionType) {
	    reducedMap = type.getTypes().reduce(typeMapReducer, reducedMap);
	  }
	
	  if (type instanceof _definition.GraphQLObjectType) {
	    reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
	  }
	
	  if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
	    var fieldMap = type.getFields();
	    Object.keys(fieldMap).forEach(function (fieldName) {
	      var field = fieldMap[fieldName];
	
	      if (field.args) {
	        var fieldArgTypes = field.args.map(function (arg) {
	          return arg.type;
	        });
	        reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
	      }
	      reducedMap = typeMapReducer(reducedMap, field.type);
	    });
	  }
	
	  if (type instanceof _definition.GraphQLInputObjectType) {
	    var _fieldMap = type.getFields();
	    Object.keys(_fieldMap).forEach(function (fieldName) {
	      var field = _fieldMap[fieldName];
	      reducedMap = typeMapReducer(reducedMap, field.type);
	    });
	  }
	
	  return reducedMap;
	}
	
	function assertObjectImplementsInterface(schema, object, iface) {
	  var objectFieldMap = object.getFields();
	  var ifaceFieldMap = iface.getFields();
	
	  // Assert each interface field is implemented.
	  Object.keys(ifaceFieldMap).forEach(function (fieldName) {
	    var objectField = objectFieldMap[fieldName];
	    var ifaceField = ifaceFieldMap[fieldName];
	
	    // Assert interface field exists on object.
	    !objectField ? (0, _invariant2.default)(0, '"' + iface.name + '" expects field "' + fieldName + '" but "' + object.name + '" ' + 'does not provide it.') : void 0;
	
	    // Assert interface field type is satisfied by object field type, by being
	    // a valid subtype. (covariant)
	    !(0, _typeComparators.isTypeSubTypeOf)(schema, objectField.type, ifaceField.type) ? (0, _invariant2.default)(0, iface.name + '.' + fieldName + ' expects type "' + String(ifaceField.type) + '" ' + 'but ' + (object.name + '.' + fieldName + ' provides type "' + String(objectField.type) + '".')) : void 0;
	
	    // Assert each interface field arg is implemented.
	    ifaceField.args.forEach(function (ifaceArg) {
	      var argName = ifaceArg.name;
	      var objectArg = (0, _find2.default)(objectField.args, function (arg) {
	        return arg.name === argName;
	      });
	
	      // Assert interface field arg exists on object field.
	      !objectArg ? (0, _invariant2.default)(0, iface.name + '.' + fieldName + ' expects argument "' + argName + '" but ' + (object.name + '.' + fieldName + ' does not provide it.')) : void 0;
	
	      // Assert interface field arg type matches object field arg type.
	      // (invariant)
	      !(0, _typeComparators.isEqualType)(ifaceArg.type, objectArg.type) ? (0, _invariant2.default)(0, iface.name + '.' + fieldName + '(' + argName + ':) expects type ' + ('"' + String(ifaceArg.type) + '" but ') + (object.name + '.' + fieldName + '(' + argName + ':) provides type ') + ('"' + String(objectArg.type) + '".')) : void 0;
	    });
	
	    // Assert additional arguments must not be required.
	    objectField.args.forEach(function (objectArg) {
	      var argName = objectArg.name;
	      var ifaceArg = (0, _find2.default)(ifaceField.args, function (arg) {
	        return arg.name === argName;
	      });
	      if (!ifaceArg) {
	        !!(objectArg.type instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, object.name + '.' + fieldName + '(' + argName + ':) is of required type ' + ('"' + String(objectArg.type) + '" but is not also provided by the ') + ('interface ' + iface.name + '.' + fieldName + '.')) : void 0;
	      }
	    });
	  });
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.typeFromAST = undefined;
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _definition = __webpack_require__(4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Given a Schema and an AST node describing a type, return a GraphQLType
	 * definition which applies to that type. For example, if provided the parsed
	 * AST node for `[User]`, a GraphQLList instance will be returned, containing
	 * the type called "User" found in the schema. If a type called "User" is not
	 * found in the schema, then undefined will be returned.
	 */
	/* eslint-disable no-redeclare */
	function typeFromASTImpl(schema, typeNode) {
	  /* eslint-enable no-redeclare */
	  var innerType = void 0;
	  if (typeNode.kind === Kind.LIST_TYPE) {
	    innerType = typeFromAST(schema, typeNode.type);
	    return innerType && new _definition.GraphQLList(innerType);
	  }
	  if (typeNode.kind === Kind.NON_NULL_TYPE) {
	    innerType = typeFromAST(schema, typeNode.type);
	    return innerType && new _definition.GraphQLNonNull(innerType);
	  }
	  !(typeNode.kind === Kind.NAMED_TYPE) ? (0, _invariant2.default)(0, 'Must be a named type.') : void 0;
	  return schema.getType(typeNode.name.value);
	}
	// This will export typeFromAST with the correct type, but currently exposes
	// ~26 errors: https://gist.github.com/4a29403a99a8186fcb15064d69c5f3ae
	// export var typeFromAST: typeof typeFromASTType = typeFromASTImpl;
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	var typeFromAST = exports.typeFromAST = typeFromASTImpl;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GraphQLID = exports.GraphQLBoolean = exports.GraphQLString = exports.GraphQLFloat = exports.GraphQLInt = undefined;
	
	var _definition = __webpack_require__(4);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// As per the GraphQL Spec, Integers are only treated as valid when a valid
	// 32-bit signed integer, providing the broadest support across platforms.
	//
	// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
	// they are internally represented as IEEE 754 doubles.
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	var MAX_INT = 2147483647;
	var MIN_INT = -2147483648;
	
	function coerceInt(value) {
	  if (value === '') {
	    throw new TypeError('Int cannot represent non 32-bit signed integer value: (empty string)');
	  }
	  var num = Number(value);
	  if (num !== num || num > MAX_INT || num < MIN_INT) {
	    throw new TypeError('Int cannot represent non 32-bit signed integer value: ' + String(value));
	  }
	  var int = Math.floor(num);
	  if (int !== num) {
	    throw new TypeError('Int cannot represent non-integer value: ' + String(value));
	  }
	  return int;
	}
	
	var GraphQLInt = exports.GraphQLInt = new _definition.GraphQLScalarType({
	  name: 'Int',
	  description: 'The `Int` scalar type represents non-fractional signed whole numeric ' + 'values. Int can represent values between -(2^31) and 2^31 - 1. ',
	  serialize: coerceInt,
	  parseValue: coerceInt,
	  parseLiteral: function parseLiteral(ast) {
	    if (ast.kind === Kind.INT) {
	      var num = parseInt(ast.value, 10);
	      if (num <= MAX_INT && num >= MIN_INT) {
	        return num;
	      }
	    }
	    return null;
	  }
	});
	
	function coerceFloat(value) {
	  if (value === '') {
	    throw new TypeError('Float cannot represent non numeric value: (empty string)');
	  }
	  var num = Number(value);
	  if (num === num) {
	    return num;
	  }
	  throw new TypeError('Float cannot represent non numeric value: ' + String(value));
	}
	
	var GraphQLFloat = exports.GraphQLFloat = new _definition.GraphQLScalarType({
	  name: 'Float',
	  description: 'The `Float` scalar type represents signed double-precision fractional ' + 'values as specified by ' + '[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ',
	  serialize: coerceFloat,
	  parseValue: coerceFloat,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === Kind.FLOAT || ast.kind === Kind.INT ? parseFloat(ast.value) : null;
	  }
	});
	
	function coerceString(value) {
	  if (Array.isArray(value)) {
	    throw new TypeError('String cannot represent an array value: [' + String(value) + ']');
	  }
	  return String(value);
	}
	
	var GraphQLString = exports.GraphQLString = new _definition.GraphQLScalarType({
	  name: 'String',
	  description: 'The `String` scalar type represents textual data, represented as UTF-8 ' + 'character sequences. The String type is most often used by GraphQL to ' + 'represent free-form human-readable text.',
	  serialize: coerceString,
	  parseValue: coerceString,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === Kind.STRING ? ast.value : null;
	  }
	});
	
	var GraphQLBoolean = exports.GraphQLBoolean = new _definition.GraphQLScalarType({
	  name: 'Boolean',
	  description: 'The `Boolean` scalar type represents `true` or `false`.',
	  serialize: Boolean,
	  parseValue: Boolean,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === Kind.BOOLEAN ? ast.value : null;
	  }
	});
	
	var GraphQLID = exports.GraphQLID = new _definition.GraphQLScalarType({
	  name: 'ID',
	  description: 'The `ID` scalar type represents a unique identifier, often used to ' + 'refetch an object or as key for a cache. The ID type appears in a JSON ' + 'response as a String; however, it is not intended to be human-readable. ' + 'When expected as an input type, any string (such as `"4"`) or integer ' + '(such as `4`) input value will be accepted as an ID.',
	  serialize: String,
	  parseValue: String,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === Kind.STRING || ast.kind === Kind.INT ? ast.value : null;
	  }
	});

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNullish;
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	/**
	 * Returns true if a value is null, undefined, or NaN.
	 */
	function isNullish(value) {
	  return value === null || value === undefined || value !== value;
	}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.SchemaMetaFieldDef = exports.__TypeKind = exports.TypeKind = exports.__EnumValue = exports.__InputValue = exports.__Field = exports.__Type = exports.__DirectiveLocation = exports.__Directive = exports.__Schema = undefined;
	
	var _isInvalid = __webpack_require__(49);
	
	var _isInvalid2 = _interopRequireDefault(_isInvalid);
	
	var _astFromValue = __webpack_require__(116);
	
	var _printer = __webpack_require__(11);
	
	var _definition = __webpack_require__(4);
	
	var _scalars = __webpack_require__(22);
	
	var _directives = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	var __Schema = exports.__Schema = new _definition.GraphQLObjectType({
	  name: '__Schema',
	  isIntrospection: true,
	  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It ' + 'exposes all available types and directives on the server, as well as ' + 'the entry points for query, mutation, and subscription operations.',
	  fields: function fields() {
	    return {
	      types: {
	        description: 'A list of all types supported by this server.',
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
	        resolve: function resolve(schema) {
	          var typeMap = schema.getTypeMap();
	          return Object.keys(typeMap).map(function (key) {
	            return typeMap[key];
	          });
	        }
	      },
	      queryType: {
	        description: 'The type that query operations will be rooted at.',
	        type: new _definition.GraphQLNonNull(__Type),
	        resolve: function resolve(schema) {
	          return schema.getQueryType();
	        }
	      },
	      mutationType: {
	        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
	        type: __Type,
	        resolve: function resolve(schema) {
	          return schema.getMutationType();
	        }
	      },
	      subscriptionType: {
	        description: 'If this server support subscription, the type that ' + 'subscription operations will be rooted at.',
	        type: __Type,
	        resolve: function resolve(schema) {
	          return schema.getSubscriptionType();
	        }
	      },
	      directives: {
	        description: 'A list of all directives supported by this server.',
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
	        resolve: function resolve(schema) {
	          return schema.getDirectives();
	        }
	      }
	    };
	  }
	});
	
	var __Directive = exports.__Directive = new _definition.GraphQLObjectType({
	  name: '__Directive',
	  isIntrospection: true,
	  description: 'A Directive provides a way to describe alternate runtime execution and ' + 'type validation behavior in a GraphQL document.' + '\n\nIn some cases, you need to provide options to alter GraphQL\'s ' + 'execution behavior in ways field arguments will not suffice, such as ' + 'conditionally including or skipping a field. Directives provide this by ' + 'describing additional information to the executor.',
	  fields: function fields() {
	    return {
	      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	      description: { type: _scalars.GraphQLString },
	      locations: {
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__DirectiveLocation)))
	      },
	      args: {
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
	        resolve: function resolve(directive) {
	          return directive.args || [];
	        }
	      },
	      // NOTE: the following three fields are deprecated and are no longer part
	      // of the GraphQL specification.
	      onOperation: {
	        deprecationReason: 'Use `locations`.',
	        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	        resolve: function resolve(d) {
	          return d.locations.indexOf(_directives.DirectiveLocation.QUERY) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.MUTATION) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.SUBSCRIPTION) !== -1;
	        }
	      },
	      onFragment: {
	        deprecationReason: 'Use `locations`.',
	        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	        resolve: function resolve(d) {
	          return d.locations.indexOf(_directives.DirectiveLocation.FRAGMENT_SPREAD) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.INLINE_FRAGMENT) !== -1 || d.locations.indexOf(_directives.DirectiveLocation.FRAGMENT_DEFINITION) !== -1;
	        }
	      },
	      onField: {
	        deprecationReason: 'Use `locations`.',
	        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	        resolve: function resolve(d) {
	          return d.locations.indexOf(_directives.DirectiveLocation.FIELD) !== -1;
	        }
	      }
	    };
	  }
	});
	
	var __DirectiveLocation = exports.__DirectiveLocation = new _definition.GraphQLEnumType({
	  name: '__DirectiveLocation',
	  isIntrospection: true,
	  description: 'A Directive can be adjacent to many parts of the GraphQL language, a ' + '__DirectiveLocation describes one such possible adjacencies.',
	  values: {
	    QUERY: {
	      value: _directives.DirectiveLocation.QUERY,
	      description: 'Location adjacent to a query operation.'
	    },
	    MUTATION: {
	      value: _directives.DirectiveLocation.MUTATION,
	      description: 'Location adjacent to a mutation operation.'
	    },
	    SUBSCRIPTION: {
	      value: _directives.DirectiveLocation.SUBSCRIPTION,
	      description: 'Location adjacent to a subscription operation.'
	    },
	    FIELD: {
	      value: _directives.DirectiveLocation.FIELD,
	      description: 'Location adjacent to a field.'
	    },
	    FRAGMENT_DEFINITION: {
	      value: _directives.DirectiveLocation.FRAGMENT_DEFINITION,
	      description: 'Location adjacent to a fragment definition.'
	    },
	    FRAGMENT_SPREAD: {
	      value: _directives.DirectiveLocation.FRAGMENT_SPREAD,
	      description: 'Location adjacent to a fragment spread.'
	    },
	    INLINE_FRAGMENT: {
	      value: _directives.DirectiveLocation.INLINE_FRAGMENT,
	      description: 'Location adjacent to an inline fragment.'
	    },
	    SCHEMA: {
	      value: _directives.DirectiveLocation.SCHEMA,
	      description: 'Location adjacent to a schema definition.'
	    },
	    SCALAR: {
	      value: _directives.DirectiveLocation.SCALAR,
	      description: 'Location adjacent to a scalar definition.'
	    },
	    OBJECT: {
	      value: _directives.DirectiveLocation.OBJECT,
	      description: 'Location adjacent to an object type definition.'
	    },
	    FIELD_DEFINITION: {
	      value: _directives.DirectiveLocation.FIELD_DEFINITION,
	      description: 'Location adjacent to a field definition.'
	    },
	    ARGUMENT_DEFINITION: {
	      value: _directives.DirectiveLocation.ARGUMENT_DEFINITION,
	      description: 'Location adjacent to an argument definition.'
	    },
	    INTERFACE: {
	      value: _directives.DirectiveLocation.INTERFACE,
	      description: 'Location adjacent to an interface definition.'
	    },
	    UNION: {
	      value: _directives.DirectiveLocation.UNION,
	      description: 'Location adjacent to a union definition.'
	    },
	    ENUM: {
	      value: _directives.DirectiveLocation.ENUM,
	      description: 'Location adjacent to an enum definition.'
	    },
	    ENUM_VALUE: {
	      value: _directives.DirectiveLocation.ENUM_VALUE,
	      description: 'Location adjacent to an enum value definition.'
	    },
	    INPUT_OBJECT: {
	      value: _directives.DirectiveLocation.INPUT_OBJECT,
	      description: 'Location adjacent to an input object type definition.'
	    },
	    INPUT_FIELD_DEFINITION: {
	      value: _directives.DirectiveLocation.INPUT_FIELD_DEFINITION,
	      description: 'Location adjacent to an input object field definition.'
	    }
	  }
	});
	
	var __Type = exports.__Type = new _definition.GraphQLObjectType({
	  name: '__Type',
	  isIntrospection: true,
	  description: 'The fundamental unit of any GraphQL Schema is the type. There are ' + 'many kinds of types in GraphQL as represented by the `__TypeKind` enum.' + '\n\nDepending on the kind of a type, certain fields describe ' + 'information about that type. Scalar types provide no information ' + 'beyond a name and description, while Enum types provide their values. ' + 'Object and Interface types provide the fields they describe. Abstract ' + 'types, Union and Interface, provide the Object types possible ' + 'at runtime. List and NonNull types compose other types.',
	  fields: function fields() {
	    return {
	      kind: {
	        type: new _definition.GraphQLNonNull(__TypeKind),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLScalarType) {
	            return TypeKind.SCALAR;
	          } else if (type instanceof _definition.GraphQLObjectType) {
	            return TypeKind.OBJECT;
	          } else if (type instanceof _definition.GraphQLInterfaceType) {
	            return TypeKind.INTERFACE;
	          } else if (type instanceof _definition.GraphQLUnionType) {
	            return TypeKind.UNION;
	          } else if (type instanceof _definition.GraphQLEnumType) {
	            return TypeKind.ENUM;
	          } else if (type instanceof _definition.GraphQLInputObjectType) {
	            return TypeKind.INPUT_OBJECT;
	          } else if (type instanceof _definition.GraphQLList) {
	            return TypeKind.LIST;
	          } else if (type instanceof _definition.GraphQLNonNull) {
	            return TypeKind.NON_NULL;
	          }
	          throw new Error('Unknown kind of type: ' + type);
	        }
	      },
	      name: { type: _scalars.GraphQLString },
	      description: { type: _scalars.GraphQLString },
	      fields: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
	        args: {
	          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
	        },
	        resolve: function resolve(type, _ref) {
	          var includeDeprecated = _ref.includeDeprecated;
	
	          if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
	            var fieldMap = type.getFields();
	            var fields = Object.keys(fieldMap).map(function (fieldName) {
	              return fieldMap[fieldName];
	            });
	            if (!includeDeprecated) {
	              fields = fields.filter(function (field) {
	                return !field.deprecationReason;
	              });
	            }
	            return fields;
	          }
	          return null;
	        }
	      },
	      interfaces: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLObjectType) {
	            return type.getInterfaces();
	          }
	        }
	      },
	      possibleTypes: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
	        resolve: function resolve(type, args, context, _ref2) {
	          var schema = _ref2.schema;
	
	          if ((0, _definition.isAbstractType)(type)) {
	            return schema.getPossibleTypes(type);
	          }
	        }
	      },
	      enumValues: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
	        args: {
	          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
	        },
	        resolve: function resolve(type, _ref3) {
	          var includeDeprecated = _ref3.includeDeprecated;
	
	          if (type instanceof _definition.GraphQLEnumType) {
	            var values = type.getValues();
	            if (!includeDeprecated) {
	              values = values.filter(function (value) {
	                return !value.deprecationReason;
	              });
	            }
	            return values;
	          }
	        }
	      },
	      inputFields: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLInputObjectType) {
	            var fieldMap = type.getFields();
	            return Object.keys(fieldMap).map(function (fieldName) {
	              return fieldMap[fieldName];
	            });
	          }
	        }
	      },
	      ofType: { type: __Type }
	    };
	  }
	});
	
	var __Field = exports.__Field = new _definition.GraphQLObjectType({
	  name: '__Field',
	  isIntrospection: true,
	  description: 'Object and Interface types are described by a list of Fields, each of ' + 'which has a name, potentially a list of arguments, and a return type.',
	  fields: function fields() {
	    return {
	      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	      description: { type: _scalars.GraphQLString },
	      args: {
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
	        resolve: function resolve(field) {
	          return field.args || [];
	        }
	      },
	      type: { type: new _definition.GraphQLNonNull(__Type) },
	      isDeprecated: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) },
	      deprecationReason: {
	        type: _scalars.GraphQLString
	      }
	    };
	  }
	});
	
	var __InputValue = exports.__InputValue = new _definition.GraphQLObjectType({
	  name: '__InputValue',
	  isIntrospection: true,
	  description: 'Arguments provided to Fields or Directives and the input fields of an ' + 'InputObject are represented as Input Values which describe their type ' + 'and optionally a default value.',
	  fields: function fields() {
	    return {
	      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	      description: { type: _scalars.GraphQLString },
	      type: { type: new _definition.GraphQLNonNull(__Type) },
	      defaultValue: {
	        type: _scalars.GraphQLString,
	        description: 'A GraphQL-formatted string representing the default value for this ' + 'input value.',
	        resolve: function resolve(inputVal) {
	          return (0, _isInvalid2.default)(inputVal.defaultValue) ? null : (0, _printer.print)((0, _astFromValue.astFromValue)(inputVal.defaultValue, inputVal.type));
	        }
	      }
	    };
	  }
	});
	
	var __EnumValue = exports.__EnumValue = new _definition.GraphQLObjectType({
	  name: '__EnumValue',
	  isIntrospection: true,
	  description: 'One possible value for a given Enum. Enum values are unique values, not ' + 'a placeholder for a string or numeric value. However an Enum value is ' + 'returned in a JSON response as a string.',
	  fields: function fields() {
	    return {
	      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	      description: { type: _scalars.GraphQLString },
	      isDeprecated: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) },
	      deprecationReason: {
	        type: _scalars.GraphQLString
	      }
	    };
	  }
	});
	
	var TypeKind = exports.TypeKind = {
	  SCALAR: 'SCALAR',
	  OBJECT: 'OBJECT',
	  INTERFACE: 'INTERFACE',
	  UNION: 'UNION',
	  ENUM: 'ENUM',
	  INPUT_OBJECT: 'INPUT_OBJECT',
	  LIST: 'LIST',
	  NON_NULL: 'NON_NULL'
	};
	
	var __TypeKind = exports.__TypeKind = new _definition.GraphQLEnumType({
	  name: '__TypeKind',
	  isIntrospection: true,
	  description: 'An enum describing what kind of type a given `__Type` is.',
	  values: {
	    SCALAR: {
	      value: TypeKind.SCALAR,
	      description: 'Indicates this type is a scalar.'
	    },
	    OBJECT: {
	      value: TypeKind.OBJECT,
	      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
	    },
	    INTERFACE: {
	      value: TypeKind.INTERFACE,
	      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
	    },
	    UNION: {
	      value: TypeKind.UNION,
	      description: 'Indicates this type is a union. ' + '`possibleTypes` is a valid field.'
	    },
	    ENUM: {
	      value: TypeKind.ENUM,
	      description: 'Indicates this type is an enum. ' + '`enumValues` is a valid field.'
	    },
	    INPUT_OBJECT: {
	      value: TypeKind.INPUT_OBJECT,
	      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
	    },
	    LIST: {
	      value: TypeKind.LIST,
	      description: 'Indicates this type is a list. ' + '`ofType` is a valid field.'
	    },
	    NON_NULL: {
	      value: TypeKind.NON_NULL,
	      description: 'Indicates this type is a non-null. ' + '`ofType` is a valid field.'
	    }
	  }
	});
	
	/**
	 * Note that these are GraphQLField and not GraphQLFieldConfig,
	 * so the format for args is different.
	 */
	
	var SchemaMetaFieldDef = exports.SchemaMetaFieldDef = {
	  name: '__schema',
	  type: new _definition.GraphQLNonNull(__Schema),
	  description: 'Access the current type schema of this server.',
	  args: [],
	  resolve: function resolve(source, args, context, _ref4) {
	    var schema = _ref4.schema;
	    return schema;
	  }
	};
	
	var TypeMetaFieldDef = exports.TypeMetaFieldDef = {
	  name: '__type',
	  type: __Type,
	  description: 'Request the type information of a single type.',
	  args: [{ name: 'name', type: new _definition.GraphQLNonNull(_scalars.GraphQLString) }],
	  resolve: function resolve(source, _ref5, context, _ref6) {
	    var name = _ref5.name;
	    var schema = _ref6.schema;
	    return schema.getType(name);
	  }
	};
	
	var TypeNameMetaFieldDef = exports.TypeNameMetaFieldDef = {
	  name: '__typename',
	  type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
	  description: 'The name of the current Object type at runtime.',
	  args: [],
	  resolve: function resolve(source, args, context, _ref7) {
	    var parentType = _ref7.parentType;
	    return parentType.name;
	  }
	};

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GraphQLError = GraphQLError;
	
	var _location = __webpack_require__(113);
	
	/**
	 * A GraphQLError describes an Error found during the parse, validate, or
	 * execute phases of performing a GraphQL operation. In addition to a message
	 * and stack trace, it also includes information about the locations in a
	 * GraphQL document and/or execution result that correspond to the Error.
	 */
	function GraphQLError( // eslint-disable-line no-redeclare
	message, nodes, source, positions, path, originalError) {
	  // Compute locations in the source for the given nodes/positions.
	  var _source = source;
	  if (!_source && nodes && nodes.length > 0) {
	    var node = nodes[0];
	    _source = node && node.loc && node.loc.source;
	  }
	
	  var _positions = positions;
	  if (!_positions && nodes) {
	    _positions = nodes.filter(function (node) {
	      return Boolean(node.loc);
	    }).map(function (node) {
	      return node.loc.start;
	    });
	  }
	  if (_positions && _positions.length === 0) {
	    _positions = undefined;
	  }
	
	  var _locations = void 0;
	  var _source2 = _source; // seems here Flow need a const to resolve type.
	  if (_source2 && _positions) {
	    _locations = _positions.map(function (pos) {
	      return (0, _location.getLocation)(_source2, pos);
	    });
	  }
	
	  Object.defineProperties(this, {
	    message: {
	      value: message,
	      // By being enumerable, JSON.stringify will include `message` in the
	      // resulting output. This ensures that the simplest possible GraphQL
	      // service adheres to the spec.
	      enumerable: true,
	      writable: true
	    },
	    locations: {
	      // Coercing falsey values to undefined ensures they will not be included
	      // in JSON.stringify() when not provided.
	      value: _locations || undefined,
	      // By being enumerable, JSON.stringify will include `locations` in the
	      // resulting output. This ensures that the simplest possible GraphQL
	      // service adheres to the spec.
	      enumerable: true
	    },
	    path: {
	      // Coercing falsey values to undefined ensures they will not be included
	      // in JSON.stringify() when not provided.
	      value: path || undefined,
	      // By being enumerable, JSON.stringify will include `path` in the
	      // resulting output. This ensures that the simplest possible GraphQL
	      // service adheres to the spec.
	      enumerable: true
	    },
	    nodes: {
	      value: nodes || undefined
	    },
	    source: {
	      value: _source || undefined
	    },
	    positions: {
	      value: _positions || undefined
	    },
	    originalError: {
	      value: originalError
	    }
	  });
	
	  // Include (non-enumerable) stack trace.
	  if (originalError && originalError.stack) {
	    Object.defineProperty(this, 'stack', {
	      value: originalError.stack,
	      writable: true,
	      configurable: true
	    });
	  } else if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, GraphQLError);
	  } else {
	    Object.defineProperty(this, 'stack', {
	      value: Error().stack,
	      writable: true,
	      configurable: true
	    });
	  }
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	GraphQLError.prototype = Object.create(Error.prototype, {
	  constructor: { value: GraphQLError },
	  name: { value: 'GraphQLError' }
	});

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = find;
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function find(list, predicate) {
	  for (var i = 0; i < list.length; i++) {
	    if (predicate(list[i])) {
	      return list[i];
	    }
	  }
	}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyMap;
	
	
	/**
	 * Creates a keyed JS object from an array, given a function to produce the keys
	 * for each value in the array.
	 *
	 * This provides a convenient lookup for the array items if the key function
	 * produces unique results.
	 *
	 *     const phoneBook = [
	 *       { name: 'Jon', num: '555-1234' },
	 *       { name: 'Jenny', num: '867-5309' }
	 *     ]
	 *
	 *     // { Jon: { name: 'Jon', num: '555-1234' },
	 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
	 *     const entriesByName = keyMap(
	 *       phoneBook,
	 *       entry => entry.name
	 *     )
	 *
	 *     // { name: 'Jenny', num: '857-6309' }
	 *     const jennyEntry = entriesByName['Jenny']
	 *
	 */
	function keyMap(list, keyFn) {
	  return list.reduce(function (map, item) {
	    return map[keyFn(item)] = item, map;
	  }, Object.create(null));
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2016, Lee Byron
	 * All rights reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @ignore
	 */
	
	/**
	 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
	 * is a *protocol* which describes a standard way to produce a sequence of
	 * values, typically the values of the Iterable represented by this Iterator.
	 *
	 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
	 * it can be utilized by any version of JavaScript.
	 *
	 * @typedef {Object} Iterator
	 * @template T The type of each iterated value
	 * @property {function (): { value: T, done: boolean }} next
	 *   A method which produces either the next value in a sequence or a result
	 *   where the `done` property is `true` indicating the end of the Iterator.
	 */
	
	/**
	 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
	 * is a *protocol* which when implemented allows a JavaScript object to define
	 * their iteration behavior, such as what values are looped over in a `for..of`
	 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
	 * implement the Iterable protocol, including `Array` and `Map`.
	 *
	 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
	 * it can be utilized by any version of JavaScript.
	 *
	 * @typedef {Object} Iterable
	 * @template T The type of each iterated value
	 * @property {function (): Iterator<T>} Symbol.iterator
	 *   A method which produces an Iterator for this Iterable.
	 */
	
	// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
	var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator
	
	/**
	 * A property name to be used as the name of an Iterable's method responsible
	 * for producing an Iterator, referred to as `@@iterator`. Typically represents
	 * the value `Symbol.iterator` but falls back to the string `"@@iterator"` when
	 * `Symbol.iterator` is not defined.
	 *
	 * Use `$$iterator` for defining new Iterables instead of `Symbol.iterator`,
	 * but do not use it for accessing existing Iterables, instead use
	 * `getIterator()` or `isIterable()`.
	 *
	 * @example
	 *
	 * var $$iterator = require('iterall').$$iterator
	 *
	 * function Counter (to) {
	 *   this.to = to
	 * }
	 *
	 * Counter.prototype[$$iterator] = function () {
	 *   return {
	 *     to: this.to,
	 *     num: 0,
	 *     next () {
	 *       if (this.num >= this.to) {
	 *         return { value: undefined, done: true }
	 *       }
	 *       return { value: this.num++, done: false }
	 *     }
	 *   }
	 * }
	 *
	 * var counter = new Counter(3)
	 * for (var number of counter) {
	 *   console.log(number) // 0 ... 1 ... 2
	 * }
	 *
	 * @type {Symbol|string}
	 */
	var $$iterator = SYMBOL_ITERATOR || '@@iterator'
	exports.$$iterator = $$iterator
	
	/**
	 * Returns true if the provided object implements the Iterator protocol via
	 * either implementing a `Symbol.iterator` or `"@@iterator"` method.
	 *
	 * @example
	 *
	 * var isIterable = require('iterall').isIterable
	 * isIterable([ 1, 2, 3 ]) // true
	 * isIterable('ABC') // true
	 * isIterable({ length: 1, 0: 'Alpha' }) // false
	 * isIterable({ key: 'value' }) // false
	 * isIterable(new Map()) // true
	 *
	 * @param obj
	 *   A value which might implement the Iterable protocol.
	 * @return {boolean} true if Iterable.
	 */
	function isIterable(obj) {
	  return !!getIteratorMethod(obj)
	}
	exports.isIterable = isIterable
	
	/**
	 * Returns true if the provided object implements the Array-like protocol via
	 * defining a positive-integer `length` property.
	 *
	 * @example
	 *
	 * var isArrayLike = require('iterall').isArrayLike
	 * isArrayLike([ 1, 2, 3 ]) // true
	 * isArrayLike('ABC') // true
	 * isArrayLike({ length: 1, 0: 'Alpha' }) // true
	 * isArrayLike({ key: 'value' }) // false
	 * isArrayLike(new Map()) // false
	 *
	 * @param obj
	 *   A value which might implement the Array-like protocol.
	 * @return {boolean} true if Array-like.
	 */
	function isArrayLike(obj) {
	  var length = obj != null && obj.length
	  return typeof length === 'number' && length >= 0 && length % 1 === 0
	}
	exports.isArrayLike = isArrayLike
	
	/**
	 * Returns true if the provided object is an Object (i.e. not a string literal)
	 * and is either Iterable or Array-like.
	 *
	 * This may be used in place of [Array.isArray()][isArray] to determine if an
	 * object should be iterated-over. It always excludes string literals and
	 * includes Arrays (regardless of if it is Iterable). It also includes other
	 * Array-like objects such as NodeList, TypedArray, and Buffer.
	 *
	 * @example
	 *
	 * var isCollection = require('iterall').isCollection
	 * isCollection([ 1, 2, 3 ]) // true
	 * isCollection('ABC') // false
	 * isCollection({ length: 1, 0: 'Alpha' }) // true
	 * isCollection({ key: 'value' }) // false
	 * isCollection(new Map()) // true
	 *
	 * @example
	 *
	 * var forEach = require('iterall').forEach
	 * if (isCollection(obj)) {
	 *   forEach(obj, function (value) {
	 *     console.log(value)
	 *   })
	 * }
	 *
	 * @param obj
	 *   An Object value which might implement the Iterable or Array-like protocols.
	 * @return {boolean} true if Iterable or Array-like Object.
	 */
	function isCollection(obj) {
	  return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj))
	}
	exports.isCollection = isCollection
	
	/**
	 * If the provided object implements the Iterator protocol, its Iterator object
	 * is returned. Otherwise returns undefined.
	 *
	 * @example
	 *
	 * var getIterator = require('iterall').getIterator
	 * var iterator = getIterator([ 1, 2, 3 ])
	 * iterator.next() // { value: 1, done: false }
	 * iterator.next() // { value: 2, done: false }
	 * iterator.next() // { value: 3, done: false }
	 * iterator.next() // { value: undefined, done: true }
	 *
	 * @template T the type of each iterated value
	 * @param {Iterable<T>} iterable
	 *   An Iterable object which is the source of an Iterator.
	 * @return {Iterator<T>} new Iterator instance.
	 */
	function getIterator(iterable) {
	  var method = getIteratorMethod(iterable)
	  if (method) {
	    return method.call(iterable)
	  }
	}
	exports.getIterator = getIterator
	
	/**
	 * If the provided object implements the Iterator protocol, the method
	 * responsible for producing its Iterator object is returned.
	 *
	 * This is used in rare cases for performance tuning. This method must be called
	 * with obj as the contextual this-argument.
	 *
	 * @example
	 *
	 * var getIteratorMethod = require('iterall').getIteratorMethod
	 * var myArray = [ 1, 2, 3 ]
	 * var method = getIteratorMethod(myArray)
	 * if (method) {
	 *   var iterator = method.call(myArray)
	 * }
	 *
	 * @template T the type of each iterated value
	 * @param {Iterable<T>} iterable
	 *   An Iterable object which defines an `@@iterator` method.
	 * @return {function(): Iterator<T>} `@@iterator` method.
	 */
	function getIteratorMethod(iterable) {
	  if (iterable != null) {
	    var method =
	      (SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR]) || iterable['@@iterator']
	    if (typeof method === 'function') {
	      return method
	    }
	  }
	}
	exports.getIteratorMethod = getIteratorMethod
	
	/**
	 * Similar to `getIterator()`, this method returns a new Iterator given an
	 * Iterable. However it will also create an Iterator for a non-Iterable
	 * Array-like collection, such as Array in a non-ES2015 environment.
	 *
	 * `createIterator` is complimentary to `forEach`, but allows a "pull"-based
	 * iteration as opposed to `forEach`'s "push"-based iteration.
	 *
	 * `createIterator` produces an Iterator for Array-likes with the same behavior
	 * as ArrayIteratorPrototype described in the ECMAScript specification, and
	 * does *not* skip over "holes".
	 *
	 * @example
	 *
	 * var createIterator = require('iterall').createIterator
	 *
	 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
	 * var iterator = createIterator(myArraylike)
	 * iterator.next() // { value: 'Alpha', done: false }
	 * iterator.next() // { value: 'Bravo', done: false }
	 * iterator.next() // { value: 'Charlie', done: false }
	 * iterator.next() // { value: undefined, done: true }
	 *
	 * @template T the type of each iterated value
	 * @param {Iterable<T>|{ length: number }} collection
	 *   An Iterable or Array-like object to produce an Iterator.
	 * @return {Iterator<T>} new Iterator instance.
	 */
	function createIterator(collection) {
	  if (collection != null) {
	    var iterator = getIterator(collection)
	    if (iterator) {
	      return iterator
	    }
	    if (isArrayLike(collection)) {
	      return new ArrayLikeIterator(collection)
	    }
	  }
	}
	exports.createIterator = createIterator
	
	// When the object provided to `createIterator` is not Iterable but is
	// Array-like, this simple Iterator is created.
	function ArrayLikeIterator(obj) {
	  this._o = obj
	  this._i = 0
	}
	
	// Note: all Iterators are themselves Iterable.
	ArrayLikeIterator.prototype[$$iterator] = function() {
	  return this
	}
	
	// A simple state-machine determines the IteratorResult returned, yielding
	// each value in the Array-like object in order of their indicies.
	ArrayLikeIterator.prototype.next = function() {
	  if (this._o === void 0 || this._i >= this._o.length) {
	    this._o = void 0
	    return { value: void 0, done: true }
	  }
	  return { value: this._o[this._i++], done: false }
	}
	
	/**
	 * Given an object which either implements the Iterable protocol or is
	 * Array-like, iterate over it, calling the `callback` at each iteration.
	 *
	 * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
	 * However `forEach` adheres to the behavior of [Array#forEach][] described in
	 * the ECMAScript specification, skipping over "holes" in Array-likes. It will
	 * also delegate to a `forEach` method on `collection` if one is defined,
	 * ensuring native performance for `Arrays`.
	 *
	 * Similar to [Array#forEach][], the `callback` function accepts three
	 * arguments, and is provided with `thisArg` as the calling context.
	 *
	 * Note: providing an infinite Iterator to forEach will produce an error.
	 *
	 * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	 *
	 * @example
	 *
	 * var forEach = require('iterall').forEach
	 *
	 * forEach(myIterable, function (value, index, iterable) {
	 *   console.log(value, index, iterable === myIterable)
	 * })
	 *
	 * @example
	 *
	 * // ES6:
	 * for (let value of myIterable) {
	 *   console.log(value)
	 * }
	 *
	 * // Any JavaScript environment:
	 * forEach(myIterable, function (value) {
	 *   console.log(value)
	 * })
	 *
	 * @template T the type of each iterated value
	 * @param {Iterable<T>|{ length: number }} collection
	 *   The Iterable or array to iterate over.
	 * @param {function(T, number, object)} callback
	 *   Function to execute for each iteration, taking up to three arguments
	 * @param [thisArg]
	 *   Optional. Value to use as `this` when executing `callback`.
	 */
	function forEach(collection, callback, thisArg) {
	  if (collection != null) {
	    if (typeof collection.forEach === 'function') {
	      return collection.forEach(callback, thisArg)
	    }
	    var i = 0
	    var iterator = getIterator(collection)
	    if (iterator) {
	      var step
	      while (!(step = iterator.next()).done) {
	        callback.call(thisArg, step.value, i++, collection)
	        // Infinite Iterators could cause forEach to run forever.
	        // After a very large number of iterations, produce an error.
	        /* istanbul ignore if */
	        if (i > 9999999) {
	          throw new TypeError('Near-infinite iteration.')
	        }
	      }
	    } else if (isArrayLike(collection)) {
	      for (; i < collection.length; i++) {
	        if (collection.hasOwnProperty(i)) {
	          callback.call(thisArg, collection[i], i, collection)
	        }
	      }
	    }
	  }
	}
	exports.forEach = forEach
	
	/////////////////////////////////////////////////////
	//                                                 //
	//                 ASYNC ITERATORS                 //
	//                                                 //
	/////////////////////////////////////////////////////
	
	/**
	 * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/)
	 * is a *protocol* which describes a standard way to produce and consume an
	 * asynchronous sequence of values, typically the values of the AsyncIterable
	 * represented by this AsyncIterator.
	 *
	 * AsyncIterator is similar to Observable or Stream.
	 *
	 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
	 * it can be utilized by any version of JavaScript.
	 *
	 * @typedef {Object} AsyncIterator
	 * @template T The type of each iterated value
	 * @property {function (): Promise<{ value: T, done: boolean }>} next
	 *   A method which produces a Promise which resolves to either the next value
	 *   in a sequence or a result where the `done` property is `true` indicating
	 *   the end of the sequence of values. It may also produce a Promise which
	 *   becomes rejected, indicating a failure.
	 */
	
	/**
	 * AsyncIterable is a *protocol* which when implemented allows a JavaScript
	 * object to define their asynchronous iteration behavior, such as what values
	 * are looped over in a `for-await-of` loop or `iterall`'s `forAwaitEach`
	 * function.
	 *
	 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
	 * it can be utilized by any version of JavaScript.
	 *
	 * @typedef {Object} AsyncIterable
	 * @template T The type of each iterated value
	 * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
	 *   A method which produces an AsyncIterator for this AsyncIterable.
	 */
	
	// In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
	var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator
	
	/**
	 * A property name to be used as the name of an AsyncIterable's method
	 * responsible for producing an Iterator, referred to as `@@asyncIterator`.
	 * Typically represents the value `Symbol.asyncIterator` but falls back to the
	 * string `"@@asyncIterator"` when `Symbol.asyncIterator` is not defined.
	 *
	 * Use `$$asyncIterator` for defining new AsyncIterables instead of
	 * `Symbol.asyncIterator`, but do not use it for accessing existing Iterables,
	 * instead use `getAsyncIterator()` or `isAsyncIterable()`.
	 *
	 * @example
	 *
	 * var $$asyncIterator = require('iterall').$$asyncIterator
	 *
	 * function Chirper (to) {
	 *   this.to = to
	 * }
	 *
	 * Chirper.prototype[$$asyncIterator] = function () {
	 *   return {
	 *     to: this.to,
	 *     num: 0,
	 *     next () {
	 *       return new Promise(function (resolve) {
	 *         if (this.num >= this.to) {
	 *           resolve({ value: undefined, done: true })
	 *         } else {
	 *           setTimeout(function () {
	 *             resolve({ value: this.num++, done: false })
	 *           }, 1000)
	 *         }
	 *       }
	 *     }
	 *   }
	 * }
	 *
	 * var chirper = new Chirper(3)
	 * for await (var number of chirper) {
	 *   console.log(number) // 0 ...wait... 1 ...wait... 2
	 * }
	 *
	 * @type {Symbol|string}
	 */
	var $$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator'
	exports.$$asyncIterator = $$asyncIterator
	
	/**
	 * Returns true if the provided object implements the AsyncIterator protocol via
	 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
	 *
	 * @example
	 *
	 * var isAsyncIterable = require('iterall').isAsyncIterable
	 * isAsyncIterable(myStream) // true
	 * isAsyncIterable('ABC') // false
	 *
	 * @param obj
	 *   A value which might implement the AsyncIterable protocol.
	 * @return {boolean} true if AsyncIterable.
	 */
	function isAsyncIterable(obj) {
	  return !!getAsyncIteratorMethod(obj)
	}
	exports.isAsyncIterable = isAsyncIterable
	
	/**
	 * If the provided object implements the AsyncIterator protocol, its
	 * AsyncIterator object is returned. Otherwise returns undefined.
	 *
	 * @example
	 *
	 * var getAsyncIterator = require('iterall').getAsyncIterator
	 * var asyncIterator = getAsyncIterator(myStream)
	 * asyncIterator.next().then(console.log) // { value: 1, done: false }
	 * asyncIterator.next().then(console.log) // { value: 2, done: false }
	 * asyncIterator.next().then(console.log) // { value: 3, done: false }
	 * asyncIterator.next().then(console.log) // { value: undefined, done: true }
	 *
	 * @template T the type of each iterated value
	 * @param {AsyncIterable<T>} asyncIterable
	 *   An AsyncIterable object which is the source of an AsyncIterator.
	 * @return {AsyncIterator<T>} new AsyncIterator instance.
	 */
	function getAsyncIterator(asyncIterable) {
	  var method = getAsyncIteratorMethod(asyncIterable)
	  if (method) {
	    return method.call(asyncIterable)
	  }
	}
	exports.getAsyncIterator = getAsyncIterator
	
	/**
	 * If the provided object implements the AsyncIterator protocol, the method
	 * responsible for producing its AsyncIterator object is returned.
	 *
	 * This is used in rare cases for performance tuning. This method must be called
	 * with obj as the contextual this-argument.
	 *
	 * @example
	 *
	 * var getAsyncIteratorMethod = require('iterall').getAsyncIteratorMethod
	 * var method = getAsyncIteratorMethod(myStream)
	 * if (method) {
	 *   var asyncIterator = method.call(myStream)
	 * }
	 *
	 * @template T the type of each iterated value
	 * @param {AsyncIterable<T>} asyncIterable
	 *   An AsyncIterable object which defines an `@@asyncIterator` method.
	 * @return {function(): AsyncIterator<T>} `@@asyncIterator` method.
	 */
	function getAsyncIteratorMethod(asyncIterable) {
	  if (asyncIterable != null) {
	    var method =
	      (SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR]) ||
	      asyncIterable['@@asyncIterator']
	    if (typeof method === 'function') {
	      return method
	    }
	  }
	}
	exports.getAsyncIteratorMethod = getAsyncIteratorMethod
	
	/**
	 * Similar to `getAsyncIterator()`, this method returns a new AsyncIterator
	 * given an AsyncIterable. However it will also create an AsyncIterator for a
	 * non-async Iterable as well as non-Iterable Array-like collection, such as
	 * Array in a pre-ES2015 environment.
	 *
	 * `createAsyncIterator` is complimentary to `forAwaitEach`, but allows a
	 * buffering "pull"-based iteration as opposed to `forAwaitEach`'s
	 * "push"-based iteration.
	 *
	 * `createAsyncIterator` produces an AsyncIterator for non-async Iterables as
	 * described in the ECMAScript proposal [Async-from-Sync Iterator Objects](https://tc39.github.io/proposal-async-iteration/#sec-async-from-sync-iterator-objects).
	 *
	 * > Note: Creating `AsyncIterator`s requires the existence of `Promise`.
	 * > While `Promise` has been available in modern browsers for a number of
	 * > years, legacy browsers (like IE 11) may require a polyfill.
	 *
	 * @example
	 *
	 * var createAsyncIterator = require('iterall').createAsyncIterator
	 *
	 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
	 * var iterator = createAsyncIterator(myArraylike)
	 * iterator.next().then(console.log) // { value: 'Alpha', done: false }
	 * iterator.next().then(console.log) // { value: 'Bravo', done: false }
	 * iterator.next().then(console.log) // { value: 'Charlie', done: false }
	 * iterator.next().then(console.log) // { value: undefined, done: true }
	 *
	 * @template T the type of each iterated value
	 * @param {AsyncIterable<T>|Iterable<T>|{ length: number }} source
	 *   An AsyncIterable, Iterable, or Array-like object to produce an Iterator.
	 * @return {AsyncIterator<T>} new AsyncIterator instance.
	 */
	function createAsyncIterator(source) {
	  if (source != null) {
	    var asyncIterator = getAsyncIterator(source)
	    if (asyncIterator) {
	      return asyncIterator
	    }
	    var iterator = createIterator(source)
	    if (iterator) {
	      return new AsyncFromSyncIterator(iterator)
	    }
	  }
	}
	exports.createAsyncIterator = createAsyncIterator
	
	// When the object provided to `createAsyncIterator` is not AsyncIterable but is
	// sync Iterable, this simple wrapper is created.
	function AsyncFromSyncIterator(iterator) {
	  this._i = iterator
	}
	
	// Note: all AsyncIterators are themselves AsyncIterable.
	AsyncFromSyncIterator.prototype[$$asyncIterator] = function() {
	  return this
	}
	
	// A simple state-machine determines the IteratorResult returned, yielding
	// each value in the Array-like object in order of their indicies.
	AsyncFromSyncIterator.prototype.next = function() {
	  var step = this._i.next()
	  return Promise.resolve(step.value).then(function(value) {
	    return { value: value, done: step.done }
	  })
	}
	
	/**
	 * Given an object which either implements the AsyncIterable protocol or is
	 * Array-like, iterate over it, calling the `callback` at each iteration.
	 *
	 * Use `forAwaitEach` where you would expect to use a `for-await-of` loop.
	 *
	 * Similar to [Array#forEach][], the `callback` function accepts three
	 * arguments, and is provided with `thisArg` as the calling context.
	 *
	 * > Note: Using `forAwaitEach` requires the existence of `Promise`.
	 * > While `Promise` has been available in modern browsers for a number of
	 * > years, legacy browsers (like IE 11) may require a polyfill.
	 *
	 * @example
	 *
	 * var forAwaitEach = require('iterall').forAwaitEach
	 *
	 * forAwaitEach(myIterable, function (value, index, iterable) {
	 *   console.log(value, index, iterable === myIterable)
	 * })
	 *
	 * @example
	 *
	 * // ES2017:
	 * for await (let value of myAsyncIterable) {
	 *   console.log(await doSomethingAsync(value))
	 * }
	 * console.log('done')
	 *
	 * // Any JavaScript environment:
	 * forAwaitEach(myAsyncIterable, function (value) {
	 *   return doSomethingAsync(value).then(console.log)
	 * }).then(function () {
	 *   console.log('done')
	 * })
	 *
	 * @template T the type of each iterated value
	 * @param {AsyncIterable<T>|Iterable<Promise<T> | T>|{ length: number }} source
	 *   The AsyncIterable or array to iterate over.
	 * @param {function(T, number, object)} callback
	 *   Function to execute for each iteration, taking up to three arguments
	 * @param [thisArg]
	 *   Optional. Value to use as `this` when executing `callback`.
	 */
	function forAwaitEach(source, callback, thisArg) {
	  var asyncIterator = createAsyncIterator(source)
	  if (asyncIterator) {
	    var i = 0
	    return new Promise(function(resolve, reject) {
	      function next() {
	        return asyncIterator
	          .next()
	          .then(function(step) {
	            if (!step.done) {
	              Promise.resolve(callback.call(thisArg, step.value, i++, source))
	                .then(next)
	                .catch(reject)
	            } else {
	              resolve()
	            }
	          })
	          .catch(reject)
	      }
	      next()
	    })
	  }
	}
	exports.forAwaitEach = forAwaitEach


/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isInvalid;
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	/**
	 * Returns true if a value is undefined, or NaN.
	 */
	function isInvalid(value) {
	  return value === undefined || value !== value;
	}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.visit = visit;
	exports.visitInParallel = visitInParallel;
	exports.visitWithTypeInfo = visitWithTypeInfo;
	exports.getVisitFn = getVisitFn;
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	var QueryDocumentKeys = exports.QueryDocumentKeys = {
	  Name: [],
	
	  Document: ['definitions'],
	  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
	  VariableDefinition: ['variable', 'type', 'defaultValue'],
	  Variable: ['name'],
	  SelectionSet: ['selections'],
	  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
	  Argument: ['name', 'value'],
	
	  FragmentSpread: ['name', 'directives'],
	  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
	  FragmentDefinition: ['name', 'typeCondition', 'directives', 'selectionSet'],
	
	  IntValue: [],
	  FloatValue: [],
	  StringValue: [],
	  BooleanValue: [],
	  NullValue: [],
	  EnumValue: [],
	  ListValue: ['values'],
	  ObjectValue: ['fields'],
	  ObjectField: ['name', 'value'],
	
	  Directive: ['name', 'arguments'],
	
	  NamedType: ['name'],
	  ListType: ['type'],
	  NonNullType: ['type'],
	
	  SchemaDefinition: ['directives', 'operationTypes'],
	  OperationTypeDefinition: ['type'],
	
	  ScalarTypeDefinition: ['name', 'directives'],
	  ObjectTypeDefinition: ['name', 'interfaces', 'directives', 'fields'],
	  FieldDefinition: ['name', 'arguments', 'type', 'directives'],
	  InputValueDefinition: ['name', 'type', 'defaultValue', 'directives'],
	  InterfaceTypeDefinition: ['name', 'directives', 'fields'],
	  UnionTypeDefinition: ['name', 'directives', 'types'],
	  EnumTypeDefinition: ['name', 'directives', 'values'],
	  EnumValueDefinition: ['name', 'directives'],
	  InputObjectTypeDefinition: ['name', 'directives', 'fields'],
	
	  TypeExtensionDefinition: ['definition'],
	
	  DirectiveDefinition: ['name', 'arguments', 'locations']
	};
	
	var BREAK = exports.BREAK = {};
	
	/**
	 * visit() will walk through an AST using a depth first traversal, calling
	 * the visitor's enter function at each node in the traversal, and calling the
	 * leave function after visiting that node and all of its child nodes.
	 *
	 * By returning different values from the enter and leave functions, the
	 * behavior of the visitor can be altered, including skipping over a sub-tree of
	 * the AST (by returning false), editing the AST by returning a value or null
	 * to remove the value, or to stop the whole traversal by returning BREAK.
	 *
	 * When using visit() to edit an AST, the original AST will not be modified, and
	 * a new version of the AST with the changes applied will be returned from the
	 * visit function.
	 *
	 *     const editedAST = visit(ast, {
	 *       enter(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: skip visiting this node
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       },
	 *       leave(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: no action
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       }
	 *     });
	 *
	 * Alternatively to providing enter() and leave() functions, a visitor can
	 * instead provide functions named the same as the kinds of AST nodes, or
	 * enter/leave visitors at a named key, leading to four permutations of
	 * visitor API:
	 *
	 * 1) Named visitors triggered when entering a node a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind(node) {
	 *         // enter the "Kind" node
	 *       }
	 *     })
	 *
	 * 2) Named visitors that trigger upon entering and leaving a node of
	 *    a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind: {
	 *         enter(node) {
	 *           // enter the "Kind" node
	 *         }
	 *         leave(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 *
	 * 3) Generic visitors that trigger upon entering and leaving any node.
	 *
	 *     visit(ast, {
	 *       enter(node) {
	 *         // enter any node
	 *       },
	 *       leave(node) {
	 *         // leave any node
	 *       }
	 *     })
	 *
	 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
	 *
	 *     visit(ast, {
	 *       enter: {
	 *         Kind(node) {
	 *           // enter the "Kind" node
	 *         }
	 *       },
	 *       leave: {
	 *         Kind(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 */
	function visit(root, visitor, keyMap) {
	  var visitorKeys = keyMap || QueryDocumentKeys;
	
	  var stack = void 0;
	  var inArray = Array.isArray(root);
	  var keys = [root];
	  var index = -1;
	  var edits = [];
	  var parent = void 0;
	  var path = [];
	  var ancestors = [];
	  var newRoot = root;
	
	  do {
	    index++;
	    var isLeaving = index === keys.length;
	    var key = void 0;
	    var node = void 0;
	    var isEdited = isLeaving && edits.length !== 0;
	    if (isLeaving) {
	      key = ancestors.length === 0 ? undefined : path.pop();
	      node = parent;
	      parent = ancestors.pop();
	      if (isEdited) {
	        if (inArray) {
	          node = node.slice();
	        } else {
	          var clone = {};
	          for (var k in node) {
	            if (node.hasOwnProperty(k)) {
	              clone[k] = node[k];
	            }
	          }
	          node = clone;
	        }
	        var editOffset = 0;
	        for (var ii = 0; ii < edits.length; ii++) {
	          var editKey = edits[ii][0];
	          var editValue = edits[ii][1];
	          if (inArray) {
	            editKey -= editOffset;
	          }
	          if (inArray && editValue === null) {
	            node.splice(editKey, 1);
	            editOffset++;
	          } else {
	            node[editKey] = editValue;
	          }
	        }
	      }
	      index = stack.index;
	      keys = stack.keys;
	      edits = stack.edits;
	      inArray = stack.inArray;
	      stack = stack.prev;
	    } else {
	      key = parent ? inArray ? index : keys[index] : undefined;
	      node = parent ? parent[key] : newRoot;
	      if (node === null || node === undefined) {
	        continue;
	      }
	      if (parent) {
	        path.push(key);
	      }
	    }
	
	    var result = void 0;
	    if (!Array.isArray(node)) {
	      if (!isNode(node)) {
	        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
	      }
	      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
	      if (visitFn) {
	        result = visitFn.call(visitor, node, key, parent, path, ancestors);
	
	        if (result === BREAK) {
	          break;
	        }
	
	        if (result === false) {
	          if (!isLeaving) {
	            path.pop();
	            continue;
	          }
	        } else if (result !== undefined) {
	          edits.push([key, result]);
	          if (!isLeaving) {
	            if (isNode(result)) {
	              node = result;
	            } else {
	              path.pop();
	              continue;
	            }
	          }
	        }
	      }
	    }
	
	    if (result === undefined && isEdited) {
	      edits.push([key, node]);
	    }
	
	    if (!isLeaving) {
	      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
	      inArray = Array.isArray(node);
	      keys = inArray ? node : visitorKeys[node.kind] || [];
	      index = -1;
	      edits = [];
	      if (parent) {
	        ancestors.push(parent);
	      }
	      parent = node;
	    }
	  } while (stack !== undefined);
	
	  if (edits.length !== 0) {
	    newRoot = edits[edits.length - 1][1];
	  }
	
	  return newRoot;
	}
	
	function isNode(maybeNode) {
	  return maybeNode && typeof maybeNode.kind === 'string';
	}
	
	/**
	 * Creates a new visitor instance which delegates to many visitors to run in
	 * parallel. Each visitor will be visited for each node before moving on.
	 *
	 * If a prior visitor edits a node, no following visitors will see that node.
	 */
	function visitInParallel(visitors) {
	  var skipping = new Array(visitors.length);
	
	  return {
	    enter: function enter(node) {
	      for (var i = 0; i < visitors.length; i++) {
	        if (!skipping[i]) {
	          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
	          if (fn) {
	            var result = fn.apply(visitors[i], arguments);
	            if (result === false) {
	              skipping[i] = node;
	            } else if (result === BREAK) {
	              skipping[i] = BREAK;
	            } else if (result !== undefined) {
	              return result;
	            }
	          }
	        }
	      }
	    },
	    leave: function leave(node) {
	      for (var i = 0; i < visitors.length; i++) {
	        if (!skipping[i]) {
	          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
	          if (fn) {
	            var result = fn.apply(visitors[i], arguments);
	            if (result === BREAK) {
	              skipping[i] = BREAK;
	            } else if (result !== undefined && result !== false) {
	              return result;
	            }
	          }
	        } else if (skipping[i] === node) {
	          skipping[i] = null;
	        }
	      }
	    }
	  };
	}
	
	/**
	 * Creates a new visitor instance which maintains a provided TypeInfo instance
	 * along with visiting visitor.
	 */
	function visitWithTypeInfo(typeInfo, visitor) {
	  return {
	    enter: function enter(node) {
	      typeInfo.enter(node);
	      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
	      if (fn) {
	        var result = fn.apply(visitor, arguments);
	        if (result !== undefined) {
	          typeInfo.leave(node);
	          if (isNode(result)) {
	            typeInfo.enter(result);
	          }
	        }
	        return result;
	      }
	    },
	    leave: function leave(node) {
	      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
	      var result = void 0;
	      if (fn) {
	        result = fn.apply(visitor, arguments);
	      }
	      typeInfo.leave(node);
	      return result;
	    }
	  };
	}
	
	/**
	 * Given a visitor instance, if it is leaving or not, and a node kind, return
	 * the function the visitor runtime should call.
	 */
	function getVisitFn(visitor, kind, isLeaving) {
	  var kindVisitor = visitor[kind];
	  if (kindVisitor) {
	    if (!isLeaving && typeof kindVisitor === 'function') {
	      // { Kind() {} }
	      return kindVisitor;
	    }
	    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
	    if (typeof kindSpecificVisitor === 'function') {
	      // { Kind: { enter() {}, leave() {} } }
	      return kindSpecificVisitor;
	    }
	  } else {
	    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
	    if (specificVisitor) {
	      if (typeof specificVisitor === 'function') {
	        // { enter() {}, leave() {} }
	        return specificVisitor;
	      }
	      var specificKindVisitor = specificVisitor[kind];
	      if (typeof specificKindVisitor === 'function') {
	        // { enter: { Kind() {} }, leave: { Kind() {} } }
	        return specificKindVisitor;
	      }
	    }
	  }
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.valueFromAST = valueFromAST;
	
	var _keyMap = __webpack_require__(38);
	
	var _keyMap2 = _interopRequireDefault(_keyMap);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _isNullish = __webpack_require__(25);
	
	var _isNullish2 = _interopRequireDefault(_isNullish);
	
	var _isInvalid = __webpack_require__(49);
	
	var _isInvalid2 = _interopRequireDefault(_isInvalid);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _definition = __webpack_require__(4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Produces a JavaScript value given a GraphQL Value AST.
	 *
	 * A GraphQL type must be provided, which will be used to interpret different
	 * GraphQL Value literals.
	 *
	 * Returns `undefined` when the value could not be validly coerced according to
	 * the provided type.
	 *
	 * | GraphQL Value        | JSON Value    |
	 * | -------------------- | ------------- |
	 * | Input Object         | Object        |
	 * | List                 | Array         |
	 * | Boolean              | Boolean       |
	 * | String               | String        |
	 * | Int / Float          | Number        |
	 * | Enum Value           | Mixed         |
	 * | NullValue            | null          |
	 *
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function valueFromAST(valueNode, type, variables) {
	  if (!valueNode) {
	    // When there is no node, then there is also no value.
	    // Importantly, this is different from returning the value null.
	    return;
	  }
	
	  if (type instanceof _definition.GraphQLNonNull) {
	    if (valueNode.kind === Kind.NULL) {
	      return; // Invalid: intentionally return no value.
	    }
	    return valueFromAST(valueNode, type.ofType, variables);
	  }
	
	  if (valueNode.kind === Kind.NULL) {
	    // This is explicitly returning the value null.
	    return null;
	  }
	
	  if (valueNode.kind === Kind.VARIABLE) {
	    var variableName = valueNode.name.value;
	    if (!variables || (0, _isInvalid2.default)(variables[variableName])) {
	      // No valid return value.
	      return;
	    }
	    // Note: we're not doing any checking that this variable is correct. We're
	    // assuming that this query has been validated and the variable usage here
	    // is of the correct type.
	    return variables[variableName];
	  }
	
	  if (type instanceof _definition.GraphQLList) {
	    var itemType = type.ofType;
	    if (valueNode.kind === Kind.LIST) {
	      var coercedValues = [];
	      var itemNodes = valueNode.values;
	      for (var i = 0; i < itemNodes.length; i++) {
	        if (isMissingVariable(itemNodes[i], variables)) {
	          // If an array contains a missing variable, it is either coerced to
	          // null or if the item type is non-null, it considered invalid.
	          if (itemType instanceof _definition.GraphQLNonNull) {
	            return; // Invalid: intentionally return no value.
	          }
	          coercedValues.push(null);
	        } else {
	          var itemValue = valueFromAST(itemNodes[i], itemType, variables);
	          if ((0, _isInvalid2.default)(itemValue)) {
	            return; // Invalid: intentionally return no value.
	          }
	          coercedValues.push(itemValue);
	        }
	      }
	      return coercedValues;
	    }
	    var coercedValue = valueFromAST(valueNode, itemType, variables);
	    if ((0, _isInvalid2.default)(coercedValue)) {
	      return; // Invalid: intentionally return no value.
	    }
	    return [coercedValue];
	  }
	
	  if (type instanceof _definition.GraphQLInputObjectType) {
	    if (valueNode.kind !== Kind.OBJECT) {
	      return; // Invalid: intentionally return no value.
	    }
	    var coercedObj = Object.create(null);
	    var fields = type.getFields();
	    var fieldNodes = (0, _keyMap2.default)(valueNode.fields, function (field) {
	      return field.name.value;
	    });
	    var fieldNames = Object.keys(fields);
	    for (var _i = 0; _i < fieldNames.length; _i++) {
	      var fieldName = fieldNames[_i];
	      var field = fields[fieldName];
	      var fieldNode = fieldNodes[fieldName];
	      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
	        if (!(0, _isInvalid2.default)(field.defaultValue)) {
	          coercedObj[fieldName] = field.defaultValue;
	        } else if (field.type instanceof _definition.GraphQLNonNull) {
	          return; // Invalid: intentionally return no value.
	        }
	        continue;
	      }
	      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);
	      if ((0, _isInvalid2.default)(fieldValue)) {
	        return; // Invalid: intentionally return no value.
	      }
	      coercedObj[fieldName] = fieldValue;
	    }
	    return coercedObj;
	  }
	
	  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;
	
	  var parsed = type.parseLiteral(valueNode);
	  if ((0, _isNullish2.default)(parsed) && !type.isValidLiteral(valueNode)) {
	    // Invalid values represent a failure to parse correctly, in which case
	    // no value is returned.
	    return;
	  }
	
	  return parsed;
	}
	
	// Returns true if the provided valueNode is a variable which is not defined
	// in the set of variables.
	function isMissingVariable(valueNode, variables) {
	  return valueNode.kind === Kind.VARIABLE && (!variables || (0, _isInvalid2.default)(variables[valueNode.name.value]));
	}

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parse = parse;
	exports.parseValue = parseValue;
	exports.parseType = parseType;
	exports.parseConstValue = parseConstValue;
	exports.parseTypeReference = parseTypeReference;
	exports.parseNamedType = parseNamedType;
	
	var _source = __webpack_require__(174);
	
	var _error = __webpack_require__(3);
	
	var _lexer = __webpack_require__(112);
	
	var _kinds = __webpack_require__(6);
	
	/**
	 * Given a GraphQL source, parses it into a Document.
	 * Throws GraphQLError if a syntax error is encountered.
	 */
	
	
	/**
	 * Configuration options to control parser behavior
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function parse(source, options) {
	  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
	  if (!(sourceObj instanceof _source.Source)) {
	    throw new TypeError('Must provide Source. Received: ' + String(sourceObj));
	  }
	  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
	  return parseDocument(lexer);
	}
	
	/**
	 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
	 * that value.
	 * Throws GraphQLError if a syntax error is encountered.
	 *
	 * This is useful within tools that operate upon GraphQL Values directly and
	 * in isolation of complete GraphQL documents.
	 *
	 * Consider providing the results to the utility function: valueFromAST().
	 */
	function parseValue(source, options) {
	  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
	  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
	  expect(lexer, _lexer.TokenKind.SOF);
	  var value = parseValueLiteral(lexer, false);
	  expect(lexer, _lexer.TokenKind.EOF);
	  return value;
	}
	
	/**
	 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
	 * that type.
	 * Throws GraphQLError if a syntax error is encountered.
	 *
	 * This is useful within tools that operate upon GraphQL Types directly and
	 * in isolation of complete GraphQL documents.
	 *
	 * Consider providing the results to the utility function: typeFromAST().
	 */
	function parseType(source, options) {
	  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
	  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
	  expect(lexer, _lexer.TokenKind.SOF);
	  var type = parseTypeReference(lexer);
	  expect(lexer, _lexer.TokenKind.EOF);
	  return type;
	}
	
	/**
	 * Converts a name lex token into a name parse node.
	 */
	function parseName(lexer) {
	  var token = expect(lexer, _lexer.TokenKind.NAME);
	  return {
	    kind: _kinds.NAME,
	    value: token.value,
	    loc: loc(lexer, token)
	  };
	}
	
	// Implements the parsing rules in the Document section.
	
	/**
	 * Document : Definition+
	 */
	function parseDocument(lexer) {
	  var start = lexer.token;
	  expect(lexer, _lexer.TokenKind.SOF);
	  var definitions = [];
	  do {
	    definitions.push(parseDefinition(lexer));
	  } while (!skip(lexer, _lexer.TokenKind.EOF));
	
	  return {
	    kind: _kinds.DOCUMENT,
	    definitions: definitions,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * Definition :
	 *   - OperationDefinition
	 *   - FragmentDefinition
	 *   - TypeSystemDefinition
	 */
	function parseDefinition(lexer) {
	  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
	    return parseOperationDefinition(lexer);
	  }
	
	  if (peek(lexer, _lexer.TokenKind.NAME)) {
	    switch (lexer.token.value) {
	      // Note: subscription is an experimental non-spec addition.
	      case 'query':
	      case 'mutation':
	      case 'subscription':
	        return parseOperationDefinition(lexer);
	
	      case 'fragment':
	        return parseFragmentDefinition(lexer);
	
	      // Note: the Type System IDL is an experimental non-spec addition.
	      case 'schema':
	      case 'scalar':
	      case 'type':
	      case 'interface':
	      case 'union':
	      case 'enum':
	      case 'input':
	      case 'extend':
	      case 'directive':
	        return parseTypeSystemDefinition(lexer);
	    }
	  }
	
	  throw unexpected(lexer);
	}
	
	// Implements the parsing rules in the Operations section.
	
	/**
	 * OperationDefinition :
	 *  - SelectionSet
	 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
	 */
	function parseOperationDefinition(lexer) {
	  var start = lexer.token;
	  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
	    return {
	      kind: _kinds.OPERATION_DEFINITION,
	      operation: 'query',
	      name: null,
	      variableDefinitions: null,
	      directives: [],
	      selectionSet: parseSelectionSet(lexer),
	      loc: loc(lexer, start)
	    };
	  }
	  var operation = parseOperationType(lexer);
	  var name = void 0;
	  if (peek(lexer, _lexer.TokenKind.NAME)) {
	    name = parseName(lexer);
	  }
	  return {
	    kind: _kinds.OPERATION_DEFINITION,
	    operation: operation,
	    name: name,
	    variableDefinitions: parseVariableDefinitions(lexer),
	    directives: parseDirectives(lexer),
	    selectionSet: parseSelectionSet(lexer),
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * OperationType : one of query mutation subscription
	 */
	function parseOperationType(lexer) {
	  var operationToken = expect(lexer, _lexer.TokenKind.NAME);
	  switch (operationToken.value) {
	    case 'query':
	      return 'query';
	    case 'mutation':
	      return 'mutation';
	    // Note: subscription is an experimental non-spec addition.
	    case 'subscription':
	      return 'subscription';
	  }
	
	  throw unexpected(lexer, operationToken);
	}
	
	/**
	 * VariableDefinitions : ( VariableDefinition+ )
	 */
	function parseVariableDefinitions(lexer) {
	  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
	}
	
	/**
	 * VariableDefinition : Variable : Type DefaultValue?
	 */
	function parseVariableDefinition(lexer) {
	  var start = lexer.token;
	  return {
	    kind: _kinds.VARIABLE_DEFINITION,
	    variable: parseVariable(lexer),
	    type: (expect(lexer, _lexer.TokenKind.COLON), parseTypeReference(lexer)),
	    defaultValue: skip(lexer, _lexer.TokenKind.EQUALS) ? parseValueLiteral(lexer, true) : null,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * Variable : $ Name
	 */
	function parseVariable(lexer) {
	  var start = lexer.token;
	  expect(lexer, _lexer.TokenKind.DOLLAR);
	  return {
	    kind: _kinds.VARIABLE,
	    name: parseName(lexer),
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * SelectionSet : { Selection+ }
	 */
	function parseSelectionSet(lexer) {
	  var start = lexer.token;
	  return {
	    kind: _kinds.SELECTION_SET,
	    selections: many(lexer, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * Selection :
	 *   - Field
	 *   - FragmentSpread
	 *   - InlineFragment
	 */
	function parseSelection(lexer) {
	  return peek(lexer, _lexer.TokenKind.SPREAD) ? parseFragment(lexer) : parseField(lexer);
	}
	
	/**
	 * Field : Alias? Name Arguments? Directives? SelectionSet?
	 *
	 * Alias : Name :
	 */
	function parseField(lexer) {
	  var start = lexer.token;
	
	  var nameOrAlias = parseName(lexer);
	  var alias = void 0;
	  var name = void 0;
	  if (skip(lexer, _lexer.TokenKind.COLON)) {
	    alias = nameOrAlias;
	    name = parseName(lexer);
	  } else {
	    alias = null;
	    name = nameOrAlias;
	  }
	
	  return {
	    kind: _kinds.FIELD,
	    alias: alias,
	    name: name,
	    arguments: parseArguments(lexer),
	    directives: parseDirectives(lexer),
	    selectionSet: peek(lexer, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(lexer) : null,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * Arguments : ( Argument+ )
	 */
	function parseArguments(lexer) {
	  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseArgument, _lexer.TokenKind.PAREN_R) : [];
	}
	
	/**
	 * Argument : Name : Value
	 */
	function parseArgument(lexer) {
	  var start = lexer.token;
	  return {
	    kind: _kinds.ARGUMENT,
	    name: parseName(lexer),
	    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, false)),
	    loc: loc(lexer, start)
	  };
	}
	
	// Implements the parsing rules in the Fragments section.
	
	/**
	 * Corresponds to both FragmentSpread and InlineFragment in the spec.
	 *
	 * FragmentSpread : ... FragmentName Directives?
	 *
	 * InlineFragment : ... TypeCondition? Directives? SelectionSet
	 */
	function parseFragment(lexer) {
	  var start = lexer.token;
	  expect(lexer, _lexer.TokenKind.SPREAD);
	  if (peek(lexer, _lexer.TokenKind.NAME) && lexer.token.value !== 'on') {
	    return {
	      kind: _kinds.FRAGMENT_SPREAD,
	      name: parseFragmentName(lexer),
	      directives: parseDirectives(lexer),
	      loc: loc(lexer, start)
	    };
	  }
	  var typeCondition = null;
	  if (lexer.token.value === 'on') {
	    lexer.advance();
	    typeCondition = parseNamedType(lexer);
	  }
	  return {
	    kind: _kinds.INLINE_FRAGMENT,
	    typeCondition: typeCondition,
	    directives: parseDirectives(lexer),
	    selectionSet: parseSelectionSet(lexer),
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * FragmentDefinition :
	 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
	 *
	 * TypeCondition : NamedType
	 */
	function parseFragmentDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'fragment');
	  return {
	    kind: _kinds.FRAGMENT_DEFINITION,
	    name: parseFragmentName(lexer),
	    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
	    directives: parseDirectives(lexer),
	    selectionSet: parseSelectionSet(lexer),
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * FragmentName : Name but not `on`
	 */
	function parseFragmentName(lexer) {
	  if (lexer.token.value === 'on') {
	    throw unexpected(lexer);
	  }
	  return parseName(lexer);
	}
	
	// Implements the parsing rules in the Values section.
	
	/**
	 * Value[Const] :
	 *   - [~Const] Variable
	 *   - IntValue
	 *   - FloatValue
	 *   - StringValue
	 *   - BooleanValue
	 *   - NullValue
	 *   - EnumValue
	 *   - ListValue[?Const]
	 *   - ObjectValue[?Const]
	 *
	 * BooleanValue : one of `true` `false`
	 *
	 * NullValue : `null`
	 *
	 * EnumValue : Name but not `true`, `false` or `null`
	 */
	function parseValueLiteral(lexer, isConst) {
	  var token = lexer.token;
	  switch (token.kind) {
	    case _lexer.TokenKind.BRACKET_L:
	      return parseList(lexer, isConst);
	    case _lexer.TokenKind.BRACE_L:
	      return parseObject(lexer, isConst);
	    case _lexer.TokenKind.INT:
	      lexer.advance();
	      return {
	        kind: _kinds.INT,
	        value: token.value,
	        loc: loc(lexer, token)
	      };
	    case _lexer.TokenKind.FLOAT:
	      lexer.advance();
	      return {
	        kind: _kinds.FLOAT,
	        value: token.value,
	        loc: loc(lexer, token)
	      };
	    case _lexer.TokenKind.STRING:
	      lexer.advance();
	      return {
	        kind: _kinds.STRING,
	        value: token.value,
	        loc: loc(lexer, token)
	      };
	    case _lexer.TokenKind.NAME:
	      if (token.value === 'true' || token.value === 'false') {
	        lexer.advance();
	        return {
	          kind: _kinds.BOOLEAN,
	          value: token.value === 'true',
	          loc: loc(lexer, token)
	        };
	      } else if (token.value === 'null') {
	        lexer.advance();
	        return {
	          kind: _kinds.NULL,
	          loc: loc(lexer, token)
	        };
	      }
	      lexer.advance();
	      return {
	        kind: _kinds.ENUM,
	        value: token.value,
	        loc: loc(lexer, token)
	      };
	    case _lexer.TokenKind.DOLLAR:
	      if (!isConst) {
	        return parseVariable(lexer);
	      }
	      break;
	  }
	  throw unexpected(lexer);
	}
	
	function parseConstValue(lexer) {
	  return parseValueLiteral(lexer, true);
	}
	
	function parseValueValue(lexer) {
	  return parseValueLiteral(lexer, false);
	}
	
	/**
	 * ListValue[Const] :
	 *   - [ ]
	 *   - [ Value[?Const]+ ]
	 */
	function parseList(lexer, isConst) {
	  var start = lexer.token;
	  var item = isConst ? parseConstValue : parseValueValue;
	  return {
	    kind: _kinds.LIST,
	    values: any(lexer, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * ObjectValue[Const] :
	 *   - { }
	 *   - { ObjectField[?Const]+ }
	 */
	function parseObject(lexer, isConst) {
	  var start = lexer.token;
	  expect(lexer, _lexer.TokenKind.BRACE_L);
	  var fields = [];
	  while (!skip(lexer, _lexer.TokenKind.BRACE_R)) {
	    fields.push(parseObjectField(lexer, isConst));
	  }
	  return {
	    kind: _kinds.OBJECT,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * ObjectField[Const] : Name : Value[?Const]
	 */
	function parseObjectField(lexer, isConst) {
	  var start = lexer.token;
	  return {
	    kind: _kinds.OBJECT_FIELD,
	    name: parseName(lexer),
	    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, isConst)),
	    loc: loc(lexer, start)
	  };
	}
	
	// Implements the parsing rules in the Directives section.
	
	/**
	 * Directives : Directive+
	 */
	function parseDirectives(lexer) {
	  var directives = [];
	  while (peek(lexer, _lexer.TokenKind.AT)) {
	    directives.push(parseDirective(lexer));
	  }
	  return directives;
	}
	
	/**
	 * Directive : @ Name Arguments?
	 */
	function parseDirective(lexer) {
	  var start = lexer.token;
	  expect(lexer, _lexer.TokenKind.AT);
	  return {
	    kind: _kinds.DIRECTIVE,
	    name: parseName(lexer),
	    arguments: parseArguments(lexer),
	    loc: loc(lexer, start)
	  };
	}
	
	// Implements the parsing rules in the Types section.
	
	/**
	 * Type :
	 *   - NamedType
	 *   - ListType
	 *   - NonNullType
	 */
	function parseTypeReference(lexer) {
	  var start = lexer.token;
	  var type = void 0;
	  if (skip(lexer, _lexer.TokenKind.BRACKET_L)) {
	    type = parseTypeReference(lexer);
	    expect(lexer, _lexer.TokenKind.BRACKET_R);
	    type = {
	      kind: _kinds.LIST_TYPE,
	      type: type,
	      loc: loc(lexer, start)
	    };
	  } else {
	    type = parseNamedType(lexer);
	  }
	  if (skip(lexer, _lexer.TokenKind.BANG)) {
	    return {
	      kind: _kinds.NON_NULL_TYPE,
	      type: type,
	      loc: loc(lexer, start)
	    };
	  }
	  return type;
	}
	
	/**
	 * NamedType : Name
	 */
	function parseNamedType(lexer) {
	  var start = lexer.token;
	  return {
	    kind: _kinds.NAMED_TYPE,
	    name: parseName(lexer),
	    loc: loc(lexer, start)
	  };
	}
	
	// Implements the parsing rules in the Type Definition section.
	
	/**
	 * TypeSystemDefinition :
	 *   - SchemaDefinition
	 *   - TypeDefinition
	 *   - TypeExtensionDefinition
	 *   - DirectiveDefinition
	 *
	 * TypeDefinition :
	 *   - ScalarTypeDefinition
	 *   - ObjectTypeDefinition
	 *   - InterfaceTypeDefinition
	 *   - UnionTypeDefinition
	 *   - EnumTypeDefinition
	 *   - InputObjectTypeDefinition
	 */
	function parseTypeSystemDefinition(lexer) {
	  if (peek(lexer, _lexer.TokenKind.NAME)) {
	    switch (lexer.token.value) {
	      case 'schema':
	        return parseSchemaDefinition(lexer);
	      case 'scalar':
	        return parseScalarTypeDefinition(lexer);
	      case 'type':
	        return parseObjectTypeDefinition(lexer);
	      case 'interface':
	        return parseInterfaceTypeDefinition(lexer);
	      case 'union':
	        return parseUnionTypeDefinition(lexer);
	      case 'enum':
	        return parseEnumTypeDefinition(lexer);
	      case 'input':
	        return parseInputObjectTypeDefinition(lexer);
	      case 'extend':
	        return parseTypeExtensionDefinition(lexer);
	      case 'directive':
	        return parseDirectiveDefinition(lexer);
	    }
	  }
	
	  throw unexpected(lexer);
	}
	
	/**
	 * SchemaDefinition : schema Directives? { OperationTypeDefinition+ }
	 *
	 * OperationTypeDefinition : OperationType : NamedType
	 */
	function parseSchemaDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'schema');
	  var directives = parseDirectives(lexer);
	  var operationTypes = many(lexer, _lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.SCHEMA_DEFINITION,
	    directives: directives,
	    operationTypes: operationTypes,
	    loc: loc(lexer, start)
	  };
	}
	
	function parseOperationTypeDefinition(lexer) {
	  var start = lexer.token;
	  var operation = parseOperationType(lexer);
	  expect(lexer, _lexer.TokenKind.COLON);
	  var type = parseNamedType(lexer);
	  return {
	    kind: _kinds.OPERATION_TYPE_DEFINITION,
	    operation: operation,
	    type: type,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * ScalarTypeDefinition : scalar Name Directives?
	 */
	function parseScalarTypeDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'scalar');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer);
	  return {
	    kind: _kinds.SCALAR_TYPE_DEFINITION,
	    name: name,
	    directives: directives,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * ObjectTypeDefinition :
	 *   - type Name ImplementsInterfaces? Directives? { FieldDefinition+ }
	 */
	function parseObjectTypeDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'type');
	  var name = parseName(lexer);
	  var interfaces = parseImplementsInterfaces(lexer);
	  var directives = parseDirectives(lexer);
	  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.OBJECT_TYPE_DEFINITION,
	    name: name,
	    interfaces: interfaces,
	    directives: directives,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * ImplementsInterfaces : implements NamedType+
	 */
	function parseImplementsInterfaces(lexer) {
	  var types = [];
	  if (lexer.token.value === 'implements') {
	    lexer.advance();
	    do {
	      types.push(parseNamedType(lexer));
	    } while (peek(lexer, _lexer.TokenKind.NAME));
	  }
	  return types;
	}
	
	/**
	 * FieldDefinition : Name ArgumentsDefinition? : Type Directives?
	 */
	function parseFieldDefinition(lexer) {
	  var start = lexer.token;
	  var name = parseName(lexer);
	  var args = parseArgumentDefs(lexer);
	  expect(lexer, _lexer.TokenKind.COLON);
	  var type = parseTypeReference(lexer);
	  var directives = parseDirectives(lexer);
	  return {
	    kind: _kinds.FIELD_DEFINITION,
	    name: name,
	    arguments: args,
	    type: type,
	    directives: directives,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * ArgumentsDefinition : ( InputValueDefinition+ )
	 */
	function parseArgumentDefs(lexer) {
	  if (!peek(lexer, _lexer.TokenKind.PAREN_L)) {
	    return [];
	  }
	  return many(lexer, _lexer.TokenKind.PAREN_L, parseInputValueDef, _lexer.TokenKind.PAREN_R);
	}
	
	/**
	 * InputValueDefinition : Name : Type DefaultValue? Directives?
	 */
	function parseInputValueDef(lexer) {
	  var start = lexer.token;
	  var name = parseName(lexer);
	  expect(lexer, _lexer.TokenKind.COLON);
	  var type = parseTypeReference(lexer);
	  var defaultValue = null;
	  if (skip(lexer, _lexer.TokenKind.EQUALS)) {
	    defaultValue = parseConstValue(lexer);
	  }
	  var directives = parseDirectives(lexer);
	  return {
	    kind: _kinds.INPUT_VALUE_DEFINITION,
	    name: name,
	    type: type,
	    defaultValue: defaultValue,
	    directives: directives,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * InterfaceTypeDefinition : interface Name Directives? { FieldDefinition+ }
	 */
	function parseInterfaceTypeDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'interface');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer);
	  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.INTERFACE_TYPE_DEFINITION,
	    name: name,
	    directives: directives,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * UnionTypeDefinition : union Name Directives? = UnionMembers
	 */
	function parseUnionTypeDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'union');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer);
	  expect(lexer, _lexer.TokenKind.EQUALS);
	  var types = parseUnionMembers(lexer);
	  return {
	    kind: _kinds.UNION_TYPE_DEFINITION,
	    name: name,
	    directives: directives,
	    types: types,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * UnionMembers :
	 *   - `|`? NamedType
	 *   - UnionMembers | NamedType
	 */
	function parseUnionMembers(lexer) {
	  // Optional leading pipe
	  skip(lexer, _lexer.TokenKind.PIPE);
	  var members = [];
	  do {
	    members.push(parseNamedType(lexer));
	  } while (skip(lexer, _lexer.TokenKind.PIPE));
	  return members;
	}
	
	/**
	 * EnumTypeDefinition : enum Name Directives? { EnumValueDefinition+ }
	 */
	function parseEnumTypeDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'enum');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer);
	  var values = many(lexer, _lexer.TokenKind.BRACE_L, parseEnumValueDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.ENUM_TYPE_DEFINITION,
	    name: name,
	    directives: directives,
	    values: values,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * EnumValueDefinition : EnumValue Directives?
	 *
	 * EnumValue : Name
	 */
	function parseEnumValueDefinition(lexer) {
	  var start = lexer.token;
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer);
	  return {
	    kind: _kinds.ENUM_VALUE_DEFINITION,
	    name: name,
	    directives: directives,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * InputObjectTypeDefinition : input Name Directives? { InputValueDefinition+ }
	 */
	function parseInputObjectTypeDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'input');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer);
	  var fields = any(lexer, _lexer.TokenKind.BRACE_L, parseInputValueDef, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.INPUT_OBJECT_TYPE_DEFINITION,
	    name: name,
	    directives: directives,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * TypeExtensionDefinition : extend ObjectTypeDefinition
	 */
	function parseTypeExtensionDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'extend');
	  var definition = parseObjectTypeDefinition(lexer);
	  return {
	    kind: _kinds.TYPE_EXTENSION_DEFINITION,
	    definition: definition,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * DirectiveDefinition :
	 *   - directive @ Name ArgumentsDefinition? on DirectiveLocations
	 */
	function parseDirectiveDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'directive');
	  expect(lexer, _lexer.TokenKind.AT);
	  var name = parseName(lexer);
	  var args = parseArgumentDefs(lexer);
	  expectKeyword(lexer, 'on');
	  var locations = parseDirectiveLocations(lexer);
	  return {
	    kind: _kinds.DIRECTIVE_DEFINITION,
	    name: name,
	    arguments: args,
	    locations: locations,
	    loc: loc(lexer, start)
	  };
	}
	
	/**
	 * DirectiveLocations :
	 *   - `|`? Name
	 *   - DirectiveLocations | Name
	 */
	function parseDirectiveLocations(lexer) {
	  // Optional leading pipe
	  skip(lexer, _lexer.TokenKind.PIPE);
	  var locations = [];
	  do {
	    locations.push(parseName(lexer));
	  } while (skip(lexer, _lexer.TokenKind.PIPE));
	  return locations;
	}
	
	// Core parsing utility functions
	
	/**
	 * Returns a location object, used to identify the place in
	 * the source that created a given parsed object.
	 */
	function loc(lexer, startToken) {
	  if (!lexer.options.noLocation) {
	    return new Loc(startToken, lexer.lastToken, lexer.source);
	  }
	}
	
	function Loc(startToken, endToken, source) {
	  this.start = startToken.start;
	  this.end = endToken.end;
	  this.startToken = startToken;
	  this.endToken = endToken;
	  this.source = source;
	}
	
	// Print a simplified form when appearing in JSON/util.inspect.
	Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
	  return { start: this.start, end: this.end };
	};
	
	/**
	 * Determines if the next token is of a given kind
	 */
	function peek(lexer, kind) {
	  return lexer.token.kind === kind;
	}
	
	/**
	 * If the next token is of the given kind, return true after advancing
	 * the lexer. Otherwise, do not change the parser state and return false.
	 */
	function skip(lexer, kind) {
	  var match = lexer.token.kind === kind;
	  if (match) {
	    lexer.advance();
	  }
	  return match;
	}
	
	/**
	 * If the next token is of the given kind, return that token after advancing
	 * the lexer. Otherwise, do not change the parser state and throw an error.
	 */
	function expect(lexer, kind) {
	  var token = lexer.token;
	  if (token.kind === kind) {
	    lexer.advance();
	    return token;
	  }
	  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected ' + kind + ', found ' + (0, _lexer.getTokenDesc)(token));
	}
	
	/**
	 * If the next token is a keyword with the given value, return that token after
	 * advancing the lexer. Otherwise, do not change the parser state and return
	 * false.
	 */
	function expectKeyword(lexer, value) {
	  var token = lexer.token;
	  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
	    lexer.advance();
	    return token;
	  }
	  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected "' + value + '", found ' + (0, _lexer.getTokenDesc)(token));
	}
	
	/**
	 * Helper function for creating an error when an unexpected lexed token
	 * is encountered.
	 */
	function unexpected(lexer, atToken) {
	  var token = atToken || lexer.token;
	  return (0, _error.syntaxError)(lexer.source, token.start, 'Unexpected ' + (0, _lexer.getTokenDesc)(token));
	}
	
	/**
	 * Returns a possibly empty list of parse nodes, determined by
	 * the parseFn. This list begins with a lex token of openKind
	 * and ends with a lex token of closeKind. Advances the parser
	 * to the next lex token after the closing token.
	 */
	function any(lexer, openKind, parseFn, closeKind) {
	  expect(lexer, openKind);
	  var nodes = [];
	  while (!skip(lexer, closeKind)) {
	    nodes.push(parseFn(lexer));
	  }
	  return nodes;
	}
	
	/**
	 * Returns a non-empty list of parse nodes, determined by
	 * the parseFn. This list begins with a lex token of openKind
	 * and ends with a lex token of closeKind. Advances the parser
	 * to the next lex token after the closing token.
	 */
	function many(lexer, openKind, parseFn, closeKind) {
	  expect(lexer, openKind);
	  var nodes = [parseFn(lexer)];
	  while (!skip(lexer, closeKind)) {
	    nodes.push(parseFn(lexer));
	  }
	  return nodes;
	}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isValidLiteralValue = isValidLiteralValue;
	
	var _printer = __webpack_require__(11);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _definition = __webpack_require__(4);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _keyMap = __webpack_require__(38);
	
	var _keyMap2 = _interopRequireDefault(_keyMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Utility for validators which determines if a value literal node is valid
	 * given an input type.
	 *
	 * Note that this only validates literal values, variables are assumed to
	 * provide values of the correct type.
	 */
	function isValidLiteralValue(type, valueNode) {
	  // A value must be provided if the type is non-null.
	  if (type instanceof _definition.GraphQLNonNull) {
	    if (!valueNode || valueNode.kind === Kind.NULL) {
	      return ['Expected "' + String(type) + '", found null.'];
	    }
	    return isValidLiteralValue(type.ofType, valueNode);
	  }
	
	  if (!valueNode || valueNode.kind === Kind.NULL) {
	    return [];
	  }
	
	  // This function only tests literals, and assumes variables will provide
	  // values of the correct type.
	  if (valueNode.kind === Kind.VARIABLE) {
	    return [];
	  }
	
	  // Lists accept a non-list value as a list of one.
	  if (type instanceof _definition.GraphQLList) {
	    var itemType = type.ofType;
	    if (valueNode.kind === Kind.LIST) {
	      return valueNode.values.reduce(function (acc, item, index) {
	        var errors = isValidLiteralValue(itemType, item);
	        return acc.concat(errors.map(function (error) {
	          return 'In element #' + index + ': ' + error;
	        }));
	      }, []);
	    }
	    return isValidLiteralValue(itemType, valueNode);
	  }
	
	  // Input objects check each defined field and look for undefined fields.
	  if (type instanceof _definition.GraphQLInputObjectType) {
	    if (valueNode.kind !== Kind.OBJECT) {
	      return ['Expected "' + type.name + '", found not an object.'];
	    }
	    var fields = type.getFields();
	
	    var errors = [];
	
	    // Ensure every provided field is defined.
	    var fieldNodes = valueNode.fields;
	    fieldNodes.forEach(function (providedFieldNode) {
	      if (!fields[providedFieldNode.name.value]) {
	        errors.push('In field "' + providedFieldNode.name.value + '": Unknown field.');
	      }
	    });
	
	    // Ensure every defined field is valid.
	    var fieldNodeMap = (0, _keyMap2.default)(fieldNodes, function (fieldNode) {
	      return fieldNode.name.value;
	    });
	    Object.keys(fields).forEach(function (fieldName) {
	      var result = isValidLiteralValue(fields[fieldName].type, fieldNodeMap[fieldName] && fieldNodeMap[fieldName].value);
	      errors.push.apply(errors, result.map(function (error) {
	        return 'In field "' + fieldName + '": ' + error;
	      }));
	    });
	
	    return errors;
	  }
	
	  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;
	
	  // Scalars determine if a literal values is valid.
	  if (!type.isValidLiteral(valueNode)) {
	    return ['Expected type "' + type.name + '", found ' + (0, _printer.print)(valueNode) + '.'];
	  }
	
	  return [];
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isEqualType = isEqualType;
	exports.isTypeSubTypeOf = isTypeSubTypeOf;
	exports.doTypesOverlap = doTypesOverlap;
	
	var _definition = __webpack_require__(4);
	
	/**
	 * Provided two types, return true if the types are equal (invariant).
	 */
	function isEqualType(typeA, typeB) {
	  // Equivalent types are equal.
	  if (typeA === typeB) {
	    return true;
	  }
	
	  // If either type is non-null, the other must also be non-null.
	  if (typeA instanceof _definition.GraphQLNonNull && typeB instanceof _definition.GraphQLNonNull) {
	    return isEqualType(typeA.ofType, typeB.ofType);
	  }
	
	  // If either type is a list, the other must also be a list.
	  if (typeA instanceof _definition.GraphQLList && typeB instanceof _definition.GraphQLList) {
	    return isEqualType(typeA.ofType, typeB.ofType);
	  }
	
	  // Otherwise the types are not equal.
	  return false;
	}
	
	/**
	 * Provided a type and a super type, return true if the first type is either
	 * equal or a subset of the second super type (covariant).
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function isTypeSubTypeOf(schema, maybeSubType, superType) {
	  // Equivalent type is a valid subtype
	  if (maybeSubType === superType) {
	    return true;
	  }
	
	  // If superType is non-null, maybeSubType must also be non-null.
	  if (superType instanceof _definition.GraphQLNonNull) {
	    if (maybeSubType instanceof _definition.GraphQLNonNull) {
	      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
	    }
	    return false;
	  } else if (maybeSubType instanceof _definition.GraphQLNonNull) {
	    // If superType is nullable, maybeSubType may be non-null or nullable.
	    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
	  }
	
	  // If superType type is a list, maybeSubType type must also be a list.
	  if (superType instanceof _definition.GraphQLList) {
	    if (maybeSubType instanceof _definition.GraphQLList) {
	      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
	    }
	    return false;
	  } else if (maybeSubType instanceof _definition.GraphQLList) {
	    // If superType is not a list, maybeSubType must also be not a list.
	    return false;
	  }
	
	  // If superType type is an abstract type, maybeSubType type may be a currently
	  // possible object type.
	  if ((0, _definition.isAbstractType)(superType) && maybeSubType instanceof _definition.GraphQLObjectType && schema.isPossibleType(superType, maybeSubType)) {
	    return true;
	  }
	
	  // Otherwise, the child type is not a valid subtype of the parent type.
	  return false;
	}
	
	/**
	 * Provided two composite types, determine if they "overlap". Two composite
	 * types overlap when the Sets of possible concrete types for each intersect.
	 *
	 * This is often used to determine if a fragment of a given type could possibly
	 * be visited in a context of another type.
	 *
	 * This function is commutative.
	 */
	function doTypesOverlap(schema, typeA, typeB) {
	  // So flow is aware this is constant
	  var _typeB = typeB;
	
	  // Equivalent types overlap
	  if (typeA === _typeB) {
	    return true;
	  }
	
	  if ((0, _definition.isAbstractType)(typeA)) {
	    if ((0, _definition.isAbstractType)(_typeB)) {
	      // If both types are abstract, then determine if there is any intersection
	      // between possible concrete types of each.
	      return schema.getPossibleTypes(typeA).some(function (type) {
	        return schema.isPossibleType(_typeB, type);
	      });
	    }
	    // Determine if the latter type is a possible concrete type of the former.
	    return schema.isPossibleType(typeA, _typeB);
	  }
	
	  if ((0, _definition.isAbstractType)(_typeB)) {
	    // Determine if the former type is a possible concrete type of the latter.
	    return schema.isPossibleType(_typeB, typeA);
	  }
	
	  // Otherwise the types do not overlap.
	  return false;
	}

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHdpZHRoPSIxNTQuNzM4MDEiCiAgIGhlaWdodD0iMTQ0Ljc1NyIKICAgdmlld0JveD0iMCAwIDE1NC43MzggMTQ0Ljc1NyIKICAgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTk1LjI4IDg0MS44OSIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MSByMTM3MjUiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImtpdHN1bmVfbG9nb193aGl0ZS5zdmciPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTM0OTIiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnMzNDkwIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM4NCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NjIiCiAgICAgaWQ9Im5hbWVkdmlldzM0ODgiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgc2hvd2d1aWRlcz0idHJ1ZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICBpbmtzY2FwZTp6b29tPSIxLjAyODkwMjUiCiAgICAgaW5rc2NhcGU6Y3g9Ii00NC44Njg1NjUiCiAgICAgaW5rc2NhcGU6Y3k9IjY5Ljk0MDkxMSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiPjxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDM1MjAiCiAgICAgICBvcmlnaW54PSItMjIwLjA0Nzk5IgogICAgICAgb3JpZ2lueT0iLTM4MC4yNTIiIC8+PC9zb2RpcG9kaTpuYW1lZHZpZXc+PGcKICAgICBpZD0iZzM0MzciCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMC4wNDgsLTMxNi44ODEpIj48ZwogICAgICAgaWQ9ImczNDM5Ij48ZwogICAgICAgICBpZD0iZzM0NDEiPjxjaXJjbGUKICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIgogICAgICAgICAgIGlkPSJjaXJjbGUzNDQzIgogICAgICAgICAgIHI9IjY0Ljg0NyIKICAgICAgICAgICBjeT0iMzk2LjcwODAxIgogICAgICAgICAgIGN4PSIyOTkuODk5OTkiIC8+PC9nPjxsaW5lYXJHcmFkaWVudAogICAgICAgICB5Mj0iMzg5LjI1OTMxIgogICAgICAgICB4Mj0iMzc0Ljc4NjEiCiAgICAgICAgIHkxPSIzODkuMjU5MzEiCiAgICAgICAgIHgxPSIyMjAuMDQ3OSIKICAgICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICAgIGlkPSJTVkdJRF8xXyI+PHN0b3AKICAgICAgICAgICBpZD0ic3RvcDM0NDYiCiAgICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6I0ZCQjA0MCIKICAgICAgICAgICBvZmZzZXQ9IjAiIC8+PHN0b3AKICAgICAgICAgICBpZD0ic3RvcDM0NDgiCiAgICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6I0YwNzAyMiIKICAgICAgICAgICBvZmZzZXQ9IjEiIC8+PC9saW5lYXJHcmFkaWVudD48cG9seWdvbgogICAgICAgICBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzFfKSIKICAgICAgICAgaWQ9InBvbHlnb24zNDUwIgogICAgICAgICBwb2ludHM9IjM1OC42MzksMzE2Ljg4MSAzNzQuNzg2LDM4NS45NzUgMzU0LjkyNiwzNzYuNTk1IDMyNC4xMTQsNDI5LjU2OCAyODEuOTM2LDQxMS43NzkgMjIwLjA0OCw0NjEuNjM4IDI2OS45NjYsMzczLjc0NCAyOTUuNzI5LDM4NS45MDIgMzEyLjAxNCwzNTYuNjUyIDI5NC4zMjYsMzQ2Ljg0NCAiIC8+PHBvbHlnb24KICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIKICAgICAgICAgaWQ9InBvbHlnb24zNDUyIgogICAgICAgICBwb2ludHM9IjM1MS40MzIsMzY2LjE2OCAzNjMuMDY4LDM3MS42NjYgMzUzLDMyNy41NDYgMzEwLjU2NCwzNDYuODg1IDMyMy42ODgsMzUzLjA3MyAzMDguODg0LDM4MC42MTMgMzM3LjgwNiwzNTkuNzM5IDM0MS43MzksMzgxLjU4MSAiIC8+PC9nPjwvZz48L3N2Zz4="

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultFieldResolver = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
	                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * 
	                                                                                                                                                                                                                                                                               */
	
	exports.execute = execute;
	exports.responsePathAsArray = responsePathAsArray;
	exports.addPath = addPath;
	exports.assertValidExecutionArguments = assertValidExecutionArguments;
	exports.buildExecutionContext = buildExecutionContext;
	exports.getOperationRootType = getOperationRootType;
	exports.collectFields = collectFields;
	exports.buildResolveInfo = buildResolveInfo;
	exports.resolveFieldValueOrError = resolveFieldValueOrError;
	exports.getFieldDef = getFieldDef;
	
	var _iterall = __webpack_require__(40);
	
	var _error = __webpack_require__(3);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _isNullish = __webpack_require__(25);
	
	var _isNullish2 = _interopRequireDefault(_isNullish);
	
	var _typeFromAST = __webpack_require__(18);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _values = __webpack_require__(108);
	
	var _definition = __webpack_require__(4);
	
	var _schema = __webpack_require__(17);
	
	var _introspection = __webpack_require__(26);
	
	var _directives = __webpack_require__(16);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Terminology
	 *
	 * "Definitions" are the generic name for top-level statements in the document.
	 * Examples of this include:
	 * 1) Operations (such as a query)
	 * 2) Fragments
	 *
	 * "Operations" are a generic name for requests in the document.
	 * Examples of this include:
	 * 1) query,
	 * 2) mutation
	 *
	 * "Selections" are the definitions that can appear legally and at
	 * single level of the query. These include:
	 * 1) field references e.g "a"
	 * 2) fragment "spreads" e.g. "...c"
	 * 3) inline fragment "spreads" e.g. "...on Type { a }"
	 */
	
	/**
	 * Data that must be available at all points during query execution.
	 *
	 * Namely, schema of the type system that is currently executing,
	 * and the fragments defined in the query document
	 */
	
	
	/**
	 * The result of GraphQL execution.
	 *
	 *   - `errors` is included when any errors occurred as a non-empty array.
	 *   - `data` is the result of a successful execution of the query.
	 */
	
	
	/**
	 * Implements the "Evaluating requests" section of the GraphQL specification.
	 *
	 * Returns a Promise that will eventually be resolved and never rejected.
	 *
	 * If the arguments to this function do not result in a legal execution context,
	 * a GraphQLError will be thrown immediately explaining the invalid input.
	 *
	 * Accepts either an object with named arguments, or individual arguments.
	 */
	
	/* eslint-disable no-redeclare */
	function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  // Extract arguments from object args if provided.
	  return arguments.length === 1 ? executeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : executeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
	}
	
	function executeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  // If arguments are missing or incorrect, throw an error.
	  assertValidExecutionArguments(schema, document, variableValues);
	
	  // If a valid context cannot be created due to incorrect arguments,
	  // a "Response" with only errors is returned.
	  var context = void 0;
	  try {
	    context = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
	  } catch (error) {
	    return Promise.resolve({ errors: [error] });
	  }
	
	  // Return a Promise that will eventually resolve to the data described by
	  // The "Response" section of the GraphQL specification.
	  //
	  // If errors are encountered while executing a GraphQL field, only that
	  // field and its descendants will be omitted, and sibling fields will still
	  // be executed. An execution which encounters errors will still result in a
	  // resolved Promise.
	  return Promise.resolve(executeOperation(context, context.operation, rootValue)).then(function (data) {
	    return context.errors.length === 0 ? { data: data } : { errors: context.errors, data: data };
	  });
	}
	
	/**
	 * Given a ResponsePath (found in the `path` entry in the information provided
	 * as the last argument to a field resolver), return an Array of the path keys.
	 */
	function responsePathAsArray(path) {
	  var flattened = [];
	  var curr = path;
	  while (curr) {
	    flattened.push(curr.key);
	    curr = curr.prev;
	  }
	  return flattened.reverse();
	}
	
	/**
	 * Given a ResponsePath and a key, return a new ResponsePath containing the
	 * new key.
	 */
	function addPath(prev, key) {
	  return { prev: prev, key: key };
	}
	
	/**
	 * Essential assertions before executing to provide developer feedback for
	 * improper use of the GraphQL library.
	 */
	function assertValidExecutionArguments(schema, document, rawVariableValues) {
	  !schema ? (0, _invariant2.default)(0, 'Must provide schema') : void 0;
	  !document ? (0, _invariant2.default)(0, 'Must provide document') : void 0;
	  !(schema instanceof _schema.GraphQLSchema) ? (0, _invariant2.default)(0, 'Schema must be an instance of GraphQLSchema. Also ensure that there are ' + 'not multiple versions of GraphQL installed in your node_modules directory.') : void 0;
	
	  // Variables, if provided, must be an object.
	  !(!rawVariableValues || (typeof rawVariableValues === 'undefined' ? 'undefined' : _typeof(rawVariableValues)) === 'object') ? (0, _invariant2.default)(0, 'Variables must be provided as an Object where each property is a ' + 'variable value. Perhaps look to see if an unparsed JSON string ' + 'was provided.') : void 0;
	}
	
	/**
	 * Constructs a ExecutionContext object from the arguments passed to
	 * execute, which we will pass throughout the other execution methods.
	 *
	 * Throws a GraphQLError if a valid execution context cannot be created.
	 */
	function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver) {
	  var errors = [];
	  var operation = void 0;
	  var fragments = Object.create(null);
	  document.definitions.forEach(function (definition) {
	    switch (definition.kind) {
	      case Kind.OPERATION_DEFINITION:
	        if (!operationName && operation) {
	          throw new _error.GraphQLError('Must provide operation name if query contains multiple operations.');
	        }
	        if (!operationName || definition.name && definition.name.value === operationName) {
	          operation = definition;
	        }
	        break;
	      case Kind.FRAGMENT_DEFINITION:
	        fragments[definition.name.value] = definition;
	        break;
	      default:
	        throw new _error.GraphQLError('GraphQL cannot execute a request containing a ' + definition.kind + '.', [definition]);
	    }
	  });
	  if (!operation) {
	    if (operationName) {
	      throw new _error.GraphQLError('Unknown operation named "' + operationName + '".');
	    } else {
	      throw new _error.GraphQLError('Must provide an operation.');
	    }
	  }
	  var variableValues = (0, _values.getVariableValues)(schema, operation.variableDefinitions || [], rawVariableValues || {});
	
	  return {
	    schema: schema,
	    fragments: fragments,
	    rootValue: rootValue,
	    contextValue: contextValue,
	    operation: operation,
	    variableValues: variableValues,
	    fieldResolver: fieldResolver || defaultFieldResolver,
	    errors: errors
	  };
	}
	
	/**
	 * Implements the "Evaluating operations" section of the spec.
	 */
	function executeOperation(exeContext, operation, rootValue) {
	  var type = getOperationRootType(exeContext.schema, operation);
	  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
	
	  var path = undefined;
	
	  // Errors from sub-fields of a NonNull type may propagate to the top level,
	  // at which point we still log the error and null the parent field, which
	  // in this case is the entire response.
	  //
	  // Similar to completeValueCatchingError.
	  try {
	    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);
	    var promise = getPromise(result);
	    if (promise) {
	      return promise.then(undefined, function (error) {
	        exeContext.errors.push(error);
	        return Promise.resolve(null);
	      });
	    }
	    return result;
	  } catch (error) {
	    exeContext.errors.push(error);
	    return null;
	  }
	}
	
	/**
	 * Extracts the root type of the operation from the schema.
	 */
	function getOperationRootType(schema, operation) {
	  switch (operation.operation) {
	    case 'query':
	      return schema.getQueryType();
	    case 'mutation':
	      var mutationType = schema.getMutationType();
	      if (!mutationType) {
	        throw new _error.GraphQLError('Schema is not configured for mutations', [operation]);
	      }
	      return mutationType;
	    case 'subscription':
	      var subscriptionType = schema.getSubscriptionType();
	      if (!subscriptionType) {
	        throw new _error.GraphQLError('Schema is not configured for subscriptions', [operation]);
	      }
	      return subscriptionType;
	    default:
	      throw new _error.GraphQLError('Can only execute queries, mutations and subscriptions', [operation]);
	  }
	}
	
	/**
	 * Implements the "Evaluating selection sets" section of the spec
	 * for "write" mode.
	 */
	function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
	  return Object.keys(fields).reduce(function (prevPromise, responseName) {
	    return prevPromise.then(function (results) {
	      var fieldNodes = fields[responseName];
	      var fieldPath = addPath(path, responseName);
	      var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
	      if (result === undefined) {
	        return results;
	      }
	      var promise = getPromise(result);
	      if (promise) {
	        return promise.then(function (resolvedResult) {
	          results[responseName] = resolvedResult;
	          return results;
	        });
	      }
	      results[responseName] = result;
	      return results;
	    });
	  }, Promise.resolve({}));
	}
	
	/**
	 * Implements the "Evaluating selection sets" section of the spec
	 * for "read" mode.
	 */
	function executeFields(exeContext, parentType, sourceValue, path, fields) {
	  var containsPromise = false;
	
	  var finalResults = Object.keys(fields).reduce(function (results, responseName) {
	    var fieldNodes = fields[responseName];
	    var fieldPath = addPath(path, responseName);
	    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
	    if (result === undefined) {
	      return results;
	    }
	    results[responseName] = result;
	    if (getPromise(result)) {
	      containsPromise = true;
	    }
	    return results;
	  }, Object.create(null));
	
	  // If there are no promises, we can just return the object
	  if (!containsPromise) {
	    return finalResults;
	  }
	
	  // Otherwise, results is a map from field name to the result
	  // of resolving that field, which is possibly a promise. Return
	  // a promise that will return this same map, but with any
	  // promises replaced with the values they resolved to.
	  return promiseForObject(finalResults);
	}
	
	/**
	 * Given a selectionSet, adds all of the fields in that selection to
	 * the passed in map of fields, and returns it at the end.
	 *
	 * CollectFields requires the "runtime type" of an object. For a field which
	 * returns an Interface or Union type, the "runtime type" will be the actual
	 * Object type returned by that field.
	 */
	function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
	  for (var i = 0; i < selectionSet.selections.length; i++) {
	    var selection = selectionSet.selections[i];
	    switch (selection.kind) {
	      case Kind.FIELD:
	        if (!shouldIncludeNode(exeContext, selection)) {
	          continue;
	        }
	        var name = getFieldEntryKey(selection);
	        if (!fields[name]) {
	          fields[name] = [];
	        }
	        fields[name].push(selection);
	        break;
	      case Kind.INLINE_FRAGMENT:
	        if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
	          continue;
	        }
	        collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
	        break;
	      case Kind.FRAGMENT_SPREAD:
	        var fragName = selection.name.value;
	        if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
	          continue;
	        }
	        visitedFragmentNames[fragName] = true;
	        var fragment = exeContext.fragments[fragName];
	        if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
	          continue;
	        }
	        collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
	        break;
	    }
	  }
	  return fields;
	}
	
	/**
	 * Determines if a field should be included based on the @include and @skip
	 * directives, where @skip has higher precidence than @include.
	 */
	function shouldIncludeNode(exeContext, node) {
	  var skip = (0, _values.getDirectiveValues)(_directives.GraphQLSkipDirective, node, exeContext.variableValues);
	  if (skip && skip.if === true) {
	    return false;
	  }
	
	  var include = (0, _values.getDirectiveValues)(_directives.GraphQLIncludeDirective, node, exeContext.variableValues);
	  if (include && include.if === false) {
	    return false;
	  }
	  return true;
	}
	
	/**
	 * Determines if a fragment is applicable to the given type.
	 */
	function doesFragmentConditionMatch(exeContext, fragment, type) {
	  var typeConditionNode = fragment.typeCondition;
	  if (!typeConditionNode) {
	    return true;
	  }
	  var conditionalType = (0, _typeFromAST.typeFromAST)(exeContext.schema, typeConditionNode);
	  if (conditionalType === type) {
	    return true;
	  }
	  if ((0, _definition.isAbstractType)(conditionalType)) {
	    return exeContext.schema.isPossibleType(conditionalType, type);
	  }
	  return false;
	}
	
	/**
	 * This function transforms a JS object `ObjMap<Promise<T>>` into
	 * a `Promise<ObjMap<T>>`
	 *
	 * This is akin to bluebird's `Promise.props`, but implemented only using
	 * `Promise.all` so it will work with any implementation of ES6 promises.
	 */
	function promiseForObject(object) {
	  var keys = Object.keys(object);
	  var valuesAndPromises = keys.map(function (name) {
	    return object[name];
	  });
	  return Promise.all(valuesAndPromises).then(function (values) {
	    return values.reduce(function (resolvedObject, value, i) {
	      resolvedObject[keys[i]] = value;
	      return resolvedObject;
	    }, Object.create(null));
	  });
	}
	
	/**
	 * Implements the logic to compute the key of a given field's entry
	 */
	function getFieldEntryKey(node) {
	  return node.alias ? node.alias.value : node.name.value;
	}
	
	/**
	 * Resolves the field on the given source object. In particular, this
	 * figures out the value that the field returns by calling its resolve function,
	 * then calls completeValue to complete promises, serialize scalars, or execute
	 * the sub-selection-set for objects.
	 */
	function resolveField(exeContext, parentType, source, fieldNodes, path) {
	  var fieldNode = fieldNodes[0];
	  var fieldName = fieldNode.name.value;
	
	  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);
	  if (!fieldDef) {
	    return;
	  }
	
	  var resolveFn = fieldDef.resolve || exeContext.fieldResolver;
	
	  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path);
	
	  // Get the resolve function, regardless of if its result is normal
	  // or abrupt (error).
	  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);
	
	  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
	}
	
	function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
	  // The resolve function's optional fourth argument is a collection of
	  // information about the current execution state.
	  return {
	    fieldName: fieldNodes[0].name.value,
	    fieldNodes: fieldNodes,
	    returnType: fieldDef.type,
	    parentType: parentType,
	    path: path,
	    schema: exeContext.schema,
	    fragments: exeContext.fragments,
	    rootValue: exeContext.rootValue,
	    operation: exeContext.operation,
	    variableValues: exeContext.variableValues
	  };
	}
	
	// Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
	// function. Returns the result of resolveFn or the abrupt-return Error object.
	function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
	  try {
	    // Build a JS object of arguments from the field.arguments AST, using the
	    // variables scope to fulfill any variable references.
	    // TODO: find a way to memoize, in case this field is within a List type.
	    var args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], exeContext.variableValues);
	
	    // The resolve function's optional third argument is a context value that
	    // is provided to every resolve function within an execution. It is commonly
	    // used to represent an authenticated user, or request-specific caches.
	    var context = exeContext.contextValue;
	
	    return resolveFn(source, args, context, info);
	  } catch (error) {
	    // Sometimes a non-error is thrown, wrap it as an Error for a
	    // consistent interface.
	    return error instanceof Error ? error : new Error(error);
	  }
	}
	
	// This is a small wrapper around completeValue which detects and logs errors
	// in the execution context.
	function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path, result) {
	  // If the field type is non-nullable, then it is resolved without any
	  // protection from errors, however it still properly locates the error.
	  if (returnType instanceof _definition.GraphQLNonNull) {
	    return completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result);
	  }
	
	  // Otherwise, error protection is applied, logging the error and resolving
	  // a null value for this field if one is encountered.
	  try {
	    var completed = completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result);
	    var promise = getPromise(completed);
	    if (promise) {
	      // If `completeValueWithLocatedError` returned a rejected promise, log
	      // the rejection error and resolve to null.
	      // Note: we don't rely on a `catch` method, but we do expect "thenable"
	      // to take a second callback for the error case.
	      return promise.then(undefined, function (error) {
	        exeContext.errors.push(error);
	        return Promise.resolve(null);
	      });
	    }
	    return completed;
	  } catch (error) {
	    // If `completeValueWithLocatedError` returned abruptly (threw an error),
	    // log the error and return null.
	    exeContext.errors.push(error);
	    return null;
	  }
	}
	
	// This is a small wrapper around completeValue which annotates errors with
	// location information.
	function completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result) {
	  try {
	    var completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
	    var promise = getPromise(completed);
	    if (promise) {
	      return promise.then(undefined, function (error) {
	        return Promise.reject((0, _error.locatedError)(error, fieldNodes, responsePathAsArray(path)));
	      });
	    }
	    return completed;
	  } catch (error) {
	    throw (0, _error.locatedError)(error, fieldNodes, responsePathAsArray(path));
	  }
	}
	
	/**
	 * Implements the instructions for completeValue as defined in the
	 * "Field entries" section of the spec.
	 *
	 * If the field type is Non-Null, then this recursively completes the value
	 * for the inner type. It throws a field error if that completion returns null,
	 * as per the "Nullability" section of the spec.
	 *
	 * If the field type is a List, then this recursively completes the value
	 * for the inner type on each item in the list.
	 *
	 * If the field type is a Scalar or Enum, ensures the completed value is a legal
	 * value of the type by calling the `serialize` method of GraphQL type
	 * definition.
	 *
	 * If the field is an abstract type, determine the runtime type of the value
	 * and then complete based on that type
	 *
	 * Otherwise, the field type expects a sub-selection set, and will complete the
	 * value by evaluating all sub-selections.
	 */
	function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
	  // If result is a Promise, apply-lift over completeValue.
	  var promise = getPromise(result);
	  if (promise) {
	    return promise.then(function (resolved) {
	      return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
	    });
	  }
	
	  // If result is an Error, throw a located error.
	  if (result instanceof Error) {
	    throw result;
	  }
	
	  // If field type is NonNull, complete for inner type, and throw field error
	  // if result is null.
	  if (returnType instanceof _definition.GraphQLNonNull) {
	    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
	    if (completed === null) {
	      throw new Error('Cannot return null for non-nullable field ' + info.parentType.name + '.' + info.fieldName + '.');
	    }
	    return completed;
	  }
	
	  // If result value is null-ish (null, undefined, or NaN) then return null.
	  if ((0, _isNullish2.default)(result)) {
	    return null;
	  }
	
	  // If field type is List, complete each item in the list with the inner type
	  if (returnType instanceof _definition.GraphQLList) {
	    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
	  }
	
	  // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
	  // returning null if serialization is not possible.
	  if ((0, _definition.isLeafType)(returnType)) {
	    return completeLeafValue(returnType, result);
	  }
	
	  // If field type is an abstract type, Interface or Union, determine the
	  // runtime Object type and complete for that type.
	  if ((0, _definition.isAbstractType)(returnType)) {
	    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
	  }
	
	  // If field type is Object, execute and complete all sub-selections.
	  if (returnType instanceof _definition.GraphQLObjectType) {
	    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
	  }
	
	  // Not reachable. All possible output types have been considered.
	  throw new Error('Cannot complete value of unexpected type "' + String(returnType) + '".');
	}
	
	/**
	 * Complete a list value by completing each item in the list with the
	 * inner type
	 */
	function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
	  !(0, _iterall.isCollection)(result) ? (0, _invariant2.default)(0, 'Expected Iterable, but did not find one for field ' + info.parentType.name + '.' + info.fieldName + '.') : void 0;
	
	  // This is specified as a simple map, however we're optimizing the path
	  // where the list contains no Promises by avoiding creating another Promise.
	  var itemType = returnType.ofType;
	  var containsPromise = false;
	  var completedResults = [];
	  (0, _iterall.forEach)(result, function (item, index) {
	    // No need to modify the info object containing the path,
	    // since from here on it is not ever accessed by resolver functions.
	    var fieldPath = addPath(path, index);
	    var completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);
	
	    if (!containsPromise && getPromise(completedItem)) {
	      containsPromise = true;
	    }
	    completedResults.push(completedItem);
	  });
	
	  return containsPromise ? Promise.all(completedResults) : completedResults;
	}
	
	/**
	 * Complete a Scalar or Enum by serializing to a valid value, returning
	 * null if serialization is not possible.
	 */
	function completeLeafValue(returnType, result) {
	  !returnType.serialize ? (0, _invariant2.default)(0, 'Missing serialize method on type') : void 0;
	  var serializedResult = returnType.serialize(result);
	  if ((0, _isNullish2.default)(serializedResult)) {
	    throw new Error('Expected a value of type "' + String(returnType) + '" but ' + ('received: ' + String(result)));
	  }
	  return serializedResult;
	}
	
	/**
	 * Complete a value of an abstract type by determining the runtime object type
	 * of that value, then complete the value for that type.
	 */
	function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
	  var runtimeType = returnType.resolveType ? returnType.resolveType(result, exeContext.contextValue, info) : defaultResolveTypeFn(result, exeContext.contextValue, info, returnType);
	
	  var promise = getPromise(runtimeType);
	  if (promise) {
	    return promise.then(function (resolvedRuntimeType) {
	      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
	    });
	  }
	
	  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
	}
	
	function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
	  var runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;
	
	  if (!(runtimeType instanceof _definition.GraphQLObjectType)) {
	    throw new _error.GraphQLError('Abstract type ' + returnType.name + ' must resolve to an Object type at ' + ('runtime for field ' + info.parentType.name + '.' + info.fieldName + ' with ') + ('value "' + String(result) + '", received "' + String(runtimeType) + '".'), fieldNodes);
	  }
	
	  if (!exeContext.schema.isPossibleType(returnType, runtimeType)) {
	    throw new _error.GraphQLError('Runtime Object type "' + runtimeType.name + '" is not a possible type ' + ('for "' + returnType.name + '".'), fieldNodes);
	  }
	
	  return runtimeType;
	}
	
	/**
	 * Complete an Object value by executing all sub-selections.
	 */
	function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
	  // If there is an isTypeOf predicate function, call it with the
	  // current result. If isTypeOf returns false, then raise an error rather
	  // than continuing execution.
	  if (returnType.isTypeOf) {
	    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
	
	    var promise = getPromise(isTypeOf);
	    if (promise) {
	      return promise.then(function (isTypeOfResult) {
	        if (!isTypeOfResult) {
	          throw invalidReturnTypeError(returnType, result, fieldNodes);
	        }
	        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result);
	      });
	    }
	
	    if (!isTypeOf) {
	      throw invalidReturnTypeError(returnType, result, fieldNodes);
	    }
	  }
	
	  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result);
	}
	
	function invalidReturnTypeError(returnType, result, fieldNodes) {
	  return new _error.GraphQLError('Expected value of type "' + returnType.name + '" but got: ' + String(result) + '.', fieldNodes);
	}
	
	function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result) {
	  // Collect sub-fields to execute to complete this value.
	  var subFieldNodes = Object.create(null);
	  var visitedFragmentNames = Object.create(null);
	  for (var i = 0; i < fieldNodes.length; i++) {
	    var selectionSet = fieldNodes[i].selectionSet;
	    if (selectionSet) {
	      subFieldNodes = collectFields(exeContext, returnType, selectionSet, subFieldNodes, visitedFragmentNames);
	    }
	  }
	
	  return executeFields(exeContext, returnType, result, path, subFieldNodes);
	}
	
	/**
	 * If a resolveType function is not given, then a default resolve behavior is
	 * used which tests each possible type for the abstract type by calling
	 * isTypeOf for the object being coerced, returning the first type that matches.
	 */
	function defaultResolveTypeFn(value, context, info, abstractType) {
	  var possibleTypes = info.schema.getPossibleTypes(abstractType);
	  var promisedIsTypeOfResults = [];
	
	  for (var i = 0; i < possibleTypes.length; i++) {
	    var type = possibleTypes[i];
	
	    if (type.isTypeOf) {
	      var isTypeOfResult = type.isTypeOf(value, context, info);
	
	      var promise = getPromise(isTypeOfResult);
	      if (promise) {
	        promisedIsTypeOfResults[i] = promise;
	      } else if (isTypeOfResult) {
	        return type;
	      }
	    }
	  }
	
	  if (promisedIsTypeOfResults.length) {
	    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
	      for (var _i = 0; _i < isTypeOfResults.length; _i++) {
	        if (isTypeOfResults[_i]) {
	          return possibleTypes[_i];
	        }
	      }
	    });
	  }
	}
	
	/**
	 * If a resolve function is not given, then a default resolve behavior is used
	 * which takes the property of the source object of the same name as the field
	 * and returns it as the result, or if it's a function, returns the result
	 * of calling that function while passing along args and context.
	 */
	var defaultFieldResolver = exports.defaultFieldResolver = function defaultFieldResolver(source, args, context, info) {
	  // ensure source is a value for which property access is acceptable.
	  if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' || typeof source === 'function') {
	    var property = source[info.fieldName];
	    if (typeof property === 'function') {
	      return source[info.fieldName](args, context, info);
	    }
	    return property;
	  }
	};
	
	/**
	 * Only returns the value if it acts like a Promise, i.e. has a "then" function,
	 * otherwise returns void.
	 */
	function getPromise(value) {
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && typeof value.then === 'function') {
	    return value;
	  }
	}
	
	/**
	 * This method looks up the field on the given type defintion.
	 * It has special casing for the two introspection fields, __schema
	 * and __typename. __typename is special because it can always be
	 * queried as a field, even in situations where no other fields
	 * are allowed, like on a Union. __schema could get automatically
	 * added to the query type, but that would require mutating type
	 * definitions, which would cause issues.
	 */
	function getFieldDef(schema, parentType, fieldName) {
	  if (fieldName === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _introspection.SchemaMetaFieldDef;
	  } else if (fieldName === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _introspection.TypeMetaFieldDef;
	  } else if (fieldName === _introspection.TypeNameMetaFieldDef.name) {
	    return _introspection.TypeNameMetaFieldDef;
	  }
	  return parentType.getFields()[fieldName];
	}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
	                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * 
	                                                                                                                                                                                                                                                                               */
	
	exports.getVariableValues = getVariableValues;
	exports.getArgumentValues = getArgumentValues;
	exports.getDirectiveValues = getDirectiveValues;
	exports.coerceValue = coerceValue;
	
	var _iterall = __webpack_require__(40);
	
	var _error = __webpack_require__(3);
	
	var _find = __webpack_require__(37);
	
	var _find2 = _interopRequireDefault(_find);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _isNullish = __webpack_require__(25);
	
	var _isNullish2 = _interopRequireDefault(_isNullish);
	
	var _isInvalid = __webpack_require__(49);
	
	var _isInvalid2 = _interopRequireDefault(_isInvalid);
	
	var _keyMap = __webpack_require__(38);
	
	var _keyMap2 = _interopRequireDefault(_keyMap);
	
	var _typeFromAST = __webpack_require__(18);
	
	var _valueFromAST = __webpack_require__(51);
	
	var _isValidJSValue = __webpack_require__(176);
	
	var _isValidLiteralValue = __webpack_require__(69);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _printer = __webpack_require__(11);
	
	var _definition = __webpack_require__(4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Prepares an object map of variableValues of the correct type based on the
	 * provided variable definitions and arbitrary input. If the input cannot be
	 * parsed to match the variable definitions, a GraphQLError will be thrown.
	 *
	 * Note: The returned value is a plain Object with a prototype, since it is
	 * exposed to user code. Care should be taken to not pull values from the
	 * Object prototype.
	 */
	function getVariableValues(schema, varDefNodes, inputs) {
	  var coercedValues = {};
	  for (var i = 0; i < varDefNodes.length; i++) {
	    var varDefNode = varDefNodes[i];
	    var varName = varDefNode.variable.name.value;
	    var varType = (0, _typeFromAST.typeFromAST)(schema, varDefNode.type);
	    if (!(0, _definition.isInputType)(varType)) {
	      throw new _error.GraphQLError('Variable "$' + varName + '" expected value of type ' + ('"' + (0, _printer.print)(varDefNode.type) + '" which cannot be used as an input type.'), [varDefNode.type]);
	    }
	
	    var value = inputs[varName];
	    if ((0, _isInvalid2.default)(value)) {
	      var defaultValue = varDefNode.defaultValue;
	      if (defaultValue) {
	        coercedValues[varName] = (0, _valueFromAST.valueFromAST)(defaultValue, varType);
	      }
	      if (varType instanceof _definition.GraphQLNonNull) {
	        throw new _error.GraphQLError('Variable "$' + varName + '" of required type ' + ('"' + String(varType) + '" was not provided.'), [varDefNode]);
	      }
	    } else {
	      var errors = (0, _isValidJSValue.isValidJSValue)(value, varType);
	      if (errors.length) {
	        var message = errors ? '\n' + errors.join('\n') : '';
	        throw new _error.GraphQLError('Variable "$' + varName + '" got invalid value ' + (JSON.stringify(value) + '.' + message), [varDefNode]);
	      }
	
	      var coercedValue = coerceValue(varType, value);
	      !!(0, _isInvalid2.default)(coercedValue) ? (0, _invariant2.default)(0, 'Should have reported error.') : void 0;
	      coercedValues[varName] = coercedValue;
	    }
	  }
	  return coercedValues;
	}
	
	/**
	 * Prepares an object map of argument values given a list of argument
	 * definitions and list of argument AST nodes.
	 *
	 * Note: The returned value is a plain Object with a prototype, since it is
	 * exposed to user code. Care should be taken to not pull values from the
	 * Object prototype.
	 */
	function getArgumentValues(def, node, variableValues) {
	  var coercedValues = {};
	  var argDefs = def.args;
	  var argNodes = node.arguments;
	  if (!argDefs || !argNodes) {
	    return coercedValues;
	  }
	  var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
	    return arg.name.value;
	  });
	  for (var i = 0; i < argDefs.length; i++) {
	    var argDef = argDefs[i];
	    var name = argDef.name;
	    var argType = argDef.type;
	    var argumentNode = argNodeMap[name];
	    var defaultValue = argDef.defaultValue;
	    if (!argumentNode) {
	      if (!(0, _isInvalid2.default)(defaultValue)) {
	        coercedValues[name] = defaultValue;
	      } else if (argType instanceof _definition.GraphQLNonNull) {
	        throw new _error.GraphQLError('Argument "' + name + '" of required type ' + ('"' + String(argType) + '" was not provided.'), [node]);
	      }
	    } else if (argumentNode.value.kind === Kind.VARIABLE) {
	      var variableName = argumentNode.value.name.value;
	      if (variableValues && Object.prototype.hasOwnProperty.call(variableValues, variableName) && !(0, _isInvalid2.default)(variableValues[variableName])) {
	        // Note: this does not check that this variable value is correct.
	        // This assumes that this query has been validated and the variable
	        // usage here is of the correct type.
	        coercedValues[name] = variableValues[variableName];
	      } else if (!(0, _isInvalid2.default)(defaultValue)) {
	        coercedValues[name] = defaultValue;
	      } else if (argType instanceof _definition.GraphQLNonNull) {
	        throw new _error.GraphQLError('Argument "' + name + '" of required type "' + String(argType) + '" was ' + ('provided the variable "$' + variableName + '" which was not provided ') + 'a runtime value.', [argumentNode.value]);
	      }
	    } else {
	      var valueNode = argumentNode.value;
	      var coercedValue = (0, _valueFromAST.valueFromAST)(valueNode, argType, variableValues);
	      if ((0, _isInvalid2.default)(coercedValue)) {
	        var errors = (0, _isValidLiteralValue.isValidLiteralValue)(argType, valueNode);
	        var message = errors ? '\n' + errors.join('\n') : '';
	        throw new _error.GraphQLError('Argument "' + name + '" got invalid value ' + (0, _printer.print)(valueNode) + '.' + message, [argumentNode.value]);
	      }
	      coercedValues[name] = coercedValue;
	    }
	  }
	  return coercedValues;
	}
	
	/**
	 * Prepares an object map of argument values given a directive definition
	 * and a AST node which may contain directives. Optionally also accepts a map
	 * of variable values.
	 *
	 * If the directive does not exist on the node, returns undefined.
	 *
	 * Note: The returned value is a plain Object with a prototype, since it is
	 * exposed to user code. Care should be taken to not pull values from the
	 * Object prototype.
	 */
	function getDirectiveValues(directiveDef, node, variableValues) {
	  var directiveNode = node.directives && (0, _find2.default)(node.directives, function (directive) {
	    return directive.name.value === directiveDef.name;
	  });
	
	  if (directiveNode) {
	    return getArgumentValues(directiveDef, directiveNode, variableValues);
	  }
	}
	
	/**
	 * Given a type and any value, return a runtime value coerced to match the type.
	 */
	function coerceValue(type, value) {
	  // Ensure flow knows that we treat function params as const.
	  var _value = value;
	
	  if ((0, _isInvalid2.default)(_value)) {
	    return; // Intentionally return no value.
	  }
	
	  if (type instanceof _definition.GraphQLNonNull) {
	    if (_value === null) {
	      return; // Intentionally return no value.
	    }
	    return coerceValue(type.ofType, _value);
	  }
	
	  if (_value === null) {
	    // Intentionally return the value null.
	    return null;
	  }
	
	  if (type instanceof _definition.GraphQLList) {
	    var itemType = type.ofType;
	    if ((0, _iterall.isCollection)(_value)) {
	      var coercedValues = [];
	      var valueIter = (0, _iterall.createIterator)(_value);
	      if (!valueIter) {
	        return; // Intentionally return no value.
	      }
	      var step = void 0;
	      while (!(step = valueIter.next()).done) {
	        var itemValue = coerceValue(itemType, step.value);
	        if ((0, _isInvalid2.default)(itemValue)) {
	          return; // Intentionally return no value.
	        }
	        coercedValues.push(itemValue);
	      }
	      return coercedValues;
	    }
	    var coercedValue = coerceValue(itemType, _value);
	    if ((0, _isInvalid2.default)(coercedValue)) {
	      return; // Intentionally return no value.
	    }
	    return [coerceValue(itemType, _value)];
	  }
	
	  if (type instanceof _definition.GraphQLInputObjectType) {
	    if ((typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) !== 'object') {
	      return; // Intentionally return no value.
	    }
	    var coercedObj = Object.create(null);
	    var fields = type.getFields();
	    var fieldNames = Object.keys(fields);
	    for (var i = 0; i < fieldNames.length; i++) {
	      var fieldName = fieldNames[i];
	      var field = fields[fieldName];
	      if ((0, _isInvalid2.default)(_value[fieldName])) {
	        if (!(0, _isInvalid2.default)(field.defaultValue)) {
	          coercedObj[fieldName] = field.defaultValue;
	        } else if (field.type instanceof _definition.GraphQLNonNull) {
	          return; // Intentionally return no value.
	        }
	        continue;
	      }
	      var fieldValue = coerceValue(field.type, _value[fieldName]);
	      if ((0, _isInvalid2.default)(fieldValue)) {
	        return; // Intentionally return no value.
	      }
	      coercedObj[fieldName] = fieldValue;
	    }
	    return coercedObj;
	  }
	
	  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;
	
	  var parsed = type.parseValue(_value);
	  if ((0, _isNullish2.default)(parsed)) {
	    // null or invalid values represent a failure to parse correctly,
	    // in which case no value is returned.
	    return;
	  }
	
	  return parsed;
	}

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyValMap;
	
	
	/**
	 * Creates a keyed JS object from an array, given a function to produce the keys
	 * and a function to produce the values from each item in the array.
	 *
	 *     const phoneBook = [
	 *       { name: 'Jon', num: '555-1234' },
	 *       { name: 'Jenny', num: '867-5309' }
	 *     ]
	 *
	 *     // { Jon: '555-1234', Jenny: '867-5309' }
	 *     const phonesByName = keyValMap(
	 *       phoneBook,
	 *       entry => entry.name,
	 *       entry => entry.num
	 *     )
	 *
	 */
	function keyValMap(list, keyFn, valFn) {
	  return list.reduce(function (map, item) {
	    return map[keyFn(item)] = valFn(item), map;
	  }, Object.create(null));
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = quotedOrList;
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	var MAX_LENGTH = 5;
	
	/**
	 * Given [ A, B, C ] return '"A", "B", or "C"'.
	 */
	function quotedOrList(items) {
	  var selected = items.slice(0, MAX_LENGTH);
	  return selected.map(function (item) {
	    return '"' + item + '"';
	  }).reduce(function (list, quoted, index) {
	    return list + (selected.length > 2 ? ', ' : ' ') + (index === selected.length - 1 ? 'or ' : '') + quoted;
	  });
	}

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = suggestionList;
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	/**
	 * Given an invalid input string and a list of valid options, returns a filtered
	 * list of valid options sorted based on their similarity with the input.
	 */
	function suggestionList(input, options) {
	  var optionsByDistance = Object.create(null);
	  var oLength = options.length;
	  var inputThreshold = input.length / 2;
	  for (var i = 0; i < oLength; i++) {
	    var distance = lexicalDistance(input, options[i]);
	    var threshold = Math.max(inputThreshold, options[i].length / 2, 1);
	    if (distance <= threshold) {
	      optionsByDistance[options[i]] = distance;
	    }
	  }
	  return Object.keys(optionsByDistance).sort(function (a, b) {
	    return optionsByDistance[a] - optionsByDistance[b];
	  });
	}
	
	/**
	 * Computes the lexical distance between strings A and B.
	 *
	 * The "distance" between two strings is given by counting the minimum number
	 * of edits needed to transform string A into string B. An edit can be an
	 * insertion, deletion, or substitution of a single character, or a swap of two
	 * adjacent characters.
	 *
	 * This distance can be useful for detecting typos in input or sorting
	 *
	 * @param {string} a
	 * @param {string} b
	 * @return {int} distance in number of edits
	 */
	function lexicalDistance(a, b) {
	  var i = void 0;
	  var j = void 0;
	  var d = [];
	  var aLength = a.length;
	  var bLength = b.length;
	
	  for (i = 0; i <= aLength; i++) {
	    d[i] = [i];
	  }
	
	  for (j = 1; j <= bLength; j++) {
	    d[0][j] = j;
	  }
	
	  for (i = 1; i <= aLength; i++) {
	    for (j = 1; j <= bLength; j++) {
	      var cost = a[i - 1] === b[j - 1] ? 0 : 1;
	
	      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
	
	      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
	        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
	      }
	    }
	  }
	
	  return d[aLength][bLength];
	}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TokenKind = undefined;
	exports.createLexer = createLexer;
	exports.getTokenDesc = getTokenDesc;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Given a Source object, this returns a Lexer for that source.
	 * A Lexer is a stateful stream generator in that every time
	 * it is advanced, it returns the next token in the Source. Assuming the
	 * source lexes, the final Token emitted by the lexer will be of kind
	 * EOF, after which the lexer will repeatedly return the same EOF token
	 * whenever called.
	 */
	function createLexer(source, options) {
	  var startOfFileToken = new Tok(SOF, 0, 0, 0, 0, null);
	  var lexer = {
	    source: source,
	    options: options,
	    lastToken: startOfFileToken,
	    token: startOfFileToken,
	    line: 1,
	    lineStart: 0,
	    advance: advanceLexer
	  };
	  return lexer;
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	function advanceLexer() {
	  var token = this.lastToken = this.token;
	  if (token.kind !== EOF) {
	    do {
	      token = token.next = readToken(this, token);
	    } while (token.kind === COMMENT);
	    this.token = token;
	  }
	  return token;
	}
	
	/**
	 * The return type of createLexer.
	 */
	
	
	// Each kind of token.
	var SOF = '<SOF>';
	var EOF = '<EOF>';
	var BANG = '!';
	var DOLLAR = '$';
	var PAREN_L = '(';
	var PAREN_R = ')';
	var SPREAD = '...';
	var COLON = ':';
	var EQUALS = '=';
	var AT = '@';
	var BRACKET_L = '[';
	var BRACKET_R = ']';
	var BRACE_L = '{';
	var PIPE = '|';
	var BRACE_R = '}';
	var NAME = 'Name';
	var INT = 'Int';
	var FLOAT = 'Float';
	var STRING = 'String';
	var COMMENT = 'Comment';
	
	/**
	 * An exported enum describing the different kinds of tokens that the
	 * lexer emits.
	 */
	var TokenKind = exports.TokenKind = {
	  SOF: SOF,
	  EOF: EOF,
	  BANG: BANG,
	  DOLLAR: DOLLAR,
	  PAREN_L: PAREN_L,
	  PAREN_R: PAREN_R,
	  SPREAD: SPREAD,
	  COLON: COLON,
	  EQUALS: EQUALS,
	  AT: AT,
	  BRACKET_L: BRACKET_L,
	  BRACKET_R: BRACKET_R,
	  BRACE_L: BRACE_L,
	  PIPE: PIPE,
	  BRACE_R: BRACE_R,
	  NAME: NAME,
	  INT: INT,
	  FLOAT: FLOAT,
	  STRING: STRING,
	  COMMENT: COMMENT
	};
	
	/**
	 * A helper function to describe a token as a string for debugging
	 */
	function getTokenDesc(token) {
	  var value = token.value;
	  return value ? token.kind + ' "' + value + '"' : token.kind;
	}
	
	var charCodeAt = String.prototype.charCodeAt;
	var slice = String.prototype.slice;
	
	/**
	 * Helper function for constructing the Token object.
	 */
	function Tok(kind, start, end, line, column, prev, value) {
	  this.kind = kind;
	  this.start = start;
	  this.end = end;
	  this.line = line;
	  this.column = column;
	  this.value = value;
	  this.prev = prev;
	  this.next = null;
	}
	
	// Print a simplified form when appearing in JSON/util.inspect.
	Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
	  return {
	    kind: this.kind,
	    value: this.value,
	    line: this.line,
	    column: this.column
	  };
	};
	
	function printCharCode(code) {
	  return (
	    // NaN/undefined represents access beyond the end of the file.
	    isNaN(code) ? EOF :
	    // Trust JSON for ASCII.
	    code < 0x007F ? JSON.stringify(String.fromCharCode(code)) :
	    // Otherwise print the escaped form.
	    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
	  );
	}
	
	/**
	 * Gets the next token from the source starting at the given position.
	 *
	 * This skips over whitespace and comments until it finds the next lexable
	 * token, then lexes punctuators immediately or calls the appropriate helper
	 * function for more complicated tokens.
	 */
	function readToken(lexer, prev) {
	  var source = lexer.source;
	  var body = source.body;
	  var bodyLength = body.length;
	
	  var position = positionAfterWhitespace(body, prev.end, lexer);
	  var line = lexer.line;
	  var col = 1 + position - lexer.lineStart;
	
	  if (position >= bodyLength) {
	    return new Tok(EOF, bodyLength, bodyLength, line, col, prev);
	  }
	
	  var code = charCodeAt.call(body, position);
	
	  // SourceCharacter
	  if (code < 0x0020 && code !== 0x0009 && code !== 0x000A && code !== 0x000D) {
	    throw (0, _error.syntaxError)(source, position, 'Cannot contain the invalid character ' + printCharCode(code) + '.');
	  }
	
	  switch (code) {
	    // !
	    case 33:
	      return new Tok(BANG, position, position + 1, line, col, prev);
	    // #
	    case 35:
	      return readComment(source, position, line, col, prev);
	    // $
	    case 36:
	      return new Tok(DOLLAR, position, position + 1, line, col, prev);
	    // (
	    case 40:
	      return new Tok(PAREN_L, position, position + 1, line, col, prev);
	    // )
	    case 41:
	      return new Tok(PAREN_R, position, position + 1, line, col, prev);
	    // .
	    case 46:
	      if (charCodeAt.call(body, position + 1) === 46 && charCodeAt.call(body, position + 2) === 46) {
	        return new Tok(SPREAD, position, position + 3, line, col, prev);
	      }
	      break;
	    // :
	    case 58:
	      return new Tok(COLON, position, position + 1, line, col, prev);
	    // =
	    case 61:
	      return new Tok(EQUALS, position, position + 1, line, col, prev);
	    // @
	    case 64:
	      return new Tok(AT, position, position + 1, line, col, prev);
	    // [
	    case 91:
	      return new Tok(BRACKET_L, position, position + 1, line, col, prev);
	    // ]
	    case 93:
	      return new Tok(BRACKET_R, position, position + 1, line, col, prev);
	    // {
	    case 123:
	      return new Tok(BRACE_L, position, position + 1, line, col, prev);
	    // |
	    case 124:
	      return new Tok(PIPE, position, position + 1, line, col, prev);
	    // }
	    case 125:
	      return new Tok(BRACE_R, position, position + 1, line, col, prev);
	    // A-Z _ a-z
	    case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:
	    case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:
	    case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:
	    case 89:case 90:
	    case 95:
	    case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:
	    case 105:case 106:case 107:case 108:case 109:case 110:case 111:
	    case 112:case 113:case 114:case 115:case 116:case 117:case 118:
	    case 119:case 120:case 121:case 122:
	      return readName(source, position, line, col, prev);
	    // - 0-9
	    case 45:
	    case 48:case 49:case 50:case 51:case 52:
	    case 53:case 54:case 55:case 56:case 57:
	      return readNumber(source, position, code, line, col, prev);
	    // "
	    case 34:
	      return readString(source, position, line, col, prev);
	  }
	
	  throw (0, _error.syntaxError)(source, position, unexpectedCharacterMessage(code));
	}
	
	/**
	 * Report a message that an unexpected character was encountered.
	 */
	function unexpectedCharacterMessage(code) {
	  if (code === 39) {
	    // '
	    return 'Unexpected single quote character (\'), did you mean to use ' + 'a double quote (")?';
	  }
	
	  return 'Cannot parse the unexpected character ' + printCharCode(code) + '.';
	}
	
	/**
	 * Reads from body starting at startPosition until it finds a non-whitespace
	 * or commented character, then returns the position of that character for
	 * lexing.
	 */
	function positionAfterWhitespace(body, startPosition, lexer) {
	  var bodyLength = body.length;
	  var position = startPosition;
	  while (position < bodyLength) {
	    var code = charCodeAt.call(body, position);
	    // tab | space | comma | BOM
	    if (code === 9 || code === 32 || code === 44 || code === 0xFEFF) {
	      ++position;
	    } else if (code === 10) {
	      // new line
	      ++position;
	      ++lexer.line;
	      lexer.lineStart = position;
	    } else if (code === 13) {
	      // carriage return
	      if (charCodeAt.call(body, position + 1) === 10) {
	        position += 2;
	      } else {
	        ++position;
	      }
	      ++lexer.line;
	      lexer.lineStart = position;
	    } else {
	      break;
	    }
	  }
	  return position;
	}
	
	/**
	 * Reads a comment token from the source file.
	 *
	 * #[\u0009\u0020-\uFFFF]*
	 */
	function readComment(source, start, line, col, prev) {
	  var body = source.body;
	  var code = void 0;
	  var position = start;
	
	  do {
	    code = charCodeAt.call(body, ++position);
	  } while (code !== null && (
	  // SourceCharacter but not LineTerminator
	  code > 0x001F || code === 0x0009));
	
	  return new Tok(COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
	}
	
	/**
	 * Reads a number token from the source file, either a float
	 * or an int depending on whether a decimal point appears.
	 *
	 * Int:   -?(0|[1-9][0-9]*)
	 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
	 */
	function readNumber(source, start, firstCode, line, col, prev) {
	  var body = source.body;
	  var code = firstCode;
	  var position = start;
	  var isFloat = false;
	
	  if (code === 45) {
	    // -
	    code = charCodeAt.call(body, ++position);
	  }
	
	  if (code === 48) {
	    // 0
	    code = charCodeAt.call(body, ++position);
	    if (code >= 48 && code <= 57) {
	      throw (0, _error.syntaxError)(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
	    }
	  } else {
	    position = readDigits(source, position, code);
	    code = charCodeAt.call(body, position);
	  }
	
	  if (code === 46) {
	    // .
	    isFloat = true;
	
	    code = charCodeAt.call(body, ++position);
	    position = readDigits(source, position, code);
	    code = charCodeAt.call(body, position);
	  }
	
	  if (code === 69 || code === 101) {
	    // E e
	    isFloat = true;
	
	    code = charCodeAt.call(body, ++position);
	    if (code === 43 || code === 45) {
	      // + -
	      code = charCodeAt.call(body, ++position);
	    }
	    position = readDigits(source, position, code);
	  }
	
	  return new Tok(isFloat ? FLOAT : INT, start, position, line, col, prev, slice.call(body, start, position));
	}
	
	/**
	 * Returns the new position in the source after reading digits.
	 */
	function readDigits(source, start, firstCode) {
	  var body = source.body;
	  var position = start;
	  var code = firstCode;
	  if (code >= 48 && code <= 57) {
	    // 0 - 9
	    do {
	      code = charCodeAt.call(body, ++position);
	    } while (code >= 48 && code <= 57); // 0 - 9
	    return position;
	  }
	  throw (0, _error.syntaxError)(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
	}
	
	/**
	 * Reads a string token from the source file.
	 *
	 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
	 */
	function readString(source, start, line, col, prev) {
	  var body = source.body;
	  var position = start + 1;
	  var chunkStart = position;
	  var code = 0;
	  var value = '';
	
	  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
	  // not LineTerminator
	  code !== 0x000A && code !== 0x000D &&
	  // not Quote (")
	  code !== 34) {
	    // SourceCharacter
	    if (code < 0x0020 && code !== 0x0009) {
	      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
	    }
	
	    ++position;
	    if (code === 92) {
	      // \
	      value += slice.call(body, chunkStart, position - 1);
	      code = charCodeAt.call(body, position);
	      switch (code) {
	        case 34:
	          value += '"';break;
	        case 47:
	          value += '/';break;
	        case 92:
	          value += '\\';break;
	        case 98:
	          value += '\b';break;
	        case 102:
	          value += '\f';break;
	        case 110:
	          value += '\n';break;
	        case 114:
	          value += '\r';break;
	        case 116:
	          value += '\t';break;
	        case 117:
	          // u
	          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
	          if (charCode < 0) {
	            throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
	          }
	          value += String.fromCharCode(charCode);
	          position += 4;
	          break;
	        default:
	          throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
	      }
	      ++position;
	      chunkStart = position;
	    }
	  }
	
	  if (code !== 34) {
	    // quote (")
	    throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
	  }
	
	  value += slice.call(body, chunkStart, position);
	  return new Tok(STRING, start, position + 1, line, col, prev, value);
	}
	
	/**
	 * Converts four hexidecimal chars to the integer that the
	 * string represents. For example, uniCharCode('0','0','0','f')
	 * will return 15, and uniCharCode('0','0','f','f') returns 255.
	 *
	 * Returns a negative number on error, if a char was invalid.
	 *
	 * This is implemented by noting that char2hex() returns -1 on error,
	 * which means the result of ORing the char2hex() will also be negative.
	 */
	function uniCharCode(a, b, c, d) {
	  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
	}
	
	/**
	 * Converts a hex character to its integer value.
	 * '0' becomes 0, '9' becomes 9
	 * 'A' becomes 10, 'F' becomes 15
	 * 'a' becomes 10, 'f' becomes 15
	 *
	 * Returns -1 on error.
	 */
	function char2hex(a) {
	  return a >= 48 && a <= 57 ? a - 48 : // 0-9
	  a >= 65 && a <= 70 ? a - 55 : // A-F
	  a >= 97 && a <= 102 ? a - 87 : // a-f
	  -1;
	}
	
	/**
	 * Reads an alphanumeric + underscore name from the source.
	 *
	 * [_A-Za-z][_0-9A-Za-z]*
	 */
	function readName(source, position, line, col, prev) {
	  var body = source.body;
	  var bodyLength = body.length;
	  var end = position + 1;
	  var code = 0;
	  while (end !== bodyLength && (code = charCodeAt.call(body, end)) !== null && (code === 95 || // _
	  code >= 48 && code <= 57 || // 0-9
	  code >= 65 && code <= 90 || // A-Z
	  code >= 97 && code <= 122 // a-z
	  )) {
	    ++end;
	  }
	  return new Tok(NAME, position, end, line, col, prev, slice.call(body, position, end));
	}

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLocation = getLocation;
	
	
	/**
	 * Takes a Source and a UTF-8 character offset, and returns the corresponding
	 * line and column as a SourceLocation.
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function getLocation(source, position) {
	  var lineRegexp = /\r\n|[\n\r]/g;
	  var line = 1;
	  var column = position + 1;
	  var match = void 0;
	  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
	    line += 1;
	    column = position + 1 - (match.index + match[0].length);
	  }
	  return { line: line, column: column };
	}
	
	/**
	 * Represents a location in a Source.
	 */

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TypeInfo = undefined;
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _definition = __webpack_require__(4);
	
	var _introspection = __webpack_require__(26);
	
	var _typeFromAST = __webpack_require__(18);
	
	var _find = __webpack_require__(37);
	
	var _find2 = _interopRequireDefault(_find);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                           *
	                                                                                                                                                           * This source code is licensed under the MIT license found in the
	                                                                                                                                                           * LICENSE file in the root directory of this source tree.
	                                                                                                                                                           *
	                                                                                                                                                           * 
	                                                                                                                                                           */
	
	/**
	 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
	 * of the current field and type definitions at any point in a GraphQL document
	 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
	 */
	var TypeInfo = exports.TypeInfo = function () {
	  function TypeInfo(schema,
	  // NOTE: this experimental optional second parameter is only needed in order
	  // to support non-spec-compliant codebases. You should never need to use it.
	  getFieldDefFn) {
	    _classCallCheck(this, TypeInfo);
	
	    this._schema = schema;
	    this._typeStack = [];
	    this._parentTypeStack = [];
	    this._inputTypeStack = [];
	    this._fieldDefStack = [];
	    this._directive = null;
	    this._argument = null;
	    this._enumValue = null;
	    this._getFieldDef = getFieldDefFn || getFieldDef;
	  }
	
	  TypeInfo.prototype.getType = function getType() {
	    if (this._typeStack.length > 0) {
	      return this._typeStack[this._typeStack.length - 1];
	    }
	  };
	
	  TypeInfo.prototype.getParentType = function getParentType() {
	    if (this._parentTypeStack.length > 0) {
	      return this._parentTypeStack[this._parentTypeStack.length - 1];
	    }
	  };
	
	  TypeInfo.prototype.getInputType = function getInputType() {
	    if (this._inputTypeStack.length > 0) {
	      return this._inputTypeStack[this._inputTypeStack.length - 1];
	    }
	  };
	
	  TypeInfo.prototype.getFieldDef = function getFieldDef() {
	    if (this._fieldDefStack.length > 0) {
	      return this._fieldDefStack[this._fieldDefStack.length - 1];
	    }
	  };
	
	  TypeInfo.prototype.getDirective = function getDirective() {
	    return this._directive;
	  };
	
	  TypeInfo.prototype.getArgument = function getArgument() {
	    return this._argument;
	  };
	
	  TypeInfo.prototype.getEnumValue = function getEnumValue() {
	    return this._enumValue;
	  };
	
	  // Flow does not yet handle this case.
	
	
	  TypeInfo.prototype.enter = function enter(node /* ASTNode */) {
	    var schema = this._schema;
	    switch (node.kind) {
	      case Kind.SELECTION_SET:
	        var namedType = (0, _definition.getNamedType)(this.getType());
	        this._parentTypeStack.push((0, _definition.isCompositeType)(namedType) ? namedType : undefined);
	        break;
	      case Kind.FIELD:
	        var parentType = this.getParentType();
	        var fieldDef = void 0;
	        if (parentType) {
	          fieldDef = this._getFieldDef(schema, parentType, node);
	        }
	        this._fieldDefStack.push(fieldDef);
	        this._typeStack.push(fieldDef && fieldDef.type);
	        break;
	      case Kind.DIRECTIVE:
	        this._directive = schema.getDirective(node.name.value);
	        break;
	      case Kind.OPERATION_DEFINITION:
	        var type = void 0;
	        if (node.operation === 'query') {
	          type = schema.getQueryType();
	        } else if (node.operation === 'mutation') {
	          type = schema.getMutationType();
	        } else if (node.operation === 'subscription') {
	          type = schema.getSubscriptionType();
	        }
	        this._typeStack.push(type);
	        break;
	      case Kind.INLINE_FRAGMENT:
	      case Kind.FRAGMENT_DEFINITION:
	        var typeConditionAST = node.typeCondition;
	        var outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : this.getType();
	        this._typeStack.push((0, _definition.isOutputType)(outputType) ? outputType : undefined);
	        break;
	      case Kind.VARIABLE_DEFINITION:
	        var inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
	        this._inputTypeStack.push((0, _definition.isInputType)(inputType) ? inputType : undefined);
	        break;
	      case Kind.ARGUMENT:
	        var argDef = void 0;
	        var argType = void 0;
	        var fieldOrDirective = this.getDirective() || this.getFieldDef();
	        if (fieldOrDirective) {
	          argDef = (0, _find2.default)(fieldOrDirective.args, function (arg) {
	            return arg.name === node.name.value;
	          });
	          if (argDef) {
	            argType = argDef.type;
	          }
	        }
	        this._argument = argDef;
	        this._inputTypeStack.push(argType);
	        break;
	      case Kind.LIST:
	        var listType = (0, _definition.getNullableType)(this.getInputType());
	        this._inputTypeStack.push(listType instanceof _definition.GraphQLList ? listType.ofType : undefined);
	        break;
	      case Kind.OBJECT_FIELD:
	        var objectType = (0, _definition.getNamedType)(this.getInputType());
	        var fieldType = void 0;
	        if (objectType instanceof _definition.GraphQLInputObjectType) {
	          var inputField = objectType.getFields()[node.name.value];
	          fieldType = inputField ? inputField.type : undefined;
	        }
	        this._inputTypeStack.push(fieldType);
	        break;
	      case Kind.ENUM:
	        var enumType = (0, _definition.getNamedType)(this.getInputType());
	        var enumValue = void 0;
	        if (enumType instanceof _definition.GraphQLEnumType) {
	          enumValue = enumType.getValue(node.value);
	        }
	        this._enumValue = enumValue;
	        break;
	    }
	  };
	
	  TypeInfo.prototype.leave = function leave(node) {
	    switch (node.kind) {
	      case Kind.SELECTION_SET:
	        this._parentTypeStack.pop();
	        break;
	      case Kind.FIELD:
	        this._fieldDefStack.pop();
	        this._typeStack.pop();
	        break;
	      case Kind.DIRECTIVE:
	        this._directive = null;
	        break;
	      case Kind.OPERATION_DEFINITION:
	      case Kind.INLINE_FRAGMENT:
	      case Kind.FRAGMENT_DEFINITION:
	        this._typeStack.pop();
	        break;
	      case Kind.VARIABLE_DEFINITION:
	        this._inputTypeStack.pop();
	        break;
	      case Kind.ARGUMENT:
	        this._argument = null;
	        this._inputTypeStack.pop();
	        break;
	      case Kind.LIST:
	      case Kind.OBJECT_FIELD:
	        this._inputTypeStack.pop();
	        break;
	      case Kind.ENUM:
	        this._enumValue = null;
	        break;
	    }
	  };
	
	  return TypeInfo;
	}();
	
	/**
	 * Not exactly the same as the executor's definition of getFieldDef, in this
	 * statically evaluated environment we do not always have an Object type,
	 * and need to handle Interface and Union types.
	 */
	
	
	function getFieldDef(schema, parentType, fieldNode) {
	  var name = fieldNode.name.value;
	  if (name === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _introspection.SchemaMetaFieldDef;
	  }
	  if (name === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _introspection.TypeMetaFieldDef;
	  }
	  if (name === _introspection.TypeNameMetaFieldDef.name && (0, _definition.isCompositeType)(parentType)) {
	    return _introspection.TypeNameMetaFieldDef;
	  }
	  if (parentType instanceof _definition.GraphQLObjectType || parentType instanceof _definition.GraphQLInterfaceType) {
	    return parentType.getFields()[name];
	  }
	}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.assertValidName = assertValidName;
	exports.formatWarning = formatWarning;
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
	var ERROR_PREFIX_RX = /^Error: /;
	
	// Silences warnings if an environment flag is enabled
	var noNameWarning = Boolean(process && ({"NODE_ENV":"production","PUBLIC_DIR":"/Users/rexmac/git/kitsune-analytics/public"}) && ({"NODE_ENV":"production","PUBLIC_DIR":"/Users/rexmac/git/kitsune-analytics/public"}).GRAPHQL_NO_NAME_WARNING);
	
	// Ensures console warnings are only issued once.
	var hasWarnedAboutDunder = false;
	
	/**
	 * Upholds the spec rules about naming.
	 */
	function assertValidName(name, isIntrospection) {
	  if (!name || typeof name !== 'string') {
	    throw new Error('Must be named. Unexpected name: ' + name + '.');
	  }
	  if (!isIntrospection && !hasWarnedAboutDunder && !noNameWarning && name.slice(0, 2) === '__') {
	    hasWarnedAboutDunder = true;
	    /* eslint-disable no-console */
	    if (console && console.warn) {
	      var error = new Error('Name "' + name + '" must not begin with "__", which is reserved by ' + 'GraphQL introspection. In a future release of graphql this will ' + 'become a hard error.');
	      console.warn(formatWarning(error));
	    }
	    /* eslint-enable no-console */
	  }
	  if (!NAME_RX.test(name)) {
	    throw new Error('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "' + name + '" does not.');
	  }
	}
	
	/**
	 * Returns a human-readable warning based an the supplied Error object,
	 * including stack trace information if available.
	 */
	function formatWarning(error) {
	  var formatted = '';
	  var errorString = String(error).replace(ERROR_PREFIX_RX, '');
	  var stack = error.stack;
	  if (stack) {
	    formatted = stack.replace(ERROR_PREFIX_RX, '');
	  }
	  if (formatted.indexOf(errorString) === -1) {
	    formatted = errorString + '\n' + formatted;
	  }
	  return formatted.trim();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
	                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * 
	                                                                                                                                                                                                                                                                               */
	
	exports.astFromValue = astFromValue;
	
	var _iterall = __webpack_require__(40);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _isNullish = __webpack_require__(25);
	
	var _isNullish2 = _interopRequireDefault(_isNullish);
	
	var _isInvalid = __webpack_require__(49);
	
	var _isInvalid2 = _interopRequireDefault(_isInvalid);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _definition = __webpack_require__(4);
	
	var _scalars = __webpack_require__(22);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Produces a GraphQL Value AST given a JavaScript value.
	 *
	 * A GraphQL type must be provided, which will be used to interpret different
	 * JavaScript values.
	 *
	 * | JSON Value    | GraphQL Value        |
	 * | ------------- | -------------------- |
	 * | Object        | Input Object         |
	 * | Array         | List                 |
	 * | Boolean       | Boolean              |
	 * | String        | String / Enum Value  |
	 * | Number        | Int / Float          |
	 * | Mixed         | Enum Value           |
	 * | null          | NullValue            |
	 *
	 */
	function astFromValue(value, type) {
	  // Ensure flow knows that we treat function params as const.
	  var _value = value;
	
	  if (type instanceof _definition.GraphQLNonNull) {
	    var astValue = astFromValue(_value, type.ofType);
	    if (astValue && astValue.kind === Kind.NULL) {
	      return null;
	    }
	    return astValue;
	  }
	
	  // only explicit null, not undefined, NaN
	  if (_value === null) {
	    return { kind: Kind.NULL };
	  }
	
	  // undefined, NaN
	  if ((0, _isInvalid2.default)(_value)) {
	    return null;
	  }
	
	  // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
	  // the value is not an array, convert the value using the list's item type.
	  if (type instanceof _definition.GraphQLList) {
	    var itemType = type.ofType;
	    if ((0, _iterall.isCollection)(_value)) {
	      var valuesNodes = [];
	      (0, _iterall.forEach)(_value, function (item) {
	        var itemNode = astFromValue(item, itemType);
	        if (itemNode) {
	          valuesNodes.push(itemNode);
	        }
	      });
	      return { kind: Kind.LIST, values: valuesNodes };
	    }
	    return astFromValue(_value, itemType);
	  }
	
	  // Populate the fields of the input object by creating ASTs from each value
	  // in the JavaScript object according to the fields in the input type.
	  if (type instanceof _definition.GraphQLInputObjectType) {
	    if (_value === null || (typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) !== 'object') {
	      return null;
	    }
	    var fields = type.getFields();
	    var fieldNodes = [];
	    Object.keys(fields).forEach(function (fieldName) {
	      var fieldType = fields[fieldName].type;
	      var fieldValue = astFromValue(_value[fieldName], fieldType);
	      if (fieldValue) {
	        fieldNodes.push({
	          kind: Kind.OBJECT_FIELD,
	          name: { kind: Kind.NAME, value: fieldName },
	          value: fieldValue
	        });
	      }
	    });
	    return { kind: Kind.OBJECT, fields: fieldNodes };
	  }
	
	  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must provide Input Type, cannot use: ' + String(type)) : void 0;
	
	  // Since value is an internally represented value, it must be serialized
	  // to an externally represented value before converting into an AST.
	  var serialized = type.serialize(_value);
	  if ((0, _isNullish2.default)(serialized)) {
	    return null;
	  }
	
	  // Others serialize based on their corresponding JavaScript scalar types.
	  if (typeof serialized === 'boolean') {
	    return { kind: Kind.BOOLEAN, value: serialized };
	  }
	
	  // JavaScript numbers can be Int or Float values.
	  if (typeof serialized === 'number') {
	    var stringNum = String(serialized);
	    return (/^[0-9]+$/.test(stringNum) ? { kind: Kind.INT, value: stringNum } : { kind: Kind.FLOAT, value: stringNum }
	    );
	  }
	
	  if (typeof serialized === 'string') {
	    // Enum types use Enum literals.
	    if (type instanceof _definition.GraphQLEnumType) {
	      return { kind: Kind.ENUM, value: serialized };
	    }
	
	    // ID types can use Int literals.
	    if (type === _scalars.GraphQLID && /^[0-9]+$/.test(serialized)) {
	      return { kind: Kind.INT, value: serialized };
	    }
	
	    // Use JSON stringify, which uses the same string encoding as GraphQL,
	    // then remove the quotes.
	    return {
	      kind: Kind.STRING,
	      value: JSON.stringify(serialized).slice(1, -1)
	    };
	  }
	
	  throw new TypeError('Cannot convert value to AST: ' + String(serialized));
	}

/***/ }),
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isArguments;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(120),
	    isArguments = __webpack_require__(121),
	    isArray = __webpack_require__(122);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ }),
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(41);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _trackHelper = __webpack_require__(241);
	
	var _objectAssign = __webpack_require__(7);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helpers = {
	  // HACK: https://github.com/akiran/react-slick/pull/560/files
	  serverInitialize: function (props) {
	    var slideCount = _react2.default.Children.count(props.children);
	    var currentSlide = props.rtl ? slideCount - 1 - props.initialSlide : props.initialSlide;
	
	    this.setState({
	      slideCount,
	      currentSlide,
	      initialized: true
	    });
	  },
	  initialize: function initialize(props) {
	    var slickList = _reactDom2.default.findDOMNode(this.list);
	
	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = this.getWidth(slickList);
	    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;
	
	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
	    } else {
	      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
	    }
	
	    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;
	
	    var currentSlide = props.rtl ? slideCount - 1 - props.initialSlide : props.initialSlide;
	
	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      currentSlide: currentSlide,
	      slideHeight: slideHeight,
	      listHeight: listHeight
	    }, function () {
	
	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));
	
	      this.setState({ trackStyle: trackStyle });
	
	      this.autoPlay(); // once we're set up, trigger the initial autoplay.
	    });
	  },
	  update: function update(props) {
	    var slickList = _reactDom2.default.findDOMNode(this.list);
	    // This method has mostly same code as initialize method.
	    // Refactor it
	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = this.getWidth(slickList);
	    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;
	
	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
	    } else {
	      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
	    }
	
	    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;
	
	    // pause slider if autoplay is set to false
	    if (!props.autoplay) {
	      this.pause();
	    } else {
	      this.autoPlay();
	    }
	
	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      slideHeight: slideHeight,
	      listHeight: listHeight
	    }, function () {
	
	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));
	
	      this.setState({ trackStyle: trackStyle });
	    });
	  },
	  getWidth: function getWidth(elem) {
	    return elem && (elem.getBoundingClientRect().width || elem.offsetWidth) || 0;
	  },
	  getHeight: function getHeight(elem) {
	    return elem && (elem.getBoundingClientRect().height || elem.offsetHeight) || 0;
	  },
	
	  adaptHeight: function adaptHeight() {
	    if (this.props.adaptiveHeight) {
	      var selector = '[data-index="' + this.state.currentSlide + '"]';
	      if (this.list) {
	        var slickList = _reactDom2.default.findDOMNode(this.list);
	        slickList.style.height = slickList.querySelector(selector).offsetHeight + 'px';
	      }
	    }
	  },
	  canGoNext: function canGoNext(opts) {
	    var canGo = true;
	    if (!opts.infinite) {
	      if (opts.centerMode) {
	        // check if current slide is last slide
	        if (opts.currentSlide >= opts.slideCount - 1) {
	          canGo = false;
	        }
	      } else {
	        // check if all slides are shown in slider
	        if (opts.slideCount <= opts.slidesToShow || opts.currentSlide >= opts.slideCount - opts.slidesToShow) {
	          canGo = false;
	        }
	      }
	    }
	    return canGo;
	  },
	  slideHandler: function slideHandler(index) {
	    var _this = this;
	
	    // Functionality of animateSlide and postSlide is merged into this function
	    // console.log('slideHandler', index);
	    var targetSlide, currentSlide;
	    var targetLeft, currentLeft;
	    var callback;
	
	    if (this.props.waitForAnimate && this.state.animating) {
	      return;
	    }
	
	    if (this.props.fade) {
	      currentSlide = this.state.currentSlide;
	
	      // Don't change slide if it's not infite and current slide is the first or last slide.
	      if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
	        return;
	      }
	
	      //  Shifting targetSlide back into the range
	      if (index < 0) {
	        targetSlide = index + this.state.slideCount;
	      } else if (index >= this.state.slideCount) {
	        targetSlide = index - this.state.slideCount;
	      } else {
	        targetSlide = index;
	      }
	
	      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(targetSlide) < 0) {
	        this.setState({
	          lazyLoadedList: this.state.lazyLoadedList.concat(targetSlide)
	        });
	      }
	
	      callback = function callback() {
	        _this.setState({
	          animating: false
	        });
	        if (_this.props.afterChange) {
	          _this.props.afterChange(targetSlide);
	        }
	        delete _this.animationEndCallback;
	      };
	
	      this.setState({
	        animating: true,
	        currentSlide: targetSlide
	      }, function () {
	        this.animationEndCallback = setTimeout(callback, this.props.speed);
	      });
	
	      if (this.props.beforeChange) {
	        this.props.beforeChange(this.state.currentSlide, targetSlide);
	      }
	
	      this.autoPlay();
	      return;
	    }
	
	    targetSlide = index;
	    if (targetSlide < 0) {
	      if (this.props.infinite === false) {
	        currentSlide = 0;
	      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
	        currentSlide = this.state.slideCount - this.state.slideCount % this.props.slidesToScroll;
	      } else {
	        currentSlide = this.state.slideCount + targetSlide;
	      }
	    } else if (targetSlide >= this.state.slideCount) {
	      if (this.props.infinite === false) {
	        currentSlide = this.state.slideCount - this.props.slidesToShow;
	      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
	        currentSlide = 0;
	      } else {
	        currentSlide = targetSlide - this.state.slideCount;
	      }
	    } else {
	      currentSlide = targetSlide;
	    }
	
	    targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: targetSlide,
	      trackRef: this.track
	    }, this.props, this.state));
	
	    currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: currentSlide,
	      trackRef: this.track
	    }, this.props, this.state));
	
	    if (this.props.infinite === false) {
	      targetLeft = currentLeft;
	    }
	
	    if (this.props.beforeChange) {
	      this.props.beforeChange(this.state.currentSlide, currentSlide);
	    }
	
	    if (this.props.lazyLoad) {
	      var loaded = true;
	      var slidesToLoad = [];
	      for (var i = targetSlide; i < targetSlide + this.props.slidesToShow; i++) {
	        loaded = loaded && this.state.lazyLoadedList.indexOf(i) >= 0;
	        if (!loaded) {
	          slidesToLoad.push(i);
	        }
	      }
	      if (!loaded) {
	        this.setState({
	          lazyLoadedList: this.state.lazyLoadedList.concat(slidesToLoad)
	        });
	      }
	    }
	
	    // Slide Transition happens here.
	    // animated transition happens to target Slide and
	    // non - animated transition happens to current Slide
	    // If CSS transitions are false, directly go the current slide.
	
	    if (this.props.useCSS === false) {
	
	      this.setState({
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      }, function () {
	        if (this.props.afterChange) {
	          this.props.afterChange(currentSlide);
	        }
	      });
	    } else {
	
	      var nextStateChanges = {
	        animating: false,
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state)),
	        swipeLeft: null
	      };
	
	      callback = function callback() {
	        _this.setState(nextStateChanges);
	        if (_this.props.afterChange) {
	          _this.props.afterChange(currentSlide);
	        }
	        delete _this.animationEndCallback;
	      };
	
	      this.setState({
	        animating: true,
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: targetLeft }, this.props, this.state))
	      }, function () {
	        this.animationEndCallback = setTimeout(callback, this.props.speed);
	      });
	    }
	
	    this.autoPlay();
	  },
	  swipeDirection: function swipeDirection(touchObject) {
	    var xDist, yDist, r, swipeAngle;
	
	    xDist = touchObject.startX - touchObject.curX;
	    yDist = touchObject.startY - touchObject.curY;
	    r = Math.atan2(yDist, xDist);
	
	    swipeAngle = Math.round(r * 180 / Math.PI);
	    if (swipeAngle < 0) {
	      swipeAngle = 360 - Math.abs(swipeAngle);
	    }
	    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
	      return this.props.rtl === false ? 'left' : 'right';
	    }
	    if (swipeAngle >= 135 && swipeAngle <= 225) {
	      return this.props.rtl === false ? 'right' : 'left';
	    }
	    if (this.props.verticalSwiping === true) {
	      if (swipeAngle >= 35 && swipeAngle <= 135) {
	        return 'down';
	      } else {
	        return 'up';
	      }
	    }
	
	    return 'vertical';
	  },
	  play: function play() {
	    var nextIndex;
	
	    if (!this.state.mounted) {
	      return false;
	    }
	
	    if (this.props.rtl) {
	      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
	    } else {
	      if (this.canGoNext(_extends({}, this.props, this.state))) {
	        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
	      } else {
	        return false;
	      }
	    }
	
	    this.slideHandler(nextIndex);
	  },
	  autoPlay: function autoPlay() {
	    if (this.state.autoPlayTimer) {
	      clearTimeout(this.state.autoPlayTimer);
	    }
	    if (this.props.autoplay) {
	      this.setState({
	        autoPlayTimer: setTimeout(this.play, this.props.autoplaySpeed)
	      });
	    }
	  },
	  pause: function pause() {
	    if (this.state.autoPlayTimer) {
	      clearTimeout(this.state.autoPlayTimer);
	      this.setState({
	        autoPlayTimer: null
	      });
	    }
	  }
	};
	
	exports.default = helpers;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var fetchKeys = __webpack_require__(123);
	
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if (ret !== void 0) {
	        return !!ret;
	    }
	
	    if (objA === objB) {
	        return true;
	    }
	
	    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	        return false;
	    }
	
	    var keysA = fetchKeys(objA);
	    var keysB = fetchKeys(objB);
	
	    var len = keysA.length;
	    if (len !== keysB.length) {
	        return false;
	    }
	
	    compareContext = compareContext || null;
	
	    // Test for A's keys different from B.
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	    for (var i = 0; i < len; i++) {
	        var key = keysA[i];
	        if (!bHasOwnProperty(key)) {
	            return false;
	        }
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	        if (_ret === false || _ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	    }
	
	    return true;
	};

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */
/***/ (function(module, exports) {

	/**
	 * Helper function for iterating over a collection
	 *
	 * @param collection
	 * @param fn
	 */
	function each(collection, fn) {
	    var i      = 0,
	        length = collection.length,
	        cont;
	
	    for(i; i < length; i++) {
	        cont = fn(collection[i], i);
	        if(cont === false) {
	            break; //allow early exit
	        }
	    }
	}
	
	/**
	 * Helper function for determining whether target object is an array
	 *
	 * @param target the object under test
	 * @return {Boolean} true if array, false otherwise
	 */
	function isArray(target) {
	    return Object.prototype.toString.apply(target) === '[object Array]';
	}
	
	/**
	 * Helper function for determining whether target object is a function
	 *
	 * @param target the object under test
	 * @return {Boolean} true if function, false otherwise
	 */
	function isFunction(target) {
	    return typeof target === 'function';
	}
	
	module.exports = {
	    isFunction : isFunction,
	    isArray : isArray,
	    each : each
	};


/***/ }),
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.locatedError = locatedError;
	
	var _GraphQLError = __webpack_require__(36);
	
	/**
	 * Given an arbitrary Error, presumably thrown while attempting to execute a
	 * GraphQL operation, produce a new GraphQLError aware of the location in the
	 * document responsible for the original Error.
	 */
	function locatedError(originalError, nodes, path) {
	  // Note: this uses a brand-check to support GraphQL errors originating from
	  // other contexts.
	  if (originalError && originalError.path) {
	    return originalError;
	  }
	
	  var message = originalError ? originalError.message || String(originalError) : 'An unknown error occurred.';
	  return new _GraphQLError.GraphQLError(message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Source = undefined;
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                           *
	                                                                                                                                                           * This source code is licensed under the MIT license found in the
	                                                                                                                                                           * LICENSE file in the root directory of this source tree.
	                                                                                                                                                           *
	                                                                                                                                                           * 
	                                                                                                                                                           */
	
	/**
	 * A representation of source input to GraphQL.
	 * `name` and `locationOffset` are optional. They are useful for clients who
	 * store GraphQL documents in source files; for example, if the GraphQL input
	 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
	 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
	 * line and column in locationOffset are 1-indexed
	 */
	var Source = exports.Source = function Source(body, name, locationOffset) {
	  _classCallCheck(this, Source);
	
	  this.body = body;
	  this.name = name || 'GraphQL request';
	  this.locationOffset = locationOffset || { line: 1, column: 1 };
	  !(this.locationOffset.line > 0) ? (0, _invariant2.default)(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
	  !(this.locationOffset.column > 0) ? (0, _invariant2.default)(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
	};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.buildASTSchema = buildASTSchema;
	exports.getDeprecationReason = getDeprecationReason;
	exports.getDescription = getDescription;
	exports.buildSchema = buildSchema;
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _keyValMap = __webpack_require__(109);
	
	var _keyValMap2 = _interopRequireDefault(_keyValMap);
	
	var _valueFromAST = __webpack_require__(51);
	
	var _lexer = __webpack_require__(112);
	
	var _parser = __webpack_require__(68);
	
	var _values = __webpack_require__(108);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _schema = __webpack_require__(17);
	
	var _scalars = __webpack_require__(22);
	
	var _definition = __webpack_require__(4);
	
	var _directives = __webpack_require__(16);
	
	var _introspection = __webpack_require__(26);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function buildWrappedType(innerType, inputTypeNode) {
	  if (inputTypeNode.kind === Kind.LIST_TYPE) {
	    return new _definition.GraphQLList(buildWrappedType(innerType, inputTypeNode.type));
	  }
	  if (inputTypeNode.kind === Kind.NON_NULL_TYPE) {
	    var wrappedType = buildWrappedType(innerType, inputTypeNode.type);
	    !!(wrappedType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'No nesting nonnull.') : void 0;
	    return new _definition.GraphQLNonNull(wrappedType);
	  }
	  return innerType;
	}
	
	function getNamedTypeNode(typeNode) {
	  var namedType = typeNode;
	  while (namedType.kind === Kind.LIST_TYPE || namedType.kind === Kind.NON_NULL_TYPE) {
	    namedType = namedType.type;
	  }
	  return namedType;
	}
	
	/**
	 * This takes the ast of a schema document produced by the parse function in
	 * src/language/parser.js.
	 *
	 * If no schema definition is provided, then it will look for types named Query
	 * and Mutation.
	 *
	 * Given that AST it constructs a GraphQLSchema. The resulting schema
	 * has no resolve methods, so execution will use default resolvers.
	 */
	function buildASTSchema(ast) {
	  if (!ast || ast.kind !== Kind.DOCUMENT) {
	    throw new Error('Must provide a document ast.');
	  }
	
	  var schemaDef = void 0;
	
	  var typeDefs = [];
	  var nodeMap = Object.create(null);
	  var directiveDefs = [];
	  for (var i = 0; i < ast.definitions.length; i++) {
	    var d = ast.definitions[i];
	    switch (d.kind) {
	      case Kind.SCHEMA_DEFINITION:
	        if (schemaDef) {
	          throw new Error('Must provide only one schema definition.');
	        }
	        schemaDef = d;
	        break;
	      case Kind.SCALAR_TYPE_DEFINITION:
	      case Kind.OBJECT_TYPE_DEFINITION:
	      case Kind.INTERFACE_TYPE_DEFINITION:
	      case Kind.ENUM_TYPE_DEFINITION:
	      case Kind.UNION_TYPE_DEFINITION:
	      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
	        var typeName = d.name.value;
	        if (nodeMap[typeName]) {
	          throw new Error('Type "' + typeName + '" was defined more than once.');
	        }
	        typeDefs.push(d);
	        nodeMap[typeName] = d;
	        break;
	      case Kind.DIRECTIVE_DEFINITION:
	        directiveDefs.push(d);
	        break;
	    }
	  }
	
	  var queryTypeName = void 0;
	  var mutationTypeName = void 0;
	  var subscriptionTypeName = void 0;
	  if (schemaDef) {
	    schemaDef.operationTypes.forEach(function (operationType) {
	      var typeName = operationType.type.name.value;
	      if (operationType.operation === 'query') {
	        if (queryTypeName) {
	          throw new Error('Must provide only one query type in schema.');
	        }
	        if (!nodeMap[typeName]) {
	          throw new Error('Specified query type "' + typeName + '" not found in document.');
	        }
	        queryTypeName = typeName;
	      } else if (operationType.operation === 'mutation') {
	        if (mutationTypeName) {
	          throw new Error('Must provide only one mutation type in schema.');
	        }
	        if (!nodeMap[typeName]) {
	          throw new Error('Specified mutation type "' + typeName + '" not found in document.');
	        }
	        mutationTypeName = typeName;
	      } else if (operationType.operation === 'subscription') {
	        if (subscriptionTypeName) {
	          throw new Error('Must provide only one subscription type in schema.');
	        }
	        if (!nodeMap[typeName]) {
	          throw new Error('Specified subscription type "' + typeName + '" not found in document.');
	        }
	        subscriptionTypeName = typeName;
	      }
	    });
	  } else {
	    if (nodeMap.Query) {
	      queryTypeName = 'Query';
	    }
	    if (nodeMap.Mutation) {
	      mutationTypeName = 'Mutation';
	    }
	    if (nodeMap.Subscription) {
	      subscriptionTypeName = 'Subscription';
	    }
	  }
	
	  if (!queryTypeName) {
	    throw new Error('Must provide schema definition with query type or a type named Query.');
	  }
	
	  var innerTypeMap = {
	    String: _scalars.GraphQLString,
	    Int: _scalars.GraphQLInt,
	    Float: _scalars.GraphQLFloat,
	    Boolean: _scalars.GraphQLBoolean,
	    ID: _scalars.GraphQLID,
	    __Schema: _introspection.__Schema,
	    __Directive: _introspection.__Directive,
	    __DirectiveLocation: _introspection.__DirectiveLocation,
	    __Type: _introspection.__Type,
	    __Field: _introspection.__Field,
	    __InputValue: _introspection.__InputValue,
	    __EnumValue: _introspection.__EnumValue,
	    __TypeKind: _introspection.__TypeKind
	  };
	
	  var types = typeDefs.map(function (def) {
	    return typeDefNamed(def.name.value);
	  });
	
	  var directives = directiveDefs.map(getDirective);
	
	  // If specified directives were not explicitly declared, add them.
	  if (!directives.some(function (directive) {
	    return directive.name === 'skip';
	  })) {
	    directives.push(_directives.GraphQLSkipDirective);
	  }
	
	  if (!directives.some(function (directive) {
	    return directive.name === 'include';
	  })) {
	    directives.push(_directives.GraphQLIncludeDirective);
	  }
	
	  if (!directives.some(function (directive) {
	    return directive.name === 'deprecated';
	  })) {
	    directives.push(_directives.GraphQLDeprecatedDirective);
	  }
	
	  return new _schema.GraphQLSchema({
	    query: getObjectType(nodeMap[queryTypeName]),
	    mutation: mutationTypeName ? getObjectType(nodeMap[mutationTypeName]) : null,
	    subscription: subscriptionTypeName ? getObjectType(nodeMap[subscriptionTypeName]) : null,
	    types: types,
	    directives: directives,
	    astNode: schemaDef
	  });
	
	  function getDirective(directiveNode) {
	    return new _directives.GraphQLDirective({
	      name: directiveNode.name.value,
	      description: getDescription(directiveNode),
	      locations: directiveNode.locations.map(function (node) {
	        return node.value;
	      }),
	      args: directiveNode.arguments && makeInputValues(directiveNode.arguments),
	      astNode: directiveNode
	    });
	  }
	
	  function getObjectType(typeNode) {
	    var type = typeDefNamed(typeNode.name.value);
	    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'AST must provide object type.') : void 0;
	    return type;
	  }
	
	  function produceType(typeNode) {
	    var typeName = getNamedTypeNode(typeNode).name.value;
	    var typeDef = typeDefNamed(typeName);
	    return buildWrappedType(typeDef, typeNode);
	  }
	
	  function produceInputType(typeNode) {
	    return (0, _definition.assertInputType)(produceType(typeNode));
	  }
	
	  function produceOutputType(typeNode) {
	    return (0, _definition.assertOutputType)(produceType(typeNode));
	  }
	
	  function produceObjectType(typeNode) {
	    var type = produceType(typeNode);
	    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Expected Object type.') : void 0;
	    return type;
	  }
	
	  function produceInterfaceType(typeNode) {
	    var type = produceType(typeNode);
	    !(type instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0, 'Expected Interface type.') : void 0;
	    return type;
	  }
	
	  function typeDefNamed(typeName) {
	    if (!innerTypeMap[typeName]) {
	      if (!nodeMap[typeName]) {
	        throw new Error('Type "' + typeName + '" not found in document.');
	      }
	      innerTypeMap[typeName] = makeSchemaDef(nodeMap[typeName]);
	    }
	    return innerTypeMap[typeName];
	  }
	
	  function makeSchemaDef(def) {
	    switch (def.kind) {
	      case Kind.OBJECT_TYPE_DEFINITION:
	        return makeTypeDef(def);
	      case Kind.INTERFACE_TYPE_DEFINITION:
	        return makeInterfaceDef(def);
	      case Kind.ENUM_TYPE_DEFINITION:
	        return makeEnumDef(def);
	      case Kind.UNION_TYPE_DEFINITION:
	        return makeUnionDef(def);
	      case Kind.SCALAR_TYPE_DEFINITION:
	        return makeScalarDef(def);
	      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
	        return makeInputObjectDef(def);
	      default:
	        throw new Error('Type kind "' + def.kind + '" not supported.');
	    }
	  }
	
	  function makeTypeDef(def) {
	    var typeName = def.name.value;
	    return new _definition.GraphQLObjectType({
	      name: typeName,
	      description: getDescription(def),
	      fields: function fields() {
	        return makeFieldDefMap(def);
	      },
	      interfaces: function interfaces() {
	        return makeImplementedInterfaces(def);
	      },
	      astNode: def
	    });
	  }
	
	  function makeFieldDefMap(def) {
	    return (0, _keyValMap2.default)(def.fields, function (field) {
	      return field.name.value;
	    }, function (field) {
	      return {
	        type: produceOutputType(field.type),
	        description: getDescription(field),
	        args: makeInputValues(field.arguments),
	        deprecationReason: getDeprecationReason(field),
	        astNode: field
	      };
	    });
	  }
	
	  function makeImplementedInterfaces(def) {
	    return def.interfaces && def.interfaces.map(function (iface) {
	      return produceInterfaceType(iface);
	    });
	  }
	
	  function makeInputValues(values) {
	    return (0, _keyValMap2.default)(values, function (value) {
	      return value.name.value;
	    }, function (value) {
	      var type = produceInputType(value.type);
	      return {
	        type: type,
	        description: getDescription(value),
	        defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type),
	        astNode: value
	      };
	    });
	  }
	
	  function makeInterfaceDef(def) {
	    return new _definition.GraphQLInterfaceType({
	      name: def.name.value,
	      description: getDescription(def),
	      fields: function fields() {
	        return makeFieldDefMap(def);
	      },
	      astNode: def,
	      resolveType: cannotExecuteSchema
	    });
	  }
	
	  function makeEnumDef(def) {
	    return new _definition.GraphQLEnumType({
	      name: def.name.value,
	      description: getDescription(def),
	      values: (0, _keyValMap2.default)(def.values, function (enumValue) {
	        return enumValue.name.value;
	      }, function (enumValue) {
	        return {
	          description: getDescription(enumValue),
	          deprecationReason: getDeprecationReason(enumValue),
	          astNode: enumValue
	        };
	      }),
	      astNode: def
	    });
	  }
	
	  function makeUnionDef(def) {
	    return new _definition.GraphQLUnionType({
	      name: def.name.value,
	      description: getDescription(def),
	      types: def.types.map(function (t) {
	        return produceObjectType(t);
	      }),
	      resolveType: cannotExecuteSchema,
	      astNode: def
	    });
	  }
	
	  function makeScalarDef(def) {
	    return new _definition.GraphQLScalarType({
	      name: def.name.value,
	      description: getDescription(def),
	      astNode: def,
	      serialize: function serialize() {
	        return null;
	      },
	      // Note: validation calls the parse functions to determine if a
	      // literal value is correct. Returning null would cause use of custom
	      // scalars to always fail validation. Returning false causes them to
	      // always pass validation.
	      parseValue: function parseValue() {
	        return false;
	      },
	      parseLiteral: function parseLiteral() {
	        return false;
	      }
	    });
	  }
	
	  function makeInputObjectDef(def) {
	    return new _definition.GraphQLInputObjectType({
	      name: def.name.value,
	      description: getDescription(def),
	      fields: function fields() {
	        return makeInputValues(def.fields);
	      },
	      astNode: def
	    });
	  }
	}
	
	/**
	 * Given a field or enum value node, returns the string value for the
	 * deprecation reason.
	 */
	function getDeprecationReason(node) {
	  var deprecated = (0, _values.getDirectiveValues)(_directives.GraphQLDeprecatedDirective, node);
	  return deprecated && deprecated.reason;
	}
	
	/**
	 * Given an ast node, returns its string description based on a contiguous
	 * block full-line of comments preceding it.
	 */
	function getDescription(node) {
	  var loc = node.loc;
	  if (!loc) {
	    return;
	  }
	  var comments = [];
	  var minSpaces = void 0;
	  var token = loc.startToken.prev;
	  while (token && token.kind === _lexer.TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
	    var value = String(token.value);
	    var spaces = leadingSpaces(value);
	    if (minSpaces === undefined || spaces < minSpaces) {
	      minSpaces = spaces;
	    }
	    comments.push(value);
	    token = token.prev;
	  }
	  return comments.reverse().map(function (comment) {
	    return comment.slice(minSpaces);
	  }).join('\n');
	}
	
	/**
	 * A helper function to build a GraphQLSchema directly from a source
	 * document.
	 */
	function buildSchema(source) {
	  return buildASTSchema((0, _parser.parse)(source));
	}
	
	// Count the number of spaces on the starting side of a string.
	function leadingSpaces(str) {
	  var i = 0;
	  for (; i < str.length; i++) {
	    if (str[i] !== ' ') {
	      break;
	    }
	  }
	  return i;
	}
	
	function cannotExecuteSchema() {
	  throw new Error('Generated Schema cannot use Interface or Union types for execution.');
	}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
	                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * 
	                                                                                                                                                                                                                                                                               */
	
	exports.isValidJSValue = isValidJSValue;
	
	var _iterall = __webpack_require__(40);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _isNullish = __webpack_require__(25);
	
	var _isNullish2 = _interopRequireDefault(_isNullish);
	
	var _definition = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Given a JavaScript value and a GraphQL type, determine if the value will be
	 * accepted for that type. This is primarily useful for validating the
	 * runtime values of query variables.
	 */
	function isValidJSValue(value, type) {
	  // A value must be provided if the type is non-null.
	  if (type instanceof _definition.GraphQLNonNull) {
	    if ((0, _isNullish2.default)(value)) {
	      return ['Expected "' + String(type) + '", found null.'];
	    }
	    return isValidJSValue(value, type.ofType);
	  }
	
	  if ((0, _isNullish2.default)(value)) {
	    return [];
	  }
	
	  // Lists accept a non-list value as a list of one.
	  if (type instanceof _definition.GraphQLList) {
	    var itemType = type.ofType;
	    if ((0, _iterall.isCollection)(value)) {
	      var errors = [];
	      (0, _iterall.forEach)(value, function (item, index) {
	        errors.push.apply(errors, isValidJSValue(item, itemType).map(function (error) {
	          return 'In element #' + index + ': ' + error;
	        }));
	      });
	      return errors;
	    }
	    return isValidJSValue(value, itemType);
	  }
	
	  // Input objects check each defined field.
	  if (type instanceof _definition.GraphQLInputObjectType) {
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || value === null) {
	      return ['Expected "' + type.name + '", found not an object.'];
	    }
	    var fields = type.getFields();
	
	    var _errors = [];
	
	    // Ensure every provided field is defined.
	    Object.keys(value).forEach(function (providedField) {
	      if (!fields[providedField]) {
	        _errors.push('In field "' + providedField + '": Unknown field.');
	      }
	    });
	
	    // Ensure every defined field is valid.
	    Object.keys(fields).forEach(function (fieldName) {
	      var newErrors = isValidJSValue(value[fieldName], fields[fieldName].type);
	      _errors.push.apply(_errors, newErrors.map(function (error) {
	        return 'In field "' + fieldName + '": ' + error;
	      }));
	    });
	
	    return _errors;
	  }
	
	  !(type instanceof _definition.GraphQLScalarType || type instanceof _definition.GraphQLEnumType) ? (0, _invariant2.default)(0, 'Must be input type') : void 0;
	
	  // Scalar/Enum input checks to ensure the type can parse the value to
	  // a non-null value.
	  try {
	    var parseResult = type.parseValue(value);
	    if ((0, _isNullish2.default)(parseResult) && !type.isValidValue(value)) {
	      return ['Expected type "' + type.name + '", found ' + JSON.stringify(value) + '.'];
	    }
	  } catch (error) {
	    return ['Expected type "' + type.name + '", found ' + JSON.stringify(value) + ': ' + error.message];
	  }
	
	  return [];
	}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.badValueMessage = badValueMessage;
	exports.ArgumentsOfCorrectType = ArgumentsOfCorrectType;
	
	var _error = __webpack_require__(3);
	
	var _printer = __webpack_require__(11);
	
	var _isValidLiteralValue = __webpack_require__(69);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function badValueMessage(argName, type, value, verboseErrors) {
	  var message = verboseErrors ? '\n' + verboseErrors.join('\n') : '';
	  return 'Argument "' + argName + '" has invalid value ' + value + '.' + message;
	}
	
	/**
	 * Argument values of correct type
	 *
	 * A GraphQL document is only valid if all field argument literal values are
	 * of the type expected by their position.
	 */
	function ArgumentsOfCorrectType(context) {
	  return {
	    Argument: function Argument(node) {
	      var argDef = context.getArgument();
	      if (argDef) {
	        var errors = (0, _isValidLiteralValue.isValidLiteralValue)(argDef.type, node.value);
	        if (errors && errors.length > 0) {
	          context.reportError(new _error.GraphQLError(badValueMessage(node.name.value, argDef.type, (0, _printer.print)(node.value), errors), [node.value]));
	        }
	      }
	      return false;
	    }
	  };
	}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultForNonNullArgMessage = defaultForNonNullArgMessage;
	exports.badValueForDefaultArgMessage = badValueForDefaultArgMessage;
	exports.DefaultValuesOfCorrectType = DefaultValuesOfCorrectType;
	
	var _error = __webpack_require__(3);
	
	var _printer = __webpack_require__(11);
	
	var _definition = __webpack_require__(4);
	
	var _isValidLiteralValue = __webpack_require__(69);
	
	function defaultForNonNullArgMessage(varName, type, guessType) {
	  return 'Variable "$' + varName + '" of type "' + String(type) + '" is required and ' + 'will not use the default value. ' + ('Perhaps you meant to use type "' + String(guessType) + '".');
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	function badValueForDefaultArgMessage(varName, type, value, verboseErrors) {
	  var message = verboseErrors ? '\n' + verboseErrors.join('\n') : '';
	  return 'Variable "$' + varName + '" of type "' + String(type) + '" has invalid ' + ('default value ' + value + '.' + message);
	}
	
	/**
	 * Variable default values of correct type
	 *
	 * A GraphQL document is only valid if all variable default values are of the
	 * type expected by their definition.
	 */
	function DefaultValuesOfCorrectType(context) {
	  return {
	    VariableDefinition: function VariableDefinition(node) {
	      var name = node.variable.name.value;
	      var defaultValue = node.defaultValue;
	      var type = context.getInputType();
	      if (type instanceof _definition.GraphQLNonNull && defaultValue) {
	        context.reportError(new _error.GraphQLError(defaultForNonNullArgMessage(name, type, type.ofType), [defaultValue]));
	      }
	      if (type && defaultValue) {
	        var errors = (0, _isValidLiteralValue.isValidLiteralValue)(type, defaultValue);
	        if (errors && errors.length > 0) {
	          context.reportError(new _error.GraphQLError(badValueForDefaultArgMessage(name, type, (0, _printer.print)(defaultValue), errors), [defaultValue]));
	        }
	      }
	      return false;
	    },
	
	    SelectionSet: function SelectionSet() {
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition() {
	      return false;
	    }
	  };
	}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.undefinedFieldMessage = undefinedFieldMessage;
	exports.FieldsOnCorrectType = FieldsOnCorrectType;
	
	var _error = __webpack_require__(3);
	
	var _suggestionList = __webpack_require__(111);
	
	var _suggestionList2 = _interopRequireDefault(_suggestionList);
	
	var _quotedOrList = __webpack_require__(110);
	
	var _quotedOrList2 = _interopRequireDefault(_quotedOrList);
	
	var _definition = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function undefinedFieldMessage(fieldName, type, suggestedTypeNames, suggestedFieldNames) {
	  var message = 'Cannot query field "' + fieldName + '" on type "' + type + '".';
	  if (suggestedTypeNames.length !== 0) {
	    var suggestions = (0, _quotedOrList2.default)(suggestedTypeNames);
	    message += ' Did you mean to use an inline fragment on ' + suggestions + '?';
	  } else if (suggestedFieldNames.length !== 0) {
	    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedFieldNames) + '?';
	  }
	  return message;
	}
	
	/**
	 * Fields on correct type
	 *
	 * A GraphQL document is only valid if all fields selected are defined by the
	 * parent type, or are an allowed meta field such as __typename.
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function FieldsOnCorrectType(context) {
	  return {
	    Field: function Field(node) {
	      var type = context.getParentType();
	      if (type) {
	        var fieldDef = context.getFieldDef();
	        if (!fieldDef) {
	          // This field doesn't exist, lets look for suggestions.
	          var schema = context.getSchema();
	          var fieldName = node.name.value;
	          // First determine if there are any suggested types to condition on.
	          var suggestedTypeNames = getSuggestedTypeNames(schema, type, fieldName);
	          // If there are no suggested types, then perhaps this was a typo?
	          var suggestedFieldNames = suggestedTypeNames.length !== 0 ? [] : getSuggestedFieldNames(schema, type, fieldName);
	
	          // Report an error, including helpful suggestions.
	          context.reportError(new _error.GraphQLError(undefinedFieldMessage(fieldName, type.name, suggestedTypeNames, suggestedFieldNames), [node]));
	        }
	      }
	    }
	  };
	}
	
	/**
	 * Go through all of the implementations of type, as well as the interfaces
	 * that they implement. If any of those types include the provided field,
	 * suggest them, sorted by how often the type is referenced,  starting
	 * with Interfaces.
	 */
	function getSuggestedTypeNames(schema, type, fieldName) {
	  if ((0, _definition.isAbstractType)(type)) {
	    var suggestedObjectTypes = [];
	    var interfaceUsageCount = Object.create(null);
	    schema.getPossibleTypes(type).forEach(function (possibleType) {
	      if (!possibleType.getFields()[fieldName]) {
	        return;
	      }
	      // This object type defines this field.
	      suggestedObjectTypes.push(possibleType.name);
	      possibleType.getInterfaces().forEach(function (possibleInterface) {
	        if (!possibleInterface.getFields()[fieldName]) {
	          return;
	        }
	        // This interface type defines this field.
	        interfaceUsageCount[possibleInterface.name] = (interfaceUsageCount[possibleInterface.name] || 0) + 1;
	      });
	    });
	
	    // Suggest interface types based on how common they are.
	    var suggestedInterfaceTypes = Object.keys(interfaceUsageCount).sort(function (a, b) {
	      return interfaceUsageCount[b] - interfaceUsageCount[a];
	    });
	
	    // Suggest both interface and object types.
	    return suggestedInterfaceTypes.concat(suggestedObjectTypes);
	  }
	
	  // Otherwise, must be an Object type, which does not have possible fields.
	  return [];
	}
	
	/**
	 * For the field name provided, determine if there are any similar field names
	 * that may be the result of a typo.
	 */
	function getSuggestedFieldNames(schema, type, fieldName) {
	  if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
	    var possibleFieldNames = Object.keys(type.getFields());
	    return (0, _suggestionList2.default)(fieldName, possibleFieldNames);
	  }
	  // Otherwise, must be a Union type, which does not define fields.
	  return [];
	}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.inlineFragmentOnNonCompositeErrorMessage = inlineFragmentOnNonCompositeErrorMessage;
	exports.fragmentOnNonCompositeErrorMessage = fragmentOnNonCompositeErrorMessage;
	exports.FragmentsOnCompositeTypes = FragmentsOnCompositeTypes;
	
	var _error = __webpack_require__(3);
	
	var _printer = __webpack_require__(11);
	
	var _definition = __webpack_require__(4);
	
	var _typeFromAST = __webpack_require__(18);
	
	function inlineFragmentOnNonCompositeErrorMessage(type) {
	  return 'Fragment cannot condition on non composite type "' + String(type) + '".';
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	function fragmentOnNonCompositeErrorMessage(fragName, type) {
	  return 'Fragment "' + fragName + '" cannot condition on non composite ' + ('type "' + String(type) + '".');
	}
	
	/**
	 * Fragments on composite type
	 *
	 * Fragments use a type condition to determine if they apply, since fragments
	 * can only be spread into a composite type (object, interface, or union), the
	 * type condition must also be a composite type.
	 */
	function FragmentsOnCompositeTypes(context) {
	  return {
	    InlineFragment: function InlineFragment(node) {
	      if (node.typeCondition) {
	        var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.typeCondition);
	        if (type && !(0, _definition.isCompositeType)(type)) {
	          context.reportError(new _error.GraphQLError(inlineFragmentOnNonCompositeErrorMessage((0, _printer.print)(node.typeCondition)), [node.typeCondition]));
	        }
	      }
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.typeCondition);
	      if (type && !(0, _definition.isCompositeType)(type)) {
	        context.reportError(new _error.GraphQLError(fragmentOnNonCompositeErrorMessage(node.name.value, (0, _printer.print)(node.typeCondition)), [node.typeCondition]));
	      }
	    }
	  };
	}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unknownArgMessage = unknownArgMessage;
	exports.unknownDirectiveArgMessage = unknownDirectiveArgMessage;
	exports.KnownArgumentNames = KnownArgumentNames;
	
	var _error = __webpack_require__(3);
	
	var _find = __webpack_require__(37);
	
	var _find2 = _interopRequireDefault(_find);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _suggestionList = __webpack_require__(111);
	
	var _suggestionList2 = _interopRequireDefault(_suggestionList);
	
	var _quotedOrList = __webpack_require__(110);
	
	var _quotedOrList2 = _interopRequireDefault(_quotedOrList);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function unknownArgMessage(argName, fieldName, typeName, suggestedArgs) {
	  var message = 'Unknown argument "' + argName + '" on field "' + fieldName + '" of ' + ('type "' + typeName + '".');
	  if (suggestedArgs.length) {
	    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedArgs) + '?';
	  }
	  return message;
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	function unknownDirectiveArgMessage(argName, directiveName, suggestedArgs) {
	  var message = 'Unknown argument "' + argName + '" on directive "@' + directiveName + '".';
	  if (suggestedArgs.length) {
	    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedArgs) + '?';
	  }
	  return message;
	}
	
	/**
	 * Known argument names
	 *
	 * A GraphQL field is only valid if all supplied arguments are defined by
	 * that field.
	 */
	function KnownArgumentNames(context) {
	  return {
	    Argument: function Argument(node, key, parent, path, ancestors) {
	      var argumentOf = ancestors[ancestors.length - 1];
	      if (argumentOf.kind === Kind.FIELD) {
	        var fieldDef = context.getFieldDef();
	        if (fieldDef) {
	          var fieldArgDef = (0, _find2.default)(fieldDef.args, function (arg) {
	            return arg.name === node.name.value;
	          });
	          if (!fieldArgDef) {
	            var parentType = context.getParentType();
	            !parentType ? (0, _invariant2.default)(0) : void 0;
	            context.reportError(new _error.GraphQLError(unknownArgMessage(node.name.value, fieldDef.name, parentType.name, (0, _suggestionList2.default)(node.name.value, fieldDef.args.map(function (arg) {
	              return arg.name;
	            }))), [node]));
	          }
	        }
	      } else if (argumentOf.kind === Kind.DIRECTIVE) {
	        var directive = context.getDirective();
	        if (directive) {
	          var directiveArgDef = (0, _find2.default)(directive.args, function (arg) {
	            return arg.name === node.name.value;
	          });
	          if (!directiveArgDef) {
	            context.reportError(new _error.GraphQLError(unknownDirectiveArgMessage(node.name.value, directive.name, (0, _suggestionList2.default)(node.name.value, directive.args.map(function (arg) {
	              return arg.name;
	            }))), [node]));
	          }
	        }
	      }
	    }
	  };
	}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unknownDirectiveMessage = unknownDirectiveMessage;
	exports.misplacedDirectiveMessage = misplacedDirectiveMessage;
	exports.KnownDirectives = KnownDirectives;
	
	var _error = __webpack_require__(3);
	
	var _find = __webpack_require__(37);
	
	var _find2 = _interopRequireDefault(_find);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _directives = __webpack_require__(16);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function unknownDirectiveMessage(directiveName) {
	  return 'Unknown directive "' + directiveName + '".';
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	function misplacedDirectiveMessage(directiveName, location) {
	  return 'Directive "' + directiveName + '" may not be used on ' + location + '.';
	}
	
	/**
	 * Known directives
	 *
	 * A GraphQL document is only valid if all `@directives` are known by the
	 * schema and legally positioned.
	 */
	function KnownDirectives(context) {
	  return {
	    Directive: function Directive(node, key, parent, path, ancestors) {
	      var directiveDef = (0, _find2.default)(context.getSchema().getDirectives(), function (def) {
	        return def.name === node.name.value;
	      });
	      if (!directiveDef) {
	        context.reportError(new _error.GraphQLError(unknownDirectiveMessage(node.name.value), [node]));
	        return;
	      }
	      var candidateLocation = getDirectiveLocationForASTPath(ancestors);
	      if (!candidateLocation) {
	        context.reportError(new _error.GraphQLError(misplacedDirectiveMessage(node.name.value, node.type), [node]));
	      } else if (directiveDef.locations.indexOf(candidateLocation) === -1) {
	        context.reportError(new _error.GraphQLError(misplacedDirectiveMessage(node.name.value, candidateLocation), [node]));
	      }
	    }
	  };
	}
	
	function getDirectiveLocationForASTPath(ancestors) {
	  var appliedTo = ancestors[ancestors.length - 1];
	  switch (appliedTo.kind) {
	    case Kind.OPERATION_DEFINITION:
	      switch (appliedTo.operation) {
	        case 'query':
	          return _directives.DirectiveLocation.QUERY;
	        case 'mutation':
	          return _directives.DirectiveLocation.MUTATION;
	        case 'subscription':
	          return _directives.DirectiveLocation.SUBSCRIPTION;
	      }
	      break;
	    case Kind.FIELD:
	      return _directives.DirectiveLocation.FIELD;
	    case Kind.FRAGMENT_SPREAD:
	      return _directives.DirectiveLocation.FRAGMENT_SPREAD;
	    case Kind.INLINE_FRAGMENT:
	      return _directives.DirectiveLocation.INLINE_FRAGMENT;
	    case Kind.FRAGMENT_DEFINITION:
	      return _directives.DirectiveLocation.FRAGMENT_DEFINITION;
	    case Kind.SCHEMA_DEFINITION:
	      return _directives.DirectiveLocation.SCHEMA;
	    case Kind.SCALAR_TYPE_DEFINITION:
	      return _directives.DirectiveLocation.SCALAR;
	    case Kind.OBJECT_TYPE_DEFINITION:
	      return _directives.DirectiveLocation.OBJECT;
	    case Kind.FIELD_DEFINITION:
	      return _directives.DirectiveLocation.FIELD_DEFINITION;
	    case Kind.INTERFACE_TYPE_DEFINITION:
	      return _directives.DirectiveLocation.INTERFACE;
	    case Kind.UNION_TYPE_DEFINITION:
	      return _directives.DirectiveLocation.UNION;
	    case Kind.ENUM_TYPE_DEFINITION:
	      return _directives.DirectiveLocation.ENUM;
	    case Kind.ENUM_VALUE_DEFINITION:
	      return _directives.DirectiveLocation.ENUM_VALUE;
	    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
	      return _directives.DirectiveLocation.INPUT_OBJECT;
	    case Kind.INPUT_VALUE_DEFINITION:
	      var parentNode = ancestors[ancestors.length - 3];
	      return parentNode.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION ? _directives.DirectiveLocation.INPUT_FIELD_DEFINITION : _directives.DirectiveLocation.ARGUMENT_DEFINITION;
	  }
	}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unknownFragmentMessage = unknownFragmentMessage;
	exports.KnownFragmentNames = KnownFragmentNames;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function unknownFragmentMessage(fragName) {
	  return 'Unknown fragment "' + fragName + '".';
	}
	
	/**
	 * Known fragment names
	 *
	 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
	 * to fragments defined in the same document.
	 */
	function KnownFragmentNames(context) {
	  return {
	    FragmentSpread: function FragmentSpread(node) {
	      var fragmentName = node.name.value;
	      var fragment = context.getFragment(fragmentName);
	      if (!fragment) {
	        context.reportError(new _error.GraphQLError(unknownFragmentMessage(fragmentName), [node.name]));
	      }
	    }
	  };
	}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unknownTypeMessage = unknownTypeMessage;
	exports.KnownTypeNames = KnownTypeNames;
	
	var _error = __webpack_require__(3);
	
	var _suggestionList = __webpack_require__(111);
	
	var _suggestionList2 = _interopRequireDefault(_suggestionList);
	
	var _quotedOrList = __webpack_require__(110);
	
	var _quotedOrList2 = _interopRequireDefault(_quotedOrList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function unknownTypeMessage(type, suggestedTypes) {
	  var message = 'Unknown type "' + String(type) + '".';
	  if (suggestedTypes.length) {
	    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedTypes) + '?';
	  }
	  return message;
	}
	
	/**
	 * Known type names
	 *
	 * A GraphQL document is only valid if referenced types (specifically
	 * variable definitions and fragment conditions) are defined by the type schema.
	 */
	function KnownTypeNames(context) {
	  return {
	    // TODO: when validating IDL, re-enable these. Experimental version does not
	    // add unreferenced types, resulting in false-positive errors. Squelched
	    // errors for now.
	    ObjectTypeDefinition: function ObjectTypeDefinition() {
	      return false;
	    },
	    InterfaceTypeDefinition: function InterfaceTypeDefinition() {
	      return false;
	    },
	    UnionTypeDefinition: function UnionTypeDefinition() {
	      return false;
	    },
	    InputObjectTypeDefinition: function InputObjectTypeDefinition() {
	      return false;
	    },
	    NamedType: function NamedType(node) {
	      var schema = context.getSchema();
	      var typeName = node.name.value;
	      var type = schema.getType(typeName);
	      if (!type) {
	        context.reportError(new _error.GraphQLError(unknownTypeMessage(typeName, (0, _suggestionList2.default)(typeName, Object.keys(schema.getTypeMap()))), [node]));
	      }
	    }
	  };
	}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.anonOperationNotAloneMessage = anonOperationNotAloneMessage;
	exports.LoneAnonymousOperation = LoneAnonymousOperation;
	
	var _error = __webpack_require__(3);
	
	var _kinds = __webpack_require__(6);
	
	function anonOperationNotAloneMessage() {
	  return 'This anonymous operation must be the only defined operation.';
	}
	
	/**
	 * Lone anonymous operation
	 *
	 * A GraphQL document is only valid if when it contains an anonymous operation
	 * (the query short-hand) that it contains only that one operation definition.
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function LoneAnonymousOperation(context) {
	  var operationCount = 0;
	  return {
	    Document: function Document(node) {
	      operationCount = node.definitions.filter(function (definition) {
	        return definition.kind === _kinds.OPERATION_DEFINITION;
	      }).length;
	    },
	    OperationDefinition: function OperationDefinition(node) {
	      if (!node.name && operationCount > 1) {
	        context.reportError(new _error.GraphQLError(anonOperationNotAloneMessage(), [node]));
	      }
	    }
	  };
	}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cycleErrorMessage = cycleErrorMessage;
	exports.NoFragmentCycles = NoFragmentCycles;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function cycleErrorMessage(fragName, spreadNames) {
	  var via = spreadNames.length ? ' via ' + spreadNames.join(', ') : '';
	  return 'Cannot spread fragment "' + fragName + '" within itself' + via + '.';
	}
	
	function NoFragmentCycles(context) {
	  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
	  // are not redundantly reported.
	  var visitedFrags = Object.create(null);
	
	  // Array of AST nodes used to produce meaningful errors
	  var spreadPath = [];
	
	  // Position in the spread path
	  var spreadPathIndexByName = Object.create(null);
	
	  return {
	    OperationDefinition: function OperationDefinition() {
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      if (!visitedFrags[node.name.value]) {
	        detectCycleRecursive(node);
	      }
	      return false;
	    }
	  };
	
	  // This does a straight-forward DFS to find cycles.
	  // It does not terminate when a cycle was found but continues to explore
	  // the graph to find all possible cycles.
	  function detectCycleRecursive(fragment) {
	    var fragmentName = fragment.name.value;
	    visitedFrags[fragmentName] = true;
	
	    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
	    if (spreadNodes.length === 0) {
	      return;
	    }
	
	    spreadPathIndexByName[fragmentName] = spreadPath.length;
	
	    for (var i = 0; i < spreadNodes.length; i++) {
	      var spreadNode = spreadNodes[i];
	      var spreadName = spreadNode.name.value;
	      var cycleIndex = spreadPathIndexByName[spreadName];
	
	      if (cycleIndex === undefined) {
	        spreadPath.push(spreadNode);
	        if (!visitedFrags[spreadName]) {
	          var spreadFragment = context.getFragment(spreadName);
	          if (spreadFragment) {
	            detectCycleRecursive(spreadFragment);
	          }
	        }
	        spreadPath.pop();
	      } else {
	        var cyclePath = spreadPath.slice(cycleIndex);
	        context.reportError(new _error.GraphQLError(cycleErrorMessage(spreadName, cyclePath.map(function (s) {
	          return s.name.value;
	        })), cyclePath.concat(spreadNode)));
	      }
	    }
	
	    spreadPathIndexByName[fragmentName] = undefined;
	  }
	}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.undefinedVarMessage = undefinedVarMessage;
	exports.NoUndefinedVariables = NoUndefinedVariables;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function undefinedVarMessage(varName, opName) {
	  return opName ? 'Variable "$' + varName + '" is not defined by operation "' + opName + '".' : 'Variable "$' + varName + '" is not defined.';
	}
	
	/**
	 * No undefined variables
	 *
	 * A GraphQL operation is only valid if all variables encountered, both directly
	 * and via fragment spreads, are defined by that operation.
	 */
	function NoUndefinedVariables(context) {
	  var variableNameDefined = Object.create(null);
	
	  return {
	    OperationDefinition: {
	      enter: function enter() {
	        variableNameDefined = Object.create(null);
	      },
	      leave: function leave(operation) {
	        var usages = context.getRecursiveVariableUsages(operation);
	
	        usages.forEach(function (_ref) {
	          var node = _ref.node;
	
	          var varName = node.name.value;
	          if (variableNameDefined[varName] !== true) {
	            context.reportError(new _error.GraphQLError(undefinedVarMessage(varName, operation.name && operation.name.value), [node, operation]));
	          }
	        });
	      }
	    },
	    VariableDefinition: function VariableDefinition(node) {
	      variableNameDefined[node.variable.name.value] = true;
	    }
	  };
	}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unusedFragMessage = unusedFragMessage;
	exports.NoUnusedFragments = NoUnusedFragments;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function unusedFragMessage(fragName) {
	  return 'Fragment "' + fragName + '" is never used.';
	}
	
	/**
	 * No unused fragments
	 *
	 * A GraphQL document is only valid if all fragment definitions are spread
	 * within operations, or spread within other fragments spread within operations.
	 */
	function NoUnusedFragments(context) {
	  var operationDefs = [];
	  var fragmentDefs = [];
	
	  return {
	    OperationDefinition: function OperationDefinition(node) {
	      operationDefs.push(node);
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      fragmentDefs.push(node);
	      return false;
	    },
	
	    Document: {
	      leave: function leave() {
	        var fragmentNameUsed = Object.create(null);
	        operationDefs.forEach(function (operation) {
	          context.getRecursivelyReferencedFragments(operation).forEach(function (fragment) {
	            fragmentNameUsed[fragment.name.value] = true;
	          });
	        });
	
	        fragmentDefs.forEach(function (fragmentDef) {
	          var fragName = fragmentDef.name.value;
	          if (fragmentNameUsed[fragName] !== true) {
	            context.reportError(new _error.GraphQLError(unusedFragMessage(fragName), [fragmentDef]));
	          }
	        });
	      }
	    }
	  };
	}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unusedVariableMessage = unusedVariableMessage;
	exports.NoUnusedVariables = NoUnusedVariables;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function unusedVariableMessage(varName, opName) {
	  return opName ? 'Variable "$' + varName + '" is never used in operation "' + opName + '".' : 'Variable "$' + varName + '" is never used.';
	}
	
	/**
	 * No unused variables
	 *
	 * A GraphQL operation is only valid if all variables defined by an operation
	 * are used, either directly or within a spread fragment.
	 */
	function NoUnusedVariables(context) {
	  var variableDefs = [];
	
	  return {
	    OperationDefinition: {
	      enter: function enter() {
	        variableDefs = [];
	      },
	      leave: function leave(operation) {
	        var variableNameUsed = Object.create(null);
	        var usages = context.getRecursiveVariableUsages(operation);
	        var opName = operation.name ? operation.name.value : null;
	
	        usages.forEach(function (_ref) {
	          var node = _ref.node;
	
	          variableNameUsed[node.name.value] = true;
	        });
	
	        variableDefs.forEach(function (variableDef) {
	          var variableName = variableDef.variable.name.value;
	          if (variableNameUsed[variableName] !== true) {
	            context.reportError(new _error.GraphQLError(unusedVariableMessage(variableName, opName), [variableDef]));
	          }
	        });
	      }
	    },
	    VariableDefinition: function VariableDefinition(def) {
	      variableDefs.push(def);
	    }
	  };
	}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fieldsConflictMessage = fieldsConflictMessage;
	exports.OverlappingFieldsCanBeMerged = OverlappingFieldsCanBeMerged;
	
	var _error = __webpack_require__(3);
	
	var _find = __webpack_require__(37);
	
	var _find2 = _interopRequireDefault(_find);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _printer = __webpack_require__(11);
	
	var _definition = __webpack_require__(4);
	
	var _typeFromAST = __webpack_require__(18);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                           *
	                                                                                                                                                           * This source code is licensed under the MIT license found in the
	                                                                                                                                                           * LICENSE file in the root directory of this source tree.
	                                                                                                                                                           *
	                                                                                                                                                           * 
	                                                                                                                                                           */
	
	function fieldsConflictMessage(responseName, reason) {
	  return 'Fields "' + responseName + '" conflict because ' + reasonMessage(reason) + '. Use different aliases on the fields to fetch both if this was ' + 'intentional.';
	}
	
	function reasonMessage(reason) {
	  if (Array.isArray(reason)) {
	    return reason.map(function (_ref) {
	      var responseName = _ref[0],
	          subreason = _ref[1];
	      return 'subfields "' + responseName + '" conflict because ' + reasonMessage(subreason);
	    }).join(' and ');
	  }
	  return reason;
	}
	
	/**
	 * Overlapping fields can be merged
	 *
	 * A selection set is only valid if all fields (including spreading any
	 * fragments) either correspond to distinct response names or can be merged
	 * without ambiguity.
	 */
	function OverlappingFieldsCanBeMerged(context) {
	  // A memoization for when two fragments are compared "between" each other for
	  // conflicts. Two fragments may be compared many times, so memoizing this can
	  // dramatically improve the performance of this validator.
	  var comparedFragments = new PairSet();
	
	  // A cache for the "field map" and list of fragment names found in any given
	  // selection set. Selection sets may be asked for this information multiple
	  // times, so this improves the performance of this validator.
	  var cachedFieldsAndFragmentNames = new Map();
	
	  return {
	    SelectionSet: function SelectionSet(selectionSet) {
	      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragments, context.getParentType(), selectionSet);
	      conflicts.forEach(function (_ref2) {
	        var _ref2$ = _ref2[0],
	            responseName = _ref2$[0],
	            reason = _ref2$[1],
	            fields1 = _ref2[1],
	            fields2 = _ref2[2];
	        return context.reportError(new _error.GraphQLError(fieldsConflictMessage(responseName, reason), fields1.concat(fields2)));
	      });
	    }
	  };
	}
	// Field name and reason.
	
	// Reason is a string, or a nested list of conflicts.
	
	// Tuple defining a field node in a context.
	
	// Map of array of those.
	
	
	/**
	 * Algorithm:
	 *
	 * Conflicts occur when two fields exist in a query which will produce the same
	 * response name, but represent differing values, thus creating a conflict.
	 * The algorithm below finds all conflicts via making a series of comparisons
	 * between fields. In order to compare as few fields as possible, this makes
	 * a series of comparisons "within" sets of fields and "between" sets of fields.
	 *
	 * Given any selection set, a collection produces both a set of fields by
	 * also including all inline fragments, as well as a list of fragments
	 * referenced by fragment spreads.
	 *
	 * A) Each selection set represented in the document first compares "within" its
	 * collected set of fields, finding any conflicts between every pair of
	 * overlapping fields.
	 * Note: This is the *only time* that a the fields "within" a set are compared
	 * to each other. After this only fields "between" sets are compared.
	 *
	 * B) Also, if any fragment is referenced in a selection set, then a
	 * comparison is made "between" the original set of fields and the
	 * referenced fragment.
	 *
	 * C) Also, if multiple fragments are referenced, then comparisons
	 * are made "between" each referenced fragment.
	 *
	 * D) When comparing "between" a set of fields and a referenced fragment, first
	 * a comparison is made between each field in the original set of fields and
	 * each field in the the referenced set of fields.
	 *
	 * E) Also, if any fragment is referenced in the referenced selection set,
	 * then a comparison is made "between" the original set of fields and the
	 * referenced fragment (recursively referring to step D).
	 *
	 * F) When comparing "between" two fragments, first a comparison is made between
	 * each field in the first referenced set of fields and each field in the the
	 * second referenced set of fields.
	 *
	 * G) Also, any fragments referenced by the first must be compared to the
	 * second, and any fragments referenced by the second must be compared to the
	 * first (recursively referring to step F).
	 *
	 * H) When comparing two fields, if both have selection sets, then a comparison
	 * is made "between" both selection sets, first comparing the set of fields in
	 * the first selection set with the set of fields in the second.
	 *
	 * I) Also, if any fragment is referenced in either selection set, then a
	 * comparison is made "between" the other set of fields and the
	 * referenced fragment.
	 *
	 * J) Also, if two fragments are referenced in both selection sets, then a
	 * comparison is made "between" the two fragments.
	 *
	 */
	
	// Find all conflicts found "within" a selection set, including those found
	// via spreading in fragments. Called when visiting each SelectionSet in the
	// GraphQL Document.
	function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragments, parentType, selectionSet) {
	  var conflicts = [];
	
	  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
	      fieldMap = _getFieldsAndFragment[0],
	      fragmentNames = _getFieldsAndFragment[1];
	
	  // (A) Find find all conflicts "within" the fields of this selection set.
	  // Note: this is the *only place* `collectConflictsWithin` is called.
	
	
	  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, fieldMap);
	
	  // (B) Then collect conflicts between these fields and those represented by
	  // each spread fragment name found.
	  for (var i = 0; i < fragmentNames.length; i++) {
	    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, false, fieldMap, fragmentNames[i]);
	    // (C) Then compare this fragment with all other fragments found in this
	    // selection set to collect conflicts between fragments spread together.
	    // This compares each item in the list of fragment names to every other item
	    // in that same list (except for itself).
	    for (var j = i + 1; j < fragmentNames.length; j++) {
	      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, false, fragmentNames[i], fragmentNames[j]);
	    }
	  }
	  return conflicts;
	}
	
	// Collect all conflicts found between a set of fields and a fragment reference
	// including via spreading in any nested fragments.
	function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap, fragmentName) {
	  var fragment = context.getFragment(fragmentName);
	  if (!fragment) {
	    return;
	  }
	
	  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
	      fieldMap2 = _getReferencedFieldsA[0],
	      fragmentNames2 = _getReferencedFieldsA[1];
	
	  // (D) First collect any conflicts between the provided collection of fields
	  // and the collection of fields represented by the given fragment.
	
	
	  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap, fieldMap2);
	
	  // (E) Then collect any conflicts between the provided collection of fields
	  // and any fragment names found in the given fragment.
	  for (var i = 0; i < fragmentNames2.length; i++) {
	    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
	  }
	}
	
	// Collect all conflicts found between two fragments, including via spreading in
	// any nested fragments.
	function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fragmentName1, fragmentName2) {
	  var fragment1 = context.getFragment(fragmentName1);
	  var fragment2 = context.getFragment(fragmentName2);
	  if (!fragment1 || !fragment2) {
	    return;
	  }
	
	  // No need to compare a fragment to itself.
	  if (fragment1 === fragment2) {
	    return;
	  }
	
	  // Memoize so two fragments are not compared for conflicts more than once.
	  if (comparedFragments.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
	    return;
	  }
	  comparedFragments.add(fragmentName1, fragmentName2, areMutuallyExclusive);
	
	  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
	      fieldMap1 = _getReferencedFieldsA2[0],
	      fragmentNames1 = _getReferencedFieldsA2[1];
	
	  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
	      fieldMap2 = _getReferencedFieldsA3[0],
	      fragmentNames2 = _getReferencedFieldsA3[1];
	
	  // (F) First, collect all conflicts between these two collections of fields
	  // (not including any nested fragments).
	
	
	  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap1, fieldMap2);
	
	  // (G) Then collect conflicts between the first fragment and any nested
	  // fragments spread in the second fragment.
	  for (var j = 0; j < fragmentNames2.length; j++) {
	    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
	  }
	
	  // (G) Then collect conflicts between the second fragment and any nested
	  // fragments spread in the first fragment.
	  for (var i = 0; i < fragmentNames1.length; i++) {
	    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
	  }
	}
	
	// Find all conflicts found between two selection sets, including those found
	// via spreading in fragments. Called when determining if conflicts exist
	// between the sub-fields of two overlapping fields.
	function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
	  var conflicts = [];
	
	  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
	      fieldMap1 = _getFieldsAndFragment2[0],
	      fragmentNames1 = _getFieldsAndFragment2[1];
	
	  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
	      fieldMap2 = _getFieldsAndFragment3[0],
	      fragmentNames2 = _getFieldsAndFragment3[1];
	
	  // (H) First, collect all conflicts between these two collections of field.
	
	
	  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap1, fieldMap2);
	
	  // (I) Then collect conflicts between the first collection of fields and
	  // those referenced by each fragment name associated with the second.
	  for (var j = 0; j < fragmentNames2.length; j++) {
	    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
	  }
	
	  // (I) Then collect conflicts between the second collection of fields and
	  // those referenced by each fragment name associated with the first.
	  for (var i = 0; i < fragmentNames1.length; i++) {
	    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
	  }
	
	  // (J) Also collect conflicts between any fragment names by the first and
	  // fragment names by the second. This compares each item in the first set of
	  // names to each item in the second set of names.
	  for (var _i = 0; _i < fragmentNames1.length; _i++) {
	    for (var _j = 0; _j < fragmentNames2.length; _j++) {
	      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, fragmentNames1[_i], fragmentNames2[_j]);
	    }
	  }
	  return conflicts;
	}
	
	// Collect all Conflicts "within" one collection of fields.
	function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, fieldMap) {
	  // A field map is a keyed collection, where each key represents a response
	  // name and the value at that key is a list of all fields which provide that
	  // response name. For every response name, if there are multiple fields, they
	  // must be compared to find a potential conflict.
	  Object.keys(fieldMap).forEach(function (responseName) {
	    var fields = fieldMap[responseName];
	    // This compares every field in the list to every other field in this list
	    // (except to itself). If the list only has one item, nothing needs to
	    // be compared.
	    if (fields.length > 1) {
	      for (var i = 0; i < fields.length; i++) {
	        for (var j = i + 1; j < fields.length; j++) {
	          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragments, false, // within one collection is never mutually exclusive
	          responseName, fields[i], fields[j]);
	          if (conflict) {
	            conflicts.push(conflict);
	          }
	        }
	      }
	    }
	  });
	}
	
	// Collect all Conflicts between two collections of fields. This is similar to,
	// but different from the `collectConflictsWithin` function above. This check
	// assumes that `collectConflictsWithin` has already been called on each
	// provided collection of fields. This is true because this validator traverses
	// each individual selection set.
	function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
	  // A field map is a keyed collection, where each key represents a response
	  // name and the value at that key is a list of all fields which provide that
	  // response name. For any response name which appears in both provided field
	  // maps, each field from the first field map must be compared to every field
	  // in the second field map to find potential conflicts.
	  Object.keys(fieldMap1).forEach(function (responseName) {
	    var fields2 = fieldMap2[responseName];
	    if (fields2) {
	      var fields1 = fieldMap1[responseName];
	      for (var i = 0; i < fields1.length; i++) {
	        for (var j = 0; j < fields2.length; j++) {
	          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragments, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);
	          if (conflict) {
	            conflicts.push(conflict);
	          }
	        }
	      }
	    }
	  });
	}
	
	// Determines if there is a conflict between two particular fields, including
	// comparing their sub-fields.
	function findConflict(context, cachedFieldsAndFragmentNames, comparedFragments, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
	  var parentType1 = field1[0],
	      node1 = field1[1],
	      def1 = field1[2];
	  var parentType2 = field2[0],
	      node2 = field2[1],
	      def2 = field2[2];
	
	  // If it is known that two fields could not possibly apply at the same
	  // time, due to the parent types, then it is safe to permit them to diverge
	  // in aliased field or arguments used as they will not present any ambiguity
	  // by differing.
	  // It is known that two parent types could never overlap if they are
	  // different Object types. Interface or Union types might overlap - if not
	  // in the current state of the schema, then perhaps in some future version,
	  // thus may not safely diverge.
	
	  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && parentType1 instanceof _definition.GraphQLObjectType && parentType2 instanceof _definition.GraphQLObjectType;
	
	  // The return type for each field.
	  var type1 = def1 && def1.type;
	  var type2 = def2 && def2.type;
	
	  if (!areMutuallyExclusive) {
	    // Two aliases must refer to the same field.
	    var name1 = node1.name.value;
	    var name2 = node2.name.value;
	    if (name1 !== name2) {
	      return [[responseName, name1 + ' and ' + name2 + ' are different fields'], [node1], [node2]];
	    }
	
	    // Two field calls must have the same arguments.
	    if (!sameArguments(node1.arguments || [], node2.arguments || [])) {
	      return [[responseName, 'they have differing arguments'], [node1], [node2]];
	    }
	  }
	
	  if (type1 && type2 && doTypesConflict(type1, type2)) {
	    return [[responseName, 'they return conflicting types ' + String(type1) + ' and ' + String(type2)], [node1], [node2]];
	  }
	
	  // Collect and compare sub-fields. Use the same "visited fragment names" list
	  // for both collections so fields in a fragment reference are never
	  // compared to themselves.
	  var selectionSet1 = node1.selectionSet;
	  var selectionSet2 = node2.selectionSet;
	  if (selectionSet1 && selectionSet2) {
	    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragments, areMutuallyExclusive, (0, _definition.getNamedType)(type1), selectionSet1, (0, _definition.getNamedType)(type2), selectionSet2);
	    return subfieldConflicts(conflicts, responseName, node1, node2);
	  }
	}
	
	function sameArguments(arguments1, arguments2) {
	  if (arguments1.length !== arguments2.length) {
	    return false;
	  }
	  return arguments1.every(function (argument1) {
	    var argument2 = (0, _find2.default)(arguments2, function (argument) {
	      return argument.name.value === argument1.name.value;
	    });
	    if (!argument2) {
	      return false;
	    }
	    return sameValue(argument1.value, argument2.value);
	  });
	}
	
	function sameValue(value1, value2) {
	  return !value1 && !value2 || (0, _printer.print)(value1) === (0, _printer.print)(value2);
	}
	
	// Two types conflict if both types could not apply to a value simultaneously.
	// Composite types are ignored as their individual field types will be compared
	// later recursively. However List and Non-Null types must match.
	function doTypesConflict(type1, type2) {
	  if (type1 instanceof _definition.GraphQLList) {
	    return type2 instanceof _definition.GraphQLList ? doTypesConflict(type1.ofType, type2.ofType) : true;
	  }
	  if (type2 instanceof _definition.GraphQLList) {
	    return type1 instanceof _definition.GraphQLList ? doTypesConflict(type1.ofType, type2.ofType) : true;
	  }
	  if (type1 instanceof _definition.GraphQLNonNull) {
	    return type2 instanceof _definition.GraphQLNonNull ? doTypesConflict(type1.ofType, type2.ofType) : true;
	  }
	  if (type2 instanceof _definition.GraphQLNonNull) {
	    return type1 instanceof _definition.GraphQLNonNull ? doTypesConflict(type1.ofType, type2.ofType) : true;
	  }
	  if ((0, _definition.isLeafType)(type1) || (0, _definition.isLeafType)(type2)) {
	    return type1 !== type2;
	  }
	  return false;
	}
	
	// Given a selection set, return the collection of fields (a mapping of response
	// name to field nodes and definitions) as well as a list of fragment names
	// referenced via fragment spreads.
	function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
	  var cached = cachedFieldsAndFragmentNames.get(selectionSet);
	  if (!cached) {
	    var nodeAndDefs = Object.create(null);
	    var fragmentNames = Object.create(null);
	    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);
	    cached = [nodeAndDefs, Object.keys(fragmentNames)];
	    cachedFieldsAndFragmentNames.set(selectionSet, cached);
	  }
	  return cached;
	}
	
	// Given a reference to a fragment, return the represented collection of fields
	// as well as a list of nested fragment names referenced via fragment spreads.
	function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
	  // Short-circuit building a type from the node if possible.
	  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
	  if (cached) {
	    return cached;
	  }
	
	  var fragmentType = (0, _typeFromAST.typeFromAST)(context.getSchema(), fragment.typeCondition);
	  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
	}
	
	function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
	  for (var i = 0; i < selectionSet.selections.length; i++) {
	    var selection = selectionSet.selections[i];
	    switch (selection.kind) {
	      case Kind.FIELD:
	        var fieldName = selection.name.value;
	        var fieldDef = void 0;
	        if (parentType instanceof _definition.GraphQLObjectType || parentType instanceof _definition.GraphQLInterfaceType) {
	          fieldDef = parentType.getFields()[fieldName];
	        }
	        var responseName = selection.alias ? selection.alias.value : fieldName;
	        if (!nodeAndDefs[responseName]) {
	          nodeAndDefs[responseName] = [];
	        }
	        nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
	        break;
	      case Kind.FRAGMENT_SPREAD:
	        fragmentNames[selection.name.value] = true;
	        break;
	      case Kind.INLINE_FRAGMENT:
	        var typeCondition = selection.typeCondition;
	        var inlineFragmentType = typeCondition ? (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition) : parentType;
	        _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);
	        break;
	    }
	  }
	}
	
	// Given a series of Conflicts which occurred between two sub-fields, generate
	// a single Conflict.
	function subfieldConflicts(conflicts, responseName, node1, node2) {
	  if (conflicts.length > 0) {
	    return [[responseName, conflicts.map(function (_ref3) {
	      var reason = _ref3[0];
	      return reason;
	    })], conflicts.reduce(function (allFields, _ref4) {
	      var fields1 = _ref4[1];
	      return allFields.concat(fields1);
	    }, [node1]), conflicts.reduce(function (allFields, _ref5) {
	      var fields2 = _ref5[2];
	      return allFields.concat(fields2);
	    }, [node2])];
	  }
	}
	
	/**
	 * A way to keep track of pairs of things when the ordering of the pair does
	 * not matter. We do this by maintaining a sort of double adjacency sets.
	 */
	
	var PairSet = function () {
	  function PairSet() {
	    _classCallCheck(this, PairSet);
	
	    this._data = Object.create(null);
	  }
	
	  PairSet.prototype.has = function has(a, b, areMutuallyExclusive) {
	    var first = this._data[a];
	    var result = first && first[b];
	    if (result === undefined) {
	      return false;
	    }
	    // areMutuallyExclusive being false is a superset of being true,
	    // hence if we want to know if this PairSet "has" these two with no
	    // exclusivity, we have to ensure it was added as such.
	    if (areMutuallyExclusive === false) {
	      return result === false;
	    }
	    return true;
	  };
	
	  PairSet.prototype.add = function add(a, b, areMutuallyExclusive) {
	    _pairSetAdd(this._data, a, b, areMutuallyExclusive);
	    _pairSetAdd(this._data, b, a, areMutuallyExclusive);
	  };
	
	  return PairSet;
	}();
	
	function _pairSetAdd(data, a, b, areMutuallyExclusive) {
	  var map = data[a];
	  if (!map) {
	    map = Object.create(null);
	    data[a] = map;
	  }
	  map[b] = areMutuallyExclusive;
	}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.typeIncompatibleSpreadMessage = typeIncompatibleSpreadMessage;
	exports.typeIncompatibleAnonSpreadMessage = typeIncompatibleAnonSpreadMessage;
	exports.PossibleFragmentSpreads = PossibleFragmentSpreads;
	
	var _error = __webpack_require__(3);
	
	var _typeComparators = __webpack_require__(70);
	
	var _typeFromAST = __webpack_require__(18);
	
	var _definition = __webpack_require__(4);
	
	function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
	  return 'Fragment "' + fragName + '" cannot be spread here as objects of ' + ('type "' + String(parentType) + '" can never be of type "' + String(fragType) + '".');
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
	  return 'Fragment cannot be spread here as objects of ' + ('type "' + String(parentType) + '" can never be of type "' + String(fragType) + '".');
	}
	
	/**
	 * Possible fragment spread
	 *
	 * A fragment spread is only valid if the type condition could ever possibly
	 * be true: if there is a non-empty intersection of the possible parent types,
	 * and possible types which pass the type condition.
	 */
	function PossibleFragmentSpreads(context) {
	  return {
	    InlineFragment: function InlineFragment(node) {
	      var fragType = context.getType();
	      var parentType = context.getParentType();
	      if ((0, _definition.isCompositeType)(fragType) && (0, _definition.isCompositeType)(parentType) && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
	        context.reportError(new _error.GraphQLError(typeIncompatibleAnonSpreadMessage(parentType, fragType), [node]));
	      }
	    },
	    FragmentSpread: function FragmentSpread(node) {
	      var fragName = node.name.value;
	      var fragType = getFragmentType(context, fragName);
	      var parentType = context.getParentType();
	      if (fragType && parentType && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
	        context.reportError(new _error.GraphQLError(typeIncompatibleSpreadMessage(fragName, parentType, fragType), [node]));
	      }
	    }
	  };
	}
	
	function getFragmentType(context, name) {
	  var frag = context.getFragment(name);
	  return frag && (0, _typeFromAST.typeFromAST)(context.getSchema(), frag.typeCondition);
	}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.missingFieldArgMessage = missingFieldArgMessage;
	exports.missingDirectiveArgMessage = missingDirectiveArgMessage;
	exports.ProvidedNonNullArguments = ProvidedNonNullArguments;
	
	var _error = __webpack_require__(3);
	
	var _keyMap = __webpack_require__(38);
	
	var _keyMap2 = _interopRequireDefault(_keyMap);
	
	var _definition = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function missingFieldArgMessage(fieldName, argName, type) {
	  return 'Field "' + fieldName + '" argument "' + argName + '" of type ' + ('"' + String(type) + '" is required but not provided.');
	}
	
	function missingDirectiveArgMessage(directiveName, argName, type) {
	  return 'Directive "@' + directiveName + '" argument "' + argName + '" of type ' + ('"' + String(type) + '" is required but not provided.');
	}
	
	/**
	 * Provided required arguments
	 *
	 * A field or directive is only valid if all required (non-null) field arguments
	 * have been provided.
	 */
	function ProvidedNonNullArguments(context) {
	  return {
	    Field: {
	      // Validate on leave to allow for deeper errors to appear first.
	      leave: function leave(node) {
	        var fieldDef = context.getFieldDef();
	        if (!fieldDef) {
	          return false;
	        }
	        var argNodes = node.arguments || [];
	
	        var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
	          return arg.name.value;
	        });
	        fieldDef.args.forEach(function (argDef) {
	          var argNode = argNodeMap[argDef.name];
	          if (!argNode && argDef.type instanceof _definition.GraphQLNonNull) {
	            context.reportError(new _error.GraphQLError(missingFieldArgMessage(node.name.value, argDef.name, argDef.type), [node]));
	          }
	        });
	      }
	    },
	
	    Directive: {
	      // Validate on leave to allow for deeper errors to appear first.
	      leave: function leave(node) {
	        var directiveDef = context.getDirective();
	        if (!directiveDef) {
	          return false;
	        }
	        var argNodes = node.arguments || [];
	
	        var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
	          return arg.name.value;
	        });
	        directiveDef.args.forEach(function (argDef) {
	          var argNode = argNodeMap[argDef.name];
	          if (!argNode && argDef.type instanceof _definition.GraphQLNonNull) {
	            context.reportError(new _error.GraphQLError(missingDirectiveArgMessage(node.name.value, argDef.name, argDef.type), [node]));
	          }
	        });
	      }
	    }
	  };
	}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noSubselectionAllowedMessage = noSubselectionAllowedMessage;
	exports.requiredSubselectionMessage = requiredSubselectionMessage;
	exports.ScalarLeafs = ScalarLeafs;
	
	var _error = __webpack_require__(3);
	
	var _definition = __webpack_require__(4);
	
	function noSubselectionAllowedMessage(fieldName, type) {
	  return 'Field "' + fieldName + '" must not have a selection since ' + ('type "' + String(type) + '" has no subfields.');
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	function requiredSubselectionMessage(fieldName, type) {
	  return 'Field "' + fieldName + '" of type "' + String(type) + '" must have a ' + ('selection of subfields. Did you mean "' + fieldName + ' { ... }"?');
	}
	
	/**
	 * Scalar leafs
	 *
	 * A GraphQL document is valid only if all leaf fields (fields without
	 * sub selections) are of scalar or enum types.
	 */
	function ScalarLeafs(context) {
	  return {
	    Field: function Field(node) {
	      var type = context.getType();
	      if (type) {
	        if ((0, _definition.isLeafType)((0, _definition.getNamedType)(type))) {
	          if (node.selectionSet) {
	            context.reportError(new _error.GraphQLError(noSubselectionAllowedMessage(node.name.value, type), [node.selectionSet]));
	          }
	        } else if (!node.selectionSet) {
	          context.reportError(new _error.GraphQLError(requiredSubselectionMessage(node.name.value, type), [node]));
	        }
	      }
	    }
	  };
	}

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.singleFieldOnlyMessage = singleFieldOnlyMessage;
	exports.SingleFieldSubscriptions = SingleFieldSubscriptions;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function singleFieldOnlyMessage(name) {
	  return (name ? 'Subscription "' + name + '" ' : 'Anonymous Subscription ') + 'must select only one top level field.';
	}
	
	/**
	 * Subscriptions must only include one field.
	 *
	 * A GraphQL subscription is valid only if it contains a single root field.
	 */
	function SingleFieldSubscriptions(context) {
	  return {
	    OperationDefinition: function OperationDefinition(node) {
	      if (node.operation === 'subscription') {
	        if (node.selectionSet.selections.length !== 1) {
	          context.reportError(new _error.GraphQLError(singleFieldOnlyMessage(node.name && node.name.value), node.selectionSet.selections.slice(1)));
	        }
	      }
	    }
	  };
	}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.duplicateArgMessage = duplicateArgMessage;
	exports.UniqueArgumentNames = UniqueArgumentNames;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function duplicateArgMessage(argName) {
	  return 'There can be only one argument named "' + argName + '".';
	}
	
	/**
	 * Unique argument names
	 *
	 * A GraphQL field or directive is only valid if all supplied arguments are
	 * uniquely named.
	 */
	function UniqueArgumentNames(context) {
	  var knownArgNames = Object.create(null);
	  return {
	    Field: function Field() {
	      knownArgNames = Object.create(null);
	    },
	    Directive: function Directive() {
	      knownArgNames = Object.create(null);
	    },
	    Argument: function Argument(node) {
	      var argName = node.name.value;
	      if (knownArgNames[argName]) {
	        context.reportError(new _error.GraphQLError(duplicateArgMessage(argName), [knownArgNames[argName], node.name]));
	      } else {
	        knownArgNames[argName] = node.name;
	      }
	      return false;
	    }
	  };
	}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.duplicateDirectiveMessage = duplicateDirectiveMessage;
	exports.UniqueDirectivesPerLocation = UniqueDirectivesPerLocation;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function duplicateDirectiveMessage(directiveName) {
	  return 'The directive "' + directiveName + '" can only be used once at ' + 'this location.';
	}
	
	/**
	 * Unique directive names per location
	 *
	 * A GraphQL document is only valid if all directives at a given location
	 * are uniquely named.
	 */
	function UniqueDirectivesPerLocation(context) {
	  return {
	    // Many different AST nodes may contain directives. Rather than listing
	    // them all, just listen for entering any node, and check to see if it
	    // defines any directives.
	    enter: function enter(node) {
	      if (node.directives) {
	        var knownDirectives = Object.create(null);
	        node.directives.forEach(function (directive) {
	          var directiveName = directive.name.value;
	          if (knownDirectives[directiveName]) {
	            context.reportError(new _error.GraphQLError(duplicateDirectiveMessage(directiveName), [knownDirectives[directiveName], directive]));
	          } else {
	            knownDirectives[directiveName] = directive;
	          }
	        });
	      }
	    }
	  };
	}

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.duplicateFragmentNameMessage = duplicateFragmentNameMessage;
	exports.UniqueFragmentNames = UniqueFragmentNames;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function duplicateFragmentNameMessage(fragName) {
	  return 'There can be only one fragment named "' + fragName + '".';
	}
	
	/**
	 * Unique fragment names
	 *
	 * A GraphQL document is only valid if all defined fragments have unique names.
	 */
	function UniqueFragmentNames(context) {
	  var knownFragmentNames = Object.create(null);
	  return {
	    OperationDefinition: function OperationDefinition() {
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      var fragmentName = node.name.value;
	      if (knownFragmentNames[fragmentName]) {
	        context.reportError(new _error.GraphQLError(duplicateFragmentNameMessage(fragmentName), [knownFragmentNames[fragmentName], node.name]));
	      } else {
	        knownFragmentNames[fragmentName] = node.name;
	      }
	      return false;
	    }
	  };
	}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.duplicateInputFieldMessage = duplicateInputFieldMessage;
	exports.UniqueInputFieldNames = UniqueInputFieldNames;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function duplicateInputFieldMessage(fieldName) {
	  return 'There can be only one input field named "' + fieldName + '".';
	}
	
	/**
	 * Unique input field names
	 *
	 * A GraphQL input object value is only valid if all supplied fields are
	 * uniquely named.
	 */
	function UniqueInputFieldNames(context) {
	  var knownNameStack = [];
	  var knownNames = Object.create(null);
	
	  return {
	    ObjectValue: {
	      enter: function enter() {
	        knownNameStack.push(knownNames);
	        knownNames = Object.create(null);
	      },
	      leave: function leave() {
	        knownNames = knownNameStack.pop();
	      }
	    },
	    ObjectField: function ObjectField(node) {
	      var fieldName = node.name.value;
	      if (knownNames[fieldName]) {
	        context.reportError(new _error.GraphQLError(duplicateInputFieldMessage(fieldName), [knownNames[fieldName], node.name]));
	      } else {
	        knownNames[fieldName] = node.name;
	      }
	      return false;
	    }
	  };
	}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.duplicateOperationNameMessage = duplicateOperationNameMessage;
	exports.UniqueOperationNames = UniqueOperationNames;
	
	var _error = __webpack_require__(3);
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function duplicateOperationNameMessage(operationName) {
	  return 'There can be only one operation named "' + operationName + '".';
	}
	
	/**
	 * Unique operation names
	 *
	 * A GraphQL document is only valid if all defined operations have unique names.
	 */
	function UniqueOperationNames(context) {
	  var knownOperationNames = Object.create(null);
	  return {
	    OperationDefinition: function OperationDefinition(node) {
	      var operationName = node.name;
	      if (operationName) {
	        if (knownOperationNames[operationName.value]) {
	          context.reportError(new _error.GraphQLError(duplicateOperationNameMessage(operationName.value), [knownOperationNames[operationName.value], operationName]));
	        } else {
	          knownOperationNames[operationName.value] = operationName;
	        }
	      }
	      return false;
	    },
	
	    FragmentDefinition: function FragmentDefinition() {
	      return false;
	    }
	  };
	}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.duplicateVariableMessage = duplicateVariableMessage;
	exports.UniqueVariableNames = UniqueVariableNames;
	
	var _error = __webpack_require__(3);
	
	function duplicateVariableMessage(variableName) {
	  return 'There can be only one variable named "' + variableName + '".';
	}
	
	/**
	 * Unique variable names
	 *
	 * A GraphQL operation is only valid if all its variables are uniquely named.
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function UniqueVariableNames(context) {
	  var knownVariableNames = Object.create(null);
	  return {
	    OperationDefinition: function OperationDefinition() {
	      knownVariableNames = Object.create(null);
	    },
	    VariableDefinition: function VariableDefinition(node) {
	      var variableName = node.variable.name.value;
	      if (knownVariableNames[variableName]) {
	        context.reportError(new _error.GraphQLError(duplicateVariableMessage(variableName), [knownVariableNames[variableName], node.variable.name]));
	      } else {
	        knownVariableNames[variableName] = node.variable.name;
	      }
	    }
	  };
	}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.nonInputTypeOnVarMessage = nonInputTypeOnVarMessage;
	exports.VariablesAreInputTypes = VariablesAreInputTypes;
	
	var _error = __webpack_require__(3);
	
	var _printer = __webpack_require__(11);
	
	var _definition = __webpack_require__(4);
	
	var _typeFromAST = __webpack_require__(18);
	
	function nonInputTypeOnVarMessage(variableName, typeName) {
	  return 'Variable "$' + variableName + '" cannot be non-input type "' + typeName + '".';
	}
	
	/**
	 * Variables are input types
	 *
	 * A GraphQL operation is only valid if all the variables it defines are of
	 * input types (scalar, enum, or input object).
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function VariablesAreInputTypes(context) {
	  return {
	    VariableDefinition: function VariableDefinition(node) {
	      var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.type);
	
	      // If the variable type is not an input type, return an error.
	      if (type && !(0, _definition.isInputType)(type)) {
	        var variableName = node.variable.name.value;
	        context.reportError(new _error.GraphQLError(nonInputTypeOnVarMessage(variableName, (0, _printer.print)(node.type)), [node.type]));
	      }
	    }
	  };
	}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.badVarPosMessage = badVarPosMessage;
	exports.VariablesInAllowedPosition = VariablesInAllowedPosition;
	
	var _error = __webpack_require__(3);
	
	var _definition = __webpack_require__(4);
	
	var _typeComparators = __webpack_require__(70);
	
	var _typeFromAST = __webpack_require__(18);
	
	function badVarPosMessage(varName, varType, expectedType) {
	  return 'Variable "$' + varName + '" of type "' + String(varType) + '" used in ' + ('position expecting type "' + String(expectedType) + '".');
	}
	
	/**
	 * Variables passed to field arguments conform to type
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function VariablesInAllowedPosition(context) {
	  var varDefMap = Object.create(null);
	
	  return {
	    OperationDefinition: {
	      enter: function enter() {
	        varDefMap = Object.create(null);
	      },
	      leave: function leave(operation) {
	        var usages = context.getRecursiveVariableUsages(operation);
	
	        usages.forEach(function (_ref) {
	          var node = _ref.node,
	              type = _ref.type;
	
	          var varName = node.name.value;
	          var varDef = varDefMap[varName];
	          if (varDef && type) {
	            // A var type is allowed if it is the same or more strict (e.g. is
	            // a subtype of) than the expected type. It can be more strict if
	            // the variable type is non-null when the expected type is nullable.
	            // If both are list types, the variable item type can be more strict
	            // than the expected item type (contravariant).
	            var schema = context.getSchema();
	            var varType = (0, _typeFromAST.typeFromAST)(schema, varDef.type);
	            if (varType && !(0, _typeComparators.isTypeSubTypeOf)(schema, effectiveType(varType, varDef), type)) {
	              context.reportError(new _error.GraphQLError(badVarPosMessage(varName, varType, type), [varDef, node]));
	            }
	          }
	        });
	      }
	    },
	    VariableDefinition: function VariableDefinition(node) {
	      varDefMap[node.variable.name.value] = node;
	    }
	  };
	}
	
	// If a variable definition has a default value, it's effectively non-null.
	function effectiveType(varType, varDef) {
	  return !varDef.defaultValue || varType instanceof _definition.GraphQLNonNull ? varType : new _definition.GraphQLNonNull(varType);
	}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.specifiedRules = undefined;
	
	var _UniqueOperationNames = __webpack_require__(199);
	
	var _LoneAnonymousOperation = __webpack_require__(185);
	
	var _SingleFieldSubscriptions = __webpack_require__(194);
	
	var _KnownTypeNames = __webpack_require__(184);
	
	var _FragmentsOnCompositeTypes = __webpack_require__(180);
	
	var _VariablesAreInputTypes = __webpack_require__(201);
	
	var _ScalarLeafs = __webpack_require__(193);
	
	var _FieldsOnCorrectType = __webpack_require__(179);
	
	var _UniqueFragmentNames = __webpack_require__(197);
	
	var _KnownFragmentNames = __webpack_require__(183);
	
	var _NoUnusedFragments = __webpack_require__(188);
	
	var _PossibleFragmentSpreads = __webpack_require__(191);
	
	var _NoFragmentCycles = __webpack_require__(186);
	
	var _UniqueVariableNames = __webpack_require__(200);
	
	var _NoUndefinedVariables = __webpack_require__(187);
	
	var _NoUnusedVariables = __webpack_require__(189);
	
	var _KnownDirectives = __webpack_require__(182);
	
	var _UniqueDirectivesPerLocation = __webpack_require__(196);
	
	var _KnownArgumentNames = __webpack_require__(181);
	
	var _UniqueArgumentNames = __webpack_require__(195);
	
	var _ArgumentsOfCorrectType = __webpack_require__(177);
	
	var _ProvidedNonNullArguments = __webpack_require__(192);
	
	var _DefaultValuesOfCorrectType = __webpack_require__(178);
	
	var _VariablesInAllowedPosition = __webpack_require__(202);
	
	var _OverlappingFieldsCanBeMerged = __webpack_require__(190);
	
	var _UniqueInputFieldNames = __webpack_require__(198);
	
	/**
	 * This set includes all validation rules defined by the GraphQL spec.
	 *
	 * The order of the rules in this list has been adjusted to lead to the
	 * most clear output when encountering multiple validation errors.
	 */
	
	
	// Spec Section: "Field Selection Merging"
	
	
	// Spec Section: "Variable Default Values Are Correctly Typed"
	
	
	// Spec Section: "Argument Values Type Correctness"
	
	
	// Spec Section: "Argument Names"
	
	
	// Spec Section: "Directives Are Defined"
	
	
	// Spec Section: "All Variable Used Defined"
	
	
	// Spec Section: "Fragments must not form cycles"
	
	
	// Spec Section: "Fragments must be used"
	
	
	// Spec Section: "Fragment Name Uniqueness"
	
	
	// Spec Section: "Leaf Field Selections"
	
	
	// Spec Section: "Fragments on Composite Types"
	
	
	// Spec Section: "Subscriptions with Single Root Field"
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	// Spec Section: "Operation Name Uniqueness"
	var specifiedRules = exports.specifiedRules = [_UniqueOperationNames.UniqueOperationNames, _LoneAnonymousOperation.LoneAnonymousOperation, _SingleFieldSubscriptions.SingleFieldSubscriptions, _KnownTypeNames.KnownTypeNames, _FragmentsOnCompositeTypes.FragmentsOnCompositeTypes, _VariablesAreInputTypes.VariablesAreInputTypes, _ScalarLeafs.ScalarLeafs, _FieldsOnCorrectType.FieldsOnCorrectType, _UniqueFragmentNames.UniqueFragmentNames, _KnownFragmentNames.KnownFragmentNames, _NoUnusedFragments.NoUnusedFragments, _PossibleFragmentSpreads.PossibleFragmentSpreads, _NoFragmentCycles.NoFragmentCycles, _UniqueVariableNames.UniqueVariableNames, _NoUndefinedVariables.NoUndefinedVariables, _NoUnusedVariables.NoUnusedVariables, _KnownDirectives.KnownDirectives, _UniqueDirectivesPerLocation.UniqueDirectivesPerLocation, _KnownArgumentNames.KnownArgumentNames, _UniqueArgumentNames.UniqueArgumentNames, _ArgumentsOfCorrectType.ArgumentsOfCorrectType, _ProvidedNonNullArguments.ProvidedNonNullArguments, _DefaultValuesOfCorrectType.DefaultValuesOfCorrectType, _VariablesInAllowedPosition.VariablesInAllowedPosition, _OverlappingFieldsCanBeMerged.OverlappingFieldsCanBeMerged, _UniqueInputFieldNames.UniqueInputFieldNames];
	
	// Spec Section: "Input Object Field Uniqueness"
	
	
	// Spec Section: "All Variable Usages Are Allowed"
	
	
	// Spec Section: "Argument Optionality"
	
	
	// Spec Section: "Argument Uniqueness"
	
	
	// Spec Section: "Directives Are Unique Per Location"
	
	
	// Spec Section: "All Variables Used"
	
	
	// Spec Section: "Variable Uniqueness"
	
	
	// Spec Section: "Fragment spread is possible"
	
	
	// Spec Section: "Fragment spread target defined"
	
	
	// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"
	
	
	// Spec Section: "Variables are Input Types"
	
	
	// Spec Section: "Fragment Spread Type Existence"
	
	
	// Spec Section: "Lone Anonymous Operation"

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ValidationContext = undefined;
	exports.validate = validate;
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _error = __webpack_require__(3);
	
	var _visitor = __webpack_require__(50);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	var _schema = __webpack_require__(17);
	
	var _TypeInfo = __webpack_require__(114);
	
	var _specifiedRules = __webpack_require__(203);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                           *
	                                                                                                                                                           * This source code is licensed under the MIT license found in the
	                                                                                                                                                           * LICENSE file in the root directory of this source tree.
	                                                                                                                                                           *
	                                                                                                                                                           * 
	                                                                                                                                                           */
	
	/**
	 * Implements the "Validation" section of the spec.
	 *
	 * Validation runs synchronously, returning an array of encountered errors, or
	 * an empty array if no errors were encountered and the document is valid.
	 *
	 * A list of specific validation rules may be provided. If not provided, the
	 * default list of rules defined by the GraphQL specification will be used.
	 *
	 * Each validation rules is a function which returns a visitor
	 * (see the language/visitor API). Visitor methods are expected to return
	 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
	 *
	 * Optionally a custom TypeInfo instance may be provided. If not provided, one
	 * will be created from the provided schema.
	 */
	function validate(schema, ast, rules, typeInfo) {
	  !schema ? (0, _invariant2.default)(0, 'Must provide schema') : void 0;
	  !ast ? (0, _invariant2.default)(0, 'Must provide document') : void 0;
	  !(schema instanceof _schema.GraphQLSchema) ? (0, _invariant2.default)(0, 'Schema must be an instance of GraphQLSchema. Also ensure that there are ' + 'not multiple versions of GraphQL installed in your node_modules directory.') : void 0;
	  return visitUsingRules(schema, typeInfo || new _TypeInfo.TypeInfo(schema), ast, rules || _specifiedRules.specifiedRules);
	}
	
	/**
	 * This uses a specialized visitor which runs multiple visitors in parallel,
	 * while maintaining the visitor skip and break API.
	 *
	 * @internal
	 */
	function visitUsingRules(schema, typeInfo, documentAST, rules) {
	  var context = new ValidationContext(schema, documentAST, typeInfo);
	  var visitors = rules.map(function (rule) {
	    return rule(context);
	  });
	  // Visit the whole document with each instance of all provided rules.
	  (0, _visitor.visit)(documentAST, (0, _visitor.visitWithTypeInfo)(typeInfo, (0, _visitor.visitInParallel)(visitors)));
	  return context.getErrors();
	}
	
	/**
	 * An instance of this class is passed as the "this" context to all validators,
	 * allowing access to commonly useful contextual information from within a
	 * validation rule.
	 */
	var ValidationContext = exports.ValidationContext = function () {
	  function ValidationContext(schema, ast, typeInfo) {
	    _classCallCheck(this, ValidationContext);
	
	    this._schema = schema;
	    this._ast = ast;
	    this._typeInfo = typeInfo;
	    this._errors = [];
	    this._fragmentSpreads = new Map();
	    this._recursivelyReferencedFragments = new Map();
	    this._variableUsages = new Map();
	    this._recursiveVariableUsages = new Map();
	  }
	
	  ValidationContext.prototype.reportError = function reportError(error) {
	    this._errors.push(error);
	  };
	
	  ValidationContext.prototype.getErrors = function getErrors() {
	    return this._errors;
	  };
	
	  ValidationContext.prototype.getSchema = function getSchema() {
	    return this._schema;
	  };
	
	  ValidationContext.prototype.getDocument = function getDocument() {
	    return this._ast;
	  };
	
	  ValidationContext.prototype.getFragment = function getFragment(name) {
	    var fragments = this._fragments;
	    if (!fragments) {
	      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
	        if (statement.kind === Kind.FRAGMENT_DEFINITION) {
	          frags[statement.name.value] = statement;
	        }
	        return frags;
	      }, Object.create(null));
	    }
	    return fragments[name];
	  };
	
	  ValidationContext.prototype.getFragmentSpreads = function getFragmentSpreads(node) {
	    var spreads = this._fragmentSpreads.get(node);
	    if (!spreads) {
	      spreads = [];
	      var setsToVisit = [node];
	      while (setsToVisit.length !== 0) {
	        var set = setsToVisit.pop();
	        for (var i = 0; i < set.selections.length; i++) {
	          var selection = set.selections[i];
	          if (selection.kind === Kind.FRAGMENT_SPREAD) {
	            spreads.push(selection);
	          } else if (selection.selectionSet) {
	            setsToVisit.push(selection.selectionSet);
	          }
	        }
	      }
	      this._fragmentSpreads.set(node, spreads);
	    }
	    return spreads;
	  };
	
	  ValidationContext.prototype.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
	    var fragments = this._recursivelyReferencedFragments.get(operation);
	    if (!fragments) {
	      fragments = [];
	      var collectedNames = Object.create(null);
	      var nodesToVisit = [operation.selectionSet];
	      while (nodesToVisit.length !== 0) {
	        var _node = nodesToVisit.pop();
	        var spreads = this.getFragmentSpreads(_node);
	        for (var i = 0; i < spreads.length; i++) {
	          var fragName = spreads[i].name.value;
	          if (collectedNames[fragName] !== true) {
	            collectedNames[fragName] = true;
	            var fragment = this.getFragment(fragName);
	            if (fragment) {
	              fragments.push(fragment);
	              nodesToVisit.push(fragment.selectionSet);
	            }
	          }
	        }
	      }
	      this._recursivelyReferencedFragments.set(operation, fragments);
	    }
	    return fragments;
	  };
	
	  ValidationContext.prototype.getVariableUsages = function getVariableUsages(node) {
	    var usages = this._variableUsages.get(node);
	    if (!usages) {
	      var newUsages = [];
	      var typeInfo = new _TypeInfo.TypeInfo(this._schema);
	      (0, _visitor.visit)(node, (0, _visitor.visitWithTypeInfo)(typeInfo, {
	        VariableDefinition: function VariableDefinition() {
	          return false;
	        },
	        Variable: function Variable(variable) {
	          newUsages.push({ node: variable, type: typeInfo.getInputType() });
	        }
	      }));
	      usages = newUsages;
	      this._variableUsages.set(node, usages);
	    }
	    return usages;
	  };
	
	  ValidationContext.prototype.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
	    var usages = this._recursiveVariableUsages.get(operation);
	    if (!usages) {
	      usages = this.getVariableUsages(operation);
	      var fragments = this.getRecursivelyReferencedFragments(operation);
	      for (var i = 0; i < fragments.length; i++) {
	        Array.prototype.push.apply(usages, this.getVariableUsages(fragments[i]));
	      }
	      this._recursiveVariableUsages.set(operation, usages);
	    }
	    return usages;
	  };
	
	  ValidationContext.prototype.getType = function getType() {
	    return this._typeInfo.getType();
	  };
	
	  ValidationContext.prototype.getParentType = function getParentType() {
	    return this._typeInfo.getParentType();
	  };
	
	  ValidationContext.prototype.getInputType = function getInputType() {
	    return this._typeInfo.getInputType();
	  };
	
	  ValidationContext.prototype.getFieldDef = function getFieldDef() {
	    return this._typeInfo.getFieldDef();
	  };
	
	  ValidationContext.prototype.getDirective = function getDirective() {
	    return this._typeInfo.getDirective();
	  };
	
	  ValidationContext.prototype.getArgument = function getArgument() {
	    return this._typeInfo.getArgument();
	  };
	
	  return ValidationContext;
	}();

/***/ }),
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__(570);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__(347);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__(563);
	
	var _HelmetConstants = __webpack_require__(235);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	            * @param {Object} bodyAttributes: {"className": "root"}
	            * @param {String} defaultTitle: "Default Title"
	            * @param {Boolean} defer: true
	            * @param {Boolean} encodeSpecialCharacters: true
	            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	            * @param {String} title: "Title"
	            * @param {Object} titleAttributes: {"itemprop": "name"}
	            * @param {String} titleTemplate: "MySite.com - %s"
	            */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        defer: _propTypes2.default.bool,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        defer: true,
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),
/* 235 */
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    accesskey: "accessKey",
	    charset: "charSet",
	    class: "className",
	    contenteditable: "contentEditable",
	    contextmenu: "contextMenu",
	    "http-equiv": "httpEquiv",
	    itemprop: "itemProp",
	    tabindex: "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    DEFER: "defer",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultProps = {
	    className: '',
	    accessibility: true,
	    adaptiveHeight: false,
	    arrows: true,
	    autoplay: false,
	    autoplaySpeed: 3000,
	    centerMode: false,
	    centerPadding: '50px',
	    cssEase: 'ease',
	    customPaging: function customPaging(i) {
	        return _react2.default.createElement(
	            'button',
	            null,
	            i + 1
	        );
	    },
	    dots: false,
	    dotsClass: 'slick-dots',
	    draggable: true,
	    easing: 'linear',
	    edgeFriction: 0.35,
	    fade: false,
	    focusOnSelect: false,
	    infinite: true,
	    initialSlide: 0,
	    lazyLoad: false,
	    pauseOnHover: true,
	    responsive: null,
	    rtl: false,
	    slide: 'div',
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    speed: 500,
	    swipe: true,
	    swipeToSlide: false,
	    touchMove: true,
	    touchThreshold: 5,
	    useCSS: true,
	    variableWidth: false,
	    vertical: false,
	    waitForAnimate: true,
	    afterChange: null,
	    beforeChange: null,
	    edgeEvent: null,
	    init: null,
	    swipeEvent: null,
	    // nextArrow, prevArrow are react componets
	    nextArrow: null,
	    prevArrow: null
	};
	
	module.exports = defaultProps;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(576);

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = undefined;
	
	var _reactDom = __webpack_require__(41);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _objectAssign = __webpack_require__(7);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
	  return keysArray.reduce(function (value, key) {
	    return value && spec.hasOwnProperty(key);
	  }, true) ? null : console.error('Keys Missing', spec);
	};
	
	var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);
	
	  var trackWidth, trackHeight;
	
	  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;
	
	  if (!spec.vertical) {
	    if (spec.variableWidth) {
	      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
	    } else if (spec.centerMode) {
	      trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
	    } else {
	      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
	    }
	  } else {
	    trackHeight = trackChildren * spec.slideHeight;
	  }
	
	  var style = {
	    opacity: 1,
	    WebkitTransform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transition: '',
	    WebkitTransition: '',
	    msTransform: !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)'
	  };
	
	  if (trackWidth) {
	    (0, _objectAssign2.default)(style, { width: trackWidth });
	  }
	
	  if (trackHeight) {
	    (0, _objectAssign2.default)(style, { height: trackHeight });
	  }
	
	  // Fallback for IE8
	  if (window && !window.addEventListener && window.attachEvent) {
	    if (!spec.vertical) {
	      style.marginLeft = spec.left + 'px';
	    } else {
	      style.marginTop = spec.left + 'px';
	    }
	  }
	
	  return style;
	};
	
	var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);
	
	  var style = getTrackCSS(spec);
	  // useCSS is true by default so it can be undefined
	  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
	  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
	  return style;
	};
	
	var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {
	
	  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);
	
	  var slideOffset = 0;
	  var targetLeft;
	  var targetSlide;
	  var verticalOffset = 0;
	
	  if (spec.fade) {
	    return 0;
	  }
	
	  if (spec.infinite) {
	    if (spec.slideCount >= spec.slidesToShow) {
	      slideOffset = spec.slideWidth * spec.slidesToShow * -1;
	      verticalOffset = spec.slideHeight * spec.slidesToShow * -1;
	    }
	    if (spec.slideCount % spec.slidesToScroll !== 0) {
	      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	        if (spec.slideIndex > spec.slideCount) {
	          slideOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth * -1;
	          verticalOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideHeight * -1;
	        } else {
	          slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
	          verticalOffset = spec.slideCount % spec.slidesToScroll * spec.slideHeight * -1;
	        }
	      }
	    }
	  } else {
	
	    if (spec.slideCount % spec.slidesToScroll !== 0) {
	      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	        var slidesToOffset = spec.slidesToShow - spec.slideCount % spec.slidesToScroll;
	        slideOffset = slidesToOffset * spec.slideWidth;
	      }
	    }
	  }
	
	  if (spec.centerMode) {
	    if (spec.infinite) {
	      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	    } else {
	      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	    }
	  }
	
	  if (!spec.vertical) {
	    targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;
	  } else {
	    targetLeft = spec.slideIndex * spec.slideHeight * -1 + verticalOffset;
	  }
	
	  if (spec.variableWidth === true) {
	    var targetSlideIndex;
	    if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
	      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
	    } else {
	      targetSlideIndex = spec.slideIndex + spec.slidesToShow;
	      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
	    }
	    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	    if (spec.centerMode === true) {
	      if (spec.infinite === false) {
	        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex];
	      } else {
	        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
	      }
	
	      if (targetSlide) {
	        targetLeft = targetSlide.offsetLeft * -1 + (spec.listWidth - targetSlide.offsetWidth) / 2;
	      }
	    }
	  }
	
	  return targetLeft;
	};

/***/ }),
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _jimmy = __webpack_require__(590);
	
	var _jimmy2 = _interopRequireDefault(_jimmy);
	
	var _katherine = __webpack_require__(591);
	
	var _katherine2 = _interopRequireDefault(_katherine);
	
	var _katya = __webpack_require__(592);
	
	var _katya2 = _interopRequireDefault(_katya);
	
	var _sally = __webpack_require__(594);
	
	var _sally2 = _interopRequireDefault(_sally);
	
	var _rachel = __webpack_require__(593);
	
	var _rachel2 = _interopRequireDefault(_rachel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = [{
	  name: 'Dr. Rachel Kowert',
	  title: "Founder of Kitsune Analytics. Data Analyst and Research Consultant",
	  href: '',
	  imgSrc: _rachel2.default,
	  imgAlt: 'Dr. Rachel Kowert',
	  desc: 'Dr. Rachel Kowert is a research psychologist with more than 10 years experience in quantitative research. Her work has included the development and design of cross-sectional and longitudinal assessments within large data sets, including survey-based and experimental designs.\n\nDr. Kowert has extensive experience with a range of quantitative data analysis techniques using SPSS and AMOS, including ANOVA, MANOVA, hierarchical regression analyses, moderated and mediated regression analyses and cross-lagged path analysis via structural equation modeling. In the last ten years, she has published numerous scientific articles and four books.\n\nThrough these techniques, she is able to exact information from large amounts of data to provide actionable insight into the questions that need to be answered. Dr. Kowert is also very experienced in presenting scientific to scientific and nonscientific audiences.'
	}, {
	  name: 'Dr. Katya Krieger-Redwood',
	  title: 'Data Analyst and Research Consultant',
	  href: '',
	  imgSrc: _katya2.default,
	  imgAlt: 'Dr. Katya Krieger-Redwood',
	  desc: 'Dr. Katya Krieger-Redwood is a research scientist with a background in both psychology and cognitive neuroscience. Her work has included development, design, analysis and dissemination of animal and human based research, including a variety of brain imaging techniques.\n\nDr. Krieger-Redwood prides herself on and enjoys in depth data analysis to ensure the essence of the data is captured, the application of data to theory/practice is a key skill which she enjoys using. With experience using various statistical analyses, she is able to adapt the statistical measures needed to suit the given data.'
	}, {
	  name: 'Dr. Sally Quinn',
	  title: 'Data Analyst and Research Consultant',
	  href: '',
	  imgSrc: _sally2.default,
	  imgAlt: 'Dr. Sally Quinn',
	  desc: 'Sally gained her PhD at the University of York which looked at Social Networking Site use in early adolescence. After completing her PhD, she is now an Associate Lecturer at the University of York teaching Social Psychology and Cyberpsychology. Her research interests lie in the social uses of technology with a particular focus on the positive uses of social media and mobile technology. She has published research on social media and wellbeing in adults and children, "textspeak" in computer-mediated communication, internet use among people with intellectual disabilities, and psychosocial outcomes of online gaming. Her work has appeared in the British Journal of Developmental Psychology, Computers in Human Behavior, and Cyberpsychology, Social Networking and Behavior.'
	}, {
	  name: 'Dr. Katherine Newling',
	  title: 'Data Engineer',
	  href: '',
	  imgSrc: _katherine2.default,
	  imgAlt: 'Dr. Katherine Newling',
	  desc: 'Dr. Katherine Newling has over 6 years experience working as a research scientist. She has a background in computer science, cognitive neuroscience and bioinformatics, as well as a PhD in systems neuroscience. Dr. Newling has experience working with very different data types, including brain imaging, electrophysiological and behavioural data, as well as very large sets of next generation sequencing data (RNA-Seq). She is a highly competent programmer, having worked as a software developer before returning to research, and is experienced using various statistical tools.\n\nDr. Newling enjoys approaching problems from different angles and identifying patterns and anomalies. She is particularly enthusiastic about finding new ways to visualise datasets and deliver findings to non-technical audiences.\n\nProgramming: Java, Python, R, Matlab, Javascript, HTML\nDatabases: MongoDB, Neo4j, SQL'
	}, {
	  name: 'Jimmy Trippier',
	  title: 'Creative Consultant',
	  href: '',
	  imgSrc: _jimmy2.default,
	  imgAlt: 'Jimmy Trippier',
	  desc: 'Jimmy Trippier is a Graphic Artist and Illustrator with over 8 years in creative and advertising industries. With a broad range of experience in almost all areas of visual communications and a work style that evolves with an ever-changing industry, his background covers a multitude of disciplines from traditional brand and print design to digital, illustration and larger art direction projects. \n\nPreviously working as a Creative Designer & Art Director for the globally renowned advertising agency McCann Erickson, Jim now works as a freelance Graphic Artist and Illustrator out of Manchester, UK.\n\nJim\u2019s extensive experience in the graphic execution of illustration, typography and visual communication forms the backbone and \u2018post-production polish\u2019 with which his colleagues at Kitsune can present their findings and crucial data sets.'
	}];
	module.exports = exports['default'];

/***/ }),
/* 250 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	  // blogPostDir: "sample-posts", // The name of directory that contains your posts.
	  siteTitle: "Kitsune Analytics", // Site title.
	  siteTitleAlt: "Kitsune Analytics, LLC", // Alternative site title for SEO.
	  siteLogo: "./img/logo--kitsune--opengraph.png", // Logo used for SEO and manifest.
	  siteUrl: "https://kitsuneanalytics.com", // Domain of your website without pathPrefix.
	  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
	  siteDescription: "Bespoke data and analytics solutions", // Website description used for RSS feeds/meta description tag.
	  siteRss: "/rss.xml", // Path to the RSS file.
	  siteFBAppID: "", // FB Application ID for using app insights
	  siteGATrackingID: "UA-105181117-1", // Tracking code ID for google analytics.
	  themeColor: "#f7991c", // Used for setting manifest and progress theme colors.
	  backgroundColor: "#808284", // Used for setting manifest background color.
	  // disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
	  // postDefaultCategoryID: "Tech", // Default category for posts.
	  /* userName: "Material User", // Username to display in the author segment.
	  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
	  userLocation: "North Pole, Earth", // User location to display in the author segment.
	  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
	  userDescription:
	    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
	  // Links to social profiles/projects you want to display in the author segment/navigation bar.
	  userLinks: [
	    {
	      label: "GitHub",
	      url: "https://github.com/Vagr9K/gatsby-material-starter",
	      iconClassName: "fa fa-github"
	    },
	    {
	      label: "Twitter",
	      url: "https://twitter.com/Vagr9K",
	      iconClassName: "fa fa-twitter"
	    },
	    {
	      label: "Email",
	      url: "mailto:vagr9k@gmail.com",
	      iconClassName: "fa fa-envelope"
	    }
	  ], */
	  copyright: "© 2017 Kitsune Analytics, LLC" // Copyright string for the footer of the website and RSS feed.
	};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Alert = function Alert(props) {
	  return _react2.default.createElement('div', {
	    className: 'alert ' + props.type,
	    role: 'alert',
	    dangerouslySetInnerHTML: { __html: '<strong>Oh no!</strong> ' + props.message } // eslint-disable-line react/no-danger
	  });
	};
	
	Alert.propTypes = {
	  message: _propTypes2.default.string.isRequired,
	  type: _propTypes2.default.string
	};
	
	Alert.defaultProps = {
	  type: ''
	};
	
	exports.default = Alert;
	module.exports = exports['default'];

/***/ }),
/* 252 */,
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Bio = function Bio(_ref) {
	  var name = _ref.name,
	      title = _ref.title,
	      href = _ref.href,
	      imgSrc = _ref.imgSrc,
	      imgAlt = _ref.imgAlt,
	      desc = _ref.desc;
	  return _react2.default.createElement(
	    'div',
	    { className: 'bio' },
	    href ? _react2.default.createElement(
	      'a',
	      { href: href },
	      _react2.default.createElement('img', { className: 'photo', src: imgSrc, alt: imgAlt })
	    ) : _react2.default.createElement('img', { className: 'photo', src: imgSrc, alt: imgAlt }),
	    _react2.default.createElement(
	      'h3',
	      { className: 'name' },
	      href ? _react2.default.createElement(
	        'a',
	        { href: href },
	        name
	      ) : _react2.default.createElement(
	        'span',
	        null,
	        name
	      )
	    ),
	    title && _react2.default.createElement(
	      'h4',
	      { className: 'title' },
	      title
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'description' },
	      desc.split(/\r?\n/).map(function (text, index) {
	        return _react2.default.createElement(
	          'p',
	          { key: index },
	          text
	        );
	      } // eslint-disable-line react/no-array-index-key
	      )
	    )
	  );
	};
	
	Bio.propTypes = {
	  name: _propTypes2.default.string.isRequired,
	  title: _propTypes2.default.string,
	  href: _propTypes2.default.string,
	  imgSrc: _propTypes2.default.string,
	  imgAlt: _propTypes2.default.string,
	  desc: _propTypes2.default.string.isRequired
	};
	
	Bio.defaultProps = {
	  title: '',
	  href: '',
	  imgSrc: '',
	  imgAlt: ''
	};
	
	exports.default = Bio;
	module.exports = exports['default'];

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSlick = __webpack_require__(240);
	
	var _reactSlick2 = _interopRequireDefault(_reactSlick);
	
	var _Bio = __webpack_require__(253);
	
	var _Bio2 = _interopRequireDefault(_Bio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BiosCarousel = function (_React$Component) {
	  _inherits(BiosCarousel, _React$Component);
	
	  function BiosCarousel(props) {
	    _classCallCheck(this, BiosCarousel);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  BiosCarousel.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.currentSlideIndex !== prevProps.currentSlideIndex) {
	      this.slider.slickGoTo(this.props.currentSlideIndex);
	    }
	  };
	
	  BiosCarousel.prototype.handleChange = function handleChange(nextSlide) {
	    this.props.onSlideIndexChange(nextSlide);
	  };
	
	  BiosCarousel.prototype.render = function render() {
	    var _this2 = this;
	
	    /* customPaging: (i) => {
	        return <a><img src={bios[i].imgSrc}/></a>
	      }, */
	    var currentSlideIndex = this.props.currentSlideIndex;
	    var settings = {
	      accessibility: true,
	      arrows: false,
	      beforeChange: function beforeChange(currentSlide, nextSlide) {
	        // console.log('beforeChange', currentSlide, nextSlide);
	        _this2.handleChange(nextSlide);
	      },
	      className: 'bios',
	      dots: false,
	      fade: true,
	      infinite: true,
	      responsive: [{
	        breakpoint: 960,
	        settings: 'unslick'
	      }],
	      speed: 600,
	      // slickGoTo: currentSlideIndex,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      swipeToSlide: true
	    };
	
	    var bios = this.props.bios;
	
	    return _react2.default.createElement(
	      _reactSlick2.default,
	      _extends({}, settings, { ref: function ref(slider) {
	          _this2.slider = slider;
	        } }),
	      bios.map(function (bio, index) {
	        return _react2.default.createElement(
	          'div',
	          { key: index },
	          _react2.default.createElement(_Bio2.default, bio)
	        );
	      } // eslint-disable-line react/no-array-index-key
	      )
	    );
	  };
	
	  return BiosCarousel;
	}(_react2.default.Component);
	
	BiosCarousel.propTypes = {
	  bios: _propTypes2.default.array.isRequired, // eslint-disable-line react/forbid-prop-types
	  currentSlideIndex: _propTypes2.default.number,
	  onSlideIndexChange: _propTypes2.default.func
	};
	
	BiosCarousel.defaultProps = {
	  currentSlideIndex: 0,
	  onSlideIndexChange: function onSlideIndexChange() {}
	};
	exports.default = BiosCarousel;
	module.exports = exports['default'];

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSlick = __webpack_require__(240);
	
	var _reactSlick2 = _interopRequireDefault(_reactSlick);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-array-index-key */
	
	
	var BiosNavCarousel = function (_React$Component) {
	  _inherits(BiosNavCarousel, _React$Component);
	
	  function BiosNavCarousel(props) {
	    _classCallCheck(this, BiosNavCarousel);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  BiosNavCarousel.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.currentSlideIndex !== prevProps.currentSlideIndex) {
	      this.slider.slickGoTo(this.props.currentSlideIndex);
	    }
	  };
	
	  BiosNavCarousel.prototype.handleChange = function handleChange(nextSlide) {
	    this.props.onSlideIndexChange(nextSlide);
	  };
	
	  BiosNavCarousel.prototype.render = function render() {
	    var _this2 = this;
	
	    // const currentSlideIndex = this.props.currentSlideIndex;
	    var settings = {
	      accessibility: true,
	      arrows: true,
	      // afterChange={this.props.afterChange
	      beforeChange: function beforeChange(currentSlide, nextSlide) {
	        // console.log('beforeChange', currentSlide, nextSlide);
	        _this2.handleChange(nextSlide);
	      },
	      centerMode: true,
	      centerPadding: '0px',
	      className: 'bios-nav',
	      focusOnSelect: true,
	      // dots: false,
	      // fade: true,
	      infinite: true,
	      initialSlide: 0,
	      responsive: [{
	        breakpoint: 960,
	        settings: 'unslick'
	        /*
	        {
	          breakpoint: 660,
	          settings: {
	            arrows: true,
	            slidesToShow: 1
	          }
	        },{
	          breakpoint: 900,
	          settings: {
	            arrows: true,
	            centerPadding: '32px',
	            slidesToShow: 3
	          }
	        }
	        */
	      }],
	      speed: 600,
	      // slickGoTo: currentSlideIndex,
	      slidesToShow: 5,
	      slidesToScroll: 1,
	      swipeToSlide: false
	    };
	
	    var bios = this.props.bios;
	
	    return _react2.default.createElement(
	      _reactSlick2.default,
	      _extends({}, settings, { ref: function ref(slider) {
	          _this2.slider = slider;
	        } }),
	      bios.map(function (bio, index) {
	        return _react2.default.createElement(
	          'div',
	          { key: index },
	          _react2.default.createElement(
	            'div',
	            { className: 'bio-photo' },
	            _react2.default.createElement('img', { className: 'photo', src: bio.imgSrc, alt: bio.imgAlt })
	          )
	        );
	      })
	    );
	  };
	
	  return BiosNavCarousel;
	}(_react2.default.Component);
	
	BiosNavCarousel.propTypes = {
	  bios: _propTypes2.default.array.isRequired, // eslint-disable-line react/forbid-prop-types
	  currentSlideIndex: _propTypes2.default.number,
	  onSlideIndexChange: _propTypes2.default.func
	};
	
	BiosNavCarousel.defaultProps = {
	  currentSlideIndex: 0,
	  onSlideIndexChange: function onSlideIndexChange() {}
	};
	
	exports.default = BiosNavCarousel;
	module.exports = exports['default'];

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Alert = __webpack_require__(251);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _ContactFormThankYou = __webpack_require__(257);
	
	var _ContactFormThankYou2 = _interopRequireDefault(_ContactFormThankYou);
	
	var _Loader = __webpack_require__(258);
	
	var _Loader2 = _interopRequireDefault(_Loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import PropTypes from 'prop-types';
	
	// import FormGroup from './forms/FormGroup';
	
	
	/*
	function withLoader(WrappedComponent) {
	  return class WithLoader extends React.Component {
	    render() {
	      // Use JSX spread syntax to pass all props and state down automatically.
	      return (
	        <Loader>
	          <WrappedComponent {...this.props} {...this.state} />;
	        </Loader>
	      )
	    }
	  };
	}
	*/
	
	/**
	 * Submit form data for processing
	 *
	 * @param formData
	 * @returns {Promise}
	 */
	function submitForm(formData) {
	  var url = 'https://script.google.com/macros/s/AKfycbxPn3hDmkkdrpJaj5MVYTqqkLxCaqTXbgSJ3xvIK39t-mHqHXqs/exec';
	  // this.setState({ error: '' });
	
	  // Create new promise with the Promise() constructor;
	  // This has as its argument a function
	  // with two parameters, resolve and reject
	  return new Promise(function (resolve, reject) {
	    // Standard XHR to load an image
	    var request = new XMLHttpRequest();
	    request.open('POST', url);
	    // request.responseType = 'blob';
	    // request.withCredentials = true;
	    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	    // When the request loads, check whether it was successful
	    request.onload = function () {
	      if (request.status === 200) {
	        // If successful, resolve the promise by passing back the request response
	        resolve(request.response);
	      } else {
	        // If it fails, reject the promise with a error message
	        reject(Error('Failed to submit form; error code: ' + request.statusText));
	      }
	    };
	    request.onerror = function () {
	      // Also deal with the case when the entire request fails to begin with
	      // This is probably a network error, so reject the promise with an appropriate message
	      reject(Error('There was a network error.'));
	    };
	
	    // url encode form data for sending as post data
	    var encodedFormData = Object.keys(formData).map(function (k) {
	      return encodeURIComponent(k) + '=' + encodeURIComponent(formData[k]);
	    }).join('&');
	
	    // Send the request
	    request.send(encodedFormData);
	  });
	}
	
	// @todo should only re-render if form has been modified
	
	var ContactForm = function (_React$Component) {
	  _inherits(ContactForm, _React$Component);
	
	  function ContactForm(props) {
	    _classCallCheck(this, ContactForm);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.fieldRefs = {};
	
	    _this.state = {
	
	      // Form's field values
	      input: {
	        name: '',
	        companyName: '',
	        phone: '',
	        email: '',
	        emailConfirm: '',
	        comment: ''
	      },
	
	      // Form's failed submission error message
	      error: '',
	
	      // Is the form currently "loading"? (i.e., is it submitting?)
	      loading: false,
	
	      // Has the form been submitted?
	      submitted: false,
	
	      // Keep track of which form fields have been "touched" (i.e., received focus and then blurred)
	      touched: {
	        name: false,
	        companyName: false,
	        phone: false,
	        email: false,
	        emailConfirm: false,
	        comment: false
	      },
	
	      // Has the form been validated?
	      validated: false
	    };
	
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }
	
	  ContactForm.prototype.componentDidMount = function componentDidMount() {}
	  // const fieldRefs = this.fieldRefs;
	  // ...do something with component
	
	
	  /**
	   * Handle form field blur events
	   *
	   * @param event
	   */
	  ;
	
	  ContactForm.prototype.handleBlur = function handleBlur(event) {
	    var _extends2;
	
	    // Flag this field as having been "touched"
	    this.setState({
	      touched: _extends({}, this.state.touched, (_extends2 = {}, _extends2[event.target.name] = true, _extends2))
	    });
	  };
	
	  /**
	   * Handle form field change events
	   *
	   * @param event
	   */
	  ContactForm.prototype.handleChange = function handleChange(event) {
	    var _extends3;
	
	    var target = event.target;
	    var value = target.type === 'checkbox' ? target.checked : target.value;
	    var name = target.name;
	    // console.log('handleChange', {target, value, name});
	
	    target.classList.add('active');
	
	    // If field has empty value, then show placeholder
	    target.classList[value ? 'remove' : 'add']('placeholder-shown');
	    // console.log(target.classList);
	
	    // Store input's value in form's state
	    this.setState({
	      input: _extends({}, this.state.input, (_extends3 = {}, _extends3[name] = value, _extends3))
	    });
	  };
	
	  /**
	   * Handle form submit event
	   *
	   * @param e
	   */
	
	
	  ContactForm.prototype.handleSubmit = function handleSubmit(e) {
	    var that = this;
	
	    // Prevent default form submission logic (i.e., ignore the "action" attribute)
	    e.preventDefault();
	
	    // Flag all fields as having been "touched", which has the intended side-effect of
	    // displaying validation errors for each field.
	    this.setState({
	      touched: {
	        name: true,
	        companyName: true,
	        phone: true,
	        email: true,
	        emailConfirm: true,
	        comment: true
	      }
	    });
	
	    // console.log('component state', JSON.stringify(this.state.input));
	
	    // Can the form be submitted? All required input is present and valid?
	    if (!this.canBeSubmitted()) {
	      // console.log('Form is invalid! :( Aborting submission.');
	      return;
	    }
	
	    // console.log('Form is valid. :) Proceeding with submission');
	    this.setState({ validated: true, loading: true });
	
	    var formPayload = this.state.input;
	
	    // Submit form
	    submitForm(formPayload).then(function () {
	      // Hide form; replace with "Thank you" message
	      that.setState({ loading: false, submitted: true });
	    }).catch(function () {
	      // Show error to user
	      // console.error(error);
	      that.setState({
	        loading: false,
	        submitted: false,
	        validated: false,
	        error: 'An error occurred while trying to submit the form. Please try again. If the error persists, then please email us at <a href="mailto:help@kitsuneanalytics.com">help@kitsuneanalytics.com</a>.'
	      });
	    });
	  };
	
	  ContactForm.prototype.validateField = function validateField(fieldName) {
	    var validity = this.fieldRefs[fieldName].validity;
	    var label = document.querySelector('label[for="contact-' + fieldName + '"]').textContent;
	    var isEmail = fieldName.indexOf('email') !== -1;
	    var isEmailConfirm = fieldName === 'emailConfirm';
	
	    if (isEmailConfirm) {
	      // } || (refName === 'email' && this.refs.emailConfirm.value)) {
	      if (this.fieldRefs.email.value !== this.fieldRefs.emailConfirm.value) {
	        // console.log(this.refs.email.value, this.refs.emailConfirm.value);
	        this.fieldRefs.emailConfirm.setCustomValidity('Email addresses do not match');
	      } else {
	        this.fieldRefs.emailConfirm.setCustomValidity('');
	      }
	    }
	
	    if (!validity.valid) {
	      if (validity.valueMissing) {
	        return label + ' is a required field';
	      } else if (isEmail && validity.typeMismatch) {
	        return label + ' should be a valid email address';
	        // } else if (isPassword && validity.patternMismatch) {
	        //  error.textContent = `${label} should be longer than 4 chars`;
	      } else if (isEmailConfirm && validity.customError) {
	        return 'Email addresses do not match';
	      }
	    }
	
	    return '';
	  };
	
	  ContactForm.prototype.validate = function validate() {
	    var _this2 = this;
	
	    // console.log('validate', Object.keys(this.refs));
	    if (Object.keys(this.fieldRefs).length === 0) {
	      return {};
	    }
	
	    var errors = {};
	
	    // Object.keys(this.state.input).map(this.validateField.bind(this));
	    Object.keys(this.state.input).forEach(function (fieldName) {
	      errors[fieldName] = _this2.validateField(fieldName);
	    });
	
	    // console.log('errors', errors);
	
	    return errors;
	  };
	
	  ContactForm.prototype.canBeSubmitted = function canBeSubmitted() {
	    // console.log('canBeSubmitted?');
	    var errors = this.validate();
	    var formHasErrors = Object.keys(errors).some(function (x) {
	      return errors[x];
	    });
	    return !formHasErrors;
	  };
	
	  ContactForm.prototype.render = function render() {
	    var _this3 = this;
	
	    // console.log('render');
	    var errors = this.validate();
	    var formHasErrors = Object.keys(errors).some(function (x) {
	      return errors[x];
	    });
	    var allTouched = Object.keys(this.state.touched).every(function (x) {
	      return _this3.state.touched[x];
	    });
	    var loading = this.state.loading;
	    var validated = this.state.validated;
	    var submitted = this.state.submitted;
	    var submitError = this.state.error;
	    var formClassNames = ['collapsible-wrapper', loading ? 'loading' : '', validated ? 'validated' : '', formHasErrors ? '' : 'submittable', submitted ? 'submitted collapsed' : '', submitError ? 'submitError' : ''];
	
	    var shouldMarkError = function shouldMarkError(field) {
	      var hasError = errors[field];
	      var shouldShow = _this3.state.touched[field];
	
	      // return hasError ? shouldShow : false;
	      return hasError && shouldShow;
	    };
	
	    return _react2.default.createElement(
	      'form',
	      {
	        id: 'contact-form',
	        className: formClassNames.join(' '),
	        onSubmit: this.handleSubmit,
	        noValidate: true
	      },
	      _react2.default.createElement(_Loader2.default, { loading: loading }),
	      _react2.default.createElement(_Alert2.default, { type: 'error', message: submitError }),
	      _react2.default.createElement(
	        'div',
	        { className: 'collapsible' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + (shouldMarkError('name') ? 'error' : '') },
	          _react2.default.createElement('input', {
	            className: 'form-control placeholder-shown',
	            type: 'text',
	            id: 'contact-name',
	            name: 'name',
	            ref: function ref(c) {
	              _this3.fieldRefs.name = c;
	            },
	            value: this.state.input.name,
	            onBlur: this.handleBlur,
	            onChange: this.handleChange,
	            required: true
	          }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'contact-name' },
	            'Name'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'error-message', id: 'name-error' },
	            errors.name
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + (shouldMarkError('companyName') ? 'error' : '') },
	          _react2.default.createElement('input', {
	            className: 'form-control placeholder-shown',
	            type: 'text',
	            id: 'contact-companyName',
	            name: 'companyName',
	            ref: function ref(c) {
	              _this3.fieldRefs.companyName = c;
	            },
	            value: this.state.input.companyName,
	            onBlur: this.handleBlur,
	            onChange: this.handleChange
	          }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'contact-companyName' },
	            'Company Name'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'error-message', id: 'companyName-error' },
	            errors.companyName
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + (shouldMarkError('phone') ? 'error' : '') },
	          _react2.default.createElement('input', {
	            className: 'form-control placeholder-shown',
	            type: 'phone',
	            id: 'contact-phone',
	            name: 'phone',
	            ref: function ref(c) {
	              _this3.fieldRefs.phone = c;
	            },
	            value: this.state.input.phone,
	            onBlur: this.handleBlur,
	            onChange: this.handleChange
	          }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'contact-phone' },
	            'Phone'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'error-message', id: 'phone-error' },
	            errors.phone
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + (shouldMarkError('email') ? 'error' : '') },
	          _react2.default.createElement('input', {
	            className: 'form-control placeholder-shown',
	            type: 'email',
	            id: 'contact-email',
	            name: 'email',
	            ref: function ref(c) {
	              _this3.fieldRefs.email = c;
	            },
	            value: this.state.input.email,
	            onBlur: this.handleBlur,
	            onChange: this.handleChange,
	            required: true
	          }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'contact-email' },
	            'Email'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'error-message', id: 'email-error' },
	            errors.email
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + (shouldMarkError('emailConfirm') ? 'error' : '') },
	          _react2.default.createElement('input', {
	            className: 'form-control placeholder-shown',
	            type: 'email',
	            id: 'contact-emailConfirm',
	            name: 'emailConfirm',
	            ref: function ref(c) {
	              _this3.fieldRefs.emailConfirm = c;
	            },
	            value: this.state.input.emailConfirm,
	            onBlur: this.handleBlur,
	            onChange: this.handleChange,
	            required: true
	          }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'contact-emailConfirm' },
	            'Confirm Email'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'error-message', id: 'emailConfirm-error' },
	            errors.emailConfirm
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + (shouldMarkError('comment') ? 'error' : '') },
	          _react2.default.createElement('textarea', {
	            className: 'form-group placeholder-shown',
	            id: 'contact-comment',
	            name: 'comment',
	            ref: function ref(c) {
	              _this3.fieldRefs.comment = c;
	            },
	            value: this.state.input.comment,
	            onBlur: this.handleBlur,
	            onChange: this.handleChange
	          }),
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'contact-comment' },
	            'Comment'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'error-message', id: 'comment-error' },
	            errors.comment
	          )
	        ),
	        _react2.default.createElement(
	          'button',
	          {
	            className: 'btn btn-primary btn-submit ' + (formHasErrors && allTouched ? 'btn-error' : '') + ' ' + (validated ? 'btn-success' : ''),
	            onClick: this.handleSubmit
	          },
	          'Submit'
	        )
	      ),
	      _react2.default.createElement(_ContactFormThankYou2.default, null)
	    );
	  };
	
	  return ContactForm;
	}(_react2.default.Component);
	
	exports.default = ContactForm;
	module.exports = exports['default'];

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ContactFormThankYou = function ContactFormThankYou() {
	  return _react2.default.createElement(
	    "div",
	    { className: "contact-thankYou" },
	    _react2.default.createElement(
	      "h3",
	      null,
	      "Thank you"
	    ),
	    _react2.default.createElement(
	      "p",
	      null,
	      "A member of our team will respond to your inquiry soon."
	    )
	  );
	};
	
	exports.default = ContactFormThankYou;
	module.exports = exports["default"];

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Loader = function Loader(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'loader ' + (props.loading ? 'loading' : '') },
	    _react2.default.createElement('div', { className: 'spinner' })
	  );
	};
	
	Loader.propTypes = {
	  loading: _propTypes2.default.bool
	};
	
	Loader.defaultProps = {
	  loading: false
	};
	
	exports.default = Loader;
	module.exports = exports['default'];

/***/ }),
/* 259 */,
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactHelmet = __webpack_require__(234);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _SiteConfig = __webpack_require__(250);
	
	var _SiteConfig2 = _interopRequireDefault(_SiteConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SEO = function SEO(props) {
	  var postNode = props.postNode,
	      postPath = props.postPath,
	      postSEO = props.postSEO;
	
	  var title = void 0;
	  var description = void 0;
	  var image = void 0;
	  var postURL = void 0;
	
	  if (postSEO) {
	    var postMeta = postNode.frontmatter;
	    title = postMeta.title;
	    description = postMeta.description ? postMeta.description : postNode.excerpt;
	    image = postMeta.cover;
	    postURL = _SiteConfig2.default.siteUrl + _SiteConfig2.default.pathPrefix + postPath;
	  } else {
	    title = _SiteConfig2.default.siteTitle;
	    description = _SiteConfig2.default.siteDescription;
	    image = _SiteConfig2.default.siteLogo;
	  }
	  var realPrefix = _SiteConfig2.default.pathPrefix === "/" ? "" : _SiteConfig2.default.pathPrefix;
	  image = _SiteConfig2.default.siteUrl + realPrefix + image;
	  var blogURL = _SiteConfig2.default.siteUrl + _SiteConfig2.default.pathPrefix;
	  var schemaOrgJSONLD = [{
	    "@context": "http://schema.org",
	    "@type": "WebSite",
	    url: blogURL,
	    name: title,
	    alternateName: _SiteConfig2.default.siteTitleAlt ? _SiteConfig2.default.siteTitleAlt : ""
	  }];
	  if (postSEO) {
	    schemaOrgJSONLD.push([{
	      "@context": "http://schema.org",
	      "@type": "BreadcrumbList",
	      itemListElement: [{
	        "@type": "ListItem",
	        position: 1,
	        item: {
	          "@id": postURL,
	          name: title,
	          image: image
	        }
	      }]
	    }, {
	      "@context": "http://schema.org",
	      "@type": "BlogPosting",
	      url: blogURL,
	      name: title,
	      alternateName: _SiteConfig2.default.siteTitleAlt ? _SiteConfig2.default.siteTitleAlt : "",
	      headline: title,
	      image: {
	        "@type": "ImageObject",
	        url: image
	      },
	      description: description
	    }]);
	  }
	  return _react2.default.createElement(
	    _reactHelmet2.default,
	    null,
	    _react2.default.createElement('meta', { name: 'description', content: description }),
	    _react2.default.createElement('meta', { name: 'image', content: image }),
	    _react2.default.createElement(
	      'script',
	      { type: 'application/ld+json' },
	      JSON.stringify(schemaOrgJSONLD)
	    ),
	    _react2.default.createElement('meta', { property: 'og:url', content: postSEO ? postURL : blogURL }),
	    postSEO ? _react2.default.createElement('meta', { property: 'og:type', content: 'article' }) : null,
	    _react2.default.createElement('meta', { property: 'og:title', content: title }),
	    _react2.default.createElement('meta', { property: 'og:description', content: description }),
	    _react2.default.createElement('meta', { property: 'og:image', content: image }),
	    _react2.default.createElement('meta', {
	      property: 'fb:app_id',
	      content: _SiteConfig2.default.siteFBAppID ? _SiteConfig2.default.siteFBAppID : ""
	    }),
	    _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),
	    _react2.default.createElement('meta', {
	      name: 'twitter:creator',
	      content: _SiteConfig2.default.userTwitter ? _SiteConfig2.default.userTwitter : ""
	    }),
	    _react2.default.createElement('meta', { name: 'twitter:title', content: title }),
	    _react2.default.createElement('meta', { name: 'twitter:description', content: description }),
	    _react2.default.createElement('meta', { name: 'twitter:image', content: image })
	  );
	};
	
	SEO.propTypes = {
	  postNode: _propTypes2.default.node,
	  postPath: _propTypes2.default.string,
	  postSEO: _propTypes2.default.bool
	};
	
	SEO.defaultProps = {
	  postNode: null,
	  postPath: '',
	  postSEO: false
	};
	
	exports.default = SEO;
	module.exports = exports['default'];

/***/ }),
/* 261 */,
/* 262 */,
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BiosCarousel = __webpack_require__(254);
	
	var _BiosCarousel2 = _interopRequireDefault(_BiosCarousel);
	
	var _BiosNavCarousel = __webpack_require__(255);
	
	var _BiosNavCarousel2 = _interopRequireDefault(_BiosNavCarousel);
	
	var _Bios = __webpack_require__(249);
	
	var _Bios2 = _interopRequireDefault(_Bios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TeamCarousel = function (_React$Component) {
	  _inherits(TeamCarousel, _React$Component);
	
	  function TeamCarousel(props) {
	    _classCallCheck(this, TeamCarousel);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      currentSlideIndex: 0
	    };
	
	    _this.handleSlideIndexChange = _this.handleSlideIndexChange.bind(_this);
	    return _this;
	  }
	
	  TeamCarousel.prototype.handleSlideIndexChange = function handleSlideIndexChange(newSlideIndex) {
	    // console.log('handleSlideIndexChange', newSlideIndex);
	    this.setState({ currentSlideIndex: newSlideIndex });
	    // **this.slider.slickGoTo(index);**
	  };
	
	  TeamCarousel.prototype.render = function render() {
	    var bios = _Bios2.default;
	    var currentSlideIndex = this.state.currentSlideIndex;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'team-carousel' },
	      _react2.default.createElement(_BiosNavCarousel2.default, { currentSlideIndex: currentSlideIndex, bios: bios, onSlideIndexChange: this.handleSlideIndexChange }),
	      _react2.default.createElement(_BiosCarousel2.default, { currentSlideIndex: currentSlideIndex, bios: bios, onSlideIndexChange: this.handleSlideIndexChange })
	    );
	  };
	
	  return TeamCarousel;
	}(_react2.default.Component);
	
	exports.default = TeamCarousel;
	module.exports = exports['default'];

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ContactForm = __webpack_require__(256);
	
	var _ContactForm2 = _interopRequireDefault(_ContactForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Contact = function Contact() {
	  return _react2.default.createElement(
	    "section",
	    { className: "contact", id: "contact" },
	    _react2.default.createElement(
	      "div",
	      { className: "box" },
	      _react2.default.createElement(
	        "h2",
	        null,
	        "Contact"
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "Want to get in touch?"
	      ),
	      _react2.default.createElement(_ContactForm2.default, null),
	      _react2.default.createElement("div", { className: "design-star" })
	    )
	  );
	};
	
	exports.default = Contact;
	module.exports = exports["default"];

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _logoKitsuneWhite = __webpack_require__(84);
	
	var _logoKitsuneWhite2 = _interopRequireDefault(_logoKitsuneWhite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Hero = function Hero() {
	  return _react2.default.createElement(
	    'section',
	    { id: 'hero' },
	    _react2.default.createElement(
	      'div',
	      { className: 'branding' },
	      _react2.default.createElement('img', { className: 'logo', src: _logoKitsuneWhite2.default, width: '191', height: '180', alt: 'Kitsune Analytics logo' }),
	      _react2.default.createElement(
	        'h1',
	        null,
	        _react2.default.createElement(
	          'strong',
	          null,
	          'Kitsune'
	        ),
	        _react2.default.createElement('br', null),
	        'Analytics'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'box' },
	      _react2.default.createElement(
	        'h2',
	        null,
	        'Bespoke data and analytic solutions'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'Kitsune Analytics developed from a shared desire to create more transparent links between science, society, and industry at large. As all former or current academics, the experts at Kitsune Analytics share a passion for developing projects that bring tangible results, inform change, and generate a greater understanding of the products and services that we use every day.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'All of our analysts hold a research-based PhD from various scientific fields. As such, we can uniquely provide you with the confidence that your project is being taken care of by industry experts with a passion for data-driven problem solving and a professionalism that is unparalleled by typical industry standards.'
	      ),
	      _react2.default.createElement('div', { className: 'design-star' })
	    )
	  );
	};
	
	exports.default = Hero;
	module.exports = exports['default'];

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Services = function Services() {
	  return _react2.default.createElement(
	    "section",
	    { className: "services", id: "services" },
	    _react2.default.createElement(
	      "div",
	      { className: "box" },
	      _react2.default.createElement(
	        "h2",
	        null,
	        "What we do"
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "Kitsune Analytics is a comprehensive consulting firm with a focus on user research. Using data-driven techniques, the scientists at Kitsune Analytics will provide the insights you need about your the users of your products and services. After the initial consultation, we will provide a customized plan to suit your needs and see your project through from start to finish."
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "We are not a simple market research or analytics firm &emdash; we are the best of both worlds! Because we employ a team of research scientists, we are able to make data-driven insights into how your application and/or services are perceived, where they excel, where they are lacking, and what strategies need to be employed to improve performance, likeability, retention, and increased use (as well as a range of other improvement measures)."
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "We can tackle virtually any question, but our clients typically fall into one of two categories:",
	        _react2.default.createElement("br", null),
	        _react2.default.createElement(
	          "a",
	          { href: "#services__demographic-analysis" },
	          _react2.default.createElement(
	            "strong",
	            null,
	            "Demographic Analysis"
	          )
	        ),
	        " or ",
	        _react2.default.createElement(
	          "a",
	          { href: "#services__performance-analysis" },
	          _react2.default.createElement(
	            "strong",
	            null,
	            "Performance Analysis"
	          )
	        ),
	        "."
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "uberlist-container" },
	        _react2.default.createElement(
	          "div",
	          { className: "uberlist" },
	          _react2.default.createElement(
	            "h3",
	            { className: "title", id: "services__demographic-analysis" },
	            "Demographic Analysis"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "If you are interested in a demographic analysis of your application and/or service, you are seeking answers to questions such as these:"
	          ),
	          _react2.default.createElement(
	            "ul",
	            null,
	            _react2.default.createElement(
	              "li",
	              null,
	              "What are the spending patterns of the users of my service?"
	            ),
	            _react2.default.createElement(
	              "li",
	              null,
	              "What kind of people are using my application/service? How old are they?"
	            ),
	            _react2.default.createElement(
	              "li",
	              null,
	              "Where are they located? How much time are they investing in using my application?"
	            ),
	            _react2.default.createElement(
	              "li",
	              null,
	              "What groups are investing the most time and money using my application/service? Where are they located?"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "uberlist" },
	          _react2.default.createElement(
	            "h3",
	            { className: "title", id: "services__performance-analysis" },
	            "Performance Analysis"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "If you are interested in a performance analysis, you are seeking answers to questions such as these:"
	          ),
	          _react2.default.createElement(
	            "ul",
	            null,
	            _react2.default.createElement(
	              "li",
	              null,
	              "What features of my application/service do the users like best and what do they dislike the most?"
	            ),
	            _react2.default.createElement(
	              "li",
	              null,
	              "What kinds of changes would they like to see to my application/service?"
	            ),
	            _react2.default.createElement(
	              "li",
	              null,
	              "How can I optimize my application/service?"
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        "p",
	        { className: "excerpt" },
	        "Are the questions you want answered not listed above? Or are you not even sure what questions it is you want to ask? We can help with that!"
	      ),
	      _react2.default.createElement(
	        "h2",
	        null,
	        "Services"
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "Our most popular services include:"
	      ),
	      _react2.default.createElement(
	        "ul",
	        { className: "split-list" },
	        _react2.default.createElement(
	          "li",
	          null,
	          "Full service consulting, analysis, and design planning"
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          "Scientific and non-scientific consulting"
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          "Development of data-driven solutions, including experimental designs"
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          "Data analysis, quantitative and qualitative"
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          "Professional writing, editing, and graphic design services"
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          "Other - if you can dream it, we can do it!"
	        )
	      ),
	      _react2.default.createElement(
	        "h2",
	        { className: "next-step" },
	        "Ready to take the next step? ",
	        _react2.default.createElement(
	          "a",
	          { href: "#contact" },
	          "Contact us!"
	        )
	      ),
	      _react2.default.createElement("div", { className: "design-star" })
	    )
	  );
	};
	
	exports.default = Services;
	module.exports = exports["default"];

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TeamCarousel = __webpack_require__(263);
	
	var _TeamCarousel2 = _interopRequireDefault(_TeamCarousel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Team = function Team() {
	  return _react2.default.createElement(
	    'section',
	    { className: 'team', id: 'team' },
	    _react2.default.createElement('div', { className: 'circles' }),
	    _react2.default.createElement(
	      'div',
	      { className: 'box' },
	      _react2.default.createElement(
	        'h2',
	        null,
	        'Meet the Team'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'The research team at Kitsune Analytics come from a diverse set of research backgrounds but they all share one thing in common: their love for data!'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'The Kitsune team offers a unique approach to analytics, as their diverse backgrounds allow them to draw together expertise across statistical analyses and, importantly, application of data to theory/practice. Every member of the team holds a research-based PhD in a field of cognitive science - from psychology to neuroscience - and is a highly-trained expert in their field of study.'
	      ),
	      _react2.default.createElement(_TeamCarousel2.default, null),
	      _react2.default.createElement('div', { className: 'design-star' })
	    )
	  );
	};
	
	exports.default = Team;
	module.exports = exports['default'];

/***/ }),
/* 268 */,
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactHelmet = __webpack_require__(234);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _graphql = __webpack_require__(411);
	
	var _graphql2 = _interopRequireDefault(_graphql);
	
	var _Contact = __webpack_require__(264);
	
	var _Contact2 = _interopRequireDefault(_Contact);
	
	var _Hero = __webpack_require__(265);
	
	var _Hero2 = _interopRequireDefault(_Hero);
	
	var _Services = __webpack_require__(266);
	
	var _Services2 = _interopRequireDefault(_Services);
	
	var _Team = __webpack_require__(267);
	
	var _Team2 = _interopRequireDefault(_Team);
	
	var _SEO = __webpack_require__(260);
	
	var _SEO2 = _interopRequireDefault(_SEO);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Index = function (_React$Component) {
	  _inherits(Index, _React$Component);
	
	  function Index() {
	    _classCallCheck(this, Index);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Index.prototype.componentWillMount = function componentWillMount() {};
	
	  Index.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _reactHelmet2.default,
	        {
	          title: this.props.data.site.siteMetadata.rssMetadata.title
	        },
	        _react2.default.createElement(
	          'title',
	          null,
	          this.props.data.site.siteMetadata.rssMetadata.title
	        ),
	        _react2.default.createElement('link', { rel: 'canonical', href: '' + this.props.data.site.siteMetadata.siteUrl })
	      ),
	      _react2.default.createElement(_SEO2.default, null),
	      _react2.default.createElement(_Hero2.default, null),
	      _react2.default.createElement(_Services2.default, null),
	      _react2.default.createElement(_Team2.default, null),
	      _react2.default.createElement(_Contact2.default, null)
	    );
	  };
	
	  return Index;
	}(_react2.default.Component);
	
	Index.propTypes = {
	  data: _propTypes2.default.objectOf(_propTypes2.default.object).isRequired
	};
	
	exports.default = Index;
	var pageQuery = exports.pageQuery = '** extracted graphql fragment **';

/***/ }),
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */
/***/ (function(module, exports) {

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);
	
	module.exports = canUseDOM;

/***/ }),
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(7);
	
	var emptyObject = __webpack_require__(66);
	var _invariant = __webpack_require__(168);
	
	if (false) {
	  var warning = require('fbjs/lib/warning');
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (false) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (false) {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (false) {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (false) {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (false) {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (false) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (false) {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (false) {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (false) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (false) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (false) {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var React = __webpack_require__(1);
	var factory = __webpack_require__(344);
	
	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}
	
	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;
	
	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 346 */,
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(349);
	var isArguments = __webpack_require__(348);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),
/* 348 */
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),
/* 349 */
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

	var QueryHandler = __webpack_require__(358);
	var each = __webpack_require__(167).each;
	
	/**
	 * Represents a single media query, manages it's state and registered handlers for this query
	 *
	 * @constructor
	 * @param {string} query the media query string
	 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
	 */
	function MediaQuery(query, isUnconditional) {
	    this.query = query;
	    this.isUnconditional = isUnconditional;
	    this.handlers = [];
	    this.mql = window.matchMedia(query);
	
	    var self = this;
	    this.listener = function(mql) {
	        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
	        self.mql = mql.currentTarget || mql;
	        self.assess();
	    };
	    this.mql.addListener(this.listener);
	}
	
	MediaQuery.prototype = {
	
	    constuctor : MediaQuery,
	
	    /**
	     * add a handler for this query, triggering if already active
	     *
	     * @param {object} handler
	     * @param {function} handler.match callback for when query is activated
	     * @param {function} [handler.unmatch] callback for when query is deactivated
	     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
	     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
	     */
	    addHandler : function(handler) {
	        var qh = new QueryHandler(handler);
	        this.handlers.push(qh);
	
	        this.matches() && qh.on();
	    },
	
	    /**
	     * removes the given handler from the collection, and calls it's destroy methods
	     *
	     * @param {object || function} handler the handler to remove
	     */
	    removeHandler : function(handler) {
	        var handlers = this.handlers;
	        each(handlers, function(h, i) {
	            if(h.equals(handler)) {
	                h.destroy();
	                return !handlers.splice(i,1); //remove from array and exit each early
	            }
	        });
	    },
	
	    /**
	     * Determine whether the media query should be considered a match
	     *
	     * @return {Boolean} true if media query can be considered a match, false otherwise
	     */
	    matches : function() {
	        return this.mql.matches || this.isUnconditional;
	    },
	
	    /**
	     * Clears all handlers and unbinds events
	     */
	    clear : function() {
	        each(this.handlers, function(handler) {
	            handler.destroy();
	        });
	        this.mql.removeListener(this.listener);
	        this.handlers.length = 0; //clear array
	    },
	
	    /*
	        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
	        */
	    assess : function() {
	        var action = this.matches() ? 'on' : 'off';
	
	        each(this.handlers, function(handler) {
	            handler[action]();
	        });
	    }
	};
	
	module.exports = MediaQuery;


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

	var MediaQuery = __webpack_require__(356);
	var Util = __webpack_require__(167);
	var each = Util.each;
	var isFunction = Util.isFunction;
	var isArray = Util.isArray;
	
	/**
	 * Allows for registration of query handlers.
	 * Manages the query handler's state and is responsible for wiring up browser events
	 *
	 * @constructor
	 */
	function MediaQueryDispatch () {
	    if(!window.matchMedia) {
	        throw new Error('matchMedia not present, legacy browsers require a polyfill');
	    }
	
	    this.queries = {};
	    this.browserIsIncapable = !window.matchMedia('only all').matches;
	}
	
	MediaQueryDispatch.prototype = {
	
	    constructor : MediaQueryDispatch,
	
	    /**
	     * Registers a handler for the given media query
	     *
	     * @param {string} q the media query
	     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
	     * @param {function} options.match fired when query matched
	     * @param {function} [options.unmatch] fired when a query is no longer matched
	     * @param {function} [options.setup] fired when handler first triggered
	     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
	     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
	     */
	    register : function(q, options, shouldDegrade) {
	        var queries         = this.queries,
	            isUnconditional = shouldDegrade && this.browserIsIncapable;
	
	        if(!queries[q]) {
	            queries[q] = new MediaQuery(q, isUnconditional);
	        }
	
	        //normalise to object in an array
	        if(isFunction(options)) {
	            options = { match : options };
	        }
	        if(!isArray(options)) {
	            options = [options];
	        }
	        each(options, function(handler) {
	            if (isFunction(handler)) {
	                handler = { match : handler };
	            }
	            queries[q].addHandler(handler);
	        });
	
	        return this;
	    },
	
	    /**
	     * unregisters a query and all it's handlers, or a specific handler for a query
	     *
	     * @param {string} q the media query to target
	     * @param {object || function} [handler] specific handler to unregister
	     */
	    unregister : function(q, handler) {
	        var query = this.queries[q];
	
	        if(query) {
	            if(handler) {
	                query.removeHandler(handler);
	            }
	            else {
	                query.clear();
	                delete this.queries[q];
	            }
	        }
	
	        return this;
	    }
	};
	
	module.exports = MediaQueryDispatch;


/***/ }),
/* 358 */
/***/ (function(module, exports) {

	/**
	 * Delegate to handle a media query being matched and unmatched.
	 *
	 * @param {object} options
	 * @param {function} options.match callback for when the media query is matched
	 * @param {function} [options.unmatch] callback for when the media query is unmatched
	 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
	 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
	 * @constructor
	 */
	function QueryHandler(options) {
	    this.options = options;
	    !options.deferSetup && this.setup();
	}
	
	QueryHandler.prototype = {
	
	    constructor : QueryHandler,
	
	    /**
	     * coordinates setup of the handler
	     *
	     * @function
	     */
	    setup : function() {
	        if(this.options.setup) {
	            this.options.setup();
	        }
	        this.initialised = true;
	    },
	
	    /**
	     * coordinates setup and triggering of the handler
	     *
	     * @function
	     */
	    on : function() {
	        !this.initialised && this.setup();
	        this.options.match && this.options.match();
	    },
	
	    /**
	     * coordinates the unmatch event for the handler
	     *
	     * @function
	     */
	    off : function() {
	        this.options.unmatch && this.options.unmatch();
	    },
	
	    /**
	     * called when a handler is to be destroyed.
	     * delegates to the destroy or unmatch callbacks, depending on availability.
	     *
	     * @function
	     */
	    destroy : function() {
	        this.options.destroy ? this.options.destroy() : this.off();
	    },
	
	    /**
	     * determines equality by reference.
	     * if object is supplied compare options, if function, compare match callback
	     *
	     * @function
	     * @param {object || function} [target] the target for comparison
	     */
	    equals : function(target) {
	        return this.options === target || this.options.match === target;
	    }
	
	};
	
	module.exports = QueryHandler;


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

	var MediaQueryDispatch = __webpack_require__(357);
	module.exports = new MediaQueryDispatch();


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatError = formatError;
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Given a GraphQLError, format it according to the rules described by the
	 * Response Format, Errors section of the GraphQL Specification.
	 */
	function formatError(error) {
	  !error ? (0, _invariant2.default)(0, 'Received null or undefined error.') : void 0;
	  return {
	    message: error.message,
	    locations: error.locations,
	    path: error.path
	  };
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.syntaxError = syntaxError;
	
	var _location = __webpack_require__(113);
	
	var _GraphQLError = __webpack_require__(36);
	
	/**
	 * Produces a GraphQLError representing a syntax error, containing useful
	 * descriptive information about the syntax error's position in the source.
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function syntaxError(source, position, description) {
	  var location = (0, _location.getLocation)(source, position);
	  var line = location.line + source.locationOffset.line - 1;
	  var columnOffset = getColumnOffset(source, location);
	  var column = location.column + columnOffset;
	  var error = new _GraphQLError.GraphQLError('Syntax Error ' + source.name + ' (' + line + ':' + column + ') ' + description + '\n\n' + highlightSourceAtLocation(source, location), undefined, source, [position]);
	  return error;
	}
	
	/**
	 * Render a helpful description of the location of the error in the GraphQL
	 * Source document.
	 */
	function highlightSourceAtLocation(source, location) {
	  var line = location.line;
	  var lineOffset = source.locationOffset.line - 1;
	  var columnOffset = getColumnOffset(source, location);
	  var contextLine = line + lineOffset;
	  var prevLineNum = (contextLine - 1).toString();
	  var lineNum = contextLine.toString();
	  var nextLineNum = (contextLine + 1).toString();
	  var padLen = nextLineNum.length;
	  var lines = source.body.split(/\r\n|[\n\r]/g);
	  lines[0] = whitespace(source.locationOffset.column - 1) + lines[0];
	  return (line >= 2 ? lpad(padLen, prevLineNum) + ': ' + lines[line - 2] + '\n' : '') + lpad(padLen, lineNum) + ': ' + lines[line - 1] + '\n' + whitespace(2 + padLen + location.column - 1 + columnOffset) + '^\n' + (line < lines.length ? lpad(padLen, nextLineNum) + ': ' + lines[line] + '\n' : '');
	}
	
	function getColumnOffset(source, location) {
	  return location.line === 1 ? source.locationOffset.column - 1 : 0;
	}
	
	function whitespace(len) {
	  return Array(len + 1).join(' ');
	}
	
	function lpad(len, str) {
	  return whitespace(len - str.length) + str;
	}

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _execute = __webpack_require__(107);
	
	Object.defineProperty(exports, 'execute', {
	  enumerable: true,
	  get: function get() {
	    return _execute.execute;
	  }
	});
	Object.defineProperty(exports, 'defaultFieldResolver', {
	  enumerable: true,
	  get: function get() {
	    return _execute.defaultFieldResolver;
	  }
	});
	Object.defineProperty(exports, 'responsePathAsArray', {
	  enumerable: true,
	  get: function get() {
	    return _execute.responsePathAsArray;
	  }
	});
	
	var _values = __webpack_require__(108);
	
	Object.defineProperty(exports, 'getDirectiveValues', {
	  enumerable: true,
	  get: function get() {
	    return _values.getDirectiveValues;
	  }
	});

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.graphql = graphql;
	
	var _parser = __webpack_require__(68);
	
	var _validate = __webpack_require__(204);
	
	var _execute = __webpack_require__(107);
	
	/**
	 * This is the primary entry point function for fulfilling GraphQL operations
	 * by parsing, validating, and executing a GraphQL document along side a
	 * GraphQL schema.
	 *
	 * More sophisticated GraphQL servers, such as those which persist queries,
	 * may wish to separate the validation and execution phases to a static time
	 * tooling step, and a server runtime step.
	 *
	 * Accepts either an object with named arguments, or individual arguments:
	 *
	 * schema:
	 *    The GraphQL type system to use when validating and executing a query.
	 * source:
	 *    A GraphQL language formatted string representing the requested operation.
	 * rootValue:
	 *    The value provided as the first argument to resolver functions on the top
	 *    level type (e.g. the query object type).
	 * variableValues:
	 *    A mapping of variable name to runtime value to use for all variables
	 *    defined in the requestString.
	 * operationName:
	 *    The name of the operation to use if requestString contains multiple
	 *    possible operations. Can be omitted if requestString contains only
	 *    one operation.
	 * fieldResolver:
	 *    A resolver function to use when one is not provided by the schema.
	 *    If not provided, the default field resolver is used (which looks for a
	 *    value or method on the source value with the field's name).
	 */
	
	/* eslint-disable no-redeclare */
	function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  // Extract arguments from object args if provided.
	  return arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver);
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	function graphqlImpl(schema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  return new Promise(function (resolve) {
	    // Parse
	    var document = void 0;
	    try {
	      document = (0, _parser.parse)(source);
	    } catch (syntaxError) {
	      return resolve({ errors: [syntaxError] });
	    }
	
	    // Validate
	    var validationErrors = (0, _validate.validate)(schema, document);
	    if (validationErrors.length > 0) {
	      return resolve({ errors: validationErrors });
	    }
	
	    // Execute
	    resolve((0, _execute.execute)(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver));
	  });
	}

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _graphql = __webpack_require__(410);
	
	Object.defineProperty(exports, 'graphql', {
	  enumerable: true,
	  get: function get() {
	    return _graphql.graphql;
	  }
	});
	
	var _type = __webpack_require__(416);
	
	Object.defineProperty(exports, 'GraphQLSchema', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLSchema;
	  }
	});
	Object.defineProperty(exports, 'GraphQLScalarType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLScalarType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLObjectType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLObjectType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInterfaceType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLInterfaceType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLUnionType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLUnionType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLEnumType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLEnumType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInputObjectType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLInputObjectType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLList', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLList;
	  }
	});
	Object.defineProperty(exports, 'GraphQLNonNull', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLNonNull;
	  }
	});
	Object.defineProperty(exports, 'GraphQLDirective', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLDirective;
	  }
	});
	Object.defineProperty(exports, 'TypeKind', {
	  enumerable: true,
	  get: function get() {
	    return _type.TypeKind;
	  }
	});
	Object.defineProperty(exports, 'DirectiveLocation', {
	  enumerable: true,
	  get: function get() {
	    return _type.DirectiveLocation;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInt', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLInt;
	  }
	});
	Object.defineProperty(exports, 'GraphQLFloat', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLFloat;
	  }
	});
	Object.defineProperty(exports, 'GraphQLString', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLString;
	  }
	});
	Object.defineProperty(exports, 'GraphQLBoolean', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLBoolean;
	  }
	});
	Object.defineProperty(exports, 'GraphQLID', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLID;
	  }
	});
	Object.defineProperty(exports, 'specifiedDirectives', {
	  enumerable: true,
	  get: function get() {
	    return _type.specifiedDirectives;
	  }
	});
	Object.defineProperty(exports, 'GraphQLIncludeDirective', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLIncludeDirective;
	  }
	});
	Object.defineProperty(exports, 'GraphQLSkipDirective', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLSkipDirective;
	  }
	});
	Object.defineProperty(exports, 'GraphQLDeprecatedDirective', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLDeprecatedDirective;
	  }
	});
	Object.defineProperty(exports, 'DEFAULT_DEPRECATION_REASON', {
	  enumerable: true,
	  get: function get() {
	    return _type.DEFAULT_DEPRECATION_REASON;
	  }
	});
	Object.defineProperty(exports, 'SchemaMetaFieldDef', {
	  enumerable: true,
	  get: function get() {
	    return _type.SchemaMetaFieldDef;
	  }
	});
	Object.defineProperty(exports, 'TypeMetaFieldDef', {
	  enumerable: true,
	  get: function get() {
	    return _type.TypeMetaFieldDef;
	  }
	});
	Object.defineProperty(exports, 'TypeNameMetaFieldDef', {
	  enumerable: true,
	  get: function get() {
	    return _type.TypeNameMetaFieldDef;
	  }
	});
	Object.defineProperty(exports, '__Schema', {
	  enumerable: true,
	  get: function get() {
	    return _type.__Schema;
	  }
	});
	Object.defineProperty(exports, '__Directive', {
	  enumerable: true,
	  get: function get() {
	    return _type.__Directive;
	  }
	});
	Object.defineProperty(exports, '__DirectiveLocation', {
	  enumerable: true,
	  get: function get() {
	    return _type.__DirectiveLocation;
	  }
	});
	Object.defineProperty(exports, '__Type', {
	  enumerable: true,
	  get: function get() {
	    return _type.__Type;
	  }
	});
	Object.defineProperty(exports, '__Field', {
	  enumerable: true,
	  get: function get() {
	    return _type.__Field;
	  }
	});
	Object.defineProperty(exports, '__InputValue', {
	  enumerable: true,
	  get: function get() {
	    return _type.__InputValue;
	  }
	});
	Object.defineProperty(exports, '__EnumValue', {
	  enumerable: true,
	  get: function get() {
	    return _type.__EnumValue;
	  }
	});
	Object.defineProperty(exports, '__TypeKind', {
	  enumerable: true,
	  get: function get() {
	    return _type.__TypeKind;
	  }
	});
	Object.defineProperty(exports, 'isType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isType;
	  }
	});
	Object.defineProperty(exports, 'isInputType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isInputType;
	  }
	});
	Object.defineProperty(exports, 'isOutputType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isOutputType;
	  }
	});
	Object.defineProperty(exports, 'isLeafType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isLeafType;
	  }
	});
	Object.defineProperty(exports, 'isCompositeType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isCompositeType;
	  }
	});
	Object.defineProperty(exports, 'isAbstractType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isAbstractType;
	  }
	});
	Object.defineProperty(exports, 'isNamedType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isNamedType;
	  }
	});
	Object.defineProperty(exports, 'assertType', {
	  enumerable: true,
	  get: function get() {
	    return _type.assertType;
	  }
	});
	Object.defineProperty(exports, 'assertInputType', {
	  enumerable: true,
	  get: function get() {
	    return _type.assertInputType;
	  }
	});
	Object.defineProperty(exports, 'assertOutputType', {
	  enumerable: true,
	  get: function get() {
	    return _type.assertOutputType;
	  }
	});
	Object.defineProperty(exports, 'assertLeafType', {
	  enumerable: true,
	  get: function get() {
	    return _type.assertLeafType;
	  }
	});
	Object.defineProperty(exports, 'assertCompositeType', {
	  enumerable: true,
	  get: function get() {
	    return _type.assertCompositeType;
	  }
	});
	Object.defineProperty(exports, 'assertAbstractType', {
	  enumerable: true,
	  get: function get() {
	    return _type.assertAbstractType;
	  }
	});
	Object.defineProperty(exports, 'assertNamedType', {
	  enumerable: true,
	  get: function get() {
	    return _type.assertNamedType;
	  }
	});
	Object.defineProperty(exports, 'getNullableType', {
	  enumerable: true,
	  get: function get() {
	    return _type.getNullableType;
	  }
	});
	Object.defineProperty(exports, 'getNamedType', {
	  enumerable: true,
	  get: function get() {
	    return _type.getNamedType;
	  }
	});
	
	var _language = __webpack_require__(412);
	
	Object.defineProperty(exports, 'Source', {
	  enumerable: true,
	  get: function get() {
	    return _language.Source;
	  }
	});
	Object.defineProperty(exports, 'getLocation', {
	  enumerable: true,
	  get: function get() {
	    return _language.getLocation;
	  }
	});
	Object.defineProperty(exports, 'parse', {
	  enumerable: true,
	  get: function get() {
	    return _language.parse;
	  }
	});
	Object.defineProperty(exports, 'parseValue', {
	  enumerable: true,
	  get: function get() {
	    return _language.parseValue;
	  }
	});
	Object.defineProperty(exports, 'parseType', {
	  enumerable: true,
	  get: function get() {
	    return _language.parseType;
	  }
	});
	Object.defineProperty(exports, 'print', {
	  enumerable: true,
	  get: function get() {
	    return _language.print;
	  }
	});
	Object.defineProperty(exports, 'visit', {
	  enumerable: true,
	  get: function get() {
	    return _language.visit;
	  }
	});
	Object.defineProperty(exports, 'visitInParallel', {
	  enumerable: true,
	  get: function get() {
	    return _language.visitInParallel;
	  }
	});
	Object.defineProperty(exports, 'visitWithTypeInfo', {
	  enumerable: true,
	  get: function get() {
	    return _language.visitWithTypeInfo;
	  }
	});
	Object.defineProperty(exports, 'getVisitFn', {
	  enumerable: true,
	  get: function get() {
	    return _language.getVisitFn;
	  }
	});
	Object.defineProperty(exports, 'Kind', {
	  enumerable: true,
	  get: function get() {
	    return _language.Kind;
	  }
	});
	Object.defineProperty(exports, 'TokenKind', {
	  enumerable: true,
	  get: function get() {
	    return _language.TokenKind;
	  }
	});
	Object.defineProperty(exports, 'BREAK', {
	  enumerable: true,
	  get: function get() {
	    return _language.BREAK;
	  }
	});
	
	var _execution = __webpack_require__(409);
	
	Object.defineProperty(exports, 'execute', {
	  enumerable: true,
	  get: function get() {
	    return _execution.execute;
	  }
	});
	Object.defineProperty(exports, 'defaultFieldResolver', {
	  enumerable: true,
	  get: function get() {
	    return _execution.defaultFieldResolver;
	  }
	});
	Object.defineProperty(exports, 'responsePathAsArray', {
	  enumerable: true,
	  get: function get() {
	    return _execution.responsePathAsArray;
	  }
	});
	Object.defineProperty(exports, 'getDirectiveValues', {
	  enumerable: true,
	  get: function get() {
	    return _execution.getDirectiveValues;
	  }
	});
	
	var _subscription = __webpack_require__(413);
	
	Object.defineProperty(exports, 'subscribe', {
	  enumerable: true,
	  get: function get() {
	    return _subscription.subscribe;
	  }
	});
	Object.defineProperty(exports, 'createSourceEventStream', {
	  enumerable: true,
	  get: function get() {
	    return _subscription.createSourceEventStream;
	  }
	});
	
	var _validation = __webpack_require__(427);
	
	Object.defineProperty(exports, 'validate', {
	  enumerable: true,
	  get: function get() {
	    return _validation.validate;
	  }
	});
	Object.defineProperty(exports, 'ValidationContext', {
	  enumerable: true,
	  get: function get() {
	    return _validation.ValidationContext;
	  }
	});
	Object.defineProperty(exports, 'specifiedRules', {
	  enumerable: true,
	  get: function get() {
	    return _validation.specifiedRules;
	  }
	});
	Object.defineProperty(exports, 'ArgumentsOfCorrectTypeRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.ArgumentsOfCorrectTypeRule;
	  }
	});
	Object.defineProperty(exports, 'DefaultValuesOfCorrectTypeRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.DefaultValuesOfCorrectTypeRule;
	  }
	});
	Object.defineProperty(exports, 'FieldsOnCorrectTypeRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.FieldsOnCorrectTypeRule;
	  }
	});
	Object.defineProperty(exports, 'FragmentsOnCompositeTypesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.FragmentsOnCompositeTypesRule;
	  }
	});
	Object.defineProperty(exports, 'KnownArgumentNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.KnownArgumentNamesRule;
	  }
	});
	Object.defineProperty(exports, 'KnownDirectivesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.KnownDirectivesRule;
	  }
	});
	Object.defineProperty(exports, 'KnownFragmentNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.KnownFragmentNamesRule;
	  }
	});
	Object.defineProperty(exports, 'KnownTypeNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.KnownTypeNamesRule;
	  }
	});
	Object.defineProperty(exports, 'LoneAnonymousOperationRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.LoneAnonymousOperationRule;
	  }
	});
	Object.defineProperty(exports, 'NoFragmentCyclesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.NoFragmentCyclesRule;
	  }
	});
	Object.defineProperty(exports, 'NoUndefinedVariablesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.NoUndefinedVariablesRule;
	  }
	});
	Object.defineProperty(exports, 'NoUnusedFragmentsRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.NoUnusedFragmentsRule;
	  }
	});
	Object.defineProperty(exports, 'NoUnusedVariablesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.NoUnusedVariablesRule;
	  }
	});
	Object.defineProperty(exports, 'OverlappingFieldsCanBeMergedRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.OverlappingFieldsCanBeMergedRule;
	  }
	});
	Object.defineProperty(exports, 'PossibleFragmentSpreadsRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.PossibleFragmentSpreadsRule;
	  }
	});
	Object.defineProperty(exports, 'ProvidedNonNullArgumentsRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.ProvidedNonNullArgumentsRule;
	  }
	});
	Object.defineProperty(exports, 'ScalarLeafsRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.ScalarLeafsRule;
	  }
	});
	Object.defineProperty(exports, 'SingleFieldSubscriptionsRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.SingleFieldSubscriptionsRule;
	  }
	});
	Object.defineProperty(exports, 'UniqueArgumentNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.UniqueArgumentNamesRule;
	  }
	});
	Object.defineProperty(exports, 'UniqueDirectivesPerLocationRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.UniqueDirectivesPerLocationRule;
	  }
	});
	Object.defineProperty(exports, 'UniqueFragmentNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.UniqueFragmentNamesRule;
	  }
	});
	Object.defineProperty(exports, 'UniqueInputFieldNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.UniqueInputFieldNamesRule;
	  }
	});
	Object.defineProperty(exports, 'UniqueOperationNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.UniqueOperationNamesRule;
	  }
	});
	Object.defineProperty(exports, 'UniqueVariableNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.UniqueVariableNamesRule;
	  }
	});
	Object.defineProperty(exports, 'VariablesAreInputTypesRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.VariablesAreInputTypesRule;
	  }
	});
	Object.defineProperty(exports, 'VariablesInAllowedPositionRule', {
	  enumerable: true,
	  get: function get() {
	    return _validation.VariablesInAllowedPositionRule;
	  }
	});
	
	var _error = __webpack_require__(3);
	
	Object.defineProperty(exports, 'GraphQLError', {
	  enumerable: true,
	  get: function get() {
	    return _error.GraphQLError;
	  }
	});
	Object.defineProperty(exports, 'formatError', {
	  enumerable: true,
	  get: function get() {
	    return _error.formatError;
	  }
	});
	
	var _utilities = __webpack_require__(423);
	
	Object.defineProperty(exports, 'introspectionQuery', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.introspectionQuery;
	  }
	});
	Object.defineProperty(exports, 'getOperationAST', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.getOperationAST;
	  }
	});
	Object.defineProperty(exports, 'buildClientSchema', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.buildClientSchema;
	  }
	});
	Object.defineProperty(exports, 'buildASTSchema', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.buildASTSchema;
	  }
	});
	Object.defineProperty(exports, 'buildSchema', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.buildSchema;
	  }
	});
	Object.defineProperty(exports, 'extendSchema', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.extendSchema;
	  }
	});
	Object.defineProperty(exports, 'printSchema', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.printSchema;
	  }
	});
	Object.defineProperty(exports, 'printIntrospectionSchema', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.printIntrospectionSchema;
	  }
	});
	Object.defineProperty(exports, 'printType', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.printType;
	  }
	});
	Object.defineProperty(exports, 'typeFromAST', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.typeFromAST;
	  }
	});
	Object.defineProperty(exports, 'valueFromAST', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.valueFromAST;
	  }
	});
	Object.defineProperty(exports, 'astFromValue', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.astFromValue;
	  }
	});
	Object.defineProperty(exports, 'TypeInfo', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.TypeInfo;
	  }
	});
	Object.defineProperty(exports, 'isValidJSValue', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.isValidJSValue;
	  }
	});
	Object.defineProperty(exports, 'isValidLiteralValue', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.isValidLiteralValue;
	  }
	});
	Object.defineProperty(exports, 'concatAST', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.concatAST;
	  }
	});
	Object.defineProperty(exports, 'separateOperations', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.separateOperations;
	  }
	});
	Object.defineProperty(exports, 'isEqualType', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.isEqualType;
	  }
	});
	Object.defineProperty(exports, 'isTypeSubTypeOf', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.isTypeSubTypeOf;
	  }
	});
	Object.defineProperty(exports, 'doTypesOverlap', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.doTypesOverlap;
	  }
	});
	Object.defineProperty(exports, 'assertValidName', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.assertValidName;
	  }
	});
	Object.defineProperty(exports, 'findBreakingChanges', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.findBreakingChanges;
	  }
	});
	Object.defineProperty(exports, 'findDangerousChanges', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.findDangerousChanges;
	  }
	});
	Object.defineProperty(exports, 'BreakingChangeType', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.BreakingChangeType;
	  }
	});
	Object.defineProperty(exports, 'DangerousChangeType', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.DangerousChangeType;
	  }
	});
	Object.defineProperty(exports, 'findDeprecatedUsages', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.findDeprecatedUsages;
	  }
	});

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BREAK = exports.getVisitFn = exports.visitWithTypeInfo = exports.visitInParallel = exports.visit = exports.Source = exports.print = exports.parseType = exports.parseValue = exports.parse = exports.TokenKind = exports.createLexer = exports.Kind = exports.getLocation = undefined;
	
	var _location = __webpack_require__(113);
	
	Object.defineProperty(exports, 'getLocation', {
	  enumerable: true,
	  get: function get() {
	    return _location.getLocation;
	  }
	});
	
	var _lexer = __webpack_require__(112);
	
	Object.defineProperty(exports, 'createLexer', {
	  enumerable: true,
	  get: function get() {
	    return _lexer.createLexer;
	  }
	});
	Object.defineProperty(exports, 'TokenKind', {
	  enumerable: true,
	  get: function get() {
	    return _lexer.TokenKind;
	  }
	});
	
	var _parser = __webpack_require__(68);
	
	Object.defineProperty(exports, 'parse', {
	  enumerable: true,
	  get: function get() {
	    return _parser.parse;
	  }
	});
	Object.defineProperty(exports, 'parseValue', {
	  enumerable: true,
	  get: function get() {
	    return _parser.parseValue;
	  }
	});
	Object.defineProperty(exports, 'parseType', {
	  enumerable: true,
	  get: function get() {
	    return _parser.parseType;
	  }
	});
	
	var _printer = __webpack_require__(11);
	
	Object.defineProperty(exports, 'print', {
	  enumerable: true,
	  get: function get() {
	    return _printer.print;
	  }
	});
	
	var _source = __webpack_require__(174);
	
	Object.defineProperty(exports, 'Source', {
	  enumerable: true,
	  get: function get() {
	    return _source.Source;
	  }
	});
	
	var _visitor = __webpack_require__(50);
	
	Object.defineProperty(exports, 'visit', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.visit;
	  }
	});
	Object.defineProperty(exports, 'visitInParallel', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.visitInParallel;
	  }
	});
	Object.defineProperty(exports, 'visitWithTypeInfo', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.visitWithTypeInfo;
	  }
	});
	Object.defineProperty(exports, 'getVisitFn', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.getVisitFn;
	  }
	});
	Object.defineProperty(exports, 'BREAK', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.BREAK;
	  }
	});
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.Kind = Kind;

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _subscribe = __webpack_require__(415);
	
	Object.defineProperty(exports, 'subscribe', {
	  enumerable: true,
	  get: function get() {
	    return _subscribe.subscribe;
	  }
	});
	Object.defineProperty(exports, 'createSourceEventStream', {
	  enumerable: true,
	  get: function get() {
	    return _subscribe.createSourceEventStream;
	  }
	});

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mapAsyncIterator;
	
	var _iterall = __webpack_require__(40);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * Copyright (c) 2017-present, Facebook, Inc.
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
	                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * 
	                                                                                                                                                                                                                   */
	
	/**
	 * Given an AsyncIterable and a callback function, return an AsyncIterator
	 * which produces values mapped via calling the callback function.
	 */
	function mapAsyncIterator(iterable, callback, rejectCallback) {
	  var iterator = (0, _iterall.getAsyncIterator)(iterable);
	  var $return = void 0;
	  var abruptClose = void 0;
	  if (typeof iterator.return === 'function') {
	    $return = iterator.return;
	    abruptClose = function abruptClose(error) {
	      var rethrow = function rethrow() {
	        return Promise.reject(error);
	      };
	      return $return.call(iterator).then(rethrow, rethrow);
	    };
	  }
	
	  function mapResult(result) {
	    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
	  }
	
	  var mapReject = void 0;
	  if (rejectCallback) {
	    // Capture rejectCallback to ensure it cannot be null.
	    var reject = rejectCallback;
	    mapReject = function mapReject(error) {
	      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
	    };
	  }
	
	  /* TODO: Flow doesn't support symbols as keys:
	     https://github.com/facebook/flow/issues/3258 */
	  return _defineProperty({
	    next: function next() {
	      return iterator.next().then(mapResult, mapReject);
	    },
	    return: function _return() {
	      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({ value: undefined, done: true });
	    },
	    throw: function _throw(error) {
	      if (typeof iterator.throw === 'function') {
	        return iterator.throw(error).then(mapResult, mapReject);
	      }
	      return Promise.reject(error).catch(abruptClose);
	    }
	  }, _iterall.$$asyncIterator, function () {
	    return this;
	  });
	}
	
	function asyncMapValue(value, callback) {
	  return new Promise(function (resolve) {
	    return resolve(callback(value));
	  });
	}
	
	function iteratorResult(value) {
	  return { value: value, done: false };
	}

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.subscribe = subscribe;
	exports.createSourceEventStream = createSourceEventStream;
	
	var _iterall = __webpack_require__(40);
	
	var _GraphQLError = __webpack_require__(36);
	
	var _locatedError = __webpack_require__(173);
	
	var _execute = __webpack_require__(107);
	
	var _schema = __webpack_require__(17);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _mapAsyncIterator = __webpack_require__(414);
	
	var _mapAsyncIterator2 = _interopRequireDefault(_mapAsyncIterator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Implements the "Subscribe" algorithm described in the GraphQL specification.
	 *
	 * Returns a Promise which resolves to either an AsyncIterator (if successful)
	 * or an ExecutionResult (client error). The promise will be rejected if a
	 * server error occurs.
	 *
	 * If the client-provided arguments to this function do not result in a
	 * compliant subscription, a GraphQL Response (ExecutionResult) with
	 * descriptive errors and no data will be returned.
	 *
	 * If the the source stream could not be created due to faulty subscription
	 * resolver logic or underlying systems, the promise will resolve to a single
	 * ExecutionResult containing `errors` and no `data`.
	 *
	 * If the operation succeeded, the promise resolves to an AsyncIterator, which
	 * yields a stream of ExecutionResults representing the response stream.
	 *
	 * Accepts either an object with named arguments, or individual arguments.
	 */
	
	/* eslint-disable no-redeclare */
	function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
	  // Extract arguments from object args if provided.
	  var args = arguments.length === 1 ? argsOrSchema : undefined;
	  var schema = args ? args.schema : argsOrSchema;
	
	  return args ? subscribeImpl(schema, args.document, args.rootValue, args.contextValue, args.variableValues, args.operationName, args.fieldResolver, args.subscribeFieldResolver) : subscribeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver);
	}
	
	/**
	 * This function checks if the error is a GraphQLError. If it is, report it as
	 * an ExecutionResult, containing only errors and no data. Otherwise treat the
	 * error as a system-class error and re-throw it.
	 */
	/**
	 * Copyright (c) 2017-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function reportGraphQLError(error) {
	  if (error instanceof _GraphQLError.GraphQLError) {
	    return { errors: [error] };
	  }
	  throw error;
	}
	
	function subscribeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
	  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver);
	
	  // For each payload yielded from a subscription, map it over the normal
	  // GraphQL `execute` function, with `payload` as the rootValue.
	  // This implements the "MapSourceToResponseEvent" algorithm described in
	  // the GraphQL specification. The `execute` function provides the
	  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
	  // "ExecuteQuery" algorithm, for which `execute` is also used.
	  var mapSourceToResponse = function mapSourceToResponse(payload) {
	    return (0, _execute.execute)(schema, document, payload, contextValue, variableValues, operationName, fieldResolver);
	  };
	
	  // Resolve the Source Stream, then map every source value to a
	  // ExecutionResult value as described above.
	  return sourcePromise.then(function (sourceStream) {
	    return (0, _mapAsyncIterator2.default)(sourceStream, mapSourceToResponse, reportGraphQLError);
	  }, reportGraphQLError);
	}
	
	/**
	 * Implements the "CreateSourceEventStream" algorithm described in the
	 * GraphQL specification, resolving the subscription source event stream.
	 *
	 * Returns a Promise<AsyncIterable>.
	 *
	 * If the client-provided invalid arguments, the source stream could not be
	 * created, or the resolver did not return an AsyncIterable, this function will
	 * will throw an error, which should be caught and handled by the caller.
	 *
	 * A Source Event Stream represents a sequence of events, each of which triggers
	 * a GraphQL execution for that event.
	 *
	 * This may be useful when hosting the stateful subscription service in a
	 * different process or machine than the stateless GraphQL execution engine,
	 * or otherwise separating these two steps. For more on this, see the
	 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
	 */
	function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  // If arguments are missing or incorrectly typed, this is an internal
	  // developer mistake which should throw an early error.
	  (0, _execute.assertValidExecutionArguments)(schema, document, variableValues);
	
	  return new Promise(function (resolve, reject) {
	    // If a valid context cannot be created due to incorrect arguments,
	    // this will throw an error.
	    var exeContext = (0, _execute.buildExecutionContext)(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
	
	    var type = (0, _execute.getOperationRootType)(schema, exeContext.operation);
	    var fields = (0, _execute.collectFields)(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
	    var responseNames = Object.keys(fields);
	    var responseName = responseNames[0];
	    var fieldNodes = fields[responseName];
	    var fieldNode = fieldNodes[0];
	    var fieldDef = (0, _execute.getFieldDef)(schema, type, fieldNode.name.value);
	    !fieldDef ? (0, _invariant2.default)(0, 'This subscription is not defined by the schema.') : void 0;
	
	    // Call the `subscribe()` resolver or the default resolver to produce an
	    // AsyncIterable yielding raw payloads.
	    var resolveFn = fieldDef.subscribe || exeContext.fieldResolver;
	
	    var path = (0, _execute.addPath)(undefined, responseName);
	
	    var info = (0, _execute.buildResolveInfo)(exeContext, fieldDef, fieldNodes, type, path);
	
	    // resolveFieldValueOrError implements the "ResolveFieldEventStream"
	    // algorithm from GraphQL specification. It differs from
	    // "ResolveFieldValue" due to providing a different `resolveFn`.
	    Promise.resolve((0, _execute.resolveFieldValueOrError)(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info)).then(function (subscription) {
	      // Reject with a located GraphQLError if subscription source fails
	      // to resolve.
	      if (subscription instanceof Error) {
	        var error = (0, _locatedError.locatedError)(subscription, fieldNodes, (0, _execute.responsePathAsArray)(path));
	        reject(error);
	      }
	
	      if (!(0, _iterall.isAsyncIterable)(subscription)) {
	        reject(new Error('Subscription must return Async Iterable. ' + 'Received: ' + String(subscription)));
	      }
	
	      resolve(subscription);
	    }).catch(reject);
	  });
	}

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _schema = __webpack_require__(17);
	
	Object.defineProperty(exports, 'GraphQLSchema', {
	  enumerable: true,
	  get: function get() {
	    return _schema.GraphQLSchema;
	  }
	});
	
	var _definition = __webpack_require__(4);
	
	Object.defineProperty(exports, 'isType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isType;
	  }
	});
	Object.defineProperty(exports, 'isInputType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isInputType;
	  }
	});
	Object.defineProperty(exports, 'isOutputType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isOutputType;
	  }
	});
	Object.defineProperty(exports, 'isLeafType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isLeafType;
	  }
	});
	Object.defineProperty(exports, 'isCompositeType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isCompositeType;
	  }
	});
	Object.defineProperty(exports, 'isAbstractType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isAbstractType;
	  }
	});
	Object.defineProperty(exports, 'isNamedType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isNamedType;
	  }
	});
	Object.defineProperty(exports, 'assertType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.assertType;
	  }
	});
	Object.defineProperty(exports, 'assertInputType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.assertInputType;
	  }
	});
	Object.defineProperty(exports, 'assertOutputType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.assertOutputType;
	  }
	});
	Object.defineProperty(exports, 'assertLeafType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.assertLeafType;
	  }
	});
	Object.defineProperty(exports, 'assertCompositeType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.assertCompositeType;
	  }
	});
	Object.defineProperty(exports, 'assertAbstractType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.assertAbstractType;
	  }
	});
	Object.defineProperty(exports, 'assertNamedType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.assertNamedType;
	  }
	});
	Object.defineProperty(exports, 'getNullableType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.getNullableType;
	  }
	});
	Object.defineProperty(exports, 'getNamedType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.getNamedType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLScalarType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLScalarType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLObjectType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLObjectType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInterfaceType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLInterfaceType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLUnionType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLUnionType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLEnumType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLEnumType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInputObjectType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLInputObjectType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLList', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLList;
	  }
	});
	Object.defineProperty(exports, 'GraphQLNonNull', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLNonNull;
	  }
	});
	
	var _directives = __webpack_require__(16);
	
	Object.defineProperty(exports, 'DirectiveLocation', {
	  enumerable: true,
	  get: function get() {
	    return _directives.DirectiveLocation;
	  }
	});
	Object.defineProperty(exports, 'GraphQLDirective', {
	  enumerable: true,
	  get: function get() {
	    return _directives.GraphQLDirective;
	  }
	});
	Object.defineProperty(exports, 'specifiedDirectives', {
	  enumerable: true,
	  get: function get() {
	    return _directives.specifiedDirectives;
	  }
	});
	Object.defineProperty(exports, 'GraphQLIncludeDirective', {
	  enumerable: true,
	  get: function get() {
	    return _directives.GraphQLIncludeDirective;
	  }
	});
	Object.defineProperty(exports, 'GraphQLSkipDirective', {
	  enumerable: true,
	  get: function get() {
	    return _directives.GraphQLSkipDirective;
	  }
	});
	Object.defineProperty(exports, 'GraphQLDeprecatedDirective', {
	  enumerable: true,
	  get: function get() {
	    return _directives.GraphQLDeprecatedDirective;
	  }
	});
	Object.defineProperty(exports, 'DEFAULT_DEPRECATION_REASON', {
	  enumerable: true,
	  get: function get() {
	    return _directives.DEFAULT_DEPRECATION_REASON;
	  }
	});
	
	var _scalars = __webpack_require__(22);
	
	Object.defineProperty(exports, 'GraphQLInt', {
	  enumerable: true,
	  get: function get() {
	    return _scalars.GraphQLInt;
	  }
	});
	Object.defineProperty(exports, 'GraphQLFloat', {
	  enumerable: true,
	  get: function get() {
	    return _scalars.GraphQLFloat;
	  }
	});
	Object.defineProperty(exports, 'GraphQLString', {
	  enumerable: true,
	  get: function get() {
	    return _scalars.GraphQLString;
	  }
	});
	Object.defineProperty(exports, 'GraphQLBoolean', {
	  enumerable: true,
	  get: function get() {
	    return _scalars.GraphQLBoolean;
	  }
	});
	Object.defineProperty(exports, 'GraphQLID', {
	  enumerable: true,
	  get: function get() {
	    return _scalars.GraphQLID;
	  }
	});
	
	var _introspection = __webpack_require__(26);
	
	Object.defineProperty(exports, 'TypeKind', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.TypeKind;
	  }
	});
	Object.defineProperty(exports, '__Schema', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.__Schema;
	  }
	});
	Object.defineProperty(exports, '__Directive', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.__Directive;
	  }
	});
	Object.defineProperty(exports, '__DirectiveLocation', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.__DirectiveLocation;
	  }
	});
	Object.defineProperty(exports, '__Type', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.__Type;
	  }
	});
	Object.defineProperty(exports, '__Field', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.__Field;
	  }
	});
	Object.defineProperty(exports, '__InputValue', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.__InputValue;
	  }
	});
	Object.defineProperty(exports, '__EnumValue', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.__EnumValue;
	  }
	});
	Object.defineProperty(exports, '__TypeKind', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.__TypeKind;
	  }
	});
	Object.defineProperty(exports, 'SchemaMetaFieldDef', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.SchemaMetaFieldDef;
	  }
	});
	Object.defineProperty(exports, 'TypeMetaFieldDef', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.TypeMetaFieldDef;
	  }
	});
	Object.defineProperty(exports, 'TypeNameMetaFieldDef', {
	  enumerable: true,
	  get: function get() {
	    return _introspection.TypeNameMetaFieldDef;
	  }
	});

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.buildClientSchema = buildClientSchema;
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _keyMap = __webpack_require__(38);
	
	var _keyMap2 = _interopRequireDefault(_keyMap);
	
	var _keyValMap = __webpack_require__(109);
	
	var _keyValMap2 = _interopRequireDefault(_keyValMap);
	
	var _valueFromAST = __webpack_require__(51);
	
	var _parser = __webpack_require__(68);
	
	var _schema = __webpack_require__(17);
	
	var _definition = __webpack_require__(4);
	
	var _introspection = __webpack_require__(26);
	
	var _scalars = __webpack_require__(22);
	
	var _directives = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Build a GraphQLSchema for use by client tools.
	 *
	 * Given the result of a client running the introspection query, creates and
	 * returns a GraphQLSchema instance which can be then used with all graphql-js
	 * tools, but cannot be used to execute a query, as introspection does not
	 * represent the "resolver", "parse" or "serialize" functions or any other
	 * server-internal mechanisms.
	 */
	function buildClientSchema(introspection) {
	
	  // Get the schema from the introspection result.
	  var schemaIntrospection = introspection.__schema;
	
	  // Converts the list of types into a keyMap based on the type names.
	  var typeIntrospectionMap = (0, _keyMap2.default)(schemaIntrospection.types, function (type) {
	    return type.name;
	  });
	
	  // A cache to use to store the actual GraphQLType definition objects by name.
	  // Initialize to the GraphQL built in scalars. All functions below are inline
	  // so that this type def cache is within the scope of the closure.
	  var typeDefCache = {
	    String: _scalars.GraphQLString,
	    Int: _scalars.GraphQLInt,
	    Float: _scalars.GraphQLFloat,
	    Boolean: _scalars.GraphQLBoolean,
	    ID: _scalars.GraphQLID,
	    __Schema: _introspection.__Schema,
	    __Directive: _introspection.__Directive,
	    __DirectiveLocation: _introspection.__DirectiveLocation,
	    __Type: _introspection.__Type,
	    __Field: _introspection.__Field,
	    __InputValue: _introspection.__InputValue,
	    __EnumValue: _introspection.__EnumValue,
	    __TypeKind: _introspection.__TypeKind
	  };
	
	  // Given a type reference in introspection, return the GraphQLType instance.
	  // preferring cached instances before building new instances.
	  function getType(typeRef) {
	    if (typeRef.kind === _introspection.TypeKind.LIST) {
	      var itemRef = typeRef.ofType;
	      if (!itemRef) {
	        throw new Error('Decorated type deeper than introspection query.');
	      }
	      return new _definition.GraphQLList(getType(itemRef));
	    }
	    if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
	      var nullableRef = typeRef.ofType;
	      if (!nullableRef) {
	        throw new Error('Decorated type deeper than introspection query.');
	      }
	      var nullableType = getType(nullableRef);
	      !!(nullableType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'No nesting nonnull.') : void 0;
	      return new _definition.GraphQLNonNull(nullableType);
	    }
	    return getNamedType(typeRef.name);
	  }
	
	  function getNamedType(typeName) {
	    if (typeDefCache[typeName]) {
	      return typeDefCache[typeName];
	    }
	    var typeIntrospection = typeIntrospectionMap[typeName];
	    if (!typeIntrospection) {
	      throw new Error('Invalid or incomplete schema, unknown type: ' + typeName + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
	    }
	    var typeDef = buildType(typeIntrospection);
	    typeDefCache[typeName] = typeDef;
	    return typeDef;
	  }
	
	  function getInputType(typeRef) {
	    var type = getType(typeRef);
	    !(0, _definition.isInputType)(type) ? (0, _invariant2.default)(0, 'Introspection must provide input type for arguments.') : void 0;
	    return type;
	  }
	
	  function getOutputType(typeRef) {
	    var type = getType(typeRef);
	    !(0, _definition.isOutputType)(type) ? (0, _invariant2.default)(0, 'Introspection must provide output type for fields.') : void 0;
	    return type;
	  }
	
	  function getObjectType(typeRef) {
	    var type = getType(typeRef);
	    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Introspection must provide object type for possibleTypes.') : void 0;
	    return type;
	  }
	
	  function getInterfaceType(typeRef) {
	    var type = getType(typeRef);
	    !(type instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0, 'Introspection must provide interface type for interfaces.') : void 0;
	    return type;
	  }
	
	  // Given a type's introspection result, construct the correct
	  // GraphQLType instance.
	  function buildType(type) {
	    switch (type.kind) {
	      case _introspection.TypeKind.SCALAR:
	        return buildScalarDef(type);
	      case _introspection.TypeKind.OBJECT:
	        return buildObjectDef(type);
	      case _introspection.TypeKind.INTERFACE:
	        return buildInterfaceDef(type);
	      case _introspection.TypeKind.UNION:
	        return buildUnionDef(type);
	      case _introspection.TypeKind.ENUM:
	        return buildEnumDef(type);
	      case _introspection.TypeKind.INPUT_OBJECT:
	        return buildInputObjectDef(type);
	      default:
	        throw new Error('Invalid or incomplete schema, unknown kind: ' + type.kind + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
	    }
	  }
	
	  function buildScalarDef(scalarIntrospection) {
	    return new _definition.GraphQLScalarType({
	      name: scalarIntrospection.name,
	      description: scalarIntrospection.description,
	      serialize: function serialize(id) {
	        return id;
	      },
	      // Note: validation calls the parse functions to determine if a
	      // literal value is correct. Returning null would cause use of custom
	      // scalars to always fail validation. Returning false causes them to
	      // always pass validation.
	      parseValue: function parseValue() {
	        return false;
	      },
	      parseLiteral: function parseLiteral() {
	        return false;
	      }
	    });
	  }
	
	  function buildObjectDef(objectIntrospection) {
	    return new _definition.GraphQLObjectType({
	      name: objectIntrospection.name,
	      description: objectIntrospection.description,
	      interfaces: objectIntrospection.interfaces.map(getInterfaceType),
	      fields: function fields() {
	        return buildFieldDefMap(objectIntrospection);
	      }
	    });
	  }
	
	  function buildInterfaceDef(interfaceIntrospection) {
	    return new _definition.GraphQLInterfaceType({
	      name: interfaceIntrospection.name,
	      description: interfaceIntrospection.description,
	      fields: function fields() {
	        return buildFieldDefMap(interfaceIntrospection);
	      },
	      resolveType: cannotExecuteClientSchema
	    });
	  }
	
	  function buildUnionDef(unionIntrospection) {
	    return new _definition.GraphQLUnionType({
	      name: unionIntrospection.name,
	      description: unionIntrospection.description,
	      types: unionIntrospection.possibleTypes.map(getObjectType),
	      resolveType: cannotExecuteClientSchema
	    });
	  }
	
	  function buildEnumDef(enumIntrospection) {
	    return new _definition.GraphQLEnumType({
	      name: enumIntrospection.name,
	      description: enumIntrospection.description,
	      values: (0, _keyValMap2.default)(enumIntrospection.enumValues, function (valueIntrospection) {
	        return valueIntrospection.name;
	      }, function (valueIntrospection) {
	        return {
	          description: valueIntrospection.description,
	          deprecationReason: valueIntrospection.deprecationReason
	        };
	      })
	    });
	  }
	
	  function buildInputObjectDef(inputObjectIntrospection) {
	    return new _definition.GraphQLInputObjectType({
	      name: inputObjectIntrospection.name,
	      description: inputObjectIntrospection.description,
	      fields: function fields() {
	        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
	      }
	    });
	  }
	
	  function buildFieldDefMap(typeIntrospection) {
	    return (0, _keyValMap2.default)(typeIntrospection.fields, function (fieldIntrospection) {
	      return fieldIntrospection.name;
	    }, function (fieldIntrospection) {
	      return {
	        description: fieldIntrospection.description,
	        deprecationReason: fieldIntrospection.deprecationReason,
	        type: getOutputType(fieldIntrospection.type),
	        args: buildInputValueDefMap(fieldIntrospection.args)
	      };
	    });
	  }
	
	  function buildInputValueDefMap(inputValueIntrospections) {
	    return (0, _keyValMap2.default)(inputValueIntrospections, function (inputValue) {
	      return inputValue.name;
	    }, buildInputValue);
	  }
	
	  function buildInputValue(inputValueIntrospection) {
	    var type = getInputType(inputValueIntrospection.type);
	    var defaultValue = inputValueIntrospection.defaultValue ? (0, _valueFromAST.valueFromAST)((0, _parser.parseValue)(inputValueIntrospection.defaultValue), type) : undefined;
	    return {
	      name: inputValueIntrospection.name,
	      description: inputValueIntrospection.description,
	      type: type,
	      defaultValue: defaultValue
	    };
	  }
	
	  function buildDirective(directiveIntrospection) {
	    // Support deprecated `on****` fields for building `locations`, as this
	    // is used by GraphiQL which may need to support outdated servers.
	    var locations = directiveIntrospection.locations ? directiveIntrospection.locations.slice() : [].concat(!directiveIntrospection.onField ? [] : [_directives.DirectiveLocation.FIELD], !directiveIntrospection.onOperation ? [] : [_directives.DirectiveLocation.QUERY, _directives.DirectiveLocation.MUTATION, _directives.DirectiveLocation.SUBSCRIPTION], !directiveIntrospection.onFragment ? [] : [_directives.DirectiveLocation.FRAGMENT_DEFINITION, _directives.DirectiveLocation.FRAGMENT_SPREAD, _directives.DirectiveLocation.INLINE_FRAGMENT]);
	    return new _directives.GraphQLDirective({
	      name: directiveIntrospection.name,
	      description: directiveIntrospection.description,
	      locations: locations,
	      args: buildInputValueDefMap(directiveIntrospection.args)
	    });
	  }
	
	  // Iterate through all types, getting the type definition for each, ensuring
	  // that any type not directly referenced by a field will get created.
	  var types = schemaIntrospection.types.map(function (typeIntrospection) {
	    return getNamedType(typeIntrospection.name);
	  });
	
	  // Get the root Query, Mutation, and Subscription types.
	  var queryType = getObjectType(schemaIntrospection.queryType);
	
	  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
	
	  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;
	
	  // Get the directives supported by Introspection, assuming empty-set if
	  // directives were not queried for.
	  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];
	
	  // Then produce and return a Schema with these types.
	  return new _schema.GraphQLSchema({
	    query: queryType,
	    mutation: mutationType,
	    subscription: subscriptionType,
	    types: types,
	    directives: directives
	  });
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	function cannotExecuteClientSchema() {
	  throw new Error('Client Schema cannot use Interface or Union types for execution.');
	}

/***/ }),
/* 418 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.concatAST = concatAST;
	
	
	/**
	 * Provided a collection of ASTs, presumably each from different files,
	 * concatenate the ASTs together into batched AST, useful for validating many
	 * GraphQL source files which together represent one conceptual application.
	 */
	function concatAST(asts) {
	  var batchDefinitions = [];
	  for (var i = 0; i < asts.length; i++) {
	    var definitions = asts[i].definitions;
	    for (var j = 0; j < definitions.length; j++) {
	      batchDefinitions.push(definitions[j]);
	    }
	  }
	  return {
	    kind: 'Document',
	    definitions: batchDefinitions
	  };
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extendSchema = extendSchema;
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _keyMap = __webpack_require__(38);
	
	var _keyMap2 = _interopRequireDefault(_keyMap);
	
	var _keyValMap = __webpack_require__(109);
	
	var _keyValMap2 = _interopRequireDefault(_keyValMap);
	
	var _buildASTSchema = __webpack_require__(175);
	
	var _valueFromAST = __webpack_require__(51);
	
	var _GraphQLError = __webpack_require__(36);
	
	var _schema = __webpack_require__(17);
	
	var _definition = __webpack_require__(4);
	
	var _directives = __webpack_require__(16);
	
	var _introspection = __webpack_require__(26);
	
	var _scalars = __webpack_require__(22);
	
	var _kinds = __webpack_require__(6);
	
	var Kind = _interopRequireWildcard(_kinds);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Produces a new schema given an existing schema and a document which may
	 * contain GraphQL type extensions and definitions. The original schema will
	 * remain unaltered.
	 *
	 * Because a schema represents a graph of references, a schema cannot be
	 * extended without effectively making an entire copy. We do not know until it's
	 * too late if subgraphs remain unchanged.
	 *
	 * This algorithm copies the provided schema, applying extensions while
	 * producing the copy. The original schema remains unaltered.
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function extendSchema(schema, documentAST) {
	  !(schema instanceof _schema.GraphQLSchema) ? (0, _invariant2.default)(0, 'Must provide valid GraphQLSchema') : void 0;
	
	  !(documentAST && documentAST.kind === Kind.DOCUMENT) ? (0, _invariant2.default)(0, 'Must provide valid Document AST') : void 0;
	
	  // Collect the type definitions and extensions found in the document.
	  var typeDefinitionMap = Object.create(null);
	  var typeExtensionsMap = Object.create(null);
	
	  // New directives and types are separate because a directives and types can
	  // have the same name. For example, a type named "skip".
	  var directiveDefinitions = [];
	
	  for (var i = 0; i < documentAST.definitions.length; i++) {
	    var def = documentAST.definitions[i];
	    switch (def.kind) {
	      case Kind.OBJECT_TYPE_DEFINITION:
	      case Kind.INTERFACE_TYPE_DEFINITION:
	      case Kind.ENUM_TYPE_DEFINITION:
	      case Kind.UNION_TYPE_DEFINITION:
	      case Kind.SCALAR_TYPE_DEFINITION:
	      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
	        // Sanity check that none of the defined types conflict with the
	        // schema's existing types.
	        var typeName = def.name.value;
	        if (schema.getType(typeName)) {
	          throw new _GraphQLError.GraphQLError('Type "' + typeName + '" already exists in the schema. It cannot also ' + 'be defined in this type definition.', [def]);
	        }
	        typeDefinitionMap[typeName] = def;
	        break;
	      case Kind.TYPE_EXTENSION_DEFINITION:
	        // Sanity check that this type extension exists within the
	        // schema's existing types.
	        var extendedTypeName = def.definition.name.value;
	        var existingType = schema.getType(extendedTypeName);
	        if (!existingType) {
	          throw new _GraphQLError.GraphQLError('Cannot extend type "' + extendedTypeName + '" because it does not ' + 'exist in the existing schema.', [def.definition]);
	        }
	        if (!(existingType instanceof _definition.GraphQLObjectType)) {
	          throw new _GraphQLError.GraphQLError('Cannot extend non-object type "' + extendedTypeName + '".', [def.definition]);
	        }
	        var extensions = typeExtensionsMap[extendedTypeName];
	        if (extensions) {
	          extensions.push(def);
	        } else {
	          extensions = [def];
	        }
	        typeExtensionsMap[extendedTypeName] = extensions;
	        break;
	      case Kind.DIRECTIVE_DEFINITION:
	        var directiveName = def.name.value;
	        var existingDirective = schema.getDirective(directiveName);
	        if (existingDirective) {
	          throw new _GraphQLError.GraphQLError('Directive "' + directiveName + '" already exists in the schema. It ' + 'cannot be redefined.', [def]);
	        }
	        directiveDefinitions.push(def);
	        break;
	    }
	  }
	
	  // If this document contains no new types, extensions, or directives then
	  // return the same unmodified GraphQLSchema instance.
	  if (Object.keys(typeExtensionsMap).length === 0 && Object.keys(typeDefinitionMap).length === 0 && directiveDefinitions.length === 0) {
	    return schema;
	  }
	
	  // A cache to use to store the actual GraphQLType definition objects by name.
	  // Initialize to the GraphQL built in scalars and introspection types. All
	  // functions below are inline so that this type def cache is within the scope
	  // of the closure.
	  var typeDefCache = {
	    String: _scalars.GraphQLString,
	    Int: _scalars.GraphQLInt,
	    Float: _scalars.GraphQLFloat,
	    Boolean: _scalars.GraphQLBoolean,
	    ID: _scalars.GraphQLID,
	    __Schema: _introspection.__Schema,
	    __Directive: _introspection.__Directive,
	    __DirectiveLocation: _introspection.__DirectiveLocation,
	    __Type: _introspection.__Type,
	    __Field: _introspection.__Field,
	    __InputValue: _introspection.__InputValue,
	    __EnumValue: _introspection.__EnumValue,
	    __TypeKind: _introspection.__TypeKind
	  };
	
	  // Get the root Query, Mutation, and Subscription object types.
	  var queryType = getTypeFromDef(schema.getQueryType());
	
	  var existingMutationType = schema.getMutationType();
	  var mutationType = existingMutationType ? getTypeFromDef(existingMutationType) : null;
	
	  var existingSubscriptionType = schema.getSubscriptionType();
	  var subscriptionType = existingSubscriptionType ? getTypeFromDef(existingSubscriptionType) : null;
	
	  // Iterate through all types, getting the type definition for each, ensuring
	  // that any type not directly referenced by a field will get created.
	  var typeMap = schema.getTypeMap();
	  var types = Object.keys(typeMap).map(function (typeName) {
	    return getTypeFromDef(typeMap[typeName]);
	  });
	
	  // Do the same with new types, appending to the list of defined types.
	  Object.keys(typeDefinitionMap).forEach(function (typeName) {
	    types.push(getTypeFromAST(typeDefinitionMap[typeName]));
	  });
	
	  // Then produce and return a Schema with these types.
	  return new _schema.GraphQLSchema({
	    query: queryType,
	    mutation: mutationType,
	    subscription: subscriptionType,
	    types: types,
	    directives: getMergedDirectives(),
	    astNode: schema.astNode
	  });
	
	  // Below are functions used for producing this schema that have closed over
	  // this scope and have access to the schema, cache, and newly defined types.
	
	  function getMergedDirectives() {
	    var existingDirectives = schema.getDirectives();
	    !existingDirectives ? (0, _invariant2.default)(0, 'schema must have default directives') : void 0;
	
	    var newDirectives = directiveDefinitions.map(function (directiveNode) {
	      return getDirective(directiveNode);
	    });
	    return existingDirectives.concat(newDirectives);
	  }
	
	  function getTypeFromDef(typeDef) {
	    var type = _getNamedType(typeDef.name);
	    !type ? (0, _invariant2.default)(0, 'Missing type from schema') : void 0;
	    return type;
	  }
	
	  function getTypeFromAST(node) {
	    var type = _getNamedType(node.name.value);
	    if (!type) {
	      throw new _GraphQLError.GraphQLError('Unknown type: "' + node.name.value + '". Ensure that this type exists ' + 'either in the original schema, or is added in a type definition.', [node]);
	    }
	    return type;
	  }
	
	  function getObjectTypeFromAST(node) {
	    var type = getTypeFromAST(node);
	    !(type instanceof _definition.GraphQLObjectType) ? (0, _invariant2.default)(0, 'Must be Object type.') : void 0;
	    return type;
	  }
	
	  function getInterfaceTypeFromAST(node) {
	    var type = getTypeFromAST(node);
	    !(type instanceof _definition.GraphQLInterfaceType) ? (0, _invariant2.default)(0, 'Must be Interface type.') : void 0;
	    return type;
	  }
	
	  function getInputTypeFromAST(node) {
	    return (0, _definition.assertInputType)(getTypeFromAST(node));
	  }
	
	  function getOutputTypeFromAST(node) {
	    return (0, _definition.assertOutputType)(getTypeFromAST(node));
	  }
	
	  // Given a name, returns a type from either the existing schema or an
	  // added type.
	  function _getNamedType(typeName) {
	    var cachedTypeDef = typeDefCache[typeName];
	    if (cachedTypeDef) {
	      return cachedTypeDef;
	    }
	
	    var existingType = schema.getType(typeName);
	    if (existingType) {
	      var typeDef = extendType(existingType);
	      typeDefCache[typeName] = typeDef;
	      return typeDef;
	    }
	
	    var typeNode = typeDefinitionMap[typeName];
	    if (typeNode) {
	      var _typeDef = buildType(typeNode);
	      typeDefCache[typeName] = _typeDef;
	      return _typeDef;
	    }
	  }
	
	  // Given a type's introspection result, construct the correct
	  // GraphQLType instance.
	  function extendType(type) {
	    if (type instanceof _definition.GraphQLObjectType) {
	      return extendObjectType(type);
	    }
	    if (type instanceof _definition.GraphQLInterfaceType) {
	      return extendInterfaceType(type);
	    }
	    if (type instanceof _definition.GraphQLUnionType) {
	      return extendUnionType(type);
	    }
	    return type;
	  }
	
	  function extendObjectType(type) {
	    var name = type.name;
	    var extensionASTNodes = type.extensionASTNodes;
	    if (typeExtensionsMap[name]) {
	      extensionASTNodes = extensionASTNodes.concat(typeExtensionsMap[name]);
	    }
	
	    return new _definition.GraphQLObjectType({
	      name: name,
	      description: type.description,
	      interfaces: function interfaces() {
	        return extendImplementedInterfaces(type);
	      },
	      fields: function fields() {
	        return extendFieldMap(type);
	      },
	      astNode: type.astNode,
	      extensionASTNodes: extensionASTNodes,
	      isTypeOf: type.isTypeOf
	    });
	  }
	
	  function extendInterfaceType(type) {
	    return new _definition.GraphQLInterfaceType({
	      name: type.name,
	      description: type.description,
	      fields: function fields() {
	        return extendFieldMap(type);
	      },
	      astNode: type.astNode,
	      resolveType: type.resolveType
	    });
	  }
	
	  function extendUnionType(type) {
	    return new _definition.GraphQLUnionType({
	      name: type.name,
	      description: type.description,
	      types: type.getTypes().map(getTypeFromDef),
	      astNode: type.astNode,
	      resolveType: type.resolveType
	    });
	  }
	
	  function extendImplementedInterfaces(type) {
	    var interfaces = type.getInterfaces().map(getTypeFromDef);
	
	    // If there are any extensions to the interfaces, apply those here.
	    var extensions = typeExtensionsMap[type.name];
	    if (extensions) {
	      extensions.forEach(function (extension) {
	        extension.definition.interfaces.forEach(function (namedType) {
	          var interfaceName = namedType.name.value;
	          if (interfaces.some(function (def) {
	            return def.name === interfaceName;
	          })) {
	            throw new _GraphQLError.GraphQLError('Type "' + type.name + '" already implements "' + interfaceName + '". ' + 'It cannot also be implemented in this type extension.', [namedType]);
	          }
	          interfaces.push(getInterfaceTypeFromAST(namedType));
	        });
	      });
	    }
	
	    return interfaces;
	  }
	
	  function extendFieldMap(type) {
	    var newFieldMap = Object.create(null);
	    var oldFieldMap = type.getFields();
	    Object.keys(oldFieldMap).forEach(function (fieldName) {
	      var field = oldFieldMap[fieldName];
	      newFieldMap[fieldName] = {
	        description: field.description,
	        deprecationReason: field.deprecationReason,
	        type: extendFieldType(field.type),
	        args: (0, _keyMap2.default)(field.args, function (arg) {
	          return arg.name;
	        }),
	        astNode: field.astNode,
	        resolve: field.resolve
	      };
	    });
	
	    // If there are any extensions to the fields, apply those here.
	    var extensions = typeExtensionsMap[type.name];
	    if (extensions) {
	      extensions.forEach(function (extension) {
	        extension.definition.fields.forEach(function (field) {
	          var fieldName = field.name.value;
	          if (oldFieldMap[fieldName]) {
	            throw new _GraphQLError.GraphQLError('Field "' + type.name + '.' + fieldName + '" already exists in the ' + 'schema. It cannot also be defined in this type extension.', [field]);
	          }
	          newFieldMap[fieldName] = {
	            description: (0, _buildASTSchema.getDescription)(field),
	            type: buildOutputFieldType(field.type),
	            args: buildInputValues(field.arguments),
	            deprecationReason: (0, _buildASTSchema.getDeprecationReason)(field),
	            astNode: field
	          };
	        });
	      });
	    }
	
	    return newFieldMap;
	  }
	
	  function extendFieldType(typeDef) {
	    if (typeDef instanceof _definition.GraphQLList) {
	      return new _definition.GraphQLList(extendFieldType(typeDef.ofType));
	    }
	    if (typeDef instanceof _definition.GraphQLNonNull) {
	      return new _definition.GraphQLNonNull(extendFieldType(typeDef.ofType));
	    }
	    return getTypeFromDef(typeDef);
	  }
	
	  function buildType(typeNode) {
	    switch (typeNode.kind) {
	      case Kind.OBJECT_TYPE_DEFINITION:
	        return buildObjectType(typeNode);
	      case Kind.INTERFACE_TYPE_DEFINITION:
	        return buildInterfaceType(typeNode);
	      case Kind.UNION_TYPE_DEFINITION:
	        return buildUnionType(typeNode);
	      case Kind.SCALAR_TYPE_DEFINITION:
	        return buildScalarType(typeNode);
	      case Kind.ENUM_TYPE_DEFINITION:
	        return buildEnumType(typeNode);
	      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
	        return buildInputObjectType(typeNode);
	    }
	    throw new TypeError('Unknown type kind ' + typeNode.kind);
	  }
	
	  function buildObjectType(typeNode) {
	    return new _definition.GraphQLObjectType({
	      name: typeNode.name.value,
	      description: (0, _buildASTSchema.getDescription)(typeNode),
	      interfaces: function interfaces() {
	        return buildImplementedInterfaces(typeNode);
	      },
	      fields: function fields() {
	        return buildFieldMap(typeNode);
	      },
	      astNode: typeNode
	    });
	  }
	
	  function buildInterfaceType(typeNode) {
	    return new _definition.GraphQLInterfaceType({
	      name: typeNode.name.value,
	      description: (0, _buildASTSchema.getDescription)(typeNode),
	      fields: function fields() {
	        return buildFieldMap(typeNode);
	      },
	      astNode: typeNode,
	      resolveType: cannotExecuteExtendedSchema
	    });
	  }
	
	  function buildUnionType(typeNode) {
	    return new _definition.GraphQLUnionType({
	      name: typeNode.name.value,
	      description: (0, _buildASTSchema.getDescription)(typeNode),
	      types: typeNode.types.map(getObjectTypeFromAST),
	      astNode: typeNode,
	      resolveType: cannotExecuteExtendedSchema
	    });
	  }
	
	  function buildScalarType(typeNode) {
	    return new _definition.GraphQLScalarType({
	      name: typeNode.name.value,
	      description: (0, _buildASTSchema.getDescription)(typeNode),
	      astNode: typeNode,
	      serialize: function serialize(id) {
	        return id;
	      },
	      // Note: validation calls the parse functions to determine if a
	      // literal value is correct. Returning null would cause use of custom
	      // scalars to always fail validation. Returning false causes them to
	      // always pass validation.
	      parseValue: function parseValue() {
	        return false;
	      },
	      parseLiteral: function parseLiteral() {
	        return false;
	      }
	    });
	  }
	
	  function buildEnumType(typeNode) {
	    return new _definition.GraphQLEnumType({
	      name: typeNode.name.value,
	      description: (0, _buildASTSchema.getDescription)(typeNode),
	      values: (0, _keyValMap2.default)(typeNode.values, function (enumValue) {
	        return enumValue.name.value;
	      }, function (enumValue) {
	        return {
	          description: (0, _buildASTSchema.getDescription)(enumValue),
	          deprecationReason: (0, _buildASTSchema.getDeprecationReason)(enumValue),
	          astNode: enumValue
	        };
	      }),
	      astNode: typeNode
	    });
	  }
	
	  function buildInputObjectType(typeNode) {
	    return new _definition.GraphQLInputObjectType({
	      name: typeNode.name.value,
	      description: (0, _buildASTSchema.getDescription)(typeNode),
	      fields: function fields() {
	        return buildInputValues(typeNode.fields);
	      },
	      astNode: typeNode
	    });
	  }
	
	  function getDirective(directiveNode) {
	    return new _directives.GraphQLDirective({
	      name: directiveNode.name.value,
	      description: (0, _buildASTSchema.getDescription)(directiveNode),
	      locations: directiveNode.locations.map(function (node) {
	        return node.value;
	      }),
	      args: directiveNode.arguments && buildInputValues(directiveNode.arguments),
	      astNode: directiveNode
	    });
	  }
	
	  function buildImplementedInterfaces(typeNode) {
	    return typeNode.interfaces && typeNode.interfaces.map(getInterfaceTypeFromAST);
	  }
	
	  function buildFieldMap(typeNode) {
	    return (0, _keyValMap2.default)(typeNode.fields, function (field) {
	      return field.name.value;
	    }, function (field) {
	      return {
	        type: buildOutputFieldType(field.type),
	        description: (0, _buildASTSchema.getDescription)(field),
	        args: buildInputValues(field.arguments),
	        deprecationReason: (0, _buildASTSchema.getDeprecationReason)(field),
	        astNode: field
	      };
	    });
	  }
	
	  function buildInputValues(values) {
	    return (0, _keyValMap2.default)(values, function (value) {
	      return value.name.value;
	    }, function (value) {
	      var type = buildInputFieldType(value.type);
	      return {
	        type: type,
	        description: (0, _buildASTSchema.getDescription)(value),
	        defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type),
	        astNode: value
	      };
	    });
	  }
	
	  function buildInputFieldType(typeNode) {
	    if (typeNode.kind === Kind.LIST_TYPE) {
	      return new _definition.GraphQLList(buildInputFieldType(typeNode.type));
	    }
	    if (typeNode.kind === Kind.NON_NULL_TYPE) {
	      var nullableType = buildInputFieldType(typeNode.type);
	      !!(nullableType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'Must be nullable') : void 0;
	      return new _definition.GraphQLNonNull(nullableType);
	    }
	    return getInputTypeFromAST(typeNode);
	  }
	
	  function buildOutputFieldType(typeNode) {
	    if (typeNode.kind === Kind.LIST_TYPE) {
	      return new _definition.GraphQLList(buildOutputFieldType(typeNode.type));
	    }
	    if (typeNode.kind === Kind.NON_NULL_TYPE) {
	      var nullableType = buildOutputFieldType(typeNode.type);
	      !!(nullableType instanceof _definition.GraphQLNonNull) ? (0, _invariant2.default)(0, 'Must be nullable') : void 0;
	      return new _definition.GraphQLNonNull(nullableType);
	    }
	    return getOutputTypeFromAST(typeNode);
	  }
	}
	
	function cannotExecuteExtendedSchema() {
	  throw new Error('Extended Schema cannot use Interface or Union types for execution.');
	}

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DangerousChangeType = exports.BreakingChangeType = undefined;
	exports.findBreakingChanges = findBreakingChanges;
	exports.findDangerousChanges = findDangerousChanges;
	exports.findRemovedTypes = findRemovedTypes;
	exports.findTypesThatChangedKind = findTypesThatChangedKind;
	exports.findArgChanges = findArgChanges;
	exports.findFieldsThatChangedType = findFieldsThatChangedType;
	exports.findFieldsThatChangedTypeOnInputObjectTypes = findFieldsThatChangedTypeOnInputObjectTypes;
	exports.findTypesRemovedFromUnions = findTypesRemovedFromUnions;
	exports.findTypesAddedToUnions = findTypesAddedToUnions;
	exports.findValuesRemovedFromEnums = findValuesRemovedFromEnums;
	exports.findValuesAddedToEnums = findValuesAddedToEnums;
	exports.findInterfacesRemovedFromObjectTypes = findInterfacesRemovedFromObjectTypes;
	
	var _definition = __webpack_require__(4);
	
	var _schema = __webpack_require__(17);
	
	/**
	 * Copyright (c) 2016-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	var BreakingChangeType = exports.BreakingChangeType = {
	  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
	  FIELD_REMOVED: 'FIELD_REMOVED',
	  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
	  TYPE_REMOVED: 'TYPE_REMOVED',
	  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
	  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
	  ARG_REMOVED: 'ARG_REMOVED',
	  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
	  NON_NULL_ARG_ADDED: 'NON_NULL_ARG_ADDED',
	  NON_NULL_INPUT_FIELD_ADDED: 'NON_NULL_INPUT_FIELD_ADDED',
	  INTERFACE_REMOVED_FROM_OBJECT: 'INTERFACE_REMOVED_FROM_OBJECT'
	};
	
	var DangerousChangeType = exports.DangerousChangeType = {
	  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE',
	  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
	  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION'
	};
	
	/**
	 * Given two schemas, returns an Array containing descriptions of all the types
	 * of breaking changes covered by the other functions down below.
	 */
	function findBreakingChanges(oldSchema, newSchema) {
	  return [].concat(findRemovedTypes(oldSchema, newSchema), findTypesThatChangedKind(oldSchema, newSchema), findFieldsThatChangedType(oldSchema, newSchema), findTypesRemovedFromUnions(oldSchema, newSchema), findValuesRemovedFromEnums(oldSchema, newSchema), findArgChanges(oldSchema, newSchema).breakingChanges, findInterfacesRemovedFromObjectTypes(oldSchema, newSchema));
	}
	
	/**
	 * Given two schemas, returns an Array containing descriptions of all the types
	 * of potentially dangerous changes covered by the other functions down below.
	 */
	function findDangerousChanges(oldSchema, newSchema) {
	  return [].concat(findArgChanges(oldSchema, newSchema).dangerousChanges, findValuesAddedToEnums(oldSchema, newSchema), findTypesAddedToUnions(oldSchema, newSchema));
	}
	
	/**
	 * Given two schemas, returns an Array containing descriptions of any breaking
	 * changes in the newSchema related to removing an entire type.
	 */
	function findRemovedTypes(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	
	  var breakingChanges = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    if (!newTypeMap[typeName]) {
	      breakingChanges.push({
	        type: BreakingChangeType.TYPE_REMOVED,
	        description: typeName + ' was removed.'
	      });
	    }
	  });
	  return breakingChanges;
	}
	
	/**
	 * Given two schemas, returns an Array containing descriptions of any breaking
	 * changes in the newSchema related to changing the type of a type.
	 */
	function findTypesThatChangedKind(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	
	  var breakingChanges = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    if (!newTypeMap[typeName]) {
	      return;
	    }
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(oldType instanceof newType.constructor)) {
	      breakingChanges.push({
	        type: BreakingChangeType.TYPE_CHANGED_KIND,
	        description: typeName + ' changed from ' + (typeKindName(oldType) + ' to ' + typeKindName(newType) + '.')
	      });
	    }
	  });
	  return breakingChanges;
	}
	
	/**
	 * Given two schemas, returns an Array containing descriptions of any
	 * breaking or dangerous changes in the newSchema related to arguments
	 * (such as removal or change of type of an argument, or a change in an
	 * argument's default value).
	 */
	function findArgChanges(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	
	  var breakingChanges = [];
	  var dangerousChanges = [];
	
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(oldType instanceof _definition.GraphQLObjectType || oldType instanceof _definition.GraphQLInterfaceType) || !(newType instanceof oldType.constructor)) {
	      return;
	    }
	
	    var oldTypeFields = oldType.getFields();
	    var newTypeFields = newType.getFields();
	
	    Object.keys(oldTypeFields).forEach(function (fieldName) {
	      if (!newTypeFields[fieldName]) {
	        return;
	      }
	
	      oldTypeFields[fieldName].args.forEach(function (oldArgDef) {
	        var newArgs = newTypeFields[fieldName].args;
	        var newArgDef = newArgs.find(function (arg) {
	          return arg.name === oldArgDef.name;
	        });
	
	        // Arg not present
	        if (!newArgDef) {
	          breakingChanges.push({
	            type: BreakingChangeType.ARG_REMOVED,
	            description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' was removed')
	          });
	        } else {
	          var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldArgDef.type, newArgDef.type);
	          if (!isSafe) {
	            breakingChanges.push({
	              type: BreakingChangeType.ARG_CHANGED_KIND,
	              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed type from ') + (oldArgDef.type.toString() + ' to ' + newArgDef.type.toString())
	            });
	          } else if (oldArgDef.defaultValue !== undefined && oldArgDef.defaultValue !== newArgDef.defaultValue) {
	            dangerousChanges.push({
	              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
	              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed defaultValue')
	            });
	          }
	        }
	      });
	      // Check if a non-null arg was added to the field
	      newTypeFields[fieldName].args.forEach(function (newArgDef) {
	        var oldArgs = oldTypeFields[fieldName].args;
	        var oldArgDef = oldArgs.find(function (arg) {
	          return arg.name === newArgDef.name;
	        });
	        if (!oldArgDef && newArgDef.type instanceof _definition.GraphQLNonNull) {
	          breakingChanges.push({
	            type: BreakingChangeType.NON_NULL_ARG_ADDED,
	            description: 'A non-null arg ' + newArgDef.name + ' on ' + (newType.name + '.' + fieldName + ' was added')
	          });
	        }
	      });
	    });
	  });
	
	  return {
	    breakingChanges: breakingChanges,
	    dangerousChanges: dangerousChanges
	  };
	}
	
	function typeKindName(type) {
	  if (type instanceof _definition.GraphQLScalarType) {
	    return 'a Scalar type';
	  }
	  if (type instanceof _definition.GraphQLObjectType) {
	    return 'an Object type';
	  }
	  if (type instanceof _definition.GraphQLInterfaceType) {
	    return 'an Interface type';
	  }
	  if (type instanceof _definition.GraphQLUnionType) {
	    return 'a Union type';
	  }
	  if (type instanceof _definition.GraphQLEnumType) {
	    return 'an Enum type';
	  }
	  if (type instanceof _definition.GraphQLInputObjectType) {
	    return 'an Input type';
	  }
	  throw new TypeError('Unknown type ' + type.constructor.name);
	}
	
	/**
	 * Given two schemas, returns an Array containing descriptions of any breaking
	 * changes in the newSchema related to the fields on a type. This includes if
	 * a field has been removed from a type, if a field has changed type, or if
	 * a non-null field is added to an input type.
	 */
	function findFieldsThatChangedType(oldSchema, newSchema) {
	  return [].concat(findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema));
	}
	
	function findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	
	  var breakingFieldChanges = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(oldType instanceof _definition.GraphQLObjectType || oldType instanceof _definition.GraphQLInterfaceType) || !(newType instanceof oldType.constructor)) {
	      return;
	    }
	
	    var oldTypeFieldsDef = oldType.getFields();
	    var newTypeFieldsDef = newType.getFields();
	    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
	      // Check if the field is missing on the type in the new schema.
	      if (!(fieldName in newTypeFieldsDef)) {
	        breakingFieldChanges.push({
	          type: BreakingChangeType.FIELD_REMOVED,
	          description: typeName + '.' + fieldName + ' was removed.'
	        });
	      } else {
	        var oldFieldType = oldTypeFieldsDef[fieldName].type;
	        var newFieldType = newTypeFieldsDef[fieldName].type;
	        var isSafe = isChangeSafeForObjectOrInterfaceField(oldFieldType, newFieldType);
	        if (!isSafe) {
	          var oldFieldTypeString = (0, _definition.isNamedType)(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
	          var newFieldTypeString = (0, _definition.isNamedType)(newFieldType) ? newFieldType.name : newFieldType.toString();
	          breakingFieldChanges.push({
	            type: BreakingChangeType.FIELD_CHANGED_KIND,
	            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
	          });
	        }
	      }
	    });
	  });
	  return breakingFieldChanges;
	}
	
	function findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	
	  var breakingFieldChanges = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(oldType instanceof _definition.GraphQLInputObjectType) || !(newType instanceof _definition.GraphQLInputObjectType)) {
	      return;
	    }
	
	    var oldTypeFieldsDef = oldType.getFields();
	    var newTypeFieldsDef = newType.getFields();
	    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
	      // Check if the field is missing on the type in the new schema.
	      if (!(fieldName in newTypeFieldsDef)) {
	        breakingFieldChanges.push({
	          type: BreakingChangeType.FIELD_REMOVED,
	          description: typeName + '.' + fieldName + ' was removed.'
	        });
	      } else {
	        var oldFieldType = oldTypeFieldsDef[fieldName].type;
	        var newFieldType = newTypeFieldsDef[fieldName].type;
	
	        var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldFieldType, newFieldType);
	        if (!isSafe) {
	          var oldFieldTypeString = (0, _definition.isNamedType)(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
	          var newFieldTypeString = (0, _definition.isNamedType)(newFieldType) ? newFieldType.name : newFieldType.toString();
	          breakingFieldChanges.push({
	            type: BreakingChangeType.FIELD_CHANGED_KIND,
	            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
	          });
	        }
	      }
	    });
	    // Check if a non-null field was added to the input object type
	    Object.keys(newTypeFieldsDef).forEach(function (fieldName) {
	      if (!(fieldName in oldTypeFieldsDef) && newTypeFieldsDef[fieldName].type instanceof _definition.GraphQLNonNull) {
	        breakingFieldChanges.push({
	          type: BreakingChangeType.NON_NULL_INPUT_FIELD_ADDED,
	          description: 'A non-null field ' + fieldName + ' on ' + ('input type ' + newType.name + ' was added.')
	        });
	      }
	    });
	  });
	  return breakingFieldChanges;
	}
	
	function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
	  if ((0, _definition.isNamedType)(oldType)) {
	    return (
	      // if they're both named types, see if their names are equivalent
	      (0, _definition.isNamedType)(newType) && oldType.name === newType.name ||
	      // moving from nullable to non-null of the same underlying type is safe
	      newType instanceof _definition.GraphQLNonNull && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
	    );
	  } else if (oldType instanceof _definition.GraphQLList) {
	    return (
	      // if they're both lists, make sure the underlying types are compatible
	      newType instanceof _definition.GraphQLList && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) ||
	      // moving from nullable to non-null of the same underlying type is safe
	      newType instanceof _definition.GraphQLNonNull && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
	    );
	  } else if (oldType instanceof _definition.GraphQLNonNull) {
	    // if they're both non-null, make sure the underlying types are compatible
	    return newType instanceof _definition.GraphQLNonNull && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
	  }
	  return false;
	}
	
	function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
	  if ((0, _definition.isNamedType)(oldType)) {
	    // if they're both named types, see if their names are equivalent
	    return (0, _definition.isNamedType)(newType) && oldType.name === newType.name;
	  } else if (oldType instanceof _definition.GraphQLList) {
	    // if they're both lists, make sure the underlying types are compatible
	    return newType instanceof _definition.GraphQLList && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
	  } else if (oldType instanceof _definition.GraphQLNonNull) {
	    return (
	      // if they're both non-null, make sure the underlying types are
	      // compatible
	      newType instanceof _definition.GraphQLNonNull && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) ||
	      // moving from non-null to nullable of the same underlying type is safe
	      !(newType instanceof _definition.GraphQLNonNull) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
	    );
	  }
	  return false;
	}
	
	/**
	 * Given two schemas, returns an Array containing descriptions of any breaking
	 * changes in the newSchema related to removing types from a union type.
	 */
	function findTypesRemovedFromUnions(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	
	  var typesRemovedFromUnion = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(oldType instanceof _definition.GraphQLUnionType) || !(newType instanceof _definition.GraphQLUnionType)) {
	      return;
	    }
	    var typeNamesInNewUnion = Object.create(null);
	    newType.getTypes().forEach(function (type) {
	      typeNamesInNewUnion[type.name] = true;
	    });
	    oldType.getTypes().forEach(function (type) {
	      if (!typeNamesInNewUnion[type.name]) {
	        typesRemovedFromUnion.push({
	          type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
	          description: type.name + ' was removed from union type ' + typeName + '.'
	        });
	      }
	    });
	  });
	  return typesRemovedFromUnion;
	}
	
	/**
	 * Given two schemas, returns an Array containing descriptions of any dangerous
	 * changes in the newSchema related to adding types to a union type.
	 */
	function findTypesAddedToUnions(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	
	  var typesAddedToUnion = [];
	  Object.keys(newTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(oldType instanceof _definition.GraphQLUnionType) || !(newType instanceof _definition.GraphQLUnionType)) {
	      return;
	    }
	    var typeNamesInOldUnion = Object.create(null);
	    oldType.getTypes().forEach(function (type) {
	      typeNamesInOldUnion[type.name] = true;
	    });
	    newType.getTypes().forEach(function (type) {
	      if (!typeNamesInOldUnion[type.name]) {
	        typesAddedToUnion.push({
	          type: DangerousChangeType.TYPE_ADDED_TO_UNION,
	          description: type.name + ' was added to union type ' + typeName + '.'
	        });
	      }
	    });
	  });
	  return typesAddedToUnion;
	}
	/**
	 * Given two schemas, returns an Array containing descriptions of any breaking
	 * changes in the newSchema related to removing values from an enum type.
	 */
	function findValuesRemovedFromEnums(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	
	  var valuesRemovedFromEnums = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(oldType instanceof _definition.GraphQLEnumType) || !(newType instanceof _definition.GraphQLEnumType)) {
	      return;
	    }
	    var valuesInNewEnum = Object.create(null);
	    newType.getValues().forEach(function (value) {
	      valuesInNewEnum[value.name] = true;
	    });
	    oldType.getValues().forEach(function (value) {
	      if (!valuesInNewEnum[value.name]) {
	        valuesRemovedFromEnums.push({
	          type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
	          description: value.name + ' was removed from enum type ' + typeName + '.'
	        });
	      }
	    });
	  });
	  return valuesRemovedFromEnums;
	}
	
	/**
	 * Given two schemas, returns an Array containing descriptions of any dangerous
	 * changes in the newSchema related to adding values to an enum type.
	 */
	function findValuesAddedToEnums(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	
	  var valuesAddedToEnums = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(oldType instanceof _definition.GraphQLEnumType) || !(newType instanceof _definition.GraphQLEnumType)) {
	      return;
	    }
	
	    var valuesInOldEnum = Object.create(null);
	    oldType.getValues().forEach(function (value) {
	      valuesInOldEnum[value.name] = true;
	    });
	    newType.getValues().forEach(function (value) {
	      if (!valuesInOldEnum[value.name]) {
	        valuesAddedToEnums.push({
	          type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
	          description: value.name + ' was added to enum type ' + typeName + '.'
	        });
	      }
	    });
	  });
	  return valuesAddedToEnums;
	}
	
	function findInterfacesRemovedFromObjectTypes(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	  var breakingChanges = [];
	
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(oldType instanceof _definition.GraphQLObjectType) || !(newType instanceof _definition.GraphQLObjectType)) {
	      return;
	    }
	
	    var oldInterfaces = oldType.getInterfaces();
	    var newInterfaces = newType.getInterfaces();
	    oldInterfaces.forEach(function (oldInterface) {
	      if (!newInterfaces.some(function (int) {
	        return int.name === oldInterface.name;
	      })) {
	        breakingChanges.push({
	          type: BreakingChangeType.INTERFACE_REMOVED_FROM_OBJECT,
	          description: typeName + ' no longer implements interface ' + (oldInterface.name + '.')
	        });
	      }
	    });
	  });
	  return breakingChanges;
	}

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findDeprecatedUsages = findDeprecatedUsages;
	
	var _GraphQLError = __webpack_require__(36);
	
	var _visitor = __webpack_require__(50);
	
	var _definition = __webpack_require__(4);
	
	var _schema = __webpack_require__(17);
	
	var _TypeInfo = __webpack_require__(114);
	
	/**
	 * A validation rule which reports deprecated usages.
	 *
	 * Returns a list of GraphQLError instances describing each deprecated use.
	 */
	function findDeprecatedUsages(schema, ast) {
	  var errors = [];
	  var typeInfo = new _TypeInfo.TypeInfo(schema);
	
	  (0, _visitor.visit)(ast, (0, _visitor.visitWithTypeInfo)(typeInfo, {
	    Field: function Field(node) {
	      var fieldDef = typeInfo.getFieldDef();
	      if (fieldDef && fieldDef.isDeprecated) {
	        var parentType = typeInfo.getParentType();
	        if (parentType) {
	          var reason = fieldDef.deprecationReason;
	          errors.push(new _GraphQLError.GraphQLError('The field ' + parentType.name + '.' + fieldDef.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
	        }
	      }
	    },
	    EnumValue: function EnumValue(node) {
	      var enumVal = typeInfo.getEnumValue();
	      if (enumVal && enumVal.isDeprecated) {
	        var type = (0, _definition.getNamedType)(typeInfo.getInputType());
	        if (type) {
	          var reason = enumVal.deprecationReason;
	          errors.push(new _GraphQLError.GraphQLError('The enum value ' + type.name + '.' + enumVal.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
	        }
	      }
	    }
	  }));
	
	  return errors;
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperationAST = getOperationAST;
	
	var _kinds = __webpack_require__(6);
	
	/**
	 * Returns an operation AST given a document AST and optionally an operation
	 * name. If a name is not provided, an operation is only returned if only one is
	 * provided in the document.
	 */
	function getOperationAST(documentAST, operationName) {
	  var operation = null;
	  for (var i = 0; i < documentAST.definitions.length; i++) {
	    var definition = documentAST.definitions[i];
	    if (definition.kind === _kinds.OPERATION_DEFINITION) {
	      if (!operationName) {
	        // If no operation name was provided, only return an Operation if there
	        // is one defined in the document. Upon encountering the second, return
	        // null.
	        if (operation) {
	          return null;
	        }
	        operation = definition;
	      } else if (definition.name && definition.name.value === operationName) {
	        return definition;
	      }
	    }
	  }
	  return operation;
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _introspectionQuery = __webpack_require__(424);
	
	Object.defineProperty(exports, 'introspectionQuery', {
	  enumerable: true,
	  get: function get() {
	    return _introspectionQuery.introspectionQuery;
	  }
	});
	
	var _getOperationAST = __webpack_require__(422);
	
	Object.defineProperty(exports, 'getOperationAST', {
	  enumerable: true,
	  get: function get() {
	    return _getOperationAST.getOperationAST;
	  }
	});
	
	var _buildClientSchema = __webpack_require__(417);
	
	Object.defineProperty(exports, 'buildClientSchema', {
	  enumerable: true,
	  get: function get() {
	    return _buildClientSchema.buildClientSchema;
	  }
	});
	
	var _buildASTSchema = __webpack_require__(175);
	
	Object.defineProperty(exports, 'buildASTSchema', {
	  enumerable: true,
	  get: function get() {
	    return _buildASTSchema.buildASTSchema;
	  }
	});
	Object.defineProperty(exports, 'buildSchema', {
	  enumerable: true,
	  get: function get() {
	    return _buildASTSchema.buildSchema;
	  }
	});
	
	var _extendSchema = __webpack_require__(419);
	
	Object.defineProperty(exports, 'extendSchema', {
	  enumerable: true,
	  get: function get() {
	    return _extendSchema.extendSchema;
	  }
	});
	
	var _schemaPrinter = __webpack_require__(425);
	
	Object.defineProperty(exports, 'printSchema', {
	  enumerable: true,
	  get: function get() {
	    return _schemaPrinter.printSchema;
	  }
	});
	Object.defineProperty(exports, 'printType', {
	  enumerable: true,
	  get: function get() {
	    return _schemaPrinter.printType;
	  }
	});
	Object.defineProperty(exports, 'printIntrospectionSchema', {
	  enumerable: true,
	  get: function get() {
	    return _schemaPrinter.printIntrospectionSchema;
	  }
	});
	
	var _typeFromAST = __webpack_require__(18);
	
	Object.defineProperty(exports, 'typeFromAST', {
	  enumerable: true,
	  get: function get() {
	    return _typeFromAST.typeFromAST;
	  }
	});
	
	var _valueFromAST = __webpack_require__(51);
	
	Object.defineProperty(exports, 'valueFromAST', {
	  enumerable: true,
	  get: function get() {
	    return _valueFromAST.valueFromAST;
	  }
	});
	
	var _astFromValue = __webpack_require__(116);
	
	Object.defineProperty(exports, 'astFromValue', {
	  enumerable: true,
	  get: function get() {
	    return _astFromValue.astFromValue;
	  }
	});
	
	var _TypeInfo = __webpack_require__(114);
	
	Object.defineProperty(exports, 'TypeInfo', {
	  enumerable: true,
	  get: function get() {
	    return _TypeInfo.TypeInfo;
	  }
	});
	
	var _isValidJSValue = __webpack_require__(176);
	
	Object.defineProperty(exports, 'isValidJSValue', {
	  enumerable: true,
	  get: function get() {
	    return _isValidJSValue.isValidJSValue;
	  }
	});
	
	var _isValidLiteralValue = __webpack_require__(69);
	
	Object.defineProperty(exports, 'isValidLiteralValue', {
	  enumerable: true,
	  get: function get() {
	    return _isValidLiteralValue.isValidLiteralValue;
	  }
	});
	
	var _concatAST = __webpack_require__(418);
	
	Object.defineProperty(exports, 'concatAST', {
	  enumerable: true,
	  get: function get() {
	    return _concatAST.concatAST;
	  }
	});
	
	var _separateOperations = __webpack_require__(426);
	
	Object.defineProperty(exports, 'separateOperations', {
	  enumerable: true,
	  get: function get() {
	    return _separateOperations.separateOperations;
	  }
	});
	
	var _typeComparators = __webpack_require__(70);
	
	Object.defineProperty(exports, 'isEqualType', {
	  enumerable: true,
	  get: function get() {
	    return _typeComparators.isEqualType;
	  }
	});
	Object.defineProperty(exports, 'isTypeSubTypeOf', {
	  enumerable: true,
	  get: function get() {
	    return _typeComparators.isTypeSubTypeOf;
	  }
	});
	Object.defineProperty(exports, 'doTypesOverlap', {
	  enumerable: true,
	  get: function get() {
	    return _typeComparators.doTypesOverlap;
	  }
	});
	
	var _assertValidName = __webpack_require__(115);
	
	Object.defineProperty(exports, 'assertValidName', {
	  enumerable: true,
	  get: function get() {
	    return _assertValidName.assertValidName;
	  }
	});
	
	var _findBreakingChanges = __webpack_require__(420);
	
	Object.defineProperty(exports, 'BreakingChangeType', {
	  enumerable: true,
	  get: function get() {
	    return _findBreakingChanges.BreakingChangeType;
	  }
	});
	Object.defineProperty(exports, 'DangerousChangeType', {
	  enumerable: true,
	  get: function get() {
	    return _findBreakingChanges.DangerousChangeType;
	  }
	});
	Object.defineProperty(exports, 'findBreakingChanges', {
	  enumerable: true,
	  get: function get() {
	    return _findBreakingChanges.findBreakingChanges;
	  }
	});
	Object.defineProperty(exports, 'findDangerousChanges', {
	  enumerable: true,
	  get: function get() {
	    return _findBreakingChanges.findDangerousChanges;
	  }
	});
	
	var _findDeprecatedUsages = __webpack_require__(421);
	
	Object.defineProperty(exports, 'findDeprecatedUsages', {
	  enumerable: true,
	  get: function get() {
	    return _findDeprecatedUsages.findDeprecatedUsages;
	  }
	});

/***/ }),
/* 424 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var introspectionQuery = exports.introspectionQuery = '\n  query IntrospectionQuery {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      subscriptionType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        locations\n        args {\n          ...InputValue\n        }\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'; /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Copyright (c) 2015-present, Facebook, Inc.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * This source code is licensed under the MIT license found in the
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * LICENSE file in the root directory of this source tree.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.printSchema = printSchema;
	exports.printIntrospectionSchema = printIntrospectionSchema;
	exports.printType = printType;
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _isNullish = __webpack_require__(25);
	
	var _isNullish2 = _interopRequireDefault(_isNullish);
	
	var _isInvalid = __webpack_require__(49);
	
	var _isInvalid2 = _interopRequireDefault(_isInvalid);
	
	var _astFromValue = __webpack_require__(116);
	
	var _printer = __webpack_require__(11);
	
	var _definition = __webpack_require__(4);
	
	var _scalars = __webpack_require__(22);
	
	var _directives = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function printSchema(schema) {
	  return printFilteredSchema(schema, function (n) {
	    return !isSpecDirective(n);
	  }, isDefinedType);
	}
	
	function printIntrospectionSchema(schema) {
	  return printFilteredSchema(schema, isSpecDirective, isIntrospectionType);
	}
	
	function isSpecDirective(directiveName) {
	  return directiveName === 'skip' || directiveName === 'include' || directiveName === 'deprecated';
	}
	
	function isDefinedType(typename) {
	  return !isIntrospectionType(typename) && !isBuiltInScalar(typename);
	}
	
	function isIntrospectionType(typename) {
	  return typename.indexOf('__') === 0;
	}
	
	function isBuiltInScalar(typename) {
	  return typename === 'String' || typename === 'Boolean' || typename === 'Int' || typename === 'Float' || typename === 'ID';
	}
	
	function printFilteredSchema(schema, directiveFilter, typeFilter) {
	  var directives = schema.getDirectives().filter(function (directive) {
	    return directiveFilter(directive.name);
	  });
	  var typeMap = schema.getTypeMap();
	  var types = Object.keys(typeMap).filter(typeFilter).sort(function (name1, name2) {
	    return name1.localeCompare(name2);
	  }).map(function (typeName) {
	    return typeMap[typeName];
	  });
	
	  return [printSchemaDefinition(schema)].concat(directives.map(printDirective), types.map(printType)).filter(Boolean).join('\n\n') + '\n';
	}
	
	function printSchemaDefinition(schema) {
	  if (isSchemaOfCommonNames(schema)) {
	    return;
	  }
	
	  var operationTypes = [];
	
	  var queryType = schema.getQueryType();
	  if (queryType) {
	    operationTypes.push('  query: ' + queryType.name);
	  }
	
	  var mutationType = schema.getMutationType();
	  if (mutationType) {
	    operationTypes.push('  mutation: ' + mutationType.name);
	  }
	
	  var subscriptionType = schema.getSubscriptionType();
	  if (subscriptionType) {
	    operationTypes.push('  subscription: ' + subscriptionType.name);
	  }
	
	  return 'schema {\n' + operationTypes.join('\n') + '\n}';
	}
	
	/**
	 * GraphQL schema define root types for each type of operation. These types are
	 * the same as any other type and can be named in any manner, however there is
	 * a common naming convention:
	 *
	 *   schema {
	 *     query: Query
	 *     mutation: Mutation
	 *   }
	 *
	 * When using this naming convention, the schema description can be omitted.
	 */
	function isSchemaOfCommonNames(schema) {
	  var queryType = schema.getQueryType();
	  if (queryType && queryType.name !== 'Query') {
	    return false;
	  }
	
	  var mutationType = schema.getMutationType();
	  if (mutationType && mutationType.name !== 'Mutation') {
	    return false;
	  }
	
	  var subscriptionType = schema.getSubscriptionType();
	  if (subscriptionType && subscriptionType.name !== 'Subscription') {
	    return false;
	  }
	
	  return true;
	}
	
	function printType(type) {
	  if (type instanceof _definition.GraphQLScalarType) {
	    return printScalar(type);
	  } else if (type instanceof _definition.GraphQLObjectType) {
	    return printObject(type);
	  } else if (type instanceof _definition.GraphQLInterfaceType) {
	    return printInterface(type);
	  } else if (type instanceof _definition.GraphQLUnionType) {
	    return printUnion(type);
	  } else if (type instanceof _definition.GraphQLEnumType) {
	    return printEnum(type);
	  }
	  !(type instanceof _definition.GraphQLInputObjectType) ? (0, _invariant2.default)(0) : void 0;
	  return printInputObject(type);
	}
	
	function printScalar(type) {
	  return printDescription(type) + ('scalar ' + type.name);
	}
	
	function printObject(type) {
	  var interfaces = type.getInterfaces();
	  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
	    return i.name;
	  }).join(', ') : '';
	  return printDescription(type) + ('type ' + type.name + implementedInterfaces + ' {\n') + printFields(type) + '\n' + '}';
	}
	
	function printInterface(type) {
	  return printDescription(type) + ('interface ' + type.name + ' {\n') + printFields(type) + '\n' + '}';
	}
	
	function printUnion(type) {
	  return printDescription(type) + ('union ' + type.name + ' = ' + type.getTypes().join(' | '));
	}
	
	function printEnum(type) {
	  return printDescription(type) + ('enum ' + type.name + ' {\n') + printEnumValues(type.getValues()) + '\n' + '}';
	}
	
	function printEnumValues(values) {
	  return values.map(function (value, i) {
	    return printDescription(value, '  ', !i) + '  ' + value.name + printDeprecated(value);
	  }).join('\n');
	}
	
	function printInputObject(type) {
	  var fieldMap = type.getFields();
	  var fields = Object.keys(fieldMap).map(function (fieldName) {
	    return fieldMap[fieldName];
	  });
	  return printDescription(type) + ('input ' + type.name + ' {\n') + fields.map(function (f, i) {
	    return printDescription(f, '  ', !i) + '  ' + printInputValue(f);
	  }).join('\n') + '\n' + '}';
	}
	
	function printFields(type) {
	  var fieldMap = type.getFields();
	  var fields = Object.keys(fieldMap).map(function (fieldName) {
	    return fieldMap[fieldName];
	  });
	  return fields.map(function (f, i) {
	    return printDescription(f, '  ', !i) + '  ' + f.name + printArgs(f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
	  }).join('\n');
	}
	
	function printArgs(args) {
	  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  if (args.length === 0) {
	    return '';
	  }
	
	  // If every arg does not have a description, print them on one line.
	  if (args.every(function (arg) {
	    return !arg.description;
	  })) {
	    return '(' + args.map(printInputValue).join(', ') + ')';
	  }
	
	  return '(\n' + args.map(function (arg, i) {
	    return printDescription(arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
	  }).join('\n') + '\n' + indentation + ')';
	}
	
	function printInputValue(arg) {
	  var argDecl = arg.name + ': ' + String(arg.type);
	  if (!(0, _isInvalid2.default)(arg.defaultValue)) {
	    argDecl += ' = ' + (0, _printer.print)((0, _astFromValue.astFromValue)(arg.defaultValue, arg.type));
	  }
	  return argDecl;
	}
	
	function printDirective(directive) {
	  return printDescription(directive) + 'directive @' + directive.name + printArgs(directive.args) + ' on ' + directive.locations.join(' | ');
	}
	
	function printDeprecated(fieldOrEnumVal) {
	  var reason = fieldOrEnumVal.deprecationReason;
	  if ((0, _isNullish2.default)(reason)) {
	    return '';
	  }
	  if (reason === '' || reason === _directives.DEFAULT_DEPRECATION_REASON) {
	    return ' @deprecated';
	  }
	  return ' @deprecated(reason: ' + (0, _printer.print)((0, _astFromValue.astFromValue)(reason, _scalars.GraphQLString)) + ')';
	}
	
	function printDescription(def) {
	  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var firstInBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	  if (!def.description) {
	    return '';
	  }
	  var lines = def.description.split('\n');
	  var description = indentation && !firstInBlock ? '\n' : '';
	  for (var i = 0; i < lines.length; i++) {
	    if (lines[i] === '') {
	      description += indentation + '#\n';
	    } else {
	      // For > 120 character long lines, cut at space boundaries into sublines
	      // of ~80 chars.
	      var sublines = breakLine(lines[i], 120 - indentation.length);
	      for (var j = 0; j < sublines.length; j++) {
	        description += indentation + '# ' + sublines[j] + '\n';
	      }
	    }
	  }
	  return description;
	}
	
	function breakLine(line, len) {
	  if (line.length < len + 5) {
	    return [line];
	  }
	  var parts = line.split(new RegExp('((?: |^).{15,' + (len - 40) + '}(?= |$))'));
	  if (parts.length < 4) {
	    return [line];
	  }
	  var sublines = [parts[0] + parts[1] + parts[2]];
	  for (var i = 3; i < parts.length; i += 2) {
	    sublines.push(parts[i].slice(1) + parts[i + 1]);
	  }
	  return sublines;
	}

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.separateOperations = separateOperations;
	
	var _visitor = __webpack_require__(50);
	
	/**
	 * separateOperations accepts a single AST document which may contain many
	 * operations and fragments and returns a collection of AST documents each of
	 * which contains a single operation as well the fragment definitions it
	 * refers to.
	 */
	function separateOperations(documentAST) {
	  var operations = [];
	  var fragments = Object.create(null);
	  var positions = new Map();
	  var depGraph = Object.create(null);
	  var fromName = void 0;
	  var idx = 0;
	
	  // Populate metadata and build a dependency graph.
	  (0, _visitor.visit)(documentAST, {
	    OperationDefinition: function OperationDefinition(node) {
	      fromName = opName(node);
	      operations.push(node);
	      positions.set(node, idx++);
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      fromName = node.name.value;
	      fragments[fromName] = node;
	      positions.set(node, idx++);
	    },
	    FragmentSpread: function FragmentSpread(node) {
	      var toName = node.name.value;
	      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
	    }
	  });
	
	  // For each operation, produce a new synthesized AST which includes only what
	  // is necessary for completing that operation.
	  var separatedDocumentASTs = Object.create(null);
	  operations.forEach(function (operation) {
	    var operationName = opName(operation);
	    var dependencies = Object.create(null);
	    collectTransitiveDependencies(dependencies, depGraph, operationName);
	
	    // The list of definition nodes to be included for this operation, sorted
	    // to retain the same order as the original document.
	    var definitions = [operation];
	    Object.keys(dependencies).forEach(function (name) {
	      definitions.push(fragments[name]);
	    });
	    definitions.sort(function (n1, n2) {
	      return (positions.get(n1) || 0) - (positions.get(n2) || 0);
	    });
	
	    separatedDocumentASTs[operationName] = {
	      kind: 'Document',
	      definitions: definitions
	    };
	  });
	
	  return separatedDocumentASTs;
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */
	
	// Provides the empty string for anonymous operations.
	function opName(operation) {
	  return operation.name ? operation.name.value : '';
	}
	
	// From a dependency graph, collects a list of transitive dependencies by
	// recursing through a dependency graph.
	function collectTransitiveDependencies(collected, depGraph, fromName) {
	  var immediateDeps = depGraph[fromName];
	  if (immediateDeps) {
	    Object.keys(immediateDeps).forEach(function (toName) {
	      if (!collected[toName]) {
	        collected[toName] = true;
	        collectTransitiveDependencies(collected, depGraph, toName);
	      }
	    });
	  }
	}

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validate = __webpack_require__(204);
	
	Object.defineProperty(exports, 'validate', {
	  enumerable: true,
	  get: function get() {
	    return _validate.validate;
	  }
	});
	Object.defineProperty(exports, 'ValidationContext', {
	  enumerable: true,
	  get: function get() {
	    return _validate.ValidationContext;
	  }
	});
	
	var _specifiedRules = __webpack_require__(203);
	
	Object.defineProperty(exports, 'specifiedRules', {
	  enumerable: true,
	  get: function get() {
	    return _specifiedRules.specifiedRules;
	  }
	});
	
	var _ArgumentsOfCorrectType = __webpack_require__(177);
	
	Object.defineProperty(exports, 'ArgumentsOfCorrectTypeRule', {
	  enumerable: true,
	  get: function get() {
	    return _ArgumentsOfCorrectType.ArgumentsOfCorrectType;
	  }
	});
	
	var _DefaultValuesOfCorrectType = __webpack_require__(178);
	
	Object.defineProperty(exports, 'DefaultValuesOfCorrectTypeRule', {
	  enumerable: true,
	  get: function get() {
	    return _DefaultValuesOfCorrectType.DefaultValuesOfCorrectType;
	  }
	});
	
	var _FieldsOnCorrectType = __webpack_require__(179);
	
	Object.defineProperty(exports, 'FieldsOnCorrectTypeRule', {
	  enumerable: true,
	  get: function get() {
	    return _FieldsOnCorrectType.FieldsOnCorrectType;
	  }
	});
	
	var _FragmentsOnCompositeTypes = __webpack_require__(180);
	
	Object.defineProperty(exports, 'FragmentsOnCompositeTypesRule', {
	  enumerable: true,
	  get: function get() {
	    return _FragmentsOnCompositeTypes.FragmentsOnCompositeTypes;
	  }
	});
	
	var _KnownArgumentNames = __webpack_require__(181);
	
	Object.defineProperty(exports, 'KnownArgumentNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _KnownArgumentNames.KnownArgumentNames;
	  }
	});
	
	var _KnownDirectives = __webpack_require__(182);
	
	Object.defineProperty(exports, 'KnownDirectivesRule', {
	  enumerable: true,
	  get: function get() {
	    return _KnownDirectives.KnownDirectives;
	  }
	});
	
	var _KnownFragmentNames = __webpack_require__(183);
	
	Object.defineProperty(exports, 'KnownFragmentNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _KnownFragmentNames.KnownFragmentNames;
	  }
	});
	
	var _KnownTypeNames = __webpack_require__(184);
	
	Object.defineProperty(exports, 'KnownTypeNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _KnownTypeNames.KnownTypeNames;
	  }
	});
	
	var _LoneAnonymousOperation = __webpack_require__(185);
	
	Object.defineProperty(exports, 'LoneAnonymousOperationRule', {
	  enumerable: true,
	  get: function get() {
	    return _LoneAnonymousOperation.LoneAnonymousOperation;
	  }
	});
	
	var _NoFragmentCycles = __webpack_require__(186);
	
	Object.defineProperty(exports, 'NoFragmentCyclesRule', {
	  enumerable: true,
	  get: function get() {
	    return _NoFragmentCycles.NoFragmentCycles;
	  }
	});
	
	var _NoUndefinedVariables = __webpack_require__(187);
	
	Object.defineProperty(exports, 'NoUndefinedVariablesRule', {
	  enumerable: true,
	  get: function get() {
	    return _NoUndefinedVariables.NoUndefinedVariables;
	  }
	});
	
	var _NoUnusedFragments = __webpack_require__(188);
	
	Object.defineProperty(exports, 'NoUnusedFragmentsRule', {
	  enumerable: true,
	  get: function get() {
	    return _NoUnusedFragments.NoUnusedFragments;
	  }
	});
	
	var _NoUnusedVariables = __webpack_require__(189);
	
	Object.defineProperty(exports, 'NoUnusedVariablesRule', {
	  enumerable: true,
	  get: function get() {
	    return _NoUnusedVariables.NoUnusedVariables;
	  }
	});
	
	var _OverlappingFieldsCanBeMerged = __webpack_require__(190);
	
	Object.defineProperty(exports, 'OverlappingFieldsCanBeMergedRule', {
	  enumerable: true,
	  get: function get() {
	    return _OverlappingFieldsCanBeMerged.OverlappingFieldsCanBeMerged;
	  }
	});
	
	var _PossibleFragmentSpreads = __webpack_require__(191);
	
	Object.defineProperty(exports, 'PossibleFragmentSpreadsRule', {
	  enumerable: true,
	  get: function get() {
	    return _PossibleFragmentSpreads.PossibleFragmentSpreads;
	  }
	});
	
	var _ProvidedNonNullArguments = __webpack_require__(192);
	
	Object.defineProperty(exports, 'ProvidedNonNullArgumentsRule', {
	  enumerable: true,
	  get: function get() {
	    return _ProvidedNonNullArguments.ProvidedNonNullArguments;
	  }
	});
	
	var _ScalarLeafs = __webpack_require__(193);
	
	Object.defineProperty(exports, 'ScalarLeafsRule', {
	  enumerable: true,
	  get: function get() {
	    return _ScalarLeafs.ScalarLeafs;
	  }
	});
	
	var _SingleFieldSubscriptions = __webpack_require__(194);
	
	Object.defineProperty(exports, 'SingleFieldSubscriptionsRule', {
	  enumerable: true,
	  get: function get() {
	    return _SingleFieldSubscriptions.SingleFieldSubscriptions;
	  }
	});
	
	var _UniqueArgumentNames = __webpack_require__(195);
	
	Object.defineProperty(exports, 'UniqueArgumentNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _UniqueArgumentNames.UniqueArgumentNames;
	  }
	});
	
	var _UniqueDirectivesPerLocation = __webpack_require__(196);
	
	Object.defineProperty(exports, 'UniqueDirectivesPerLocationRule', {
	  enumerable: true,
	  get: function get() {
	    return _UniqueDirectivesPerLocation.UniqueDirectivesPerLocation;
	  }
	});
	
	var _UniqueFragmentNames = __webpack_require__(197);
	
	Object.defineProperty(exports, 'UniqueFragmentNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _UniqueFragmentNames.UniqueFragmentNames;
	  }
	});
	
	var _UniqueInputFieldNames = __webpack_require__(198);
	
	Object.defineProperty(exports, 'UniqueInputFieldNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _UniqueInputFieldNames.UniqueInputFieldNames;
	  }
	});
	
	var _UniqueOperationNames = __webpack_require__(199);
	
	Object.defineProperty(exports, 'UniqueOperationNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _UniqueOperationNames.UniqueOperationNames;
	  }
	});
	
	var _UniqueVariableNames = __webpack_require__(200);
	
	Object.defineProperty(exports, 'UniqueVariableNamesRule', {
	  enumerable: true,
	  get: function get() {
	    return _UniqueVariableNames.UniqueVariableNames;
	  }
	});
	
	var _VariablesAreInputTypes = __webpack_require__(201);
	
	Object.defineProperty(exports, 'VariablesAreInputTypesRule', {
	  enumerable: true,
	  get: function get() {
	    return _VariablesAreInputTypes.VariablesAreInputTypes;
	  }
	});
	
	var _VariablesInAllowedPosition = __webpack_require__(202);
	
	Object.defineProperty(exports, 'VariablesInAllowedPositionRule', {
	  enumerable: true,
	  get: function get() {
	    return _VariablesInAllowedPosition.VariablesInAllowedPosition;
	  }
	});

/***/ }),
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

	var camel2hyphen = __webpack_require__(584);
	
	var isDimension = function (feature) {
	  var re = /[height|width]$/;
	  return re.test(feature);
	};
	
	var obj2mq = function (obj) {
	  var mq = '';
	  var features = Object.keys(obj);
	  features.forEach(function (feature, index) {
	    var value = obj[feature];
	    feature = camel2hyphen(feature);
	    // Add px to dimension features
	    if (isDimension(feature) && typeof value === 'number') {
	      value = value + 'px';
	    }
	    if (value === true) {
	      mq += feature;
	    } else if (value === false) {
	      mq += 'not ' + feature;
	    } else {
	      mq += '(' + feature + ': ' + value + ')';
	    }
	    if (index < features.length-1) {
	      mq += ' and '
	    }
	  });
	  return mq;
	};
	
	var json2mq = function (query) {
	  var mq = '';
	  if (typeof query === 'string') {
	    return query;
	  }
	  // Handling array of media queries
	  if (query instanceof Array) {
	    query.forEach(function (q, index) {
	      mq += obj2mq(q);
	      if (index < query.length-1) {
	        mq += ', '
	      }
	    });
	    return mq;
	  }
	  // Handling single media query
	  return obj2mq(query);
	};
	
	module.exports = json2mq;

/***/ }),
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
	exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(7);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__(235);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var rafPolyfill = function () {
	    var clock = Date.now();
	
	    return function (callback) {
	        var currentTime = Date.now();
	
	        if (currentTime - clock > 16) {
	            clock = currentTime;
	            callback(currentTime);
	        } else {
	            setTimeout(function () {
	                rafPolyfill(callback);
	            }, 0);
	        }
	    };
	}();
	
	var cafPolyfill = function cafPolyfill(id) {
	    return clearTimeout(id);
	};
	
	var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
	
	var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    if (_helmetCallback) {
	        cancelAnimationFrame(_helmetCallback);
	    }
	
	    if (newState.defer) {
	        _helmetCallback = requestAnimationFrame(function () {
	            commitTagChanges(newState, function () {
	                _helmetCallback = null;
	            });
	        });
	    } else {
	        commitTagChanges(newState);
	        _helmetCallback = null;
	    }
	};
	
	var commitTagChanges = function commitTagChanges(newState, cb) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	    updateTitle(title, titleAttributes);
	
	    var tagUpdates = {
	        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	    };
	
	    var addedTags = {};
	    var removedTags = {};
	
	    Object.keys(tagUpdates).forEach(function (tagType) {
	        var _tagUpdates$tagType = tagUpdates[tagType],
	            newTags = _tagUpdates$tagType.newTags,
	            oldTags = _tagUpdates$tagType.oldTags;
	
	
	        if (newTags.length) {
	            addedTags[tagType] = newTags;
	        }
	        if (oldTags.length) {
	            removedTags[tagType] = tagUpdates[tagType].oldTags;
	        }
	    });
	
	    cb && cb();
	
	    onChangeClientState(newState, addedTags, removedTags);
	};
	
	var flattenArray = function flattenArray(possibleArray) {
	    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = flattenArray(title);
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    var flattenedTitle = flattenArray(title);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.warn = warn;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _exenv = __webpack_require__(360);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _shallowequal = __webpack_require__(142);
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = void 0;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      // Try to use displayName of wrapped component
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      // Expose canUseDOM so tests can monkeypatch it
	
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !(0, _shallowequal2.default)(nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      };
	
	      return SideEffect;
	    }(_react.Component);
	
	    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
	    SideEffect.canUseDOM = _exenv2.default.canUseDOM;
	
	
	    return SideEffect;
	  };
	};

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.NextArrow = exports.PrevArrow = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(58);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _helpers = __webpack_require__(141);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PrevArrow = exports.PrevArrow = function (_React$Component) {
	  _inherits(PrevArrow, _React$Component);
	
	  function PrevArrow() {
	    _classCallCheck(this, PrevArrow);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  PrevArrow.prototype.clickHandler = function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  };
	
	  PrevArrow.prototype.render = function render() {
	    var prevClasses = { 'slick-arrow': true, 'slick-prev': true };
	    var prevHandler = this.clickHandler.bind(this, { message: 'previous' });
	
	    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
	      prevClasses['slick-disabled'] = true;
	      prevHandler = null;
	    }
	
	    var prevArrowProps = {
	      key: '0',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(prevClasses),
	      style: { display: 'block' },
	      onClick: prevHandler
	    };
	    var customProps = {
	      currentSlide: this.props.currentSlide,
	      slideCount: this.props.slideCount
	    };
	    var prevArrow;
	
	    if (this.props.prevArrow) {
	      prevArrow = _react2.default.cloneElement(this.props.prevArrow, _extends({}, prevArrowProps, customProps));
	    } else {
	      prevArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '0', type: 'button' }, prevArrowProps),
	        ' Previous'
	      );
	    }
	
	    return prevArrow;
	  };
	
	  return PrevArrow;
	}(_react2.default.Component);
	
	var NextArrow = exports.NextArrow = function (_React$Component2) {
	  _inherits(NextArrow, _React$Component2);
	
	  function NextArrow() {
	    _classCallCheck(this, NextArrow);
	
	    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	  }
	
	  NextArrow.prototype.clickHandler = function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  };
	
	  NextArrow.prototype.render = function render() {
	    var nextClasses = { 'slick-arrow': true, 'slick-next': true };
	    var nextHandler = this.clickHandler.bind(this, { message: 'next' });
	
	    if (!_helpers2.default.canGoNext(this.props)) {
	      nextClasses['slick-disabled'] = true;
	      nextHandler = null;
	    }
	
	    var nextArrowProps = {
	      key: '1',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(nextClasses),
	      style: { display: 'block' },
	      onClick: nextHandler
	    };
	    var customProps = {
	      currentSlide: this.props.currentSlide,
	      slideCount: this.props.slideCount
	    };
	    var nextArrow;
	
	    if (this.props.nextArrow) {
	      nextArrow = _react2.default.cloneElement(this.props.nextArrow, _extends({}, nextArrowProps, customProps));
	    } else {
	      nextArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '1', type: 'button' }, nextArrowProps),
	        ' Next'
	      );
	    }
	
	    return nextArrow;
	  };
	
	  return NextArrow;
	}(_react2.default.Component);

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Dots = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(58);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var getDotCount = function getDotCount(spec) {
	  var dots;
	  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
	  return dots;
	};
	
	var Dots = exports.Dots = function (_React$Component) {
	  _inherits(Dots, _React$Component);
	
	  function Dots() {
	    _classCallCheck(this, Dots);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Dots.prototype.clickHandler = function clickHandler(options, e) {
	    // In Autoplay the focus stays on clicked button even after transition
	    // to next slide. That only goes away by click somewhere outside
	    e.preventDefault();
	    this.props.clickHandler(options);
	  };
	
	  Dots.prototype.render = function render() {
	    var _this2 = this;
	
	    var dotCount = getDotCount({
	      slideCount: this.props.slideCount,
	      slidesToScroll: this.props.slidesToScroll
	    });
	
	    // Apply join & split to Array to pre-fill it for IE8
	    //
	    // Credit: http://stackoverflow.com/a/13735425/1849458
	    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map(function (x, i) {
	
	      var leftBound = i * _this2.props.slidesToScroll;
	      var rightBound = i * _this2.props.slidesToScroll + (_this2.props.slidesToScroll - 1);
	      var className = (0, _classnames2.default)({
	        'slick-active': _this2.props.currentSlide >= leftBound && _this2.props.currentSlide <= rightBound
	      });
	
	      var dotOptions = {
	        message: 'dots',
	        index: i,
	        slidesToScroll: _this2.props.slidesToScroll,
	        currentSlide: _this2.props.currentSlide
	      };
	
	      var onClick = _this2.clickHandler.bind(_this2, dotOptions);
	
	      return _react2.default.createElement(
	        'li',
	        { key: i, className: className },
	        _react2.default.cloneElement(_this2.props.customPaging(i), { onClick: onClick })
	      );
	    });
	
	    return _react2.default.createElement(
	      'ul',
	      { className: this.props.dotsClass, style: { display: 'block' } },
	      dots
	    );
	  };
	
	  return Dots;
	}(_react2.default.Component);

/***/ }),
/* 573 */
/***/ (function(module, exports) {

	"use strict";
	
	var initialState = {
	    animating: false,
	    dragging: false,
	    autoPlayTimer: null,
	    currentDirection: 0,
	    currentLeft: null,
	    currentSlide: 0,
	    direction: 1,
	    listWidth: null,
	    listHeight: null,
	    scrolling: false,
	    // loadIndex: 0,
	    slideCount: null,
	    slideWidth: null,
	    slideHeight: null,
	    swiping: false,
	    // sliding: false,
	    // slideOffset: 0,
	    swipeLeft: null,
	    touchObject: {
	        startX: 0,
	        startY: 0,
	        curX: 0,
	        curY: 0
	    },
	
	    lazyLoadedList: [],
	
	    // added for react
	    initialized: false,
	    edgeDragged: false,
	    swiped: false, // used by swipeEvent. differentites between touch and swipe.
	    trackStyle: {},
	    trackWidth: 0
	
	    // Removed
	    // transformsEnabled: false,
	    // $nextArrow: null,
	    // $prevArrow: null,
	    // $dots: null,
	    // $list: null,
	    // $slideTrack: null,
	    // $slides: null,
	};
	
	module.exports = initialState;

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.InnerSlider = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _eventHandlers = __webpack_require__(575);
	
	var _eventHandlers2 = _interopRequireDefault(_eventHandlers);
	
	var _helpers = __webpack_require__(141);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _initialState = __webpack_require__(573);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	var _defaultProps = __webpack_require__(239);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	var _createReactClass = __webpack_require__(345);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var _classnames = __webpack_require__(58);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _objectAssign = __webpack_require__(7);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _track = __webpack_require__(577);
	
	var _dots = __webpack_require__(572);
	
	var _arrows = __webpack_require__(571);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var InnerSlider = exports.InnerSlider = (0, _createReactClass2.default)({
	  displayName: 'InnerSlider',
	
	  mixins: [_helpers2.default, _eventHandlers2.default],
	  list: null,
	  track: null,
	  listRefHandler: function listRefHandler(ref) {
	    this.list = ref;
	  },
	  trackRefHandler: function trackRefHandler(ref) {
	    this.track = ref;
	  },
	  getInitialState: function getInitialState() {
	    return _extends({}, _initialState2.default, {
	      currentSlide: this.props.initialSlide
	    });
	  },
	  getDefaultProps: function getDefaultProps() {
	    return _defaultProps2.default;
	  },
	  componentWillMount: function componentWillMount() {
	    if (this.props.init) {
	      this.props.init();
	    }
	    this.setState({
	      mounted: true
	    });
	    var lazyLoadedList = [];
	    for (var i = 0; i < _react2.default.Children.count(this.props.children); i++) {
	      if (i >= this.state.currentSlide && i < this.state.currentSlide + this.props.slidesToShow) {
	        lazyLoadedList.push(i);
	      }
	    }
	
	    if (this.props.lazyLoad && this.state.lazyLoadedList.length === 0) {
	      this.setState({
	        lazyLoadedList: lazyLoadedList
	      });
	    }
	
	    // HACK: https://github.com/akiran/react-slick/pull/560/files
	    /* if (typeof window === 'undefined') {
	      this.serverInitialize(this.props);
	    } else {
	      this.setState({ initialized: true });
	    } */
	  },
	  componentDidMount: function componentDidMount() {
	    // Hack for autoplay -- Inspect Later
	    this.initialize(this.props);
	    this.adaptHeight();
	
	    // To support server-side rendering
	    if (!window) {
	      return;
	    }
	    if (window.addEventListener) {
	      window.addEventListener('resize', this.onWindowResized);
	    } else {
	      window.attachEvent('onresize', this.onWindowResized);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationEndCallback) {
	      clearTimeout(this.animationEndCallback);
	    }
	    if (window.addEventListener) {
	      window.removeEventListener('resize', this.onWindowResized);
	    } else {
	      window.detachEvent('onresize', this.onWindowResized);
	    }
	    if (this.state.autoPlayTimer) {
	      clearInterval(this.state.autoPlayTimer);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.slickGoTo != nextProps.slickGoTo) {
	      if (false) {
	        console.warn('react-slick deprecation warning: slickGoTo prop is deprecated and it will be removed in next release. Use slickGoTo method instead');
	      }
	      this.changeSlide({
	        message: 'index',
	        index: nextProps.slickGoTo,
	        currentSlide: this.state.currentSlide
	      });
	    } else if (this.state.currentSlide >= nextProps.children.length) {
	      this.update(nextProps);
	      this.changeSlide({
	        message: 'index',
	        index: nextProps.children.length - nextProps.slidesToShow,
	        currentSlide: this.state.currentSlide
	      });
	    } else {
	      this.update(nextProps);
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.adaptHeight();
	  },
	  onWindowResized: function onWindowResized() {
	    this.update(this.props);
	    // animating state should be cleared while resizing, otherwise autoplay stops working
	    this.setState({
	      animating: false
	    });
	    clearTimeout(this.animationEndCallback);
	    delete this.animationEndCallback;
	  },
	  slickPrev: function slickPrev() {
	    this.changeSlide({ message: 'previous' });
	  },
	  slickNext: function slickNext() {
	    this.changeSlide({ message: 'next' });
	  },
	  slickGoTo: function slickGoTo(slide) {
	    slide = Number(slide);
	    !isNaN(slide) && this.changeSlide({
	      message: 'index',
	      index: slide,
	      currentSlide: this.state.currentSlide
	    });
	  },
	  render: function render() {
	    // HACK: https://github.com/akiran/react-slick/pull/560/files
	    var className = (0, _classnames2.default)('slick-initialized', 'slick-slider', this.props.className, {
	      'slick-vertical': this.props.vertical
	    });
	    /* var className = (0, _classnames2.default)('slick-slider', this.props.className, {
	      'slick-vertical': this.props.vertical,
	      'slick-initialized': this.state.initialized
	    }); */
	
	    var trackProps = {
	      fade: this.props.fade,
	      cssEase: this.props.cssEase,
	      speed: this.props.speed,
	      infinite: this.props.infinite,
	      centerMode: this.props.centerMode,
	      focusOnSelect: this.props.focusOnSelect ? this.selectHandler : null,
	      currentSlide: this.state.currentSlide,
	      lazyLoad: this.props.lazyLoad,
	      lazyLoadedList: this.state.lazyLoadedList,
	      rtl: this.props.rtl,
	      slideWidth: this.state.slideWidth,
	      slidesToShow: this.props.slidesToShow,
	      slidesToScroll: this.props.slidesToScroll,
	      slideCount: this.state.slideCount,
	      trackStyle: this.state.trackStyle,
	      variableWidth: this.props.variableWidth
	    };
	
	    var dots;
	
	    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
	      var dotProps = {
	        dotsClass: this.props.dotsClass,
	        slideCount: this.state.slideCount,
	        slidesToShow: this.props.slidesToShow,
	        currentSlide: this.state.currentSlide,
	        slidesToScroll: this.props.slidesToScroll,
	        clickHandler: this.changeSlide,
	        children: this.props.children,
	        customPaging: this.props.customPaging
	      };
	
	      dots = _react2.default.createElement(_dots.Dots, dotProps);
	    }
	
	    var prevArrow, nextArrow;
	
	    var arrowProps = {
	      infinite: this.props.infinite,
	      centerMode: this.props.centerMode,
	      currentSlide: this.state.currentSlide,
	      slideCount: this.state.slideCount,
	      slidesToShow: this.props.slidesToShow,
	      prevArrow: this.props.prevArrow,
	      nextArrow: this.props.nextArrow,
	      clickHandler: this.changeSlide
	    };
	
	    if (this.props.arrows) {
	      prevArrow = _react2.default.createElement(_arrows.PrevArrow, arrowProps);
	      nextArrow = _react2.default.createElement(_arrows.NextArrow, arrowProps);
	    }
	
	    var verticalHeightStyle = null;
	
	    if (this.props.vertical) {
	      verticalHeightStyle = {
	        height: this.state.listHeight
	      };
	    }
	
	    var centerPaddingStyle = null;
	
	    if (this.props.vertical === false) {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: '0px ' + this.props.centerPadding
	        };
	      }
	    } else {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: this.props.centerPadding + ' 0px'
	        };
	      }
	    }
	
	    var listStyle = (0, _objectAssign2.default)({}, verticalHeightStyle, centerPaddingStyle);
	
	    return _react2.default.createElement(
	      'div',
	      {
	        className: className,
	        onMouseEnter: this.onInnerSliderEnter,
	        onMouseLeave: this.onInnerSliderLeave,
	        onMouseOver: this.onInnerSliderOver
	      },
	      prevArrow,
	      _react2.default.createElement(
	        'div',
	        {
	          ref: this.listRefHandler,
	          className: 'slick-list',
	          style: listStyle,
	          onMouseDown: this.swipeStart,
	          onMouseMove: this.state.dragging ? this.swipeMove : null,
	          onMouseUp: this.swipeEnd,
	          onMouseLeave: this.state.dragging ? this.swipeEnd : null,
	          onTouchStart: this.swipeStart,
	          onTouchMove: this.state.dragging ? this.swipeMove : null,
	          onTouchEnd: this.swipeEnd,
	          onTouchCancel: this.state.dragging ? this.swipeEnd : null,
	          onKeyDown: this.props.accessibility ? this.keyHandler : null },
	        _react2.default.createElement(
	          _track.Track,
	          _extends({ ref: this.trackRefHandler }, trackProps),
	          this.props.children
	        )
	      ),
	      nextArrow,
	      dots
	    );
	  }
	});


/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _trackHelper = __webpack_require__(241);
	
	var _helpers = __webpack_require__(141);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _objectAssign = __webpack_require__(7);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _reactDom = __webpack_require__(41);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EventHandlers = {
	  // Event handler for previous and next
	  changeSlide: function changeSlide(options) {
	    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
	    var _props = this.props,
	        slidesToScroll = _props.slidesToScroll,
	        slidesToShow = _props.slidesToShow;
	    var _state = this.state,
	        slideCount = _state.slideCount,
	        currentSlide = _state.currentSlide;
	
	    unevenOffset = slideCount % slidesToScroll !== 0;
	    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
	
	    if (options.message === 'previous') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
	      targetSlide = currentSlide - slideOffset;
	      if (this.props.lazyLoad) {
	        previousInt = currentSlide - slideOffset;
	        targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
	      }
	    } else if (options.message === 'next') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
	      targetSlide = currentSlide + slideOffset;
	      if (this.props.lazyLoad) {
	        targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
	      }
	    } else if (options.message === 'dots' || options.message === 'children') {
	      // Click on dots
	      targetSlide = options.index * options.slidesToScroll;
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	
	      // HACK: https://github.com/akiran/react-slick/pull/673/files
	      // Click on children
	      if (this.props.infinite) {
	        if (targetSlide === 0 && options.currentSlide === slideCount - 1) {
	          return this.slideHandler(options.currentSlide + 1);
	        } else if (targetSlide === slideCount - 1 && options.currentSlide === 0) {
	          return this.slideHandler(-1);
	        }
	      }
	    } else if (options.message === 'index') {
	      targetSlide = Number(options.index);
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	    }
	
	    this.slideHandler(targetSlide);
	  },
	
	  // Accessiblity handler for previous and next
	  keyHandler: function keyHandler(e) {
	    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
	    if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	      if (e.keyCode === 37 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'next' : 'previous'
	        });
	      } else if (e.keyCode === 39 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'previous' : 'next'
	        });
	      }
	    }
	  },
	  // Focus on selecting a slide (click handler on track)
	  selectHandler: function selectHandler(options) {
	    this.changeSlide(options);
	  },
	  swipeStart: function swipeStart(e) {
	    var touches, posX, posY;
	
	    if (this.props.swipe === false || 'ontouchend' in document && this.props.swipe === false) {
	      return;
	    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
	      return;
	    }
	    posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
	    posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
	    this.setState({
	      dragging: true,
	      touchObject: {
	        startX: posX,
	        startY: posY,
	        curX: posX,
	        curY: posY
	      }
	    });
	  },
	  swipeMove: function swipeMove(e) {
	    if (!this.state.dragging) {
	      e.preventDefault();
	      return;
	    }
	    if (this.state.scrolling) {
	      return;
	    }
	    if (this.state.animating) {
	      e.preventDefault();
	      return;
	    }
	    if (this.props.vertical && this.props.swipeToSlide && this.props.verticalSwiping) {
	      e.preventDefault();
	    }
	    var swipeLeft;
	    var curLeft, positionOffset;
	    var touchObject = this.state.touchObject;
	
	    curLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: this.state.currentSlide,
	      trackRef: this.track
	    }, this.props, this.state));
	    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
	    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
	    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
	    var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
	
	    if (!this.props.verticalSwiping && !this.state.swiping && verticalSwipeLength > 4) {
	      this.setState({
	        scrolling: true
	      });
	      return;
	    }
	
	    if (this.props.verticalSwiping) {
	      touchObject.swipeLength = verticalSwipeLength;
	    }
	
	    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
	
	    if (this.props.verticalSwiping) {
	      positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
	    }
	
	    var currentSlide = this.state.currentSlide;
	    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll);
	    var swipeDirection = this.swipeDirection(this.state.touchObject);
	    var touchSwipeLength = touchObject.swipeLength;
	
	    if (this.props.infinite === false) {
	      if (currentSlide === 0 && swipeDirection === 'right' || currentSlide + 1 >= dotCount && swipeDirection === 'left') {
	        touchSwipeLength = touchObject.swipeLength * this.props.edgeFriction;
	
	        if (this.state.edgeDragged === false && this.props.edgeEvent) {
	          this.props.edgeEvent(swipeDirection);
	          this.setState({ edgeDragged: true });
	        }
	      }
	    }
	
	    if (this.state.swiped === false && this.props.swipeEvent) {
	      this.props.swipeEvent(swipeDirection);
	      this.setState({ swiped: true });
	    }
	
	    if (!this.props.vertical) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    } else {
	      swipeLeft = curLeft + touchSwipeLength * (this.state.listHeight / this.state.listWidth) * positionOffset;
	    }
	
	    if (this.props.verticalSwiping) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    }
	
	    this.setState({
	      touchObject: touchObject,
	      swipeLeft: swipeLeft,
	      trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: swipeLeft }, this.props, this.state))
	    });
	
	    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
	      return;
	    }
	    if (touchObject.swipeLength > 4) {
	      this.setState({
	        swiping: true
	      });
	      e.preventDefault();
	    }
	  },
	  getNavigableIndexes: function getNavigableIndexes() {
	    var max = void 0;
	    var breakPoint = 0;
	    var counter = 0;
	    var indexes = [];
	
	    if (!this.props.infinite) {
	      max = this.state.slideCount;
	    } else {
	      breakPoint = this.props.slidesToShow * -1;
	      counter = this.props.slidesToShow * -1;
	      max = this.state.slideCount * 2;
	    }
	
	    while (breakPoint < max) {
	      indexes.push(breakPoint);
	      breakPoint = counter + this.props.slidesToScroll;
	
	      counter += this.props.slidesToScroll <= this.props.slidesToShow ? this.props.slidesToScroll : this.props.slidesToShow;
	    }
	
	    return indexes;
	  },
	  checkNavigable: function checkNavigable(index) {
	    var navigables = this.getNavigableIndexes();
	    var prevNavigable = 0;
	
	    if (index > navigables[navigables.length - 1]) {
	      index = navigables[navigables.length - 1];
	    } else {
	      for (var n in navigables) {
	        if (index < navigables[n]) {
	          index = prevNavigable;
	          break;
	        }
	
	        prevNavigable = navigables[n];
	      }
	    }
	
	    return index;
	  },
	  getSlideCount: function getSlideCount() {
	    var _this = this;
	
	    var centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;
	
	    if (this.props.swipeToSlide) {
	      var swipedSlide = void 0;
	
	      var slickList = _reactDom2.default.findDOMNode(this.list);
	
	      var slides = slickList.querySelectorAll('.slick-slide');
	
	      Array.from(slides).every(function (slide) {
	        if (!_this.props.vertical) {
	          if (slide.offsetLeft - centerOffset + _this.getWidth(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        } else {
	          if (slide.offsetTop + _this.getHeight(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        }
	
	        return true;
	      });
	
	      // HACK: https://github.com/akiran/react-slick/pull/563/files
	      // var slidesTraversed = Math.abs(swipedSlide.dataset.index - this.state.currentSlide) || 1;
	      const slidesTraversed = Math.abs(swipedSlide && swipedSlide.dataset.index - this.state.currentSlide) || 1;
	
	      return slidesTraversed;
	    } else {
	      return this.props.slidesToScroll;
	    }
	  },
	
	  swipeEnd: function swipeEnd(e) {
	    if (!this.state.dragging) {
	      if (this.props.swipe) {
	        e.preventDefault();
	      }
	      return;
	    }
	    var touchObject = this.state.touchObject;
	    var minSwipe = this.state.listWidth / this.props.touchThreshold;
	    var swipeDirection = this.swipeDirection(touchObject);
	
	    if (this.props.verticalSwiping) {
	      minSwipe = this.state.listHeight / this.props.touchThreshold;
	    }
	
	    var wasScrolling = this.state.scrolling;
	    // reset the state of touch related state variables.
	    this.setState({
	      dragging: false,
	      edgeDragged: false,
	      scrolling: false,
	      swiping: false,
	      swiped: false,
	      swipeLeft: null,
	      touchObject: {}
	    });
	    if (wasScrolling) {
	      return;
	    }
	
	    // Fix for #13
	    if (!touchObject.swipeLength) {
	      return;
	    }
	    if (touchObject.swipeLength > minSwipe) {
	      e.preventDefault();
	
	      var slideCount = void 0,
	          newSlide = void 0;
	
	      switch (swipeDirection) {
	
	        case 'left':
	        case 'down':
	          newSlide = this.state.currentSlide + this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.state.currentDirection = 0;
	          break;
	
	        case 'right':
	        case 'up':
	          newSlide = this.state.currentSlide - this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.state.currentDirection = 1;
	          break;
	
	        default:
	          slideCount = this.state.currentSlide;
	
	      }
	
	      this.slideHandler(slideCount);
	    } else {
	      // Adjust the track back to it's original position.
	      var currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, this.props, this.state));
	
	      this.setState({
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      });
	    }
	  },
	  onInnerSliderEnter: function onInnerSliderEnter(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  onInnerSliderOver: function onInnerSliderOver(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  onInnerSliderLeave: function onInnerSliderLeave(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.autoPlay();
	    }
	  }
	};
	
	exports.default = EventHandlers;


/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _innerSlider = __webpack_require__(574);
	
	var _objectAssign = __webpack_require__(7);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _json2mq = __webpack_require__(434);
	
	var _json2mq2 = _interopRequireDefault(_json2mq);
	
	var _defaultProps = __webpack_require__(239);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	var _canUseDom = __webpack_require__(280);
	
	var _canUseDom2 = _interopRequireDefault(_canUseDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var enquire = _canUseDom2.default && __webpack_require__(359);
	
	var Slider = function (_React$Component) {
	  _inherits(Slider, _React$Component);
	
	  function Slider(props) {
	    _classCallCheck(this, Slider);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      breakpoint: null
	    };
	    _this._responsiveMediaHandlers = [];
	    _this.innerSliderRefHandler = _this.innerSliderRefHandler.bind(_this);
	    return _this;
	  }
	
	  Slider.prototype.innerSliderRefHandler = function innerSliderRefHandler(ref) {
	    this.innerSlider = ref;
	  };
	
	  Slider.prototype.media = function media(query, handler) {
	    enquire.register(query, handler);
	    this._responsiveMediaHandlers.push({ query: query, handler: handler });
	  };
	
	  Slider.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    if (this.props.responsive) {
	      var breakpoints = this.props.responsive.map(function (breakpt) {
	        return breakpt.breakpoint;
	      });
	      breakpoints.sort(function (x, y) {
	        return x - y;
	      });
	
	      breakpoints.forEach(function (breakpoint, index) {
	        var bQuery;
	        if (index === 0) {
	          bQuery = (0, _json2mq2.default)({ minWidth: 0, maxWidth: breakpoint });
	        } else {
	          bQuery = (0, _json2mq2.default)({ minWidth: breakpoints[index - 1], maxWidth: breakpoint });
	        }
	        _canUseDom2.default && _this2.media(bQuery, function () {
	          _this2.setState({ breakpoint: breakpoint });
	        });
	      });
	
	      // Register media query for full screen. Need to support resize from small to large
	      var query = (0, _json2mq2.default)({ minWidth: breakpoints.slice(-1)[0] });
	
	      _canUseDom2.default && this.media(query, function () {
	        _this2.setState({ breakpoint: null });
	      });
	    }
	  };
	
	  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._responsiveMediaHandlers.forEach(function (obj) {
	      enquire.unregister(obj.query, obj.handler);
	    });
	  };
	
	  Slider.prototype.slickPrev = function slickPrev() {
	    this.innerSlider.slickPrev();
	  };
	
	  Slider.prototype.slickNext = function slickNext() {
	    this.innerSlider.slickNext();
	  };
	
	  Slider.prototype.slickGoTo = function slickGoTo(slide) {
	    this.innerSlider.slickGoTo(slide);
	  };
	
	  Slider.prototype.render = function render() {
	    var _this3 = this;
	
	    var settings;
	    var newProps;
	    if (this.state.breakpoint) {
	      newProps = this.props.responsive.filter(function (resp) {
	        return resp.breakpoint === _this3.state.breakpoint;
	      });
	      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _objectAssign2.default)({}, this.props, newProps[0].settings);
	    } else {
	      settings = (0, _objectAssign2.default)({}, _defaultProps2.default, this.props);
	    }
	
	    var children = this.props.children;
	    if (!Array.isArray(children)) {
	      children = [children];
	    }
	
	    // Children may contain false or null, so we should filter them
	    children = children.filter(function (child) {
	      return !!child;
	    });
	
	    if (settings === 'unslick') {
	      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className + ' unslicked' },
	        children
	      );
	    } else {
	      return _react2.default.createElement(
	        _innerSlider.InnerSlider,
	        _extends({ ref: this.innerSliderRefHandler }, settings),
	        children
	      );
	    }
	  };
	
	  return Slider;
	}(_react2.default.Component);
	
	exports.default = Slider;

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Track = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(7);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _classnames = __webpack_require__(58);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var getSlideClasses = function getSlideClasses(spec) {
	  var slickActive, slickCenter, slickCloned;
	  var centerOffset, index;
	
	  if (spec.rtl) {
	    index = spec.slideCount - 1 - spec.index;
	  } else {
	    index = spec.index;
	  }
	  slickCloned = index < 0 || index >= spec.slideCount;
	  if (spec.centerMode) {
	    centerOffset = Math.floor(spec.slidesToShow / 2);
	    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
	    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
	      slickActive = true;
	    }
	  } else {
	    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
	  }
	  return (0, _classnames2.default)({
	    'slick-slide': true,
	    'slick-active': slickActive,
	    'slick-center': slickCenter,
	    'slick-cloned': slickCloned
	  });
	};
	
	var getSlideStyle = function getSlideStyle(spec) {
	  var style = {};
	
	  if (spec.variableWidth === undefined || spec.variableWidth === false) {
	    style.width = spec.slideWidth;
	  }
	
	  if (spec.fade) {
	    style.position = 'relative';
	    style.left = -spec.index * spec.slideWidth;
	    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
	    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	  }
	
	  return style;
	};
	
	var getKey = function getKey(child, fallbackKey) {
	  // key could be a zero
	  return child.key === null || child.key === undefined ? fallbackKey : child.key;
	};
	
	var renderSlides = function renderSlides(spec) {
	  var key;
	  var slides = [];
	  var preCloneSlides = [];
	  var postCloneSlides = [];
	  var count = _react2.default.Children.count(spec.children);
	
	  _react2.default.Children.forEach(spec.children, function (elem, index) {
	    var child = void 0;
	    var childOnClickOptions = {
	      message: 'children',
	      index: index,
	      slidesToScroll: spec.slidesToScroll,
	      currentSlide: spec.currentSlide
	    };
	
	    if (!spec.lazyLoad | (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
	      child = elem;
	    } else {
	      child = _react2.default.createElement('div', null);
	    }
	    var childStyle = getSlideStyle((0, _objectAssign2.default)({}, spec, { index: index }));
	    var slideClass = child.props.className || '';
	
	    var onClick = function onClick(e) {
	      child.props && child.props.onClick && child.props.onClick(e);
	      if (spec.focusOnSelect) {
	        spec.focusOnSelect(childOnClickOptions);
	      }
	    };
	
	    slides.push(_react2.default.cloneElement(child, {
	      key: 'original' + getKey(child, index),
	      'data-index': index,
	      className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: index }, spec)), slideClass),
	      tabIndex: '-1',
	      style: (0, _objectAssign2.default)({ outline: 'none' }, child.props.style || {}, childStyle),
	      onClick: onClick
	    }));
	
	    // variableWidth doesn't wrap properly.
	    if (spec.infinite && spec.fade === false) {
	      var infiniteCount = spec.variableWidth ? spec.slidesToShow + 1 : spec.slidesToShow;
	
	      if (index >= count - infiniteCount) {
	        key = -(count - index);
	        preCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'precloned' + getKey(child, key),
	          'data-index': key,
	          className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: key }, spec)), slideClass),
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: onClick
	        }));
	      }
	
	      if (index < infiniteCount) {
	        key = count + index;
	        postCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'postcloned' + getKey(child, key),
	          'data-index': key,
	          className: (0, _classnames2.default)(getSlideClasses((0, _objectAssign2.default)({ index: key }, spec)), slideClass),
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: onClick
	        }));
	      }
	    }
	  });
	
	  if (spec.rtl) {
	    return preCloneSlides.concat(slides, postCloneSlides).reverse();
	  } else {
	    return preCloneSlides.concat(slides, postCloneSlides);
	  }
	};
	
	var Track = exports.Track = function (_React$Component) {
	  _inherits(Track, _React$Component);
	
	  function Track() {
	    _classCallCheck(this, Track);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Track.prototype.render = function render() {
	    var slides = renderSlides.call(this, this.props);
	    return _react2.default.createElement(
	      'div',
	      { className: 'slick-track', style: this.props.trackStyle },
	      slides
	    );
	  };
	
	  return Track;
	}(_react2.default.Component);

/***/ }),
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */
/***/ (function(module, exports) {

	var camel2hyphen = function (str) {
	  return str
	          .replace(/[A-Z]/g, function (match) {
	            return '-' + match.toLowerCase();
	          })
	          .toLowerCase();
	};
	
	module.exports = camel2hyphen;

/***/ }),
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/jimmy.c8803fec.jpg";

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/katherine.dd50712d.jpg";

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/katya.f9b03695.jpg";

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/rachel.c507f550.jpg";

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/sally.7efc28a4.jpg";

/***/ })
]);
//# sourceMappingURL=component---src-pages-index-js-98c1d04781e93c9a782e.js.map