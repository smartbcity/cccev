(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['cccev-cee-cccev-dsl-cc'] = factory(typeof this['cccev-cee-cccev-dsl-cc'] === 'undefined' ? {} : this['cccev-cee-cccev-dsl-cc']);
}(this, function (_) {
  'use strict';
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  None.prototype = Object.create(TraceBase.prototype);
  None.prototype.constructor = None;
  CriterionBuilder.prototype = Object.create(AbstractRequirementBuilder.prototype);
  CriterionBuilder.prototype.constructor = CriterionBuilder;
  CUnitType.prototype = Object.create(Enum.prototype);
  CUnitType.prototype.constructor = CUnitType;
  Scope1.prototype = Object.create(InformationConceptBase.prototype);
  Scope1.prototype.constructor = Scope1;
  Scope2.prototype = Object.create(InformationConceptBase.prototype);
  Scope2.prototype.constructor = Scope2;
  Scope3.prototype = Object.create(InformationConceptBase.prototype);
  Scope3.prototype.constructor = Scope3;
  ScopeTotal.prototype = Object.create(InformationConceptBase.prototype);
  ScopeTotal.prototype.constructor = ScopeTotal;
  BilanCarboneETL.prototype = Object.create(EvidenceTypeListBase.prototype);
  BilanCarboneETL.prototype.constructor = BilanCarboneETL;
  BilanCarboneET.prototype = Object.create(EvidenceTypeBase.prototype);
  BilanCarboneET.prototype.constructor = BilanCarboneET;
  ScopeInfo.prototype = Object.create(InformationRequirement.prototype);
  ScopeInfo.prototype.constructor = ScopeInfo;
  TonsCo2E.prototype = Object.create(CUnit.prototype);
  TonsCo2E.prototype.constructor = TonsCo2E;
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$break: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_0_k$();
    $l$break: while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke_2bq_k$ = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString(it);
  };
  _no_name_provided_.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_2bq_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke_2bq_k$(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex_rvwcgf_k$ = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkPositionIndex_rvwcgf_k$ = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function listOf(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function EmptyList() {
    EmptyList_instance = this;
    this._serialVersionUID = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype.iterator_0_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_0_k$ = function () {
    return false;
  };
  EmptyIterator.prototype.next_0_k$ = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_0(new ArrayAsCollection(elements, true));
  }
  function ArrayAsCollection(values, isVarargs) {
    this._values = values;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype.iterator_0_k$ = function () {
    return arrayIterator(this._values);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_v1o70a_k$(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_v1o70a_k$(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_wi8o78_k$(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_v1o70a_k$(toString(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function listOf_0(element) {
    return arrayListOf([element]);
  }
  function copyToArray_0(collection) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = collection;
      break $l$block;
    }
    if (tmp$ret$0.toArray !== undefined) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = collection;
          break $l$block_0;
        }
        var tmp0_unsafeCast_0 = tmp$ret$1.toArray();
        tmp$ret$2 = tmp0_unsafeCast_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      {
        var tmp$ret$4;
        $l$block_3: {
          var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = tmp1_unsafeCast_0;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        tmp = tmp$ret$4;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    var array = tmp$ret$0;
    var iterator = collection.iterator_0_k$();
    while (iterator.hasNext_0_k$()) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = array;
        break $l$block_0;
      }
      tmp$ret$1.push(iterator.next_0_k$());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_sv8swh_k$ = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
    this._last = -1;
  }
  IteratorImpl.prototype.hasNext_0_k$ = function () {
    return this._index < this._$this._get_size__0_k$();
  };
  IteratorImpl.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last = tmp1;
    return this._$this.get_ha5a7z_k$(this._last);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__majfzk_k$ = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0_k$ = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    this.add_vz2mgm_k$(this._get_size__0_k$(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_0_k$ = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function ArrayList_init_$Init$($this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(elements, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray_0(elements);
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(elements) {
    return ArrayList_init_$Init$_0(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkElementIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkPositionIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype._get_size__0_k$ = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_ha5a7z_k$ = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_vz2mgm_k$ = function (index, element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0_k$ = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0_k$();
  };
  ArrayList.prototype.checkIsMutable_sv8swh_k$ = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__0_k$();
  }
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__0_k$ = function () {
    return this._jClass;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__0_k$();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__0_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = jClass;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp$ret$0.$metadata$;
      var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
      tmp$ret$1 = tmp0_unsafeCast_0;
      break $l$block_0;
    }
    tmp._simpleName_0 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  var functionClasses;
  function _no_name_provided__0() {
  }
  _no_name_provided__0.prototype.invoke_wi7j7l_k$ = function (it) {
    return isObject(it);
  };
  _no_name_provided__0.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1() {
  }
  _no_name_provided__1.prototype.invoke_wi7j7l_k$ = function (it) {
    return isNumber(it);
  };
  _no_name_provided__1.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__2() {
  }
  _no_name_provided__2.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__2.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3() {
  }
  _no_name_provided__3.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__3.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__4() {
  }
  _no_name_provided__4.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__4.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__5.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__6.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__7() {
  }
  _no_name_provided__7.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__7.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__8() {
  }
  _no_name_provided__8.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__8.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__9() {
  }
  _no_name_provided__9.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__9.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10() {
  }
  _no_name_provided__10.prototype.invoke_wi7j7l_k$ = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__10.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11() {
  }
  _no_name_provided__11.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__11.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12() {
  }
  _no_name_provided__12.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__12.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__13.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__14.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__15.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__16.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__17.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__18.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__19.prototype.invoke_wi7j7l_k$ = function (it) {
    var tmp;
    if (typeof it === 'function') {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = it;
        break $l$block;
      }
      tmp = tmp$ret$0.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__19.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object;
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_0());
    var tmp_1 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0_0 = Number;
      tmp$ret$1 = tmp0_unsafeCast_0_0;
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_1());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_unsafeCast_0_1 = Boolean;
      tmp$ret$2 = tmp0_unsafeCast_0_1;
      break $l$block_1;
    }
    var tmp_4 = tmp$ret$2;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_2());
    var tmp_5 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_unsafeCast_0_2 = Number;
      tmp$ret$3 = tmp0_unsafeCast_0_2;
      break $l$block_2;
    }
    var tmp_6 = tmp$ret$3;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_3());
    var tmp_7 = this;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_unsafeCast_0_3 = Number;
      tmp$ret$4 = tmp0_unsafeCast_0_3;
      break $l$block_3;
    }
    var tmp_8 = tmp$ret$4;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_4());
    var tmp_9 = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_unsafeCast_0_4 = Number;
      tmp$ret$5 = tmp0_unsafeCast_0_4;
      break $l$block_4;
    }
    var tmp_10 = tmp$ret$5;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_5());
    var tmp_11 = this;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_unsafeCast_0_5 = Number;
      tmp$ret$6 = tmp0_unsafeCast_0_5;
      break $l$block_5;
    }
    var tmp_12 = tmp$ret$6;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_6());
    var tmp_13 = this;
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_unsafeCast_0_6 = Number;
      tmp$ret$7 = tmp0_unsafeCast_0_6;
      break $l$block_6;
    }
    var tmp_14 = tmp$ret$7;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_7());
    var tmp_15 = this;
    var tmp$ret$8;
    $l$block_7: {
      var tmp0_unsafeCast_0_7 = Array;
      tmp$ret$8 = tmp0_unsafeCast_0_7;
      break $l$block_7;
    }
    var tmp_16 = tmp$ret$8;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_8());
    var tmp_17 = this;
    var tmp$ret$9;
    $l$block_8: {
      var tmp0_unsafeCast_0_8 = String;
      tmp$ret$9 = tmp0_unsafeCast_0_8;
      break $l$block_8;
    }
    var tmp_18 = tmp$ret$9;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_9());
    var tmp_19 = this;
    var tmp$ret$10;
    $l$block_9: {
      var tmp0_unsafeCast_0_9 = Error;
      tmp$ret$10 = tmp0_unsafeCast_0_9;
      break $l$block_9;
    }
    var tmp_20 = tmp$ret$10;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_10());
    var tmp_21 = this;
    var tmp$ret$11;
    $l$block_10: {
      var tmp0_unsafeCast_0_10 = Array;
      tmp$ret$11 = tmp0_unsafeCast_0_10;
      break $l$block_10;
    }
    var tmp_22 = tmp$ret$11;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_11());
    var tmp_23 = this;
    var tmp$ret$12;
    $l$block_11: {
      var tmp0_unsafeCast_0_11 = Uint16Array;
      tmp$ret$12 = tmp0_unsafeCast_0_11;
      break $l$block_11;
    }
    var tmp_24 = tmp$ret$12;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_12());
    var tmp_25 = this;
    var tmp$ret$13;
    $l$block_12: {
      var tmp0_unsafeCast_0_12 = Int8Array;
      tmp$ret$13 = tmp0_unsafeCast_0_12;
      break $l$block_12;
    }
    var tmp_26 = tmp$ret$13;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_13());
    var tmp_27 = this;
    var tmp$ret$14;
    $l$block_13: {
      var tmp0_unsafeCast_0_13 = Int16Array;
      tmp$ret$14 = tmp0_unsafeCast_0_13;
      break $l$block_13;
    }
    var tmp_28 = tmp$ret$14;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_14());
    var tmp_29 = this;
    var tmp$ret$15;
    $l$block_14: {
      var tmp0_unsafeCast_0_14 = Int32Array;
      tmp$ret$15 = tmp0_unsafeCast_0_14;
      break $l$block_14;
    }
    var tmp_30 = tmp$ret$15;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_15());
    var tmp_31 = this;
    var tmp$ret$16;
    $l$block_15: {
      var tmp0_unsafeCast_0_15 = Array;
      tmp$ret$16 = tmp0_unsafeCast_0_15;
      break $l$block_15;
    }
    var tmp_32 = tmp$ret$16;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_16());
    var tmp_33 = this;
    var tmp$ret$17;
    $l$block_16: {
      var tmp0_unsafeCast_0_16 = Float32Array;
      tmp$ret$17 = tmp0_unsafeCast_0_16;
      break $l$block_16;
    }
    var tmp_34 = tmp$ret$17;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_17());
    var tmp_35 = this;
    var tmp$ret$18;
    $l$block_17: {
      var tmp0_unsafeCast_0_17 = Float64Array;
      tmp$ret$18 = tmp0_unsafeCast_0_17;
      break $l$block_17;
    }
    var tmp_36 = tmp$ret$18;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_18());
  }
  PrimitiveClasses_0.prototype._get_anyClass__0_k$ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass__0_k$ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass__0_k$ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass__0_k$ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass__0_k$ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass__0_k$ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass__0_k$ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass__0_k$ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass__0_k$ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass__0_k$ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass__0_k$ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass__0_k$ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass__0_k$ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass__0_k$ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass__0_k$ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_unsafeCast_0_3 = Function;
            tmp$ret$0 = tmp0_unsafeCast_0_3;
            break $l$block;
          }
          var tmp_0 = tmp$ret$0;
          var tmp_1 = '' + 'Function' + arity;
          var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_19(arity));
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_asDynamic_0_5 = functionClasses;
            tmp$ret$1 = tmp1_asDynamic_0_5;
            break $l$block_0;
          }
          tmp$ret$1[arity] = result_2;
          tmp$ret$2 = result_2;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_0() {
    var i = new _no_name_provided__0();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__1();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__2();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__3();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__4();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__5();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__7();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__8();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_19($arity) {
    var i = new _no_name_provided__19($arity);
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function functionClasses$init$() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(0), null);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = jClass;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = getKClassM_0(tmp$ret$1);
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = jClass;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = getKClass1_0(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_unsafeCast_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }

        tmp = tmp$ret$1;
        break;
      default:var tmp$ret$3;
        $l$block_2: {
          var tmp1_unsafeCast_0 = new ErrorKClass();
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp1_unsafeCast_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      return tmp$ret$1;
    }var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = jClass;
      break $l$block_1;
    }
    var metadata = tmp$ret$2.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype.append_wi8o78_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_v1o70a_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString(value);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function Char() {
  }
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_0();
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype.toString = function () {
    return this._name;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toString(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_0(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new _no_name_provided__20(array);
  }
  function _no_name_provided__20($array) {
    this._$array = $array;
    this._index_0 = 0;
  }
  _no_name_provided__20.prototype.hasNext_0_k$ = function () {
    return !(this._index_0 === this._$array.length);
  };
  _no_name_provided__20.prototype.next_0_k$ = function () {
    var tmp;
    if (!(this._index_0 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_0;
      tmp0_this._index_0 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_0);
    }
    return tmp;
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_20(), 24, null);
  }
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_wi7j7l_k$ = function (it) {
    return toString_0(it);
  };
  _no_name_provided__21.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function toString_0(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = o.toString();
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = instance;
        break $l$block;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function Companion_2() {
    Companion_instance_1 = this;
    this._MIN_VALUE = new Long(0, -2147483648);
    this._MAX_VALUE = new Long(-1, 2147483647);
    this._SIZE_BYTES = 8;
    this._SIZE_BITS = 64;
  }
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function Long(low, high) {
    Companion_getInstance_1();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.plus_wiekkq_k$ = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_wiekkq_k$ = function (other) {
    return subtract(this, other);
  };
  Long.prototype.div_wiekkq_k$ = function (other) {
    return divide(this, other);
  };
  Long.prototype.inc_0_k$ = function () {
    return this.plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.dec_0_k$ = function () {
    return this.minus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.unaryMinus_0_k$ = function () {
    return this.inv_0_k$().plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.inv_0_k$ = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toInt_0_k$ = function () {
    return this._low;
  };
  Long.prototype.toDouble_0_k$ = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_0_k$();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  var ZERO;
  var ONE;
  var NEG_ONE;
  var MAX_VALUE;
  var MIN_VALUE;
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_0_k$());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_wiekkq_k$(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_wiekkq_k$(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_wiekkq_k$(negate(other));
      } else {
        tmp = negate(negate(_this_).div_wiekkq_k$(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_wiekkq_k$(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_wiekkq_k$(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_0_k$();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = rem;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.toString(radix);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        return tmp + tmp$ret$1;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_wiekkq_k$(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_0_k$();
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = intval;
          break $l$block_1;
        }
        var tmp1_unsafeCast_0 = tmp$ret$2.toString(radix);
        tmp$ret$3 = tmp1_unsafeCast_0;
        break $l$block_2;
      }
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_0_k$();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Array.isArray(obj);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = obj;
        break $l$block;
      }
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function asList(_this_) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return new ArrayList(tmp$ret$1);
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$(value_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsTypeOf$outlinedJsCode$(value_hack) {
    return typeof value_hack;
  }
  function jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack & rhs_hack;
  }
  function None() {
    None_instance = this;
    TraceBase.call(this);
  }
  None.$metadata$ = {
    simpleName: 'None',
    kind: 'object',
    interfaces: []
  };
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function TraceBase() {
  }
  TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  TraceBase.$metadata$ = {
    simpleName: 'TraceBase',
    kind: 'class',
    interfaces: []
  };
  function AtomicRef(value) {
    this._value = value;
  }
  AtomicRef.prototype._set_value__iav7o_k$ = function (_set___) {
    this._value = _set___;
  };
  AtomicRef.prototype._get_value__0_k$ = function () {
    return this._value;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value === expect))
      return false;
    this._value = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value;
    this._value = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this._value);
  };
  AtomicRef.$metadata$ = {
    simpleName: 'AtomicRef',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype._get_value__0_k$,
    set: AtomicRef.prototype._set_value__iav7o_k$
  });
  function AtomicBoolean(value) {
    this._value_0 = value;
  }
  AtomicBoolean.prototype._set_value__rpwsgn_k$ = function (_set___) {
    this._value_0 = _set___;
  };
  AtomicBoolean.prototype._get_value__0_k$ = function () {
    return this._value_0;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_0 === expect))
      return false;
    this._value_0 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_0;
    this._value_0 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this._value_0.toString();
  };
  AtomicBoolean.$metadata$ = {
    simpleName: 'AtomicBoolean',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype._get_value__0_k$,
    set: AtomicBoolean.prototype._set_value__rpwsgn_k$
  });
  function AtomicInt(value) {
    this._value_1 = value;
  }
  AtomicInt.prototype._set_value__majfzk_k$ = function (_set___) {
    this._value_1 = _set___;
  };
  AtomicInt.prototype._get_value__0_k$ = function () {
    return this._value_1;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_1 === expect))
      return false;
    this._value_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_1;
    this._value_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_1;
    tmp0_this._value_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_1;
    tmp0_this._value_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this._value_1;
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 + delta | 0;
    return this._value_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 + 1 | 0;
    return tmp0_this._value_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 - 1 | 0;
    return tmp0_this._value_1;
  };
  AtomicInt.prototype.toString = function () {
    return this._value_1.toString();
  };
  AtomicInt.$metadata$ = {
    simpleName: 'AtomicInt',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype._get_value__0_k$,
    set: AtomicInt.prototype._set_value__majfzk_k$
  });
  function AtomicLong(value) {
    this._value_2 = value;
  }
  AtomicLong.prototype._set_value__kdfck9_k$ = function (_set___) {
    this._value_2 = _set___;
  };
  AtomicLong.prototype._get_value__0_k$ = function () {
    return this._value_2;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this._value_2.equals(expect))
      return false;
    this._value_2 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_2;
    this._value_2 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1.inc_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1.dec_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this._value_2;
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.plus_wiekkq_k$(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.plus_wiekkq_k$(delta);
    return this._value_2;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.inc_0_k$();
    return tmp0_this._value_2;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.dec_0_k$();
    return tmp0_this._value_2;
  };
  AtomicLong.prototype.toString = function () {
    return this._value_2.toString();
  };
  AtomicLong.$metadata$ = {
    simpleName: 'AtomicLong',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicLong.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicLong.prototype._get_value__0_k$,
    set: AtomicLong.prototype._set_value__kdfck9_k$
  });
  function atomic(initial, trace) {
    return atomic_0(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_0(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_1(initial, trace) {
    return atomic_2(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_2(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_3(initial, trace) {
    return atomic_4(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_4(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic_5(initial, trace) {
    return atomic_6(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_6(initial, trace) {
    return new AtomicLong(initial);
  }
  function CoreLocationLocation() {
  }
  CoreLocationLocation.$metadata$ = {
    simpleName: 'CoreLocationLocation',
    kind: 'class',
    interfaces: []
  };
  function PeriodOfTime_init_$Init$(duration, endTime, startTime, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      duration = null;
    if (!(($mask0 & 2) === 0))
      endTime = null;
    if (!(($mask0 & 4) === 0))
      startTime = null;
    PeriodOfTime.call($this, duration, endTime, startTime);
    return $this;
  }
  function PeriodOfTime_init_$Create$(duration, endTime, startTime, $mask0, $marker) {
    return PeriodOfTime_init_$Init$(duration, endTime, startTime, $mask0, $marker, Object.create(PeriodOfTime.prototype));
  }
  function PeriodOfTime(duration, endTime, startTime) {
    var duration_0 = duration === void 1 ? null : duration;
    var endTime_0 = endTime === void 1 ? null : endTime;
    var startTime_0 = startTime === void 1 ? null : startTime;
  }
  PeriodOfTime.$metadata$ = {
    simpleName: 'PeriodOfTime',
    kind: 'class',
    interfaces: []
  };
  function EvidenceTypeListBase(description, identifier, name, specifiesEvidenceType) {
    this._description = description;
    this._identifier = identifier;
    this._name_0 = name;
    this._specifiesEvidenceType = specifiesEvidenceType;
  }
  EvidenceTypeListBase.prototype._get_description__0_k$ = function () {
    return this._description;
  };
  EvidenceTypeListBase.prototype._get_identifier__0_k$ = function () {
    return this._identifier;
  };
  EvidenceTypeListBase.prototype._get_name__0_k$ = function () {
    return this._name_0;
  };
  EvidenceTypeListBase.prototype._get_specifiesEvidenceType__0_k$ = function () {
    return this._specifiesEvidenceType;
  };
  EvidenceTypeListBase.$metadata$ = {
    simpleName: 'EvidenceTypeListBase',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(EvidenceTypeListBase.prototype, 'description', {
    configurable: true,
    get: EvidenceTypeListBase.prototype._get_description__0_k$
  });
  Object.defineProperty(EvidenceTypeListBase.prototype, 'identifier', {
    configurable: true,
    get: EvidenceTypeListBase.prototype._get_identifier__0_k$
  });
  Object.defineProperty(EvidenceTypeListBase.prototype, 'name', {
    configurable: true,
    get: EvidenceTypeListBase.prototype._get_name__0_k$
  });
  Object.defineProperty(EvidenceTypeListBase.prototype, 'specifiesEvidenceType', {
    configurable: true,
    get: EvidenceTypeListBase.prototype._get_specifiesEvidenceType__0_k$
  });
  function EvidenceTypeBase_init_$Init$(identifier, name, evidenceTypeClassification, validityPeriodConstraint, issuingPlace, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      validityPeriodConstraint = null;
    if (!(($mask0 & 16) === 0))
      issuingPlace = null;
    EvidenceTypeBase.call($this, identifier, name, evidenceTypeClassification, validityPeriodConstraint, issuingPlace);
    return $this;
  }
  function EvidenceTypeBase(identifier, name, evidenceTypeClassification, validityPeriodConstraint, issuingPlace) {
    this._identifier_0 = identifier;
    this._name_1 = name;
    this._evidenceTypeClassification = evidenceTypeClassification;
    this._validityPeriodConstraint = validityPeriodConstraint;
    this._issuingPlace = issuingPlace;
  }
  EvidenceTypeBase.prototype._get_identifier__0_k$ = function () {
    return this._identifier_0;
  };
  EvidenceTypeBase.prototype._get_name__0_k$ = function () {
    return this._name_1;
  };
  EvidenceTypeBase.prototype._get_evidenceTypeClassification__0_k$ = function () {
    return this._evidenceTypeClassification;
  };
  EvidenceTypeBase.prototype._get_validityPeriodConstraint__0_k$ = function () {
    return this._validityPeriodConstraint;
  };
  EvidenceTypeBase.prototype._get_issuingPlace__0_k$ = function () {
    return this._issuingPlace;
  };
  EvidenceTypeBase.$metadata$ = {
    simpleName: 'EvidenceTypeBase',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(EvidenceTypeBase.prototype, 'identifier', {
    configurable: true,
    get: EvidenceTypeBase.prototype._get_identifier__0_k$
  });
  Object.defineProperty(EvidenceTypeBase.prototype, 'name', {
    configurable: true,
    get: EvidenceTypeBase.prototype._get_name__0_k$
  });
  Object.defineProperty(EvidenceTypeBase.prototype, 'evidenceTypeClassification', {
    configurable: true,
    get: EvidenceTypeBase.prototype._get_evidenceTypeClassification__0_k$
  });
  Object.defineProperty(EvidenceTypeBase.prototype, 'validityPeriodConstraint', {
    configurable: true,
    get: EvidenceTypeBase.prototype._get_validityPeriodConstraint__0_k$
  });
  Object.defineProperty(EvidenceTypeBase.prototype, 'issuingPlace', {
    configurable: true,
    get: EvidenceTypeBase.prototype._get_issuingPlace__0_k$
  });
  function InformationConceptBase(identifier, name, unit, type, description, expressionOfExpectedValue) {
    this._identifier_1 = identifier;
    this._name_2 = name;
    this._unit = unit;
    this._type = type;
    this._description_0 = description;
    this._expressionOfExpectedValue = expressionOfExpectedValue;
  }
  InformationConceptBase.prototype._get_identifier__0_k$ = function () {
    return this._identifier_1;
  };
  InformationConceptBase.prototype._get_name__0_k$ = function () {
    return this._name_2;
  };
  InformationConceptBase.prototype._get_unit__0_k$ = function () {
    return this._unit;
  };
  InformationConceptBase.prototype._get_type__0_k$ = function () {
    return this._type;
  };
  InformationConceptBase.prototype._get_description__0_k$ = function () {
    return this._description_0;
  };
  InformationConceptBase.prototype._get_expressionOfExpectedValue__0_k$ = function () {
    return this._expressionOfExpectedValue;
  };
  InformationConceptBase.$metadata$ = {
    simpleName: 'InformationConceptBase',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(InformationConceptBase.prototype, 'identifier', {
    configurable: true,
    get: InformationConceptBase.prototype._get_identifier__0_k$
  });
  Object.defineProperty(InformationConceptBase.prototype, 'name', {
    configurable: true,
    get: InformationConceptBase.prototype._get_name__0_k$
  });
  Object.defineProperty(InformationConceptBase.prototype, 'unit', {
    configurable: true,
    get: InformationConceptBase.prototype._get_unit__0_k$
  });
  Object.defineProperty(InformationConceptBase.prototype, 'type', {
    configurable: true,
    get: InformationConceptBase.prototype._get_type__0_k$
  });
  Object.defineProperty(InformationConceptBase.prototype, 'description', {
    configurable: true,
    get: InformationConceptBase.prototype._get_description__0_k$
  });
  Object.defineProperty(InformationConceptBase.prototype, 'expressionOfExpectedValue', {
    configurable: true,
    get: InformationConceptBase.prototype._get_expressionOfExpectedValue__0_k$
  });
  function Criterion(description, identifier, name, type, bias, weight, weightingConsiderationDescription, weightingType, hasConcept, hasRequirement, hasEvidenceTypeList) {
    this._description_1 = description;
    this._identifier_2 = identifier;
    this._name_3 = name;
    this._type_0 = type;
    this._bias = bias;
    this._weight = weight;
    this._weightingConsiderationDescription = weightingConsiderationDescription;
    this._weightingType = weightingType;
    this._hasConcept = hasConcept;
    this._hasRequirement = hasRequirement;
    this._hasEvidenceTypeList = hasEvidenceTypeList;
  }
  Criterion.$metadata$ = {
    simpleName: 'Criterion',
    kind: 'class',
    interfaces: [Requirement]
  };
  function criterion(init) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = new CriterionBuilder();
      {
      }
      init(tmp0_apply_0);
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0.build_0_k$();
  }
  function CriterionBuilder() {
    AbstractRequirementBuilder.call(this);
    this._bias_0 = null;
    this._weight_0 = null;
    this._weightingConsiderationDescription_0 = null;
    this._weightingType_0 = null;
  }
  CriterionBuilder.prototype.build_0_k$ = function () {
    var tmp0_description = this._get_description__0_k$();
    var tmp1_identifier = this._get_identifier__0_k$();
    var tmp2_name = this._get_name__0_k$();
    var tmp3_type = this._get_type__0_k$();
    var tmp4_hasRequirement = this._get_requirements__0_k$();
    var tmp5_hasConcept = this._get_hasConcept__0_k$();
    var tmp6_hasEvidenceTypeList = this._get_hasEvidenceTypeList__0_k$();
    var tmp7_bias = this._bias_0;
    var tmp8_weight = this._weight_0;
    var tmp9_weightingConsiderationDescription = this._weightingConsiderationDescription_0;
    var tmp10_weightingType = this._weightingType_0;
    return new Criterion(tmp0_description, tmp1_identifier, tmp2_name, tmp3_type, tmp7_bias, tmp8_weight, tmp9_weightingConsiderationDescription, tmp10_weightingType, tmp5_hasConcept, tmp4_hasRequirement, tmp6_hasEvidenceTypeList);
  };
  CriterionBuilder.$metadata$ = {
    simpleName: 'CriterionBuilder',
    kind: 'class',
    interfaces: []
  };
  function InformationRequirement_init_$Init$(description, identifier, name, type, hasConcept, hasRequirement, hasEvidenceTypeList, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      hasConcept = emptyList();
    if (!(($mask0 & 32) === 0))
      hasRequirement = emptyList();
    if (!(($mask0 & 64) === 0))
      hasEvidenceTypeList = emptyList();
    InformationRequirement.call($this, description, identifier, name, type, hasConcept, hasRequirement, hasEvidenceTypeList);
    return $this;
  }
  function InformationRequirement(description, identifier, name, type, hasConcept, hasRequirement, hasEvidenceTypeList) {
    this._description_2 = description;
    this._identifier_3 = identifier;
    this._name_4 = name;
    this._type_1 = type;
    this._hasConcept_0 = hasConcept;
    this._hasRequirement_0 = hasRequirement;
    this._hasEvidenceTypeList_0 = hasEvidenceTypeList;
  }
  InformationRequirement.$metadata$ = {
    simpleName: 'InformationRequirement',
    kind: 'class',
    interfaces: [Requirement]
  };
  function Requirement() {
  }
  Requirement.$metadata$ = {
    simpleName: 'Requirement',
    kind: 'interface',
    interfaces: []
  };
  function AbstractRequirementBuilder() {
    this._description_3 = null;
    this._identifier_4 = null;
    this._name_5 = null;
    this._type_2 = null;
    this._hasConcept_1 = null;
    this._hasEvidenceTypeList_1 = null;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp._requirements = tmp$ret$0;
  }
  AbstractRequirementBuilder.prototype._get_description__0_k$ = function () {
    return this._description_3;
  };
  AbstractRequirementBuilder.prototype._set_identifier__qlpr75_k$ = function (_set___) {
    this._identifier_4 = _set___;
  };
  AbstractRequirementBuilder.prototype._get_identifier__0_k$ = function () {
    return this._identifier_4;
  };
  AbstractRequirementBuilder.prototype._set_name__qlpr75_k$ = function (_set___) {
    this._name_5 = _set___;
  };
  AbstractRequirementBuilder.prototype._get_name__0_k$ = function () {
    return this._name_5;
  };
  AbstractRequirementBuilder.prototype._set_type__erbbi9_k$ = function (_set___) {
    this._type_2 = _set___;
  };
  AbstractRequirementBuilder.prototype._get_type__0_k$ = function () {
    return this._type_2;
  };
  AbstractRequirementBuilder.prototype._get_hasConcept__0_k$ = function () {
    return this._hasConcept_1;
  };
  AbstractRequirementBuilder.prototype._get_hasEvidenceTypeList__0_k$ = function () {
    return this._hasEvidenceTypeList_1;
  };
  AbstractRequirementBuilder.prototype._get_requirements__0_k$ = function () {
    return this._requirements;
  };
  AbstractRequirementBuilder.prototype.unaryPlus_9n4va8_k$ = function (_this__0) {
    this._requirements.add_2bq_k$(_this__0);
    Unit_getInstance();
  };
  AbstractRequirementBuilder.$metadata$ = {
    simpleName: 'AbstractRequirementBuilder',
    kind: 'class',
    interfaces: [RequirementBuilder]
  };
  function RequirementBuilder() {
  }
  RequirementBuilder.$metadata$ = {
    simpleName: 'RequirementBuilder',
    kind: 'interface',
    interfaces: []
  };
  var CUnitType_boolean_instance;
  var CUnitType_date_instance;
  var CUnitType_number_instance;
  var CUnitType_string_instance;
  var CUnitType_entriesInitialized;
  function CUnitType_initEntries() {
    if (CUnitType_entriesInitialized)
      return Unit_getInstance();
    CUnitType_entriesInitialized = true;
    CUnitType_boolean_instance = new CUnitType('boolean', 0);
    CUnitType_date_instance = new CUnitType('date', 1);
    CUnitType_number_instance = new CUnitType('number', 2);
    CUnitType_string_instance = new CUnitType('string', 3);
  }
  function CUnitType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CUnitType.$metadata$ = {
    simpleName: 'CUnitType',
    kind: 'class',
    interfaces: []
  };
  function CUnit(identifier, name, description, notation, type) {
    this._identifier_5 = identifier;
    this._name_6 = name;
    this._description_4 = description;
    this._notation = notation;
    this._type_3 = type;
  }
  CUnit.prototype._get_identifier__0_k$ = function () {
    return this._identifier_5;
  };
  CUnit.prototype._get_name__0_k$ = function () {
    return this._name_6;
  };
  CUnit.prototype._get_description__0_k$ = function () {
    return this._description_4;
  };
  CUnit.prototype._get_notation__0_k$ = function () {
    return this._notation;
  };
  CUnit.prototype._get_type__0_k$ = function () {
    return this._type_3;
  };
  CUnit.$metadata$ = {
    simpleName: 'CUnit',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CUnit.prototype, 'identifier', {
    configurable: true,
    get: CUnit.prototype._get_identifier__0_k$
  });
  Object.defineProperty(CUnit.prototype, 'name', {
    configurable: true,
    get: CUnit.prototype._get_name__0_k$
  });
  Object.defineProperty(CUnit.prototype, 'description', {
    configurable: true,
    get: CUnit.prototype._get_description__0_k$
  });
  Object.defineProperty(CUnit.prototype, 'notation', {
    configurable: true,
    get: CUnit.prototype._get_notation__0_k$
  });
  Object.defineProperty(CUnit.prototype, 'type', {
    configurable: true,
    get: CUnit.prototype._get_type__0_k$
  });
  function CUnitType_number_getInstance() {
    CUnitType_initEntries();
    return CUnitType_number_instance;
  }
  var CarbonCopy;
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_oywfzr_k$ = function ($this$criterion) {
    $this$criterion._set_identifier__qlpr75_k$('carbonCopy');
    $this$criterion._set_name__qlpr75_k$('Carbon Copy');
    $this$criterion._set_type__erbbi9_k$(CC_getInstance());
    $this$criterion.unaryPlus_9n4va8_k$(ScopeInfo_getInstance());
  };
  _no_name_provided__22.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_oywfzr_k$(p1 instanceof CriterionBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__22();
    return function (p1) {
      i.invoke_oywfzr_k$(p1);
      return Unit_getInstance();
    };
  }
  function Scope() {
    Scope_instance = this;
  }
  Scope.$metadata$ = {
    simpleName: 'Scope',
    kind: 'object',
    interfaces: []
  };
  var Scope_instance;
  function Scope_getInstance() {
    if (Scope_instance == null)
      new Scope();
    return Scope_instance;
  }
  function CC() {
    CC_instance = this;
  }
  CC.$metadata$ = {
    simpleName: 'CC',
    kind: 'object',
    interfaces: []
  };
  var CC_instance;
  function CC_getInstance() {
    if (CC_instance == null)
      new CC();
    return CC_instance;
  }
  function BilanCarbone() {
    BilanCarbone_instance = this;
  }
  BilanCarbone.$metadata$ = {
    simpleName: 'BilanCarbone',
    kind: 'object',
    interfaces: []
  };
  var BilanCarbone_instance;
  function BilanCarbone_getInstance() {
    if (BilanCarbone_instance == null)
      new BilanCarbone();
    return BilanCarbone_instance;
  }
  function Scope1() {
    Scope1_instance = this;
    InformationConceptBase.call(this, 'scope1', 'Scope 1', TonsCo2E_getInstance(), Scope_getInstance(), 'Scope 1', null);
  }
  Scope1.$metadata$ = {
    simpleName: 'Scope1',
    kind: 'object',
    interfaces: []
  };
  var Scope1_instance;
  function Scope1_getInstance() {
    if (Scope1_instance == null)
      new Scope1();
    return Scope1_instance;
  }
  function Scope2() {
    Scope2_instance = this;
    InformationConceptBase.call(this, 'scope2', 'Scope 2', TonsCo2E_getInstance(), Scope_getInstance(), 'Scope 2', null);
  }
  Scope2.$metadata$ = {
    simpleName: 'Scope2',
    kind: 'object',
    interfaces: []
  };
  var Scope2_instance;
  function Scope2_getInstance() {
    if (Scope2_instance == null)
      new Scope2();
    return Scope2_instance;
  }
  function Scope3() {
    Scope3_instance = this;
    InformationConceptBase.call(this, 'scope3', 'Scope 3', TonsCo2E_getInstance(), Scope_getInstance(), 'Scope 3', null);
  }
  Scope3.$metadata$ = {
    simpleName: 'Scope3',
    kind: 'object',
    interfaces: []
  };
  var Scope3_instance;
  function Scope3_getInstance() {
    if (Scope3_instance == null)
      new Scope3();
    return Scope3_instance;
  }
  function ScopeTotal() {
    ScopeTotal_instance = this;
    InformationConceptBase.call(this, 'scopeTotal', 'Scope Total', TonsCo2E_getInstance(), Scope_getInstance(), 'Scope Total', '' + Scope1_getInstance()._get_identifier__0_k$() + ' + ' + Scope2_getInstance()._get_identifier__0_k$() + ' + ' + Scope3_getInstance()._get_identifier__0_k$());
  }
  ScopeTotal.$metadata$ = {
    simpleName: 'ScopeTotal',
    kind: 'object',
    interfaces: []
  };
  var ScopeTotal_instance;
  function ScopeTotal_getInstance() {
    if (ScopeTotal_instance == null)
      new ScopeTotal();
    return ScopeTotal_instance;
  }
  function BilanCarboneETL() {
    BilanCarboneETL_instance = this;
    var tmp0_specifiesEvidenceType = listOf_0(BilanCarboneET_getInstance());
    EvidenceTypeListBase.call(this, 'BilanCarbone', 'bilanCarboneETL', 'Bilan Carbone', tmp0_specifiesEvidenceType);
  }
  BilanCarboneETL.$metadata$ = {
    simpleName: 'BilanCarboneETL',
    kind: 'object',
    interfaces: []
  };
  var BilanCarboneETL_instance;
  function BilanCarboneETL_getInstance() {
    if (BilanCarboneETL_instance == null)
      new BilanCarboneETL();
    return BilanCarboneETL_instance;
  }
  function BilanCarboneET() {
    BilanCarboneET_instance = this;
    var tmp = BilanCarbone_getInstance();
    EvidenceTypeBase_init_$Init$('bilanCarboneET', 'Bilan Carbone', tmp, null, null, 24, null, this);
  }
  BilanCarboneET.$metadata$ = {
    simpleName: 'BilanCarboneET',
    kind: 'object',
    interfaces: []
  };
  var BilanCarboneET_instance;
  function BilanCarboneET_getInstance() {
    if (BilanCarboneET_instance == null)
      new BilanCarboneET();
    return BilanCarboneET_instance;
  }
  function ScopeInfo() {
    ScopeInfo_instance = this;
    var tmp = Scope_getInstance();
    var tmp_0 = listOf([Scope1_getInstance(), Scope2_getInstance(), Scope3_getInstance(), ScopeTotal_getInstance()]);
    InformationRequirement_init_$Init$('Scope', 'Scope', 'Scope', tmp, tmp_0, null, listOf_0(BilanCarboneETL_getInstance()), 32, null, this);
  }
  ScopeInfo.$metadata$ = {
    simpleName: 'ScopeInfo',
    kind: 'object',
    interfaces: []
  };
  var ScopeInfo_instance;
  function ScopeInfo_getInstance() {
    if (ScopeInfo_instance == null)
      new ScopeInfo();
    return ScopeInfo_instance;
  }
  function TonsCo2E() {
    TonsCo2E_instance = this;
    CUnit.call(this, 'tonsCO2e', 'Tonnes de CO2e', 'Tonnes de CO2 \xE9quivalent', 'tCO2e', CUnitType_number_getInstance());
  }
  TonsCo2E.$metadata$ = {
    simpleName: 'TonsCo2E',
    kind: 'object',
    interfaces: []
  };
  var TonsCo2E_instance;
  function TonsCo2E_getInstance() {
    if (TonsCo2E_instance == null)
      new TonsCo2E();
    return TonsCo2E_instance;
  }
  AbstractMutableList.prototype.get_ha5a7z_k$ = List.prototype.get_ha5a7z_k$;
  KClassImpl.prototype._get_simpleName__0_k$ = KClass.prototype._get_simpleName__0_k$;
  functionClasses = functionClasses$init$();
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  CarbonCopy = criterion(_no_name_provided_$factory_21());
  var $ccev = _.ccev || (_.ccev = {});
  var $ccev$dsl = $ccev.dsl || ($ccev.dsl = {});
  var $ccev$dsl$core = $ccev$dsl.core || ($ccev$dsl.core = {});
  var $kotlinx = _.kotlinx || (_.kotlinx = {});
  var $kotlinx$atomicfu = $kotlinx.atomicfu || ($kotlinx.atomicfu = {});
  $kotlinx$atomicfu.atomic$ref$ = atomic;
  $kotlinx$atomicfu.atomic$boolean$ = atomic_1;
  $kotlinx$atomicfu.atomic$int$ = atomic_3;
  $kotlinx$atomicfu.atomic$long$ = atomic_5;
  $ccev$dsl$core.CoreLocationLocation = CoreLocationLocation;
  $ccev$dsl$core.PeriodOfTime = PeriodOfTime;
  return _;
}));

//# sourceMappingURL=cccev-cee-cccev-dsl-cc.js.map