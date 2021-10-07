(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['cccev-cee-cccev-dsl-cee'] = factory(typeof this['cccev-cee-cccev-dsl-cee'] === 'undefined' ? {} : this['cccev-cee-cccev-dsl-cee']);
}(this, function (_) {
  'use strict';
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
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
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  ArithmeticException.prototype = Object.create(RuntimeException.prototype);
  ArithmeticException.prototype.constructor = ArithmeticException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  None.prototype = Object.create(TraceBase.prototype);
  None.prototype.constructor = None;
  CriterionBuilder.prototype = Object.create(AbstractRequirementBuilder.prototype);
  CriterionBuilder.prototype.constructor = CriterionBuilder;
  CUnitType.prototype = Object.create(Enum.prototype);
  CUnitType.prototype.constructor = CUnitType;
  XSDDate.prototype = Object.create(CUnit.prototype);
  XSDDate.prototype.constructor = XSDDate;
  XSDDouble.prototype = Object.create(CUnit.prototype);
  XSDDouble.prototype.constructor = XSDDouble;
  XSDString.prototype = Object.create(CUnit.prototype);
  XSDString.prototype.constructor = XSDString;
  Hour.prototype = Object.create(CUnit.prototype);
  Hour.prototype.constructor = Hour;
  Year.prototype = Object.create(CUnit.prototype);
  Year.prototype.constructor = Year;
  Ratio.prototype = Object.create(CUnit.prototype);
  Ratio.prototype.constructor = Ratio;
  XSDInt.prototype = Object.create(CUnit.prototype);
  XSDInt.prototype.constructor = XSDInt;
  DateTravaux.prototype = Object.create(InformationConceptBase.prototype);
  DateTravaux.prototype.constructor = DateTravaux;
  DatePrecedentsTravaux.prototype = Object.create(InformationConceptBase.prototype);
  DatePrecedentsTravaux.prototype.constructor = DatePrecedentsTravaux;
  DateDevis.prototype = Object.create(InformationConceptBase.prototype);
  DateDevis.prototype.constructor = DateDevis;
  CertificatProfessionnel.prototype = Object.create(EvidenceTypeListBase.prototype);
  CertificatProfessionnel.prototype.constructor = CertificatProfessionnel;
  CertificatCerfa.prototype = Object.create(EvidenceTypeBase.prototype);
  CertificatCerfa.prototype.constructor = CertificatCerfa;
  SecteurApplication.prototype = Object.create(Criterion.prototype);
  SecteurApplication.prototype.constructor = SecteurApplication;
  Denomination_0.prototype = Object.create(Criterion.prototype);
  Denomination_0.prototype.constructor = Denomination_0;
  ConditionsDelivranceCertificats_0.prototype = Object.create(Criterion.prototype);
  ConditionsDelivranceCertificats_0.prototype.constructor = ConditionsDelivranceCertificats_0;
  DureeVieConventionnelle_0.prototype = Object.create(PartialRequirement.prototype);
  DureeVieConventionnelle_0.prototype.constructor = DureeVieConventionnelle_0;
  AucunPrecedentDossierPourMemeOperationEtConditions.prototype = Object.create(InformationRequirement.prototype);
  AucunPrecedentDossierPourMemeOperationEtConditions.prototype.constructor = AucunPrecedentDossierPourMemeOperationEtConditions;
  MontantCertificatsCumac_0.prototype = Object.create(Criterion.prototype);
  MontantCertificatsCumac_0.prototype.constructor = MontantCertificatsCumac_0;
  EstProfessionnelInformationRequirement.prototype = Object.create(InformationRequirement.prototype);
  EstProfessionnelInformationRequirement.prototype.constructor = EstProfessionnelInformationRequirement;
  KWhCumac.prototype = Object.create(CUnit.prototype);
  KWhCumac.prototype.constructor = KWhCumac;
  ResistanceThermique.prototype = Object.create(InformationConceptBase.prototype);
  ResistanceThermique.prototype.constructor = ResistanceThermique;
  DatePrecedentsTravauxMemeBatiment.prototype = Object.create(InformationConceptBase.prototype);
  DatePrecedentsTravauxMemeBatiment.prototype.constructor = DatePrecedentsTravauxMemeBatiment;
  SurfaceIsolant.prototype = Object.create(InformationConceptBase.prototype);
  SurfaceIsolant.prototype.constructor = SurfaceIsolant;
  CumacPerM2Isolant.prototype = Object.create(InformationConceptBase.prototype);
  CumacPerM2Isolant.prototype.constructor = CumacPerM2Isolant;
  FacteurCorrectif.prototype = Object.create(InformationConceptBase.prototype);
  FacteurCorrectif.prototype.constructor = FacteurCorrectif;
  SecteurActivite_0.prototype = Object.create(InformationConceptBase.prototype);
  SecteurActivite_0.prototype.constructor = SecteurActivite_0;
  ResistanceThermiqueMinimale.prototype = Object.create(Constraint.prototype);
  ResistanceThermiqueMinimale.prototype.constructor = ResistanceThermiqueMinimale;
  BesoinPareVapeur.prototype = Object.create(InformationRequirement.prototype);
  BesoinPareVapeur.prototype.constructor = BesoinPareVapeur;
  DateTravauxRegles.prototype = Object.create(Criterion.prototype);
  DateTravauxRegles.prototype.constructor = DateTravauxRegles;
  DateDevisContrainte.prototype = Object.create(Constraint.prototype);
  DateDevisContrainte.prototype.constructor = DateDevisContrainte;
  DatePrecedentsTravauxMemeBatimentContrainte.prototype = Object.create(Constraint.prototype);
  DatePrecedentsTravauxMemeBatimentContrainte.prototype.constructor = DatePrecedentsTravauxMemeBatimentContrainte;
  DatePrecedentsTravauxContrainte.prototype = Object.create(Constraint.prototype);
  DatePrecedentsTravauxContrainte.prototype.constructor = DatePrecedentsTravauxContrainte;
  CalculCertificatsCumac.prototype = Object.create(Constraint.prototype);
  CalculCertificatsCumac.prototype.constructor = CalculCertificatsCumac;
  SquareMeter.prototype = Object.create(CUnit.prototype);
  SquareMeter.prototype.constructor = SquareMeter;
  SquareMeterKelvinPerWatt.prototype = Object.create(CUnit.prototype);
  SquareMeterKelvinPerWatt.prototype.constructor = SquareMeterKelvinPerWatt;
  kWhCumacPerSquareMeter.prototype = Object.create(CUnit.prototype);
  kWhCumacPerSquareMeter.prototype.constructor = kWhCumacPerSquareMeter;
  SecteurActivite_1.prototype = Object.create(InformationConceptBase.prototype);
  SecteurActivite_1.prototype.constructor = SecteurActivite_1;
  UsageLuminaire.prototype = Object.create(InformationConceptBase.prototype);
  UsageLuminaire.prototype.constructor = UsageLuminaire;
  DureeDeVieLuminaire.prototype = Object.create(InformationConceptBase.prototype);
  DureeDeVieLuminaire.prototype.constructor = DureeDeVieLuminaire;
  EfficaciteLumineuse.prototype = Object.create(InformationConceptBase.prototype);
  EfficaciteLumineuse.prototype.constructor = EfficaciteLumineuse;
  FacteurPuissance.prototype = Object.create(InformationConceptBase.prototype);
  FacteurPuissance.prototype.constructor = FacteurPuissance;
  TauxDistorsionHarmonique.prototype = Object.create(InformationConceptBase.prototype);
  TauxDistorsionHarmonique.prototype.constructor = TauxDistorsionHarmonique;
  Norme.prototype = Object.create(InformationConceptBase.prototype);
  Norme.prototype.constructor = Norme;
  TauxDistorsionHarmoniqueNormeCalcul.prototype = Object.create(Norme.prototype);
  TauxDistorsionHarmoniqueNormeCalcul.prototype.constructor = TauxDistorsionHarmoniqueNormeCalcul;
  NombreTypesDispositifGestionEclairage.prototype = Object.create(InformationConceptBase.prototype);
  NombreTypesDispositifGestionEclairage.prototype.constructor = NombreTypesDispositifGestionEclairage;
  DureeVieConventionnelleLuminaire.prototype = Object.create(InformationConceptBase.prototype);
  DureeVieConventionnelleLuminaire.prototype.constructor = DureeVieConventionnelleLuminaire;
  CumacParWatt.prototype = Object.create(InformationConceptBase.prototype);
  CumacParWatt.prototype.constructor = CumacParWatt;
  Puissance.prototype = Object.create(InformationConceptBase.prototype);
  Puissance.prototype.constructor = Puissance;
  Cumac.prototype = Object.create(InformationConceptBase.prototype);
  Cumac.prototype.constructor = Cumac;
  EtudeDimensionnementEclairagePrealable.prototype = Object.create(EvidenceTypeListBase.prototype);
  EtudeDimensionnementEclairagePrealable.prototype.constructor = EtudeDimensionnementEclairagePrealable;
  EtudeDimensionnementEclairagePrealableDocument.prototype = Object.create(EvidenceTypeBase.prototype);
  EtudeDimensionnementEclairagePrealableDocument.prototype.constructor = EtudeDimensionnementEclairagePrealableDocument;
  Annexe1AvecDetailsEquipement.prototype = Object.create(EvidenceTypeListBase.prototype);
  Annexe1AvecDetailsEquipement.prototype.constructor = Annexe1AvecDetailsEquipement;
  Annexe1AvecDetailsEquipementDocument.prototype = Object.create(EvidenceTypeBase.prototype);
  Annexe1AvecDetailsEquipementDocument.prototype.constructor = Annexe1AvecDetailsEquipementDocument;
  Annexe1AvecReferencesEquipement.prototype = Object.create(EvidenceTypeListBase.prototype);
  Annexe1AvecReferencesEquipement.prototype.constructor = Annexe1AvecReferencesEquipement;
  Annexe1AvecReferencesEquipementDocument.prototype = Object.create(EvidenceTypeBase.prototype);
  Annexe1AvecReferencesEquipementDocument.prototype.constructor = Annexe1AvecReferencesEquipementDocument;
  Annexe1FicheConstructeur.prototype = Object.create(EvidenceTypeBase.prototype);
  Annexe1FicheConstructeur.prototype.constructor = Annexe1FicheConstructeur;
  EstBatimentIndustriel.prototype = Object.create(Constraint.prototype);
  EstBatimentIndustriel.prototype.constructor = EstBatimentIndustriel;
  DenominationTypeUsageNonMouvementOuIntrusion.prototype = Object.create(Constraint.prototype);
  DenominationTypeUsageNonMouvementOuIntrusion.prototype.constructor = DenominationTypeUsageNonMouvementOuIntrusion;
  DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents.prototype = Object.create(Constraint.prototype);
  DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents.prototype.constructor = DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents;
  EfficaciteLumineuseMinimale.prototype = Object.create(Constraint.prototype);
  EfficaciteLumineuseMinimale.prototype.constructor = EfficaciteLumineuseMinimale;
  FacteurPuissanceMinimal.prototype = Object.create(Constraint.prototype);
  FacteurPuissanceMinimal.prototype.constructor = FacteurPuissanceMinimal;
  TauxDistorsionHarmoniqueValide.prototype = Object.create(Criterion.prototype);
  TauxDistorsionHarmoniqueValide.prototype.constructor = TauxDistorsionHarmoniqueValide;
  TauxDistorsionHarmoniqueMaximal.prototype = Object.create(Constraint.prototype);
  TauxDistorsionHarmoniqueMaximal.prototype.constructor = TauxDistorsionHarmoniqueMaximal;
  TauxDistorsionHarmoniqueCalculSelonNorme.prototype = Object.create(Constraint.prototype);
  TauxDistorsionHarmoniqueCalculSelonNorme.prototype.constructor = TauxDistorsionHarmoniqueCalculSelonNorme;
  EtudeDimensionnementEclairagePrealableInfo.prototype = Object.create(InformationRequirement.prototype);
  EtudeDimensionnementEclairagePrealableInfo.prototype.constructor = EtudeDimensionnementEclairagePrealableInfo;
  DatePrecedentsTravauxContrainte_0.prototype = Object.create(Constraint.prototype);
  DatePrecedentsTravauxContrainte_0.prototype.constructor = DatePrecedentsTravauxContrainte_0;
  CalculCertificatsCumac_0.prototype = Object.create(Constraint.prototype);
  CalculCertificatsCumac_0.prototype.constructor = CalculCertificatsCumac_0;
  LumenPerW.prototype = Object.create(CUnit.prototype);
  LumenPerW.prototype.constructor = LumenPerW;
  Variation.prototype = Object.create(CUnit.prototype);
  Variation.prototype.constructor = Variation;
  KWhCumacPerW.prototype = Object.create(CUnit.prototype);
  KWhCumacPerW.prototype.constructor = KWhCumacPerW;
  Watt.prototype = Object.create(CUnit.prototype);
  Watt.prototype.constructor = Watt;
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
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
    return joinTo_0(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
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
  function plus(_this_, element) {
    var result = ArrayList_init_$Create$_0(_this_._get_size__0_k$() + 1 | 0);
    result.addAll_dxd4eo_k$(_this_);
    Unit_getInstance();
    result.add_2bq_k$(element);
    Unit_getInstance();
    return result;
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
  function joinTo$default(_this_, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function minOrNull(_this_) {
    var iterator = _this_.iterator_0_k$();
    if (!iterator.hasNext_0_k$())
      return null;
    var min = iterator.next_0_k$();
    while (iterator.hasNext_0_k$()) {
      var e = iterator.next_0_k$();
      if (compareTo(min, e) > 0)
        min = e;
    }
    return min;
  }
  function single(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return single_0(_this_);
    else {
      {
        var iterator = _this_.iterator_0_k$();
        if (!iterator.hasNext_0_k$())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var single_1 = iterator.next_0_k$();
        if (iterator.hasNext_0_k$())
          throw IllegalArgumentException_init_$Create$('Collection has more than one element.');
        return single_1;
      }
    }
  }
  function single_0(_this_) {
    var tmp0_subject = _this_._get_size__0_k$();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this_.get_ha5a7z_k$(0);
        break;
      default:throw IllegalArgumentException_init_$Create$('List has more than one element.');
    }
    return tmp;
  }
  function until(_this_, to_0) {
    if (to_0 <= IntCompanionObject_getInstance()._MIN_VALUE)
      return Companion_getInstance_1()._EMPTY;
    return numberRangeToNumber(_this_, to_0 - 1 | 0);
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_;
  }
  function downTo(_this_, to_0) {
    return Companion_getInstance_0().fromClosedRange_fcwjfj_k$(_this_, to_0, -1);
  }
  function coerceAtMost(_this_, maximumValue) {
    return _this_ > maximumValue ? maximumValue : _this_;
  }
  function coerceIn(_this_, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_ < minimumValue)
      return minimumValue;
    if (_this_ > maximumValue)
      return maximumValue;
    return _this_;
  }
  function toList(_this_) {
    return optimizeReadOnlyList(toMutableList(_this_));
  }
  function map(_this_, transform) {
    return new TransformingSequence(_this_, transform);
  }
  function toMutableList(_this_) {
    return toCollection(_this_, ArrayList_init_$Create$());
  }
  function toCollection(_this_, destination) {
    var tmp0_iterator = _this_.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var item = tmp0_iterator.next_0_k$();
      destination.add_2bq_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function drop(_this_, n) {
    {
      var tmp0_require_0 = n >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Requested character count ' + n + ' is less than zero.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_0(message_2));
      }}
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_substring_0 = coerceAtMost(n, _this_.length);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this_;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.substring(tmp1_substring_0);
      break $l$block_1;
    }
    return tmp$ret$2;
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
  AbstractCollection.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
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
  EmptyList.prototype._get_size__0_k$ = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_0_k$ = function () {
    return true;
  };
  EmptyList.prototype.get_ha5a7z_k$ = function (index) {
    throw IndexOutOfBoundsException_init_$Create$('' + "Empty list doesn't contain element at index " + index + '.');
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
  function _get_lastIndex_(_this_) {
    return _this_._get_size__0_k$() - 1 | 0;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function ArrayAsCollection(values, isVarargs) {
    this._values = values;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__0_k$ = function () {
    return this._values.length;
  };
  ArrayAsCollection.prototype.isEmpty_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = this._values;
      tmp$ret$0 = tmp0_isEmpty_0.length === 0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.iterator_0_k$ = function () {
    return arrayIterator(this._values);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function optimizeReadOnlyList(_this_) {
    var tmp0_subject = _this_._get_size__0_k$();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf_0(_this_.get_ha5a7z_k$(0));
      default:return _this_;
    }
  }
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__0_k$();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided__0(this$0) {
    this._this$0_0 = this$0;
    this._iterator = this._this$0_0._sequence.iterator_0_k$();
  }
  _no_name_provided__0.prototype.next_0_k$ = function () {
    return this._this$0_0._transformer(this._iterator.next_0_k$());
  };
  _no_name_provided__0.prototype.hasNext_0_k$ = function () {
    return this._iterator.hasNext_0_k$();
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function TransformingSequence(sequence, transformer) {
    this._sequence = sequence;
    this._transformer = transformer;
  }
  TransformingSequence.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__0(this);
  };
  TransformingSequence.$metadata$ = {
    simpleName: 'TransformingSequence',
    kind: 'class',
    interfaces: [Sequence]
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
  function equals(_this_, other, ignoreCase) {
    if (_this_.equals(other))
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this_);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (thisUpper.equals(otherUpper)) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              var tmp0_asDynamic_0 = thisUpper.toString();
              tmp$ret$0 = tmp0_asDynamic_0;
              break $l$block;
            }
            var tmp1_unsafeCast_0 = tmp$ret$0.toLowerCase();
            tmp$ret$1 = tmp1_unsafeCast_0;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
        break $l$block_2;
      }
      var tmp_0 = tmp$ret$3;
      var tmp$ret$7;
      $l$block_6: {
        var tmp$ret$6;
        $l$block_5: {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_asDynamic_0 = otherUpper.toString();
              tmp$ret$4 = tmp2_asDynamic_0;
              break $l$block_3;
            }
            var tmp3_unsafeCast_0 = tmp$ret$4.toLowerCase();
            tmp$ret$5 = tmp3_unsafeCast_0;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        tmp$ret$7 = charSequenceGet(tmp$ret$6, 0);
        break $l$block_6;
      }
      tmp = tmp_0.equals(tmp$ret$7);
    }
    return tmp;
  }
  function trimIndent(_this_) {
    return replaceIndent(_this_, '');
  }
  function replaceIndent(_this_, newIndent) {
    var lines_0 = lines(_this_);
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
          var tmp0_iterator_1_2 = lines_0.iterator_0_k$();
          while (tmp0_iterator_1_2.hasNext_0_k$()) {
            var element_2_3 = tmp0_iterator_1_2.next_0_k$();
            if (isNotBlank(element_2_3)) {
              tmp0_filterTo_0_1.add_2bq_k$(element_2_3);
              Unit_getInstance();
            }}
          tmp$ret$0 = tmp0_filterTo_0_1;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var tmp0_map_0 = tmp$ret$1;
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
        var tmp0_iterator_1_2_0 = tmp0_map_0.iterator_0_k$();
        while (tmp0_iterator_1_2_0.hasNext_0_k$()) {
          var item_2_3 = tmp0_iterator_1_2_0.next_0_k$();
          tmp0_mapTo_0_1.add_2bq_k$(indentWidth(item_2_3));
          Unit_getInstance();
        }
        tmp$ret$2 = tmp0_mapTo_0_1;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    var tmp0_elvis_lhs = minOrNull(tmp$ret$3);
    var minCommonIndent = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp$ret$10;
    $l$block_9: {
      var tmp1_reindent_0 = _this_.length + imul(newIndent.length, lines_0._get_size__0_k$()) | 0;
      var tmp2_reindent_0 = getIndentFunction(newIndent);
      var lastIndex_1 = _get_lastIndex_(lines_0);
      var tmp$ret$9;
      $l$block_8: {
        var tmp$ret$8;
        $l$block_7: {
          var tmp1_mapIndexedNotNullTo_0_1 = ArrayList_init_$Create$();
          {
            var index_1_2 = 0;
            var tmp0_iterator_2_3 = lines_0.iterator_0_k$();
            while (tmp0_iterator_2_3.hasNext_0_k$()) {
              var item_3_4 = tmp0_iterator_2_3.next_0_k$();
              {
                var tmp1_4_6 = index_1_2;
                index_1_2 = tmp1_4_6 + 1 | 0;
                var tmp0__anonymous__1_5_5 = checkIndexOverflow(tmp1_4_6);
                var tmp$ret$6;
                $l$block_5: {
                  var tmp;
                  if ((tmp0__anonymous__1_5_5 === 0 ? true : tmp0__anonymous__1_5_5 === lastIndex_1) ? isBlank(item_3_4) : false) {
                    tmp = null;
                  } else {
                    var tmp$ret$4;
                    $l$block_3: {
                      tmp$ret$4 = drop(item_3_4, minCommonIndent);
                      break $l$block_3;
                    }
                    var tmp0_safe_receiver_4_10 = tmp$ret$4;
                    var tmp_0;
                    if (tmp0_safe_receiver_4_10 == null) {
                      tmp_0 = null;
                    } else {
                      var tmp$ret$5;
                      $l$block_4: {
                        {
                        }
                        tmp$ret$5 = tmp2_reindent_0(tmp0_safe_receiver_4_10);
                        break $l$block_4;
                      }
                      tmp_0 = tmp$ret$5;
                    }
                    var tmp1_elvis_lhs_3_9 = tmp_0;
                    tmp = tmp1_elvis_lhs_3_9 == null ? item_3_4 : tmp1_elvis_lhs_3_9;
                  }
                  tmp$ret$6 = tmp;
                  break $l$block_5;
                }
                var tmp0_safe_receiver_2_6_7 = tmp$ret$6;
                if (tmp0_safe_receiver_2_6_7 == null)
                  null;
                else {
                  var tmp$ret$7;
                  $l$block_6: {
                    {
                    }
                    tmp1_mapIndexedNotNullTo_0_1.add_2bq_k$(tmp0_safe_receiver_2_6_7);
                    tmp$ret$7 = Unit_getInstance();
                    break $l$block_6;
                  }
                  Unit_getInstance();
                }
                Unit_getInstance();
              }
            }
          }
          tmp$ret$8 = tmp1_mapIndexedNotNullTo_0_1;
          break $l$block_7;
        }
        tmp$ret$9 = tmp$ret$8;
        break $l$block_8;
      }
      var tmp_1 = tmp$ret$9;
      var tmp_2 = StringBuilder_init_$Create$(tmp1_reindent_0);
      tmp$ret$10 = joinTo$default(tmp_1, tmp_2, '\n', null, null, 0, null, null, 124, null).toString();
      break $l$block_9;
    }
    return tmp$ret$10;
  }
  function indentWidth(_this_) {
    var tmp$ret$3;
    $l$block_3: {
      var tmp$ret$1;
      $l$block_1: {
        var inductionVariable = 0;
        var last = charSequenceLength(_this_) - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$0;
            $l$block: {
              var tmp0__anonymous__3 = charSequenceGet(_this_, index_2);
              tmp$ret$0 = !isWhitespace(tmp0__anonymous__3);
              break $l$block;
            }
            if (tmp$ret$0) {
              tmp$ret$1 = index_2;
              break $l$block_1;
            } else {
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = -1;
        break $l$block_1;
      }
      var tmp1_let_0 = tmp$ret$1;
      {
      }
      var tmp$ret$2;
      $l$block_2: {
        tmp$ret$2 = tmp1_let_0 === -1 ? _this_.length : tmp1_let_0;
        break $l$block_2;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_3;
    }
    return tmp$ret$3;
  }
  function getIndentFunction(indent) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(indent) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = _no_name_provided_$factory_0();
    } else {
      {
        tmp = _no_name_provided_$factory_1(indent);
      }
    }
    return tmp;
  }
  function _no_name_provided__1() {
  }
  _no_name_provided__1.prototype.invoke_6wfw3l_k$ = function (line) {
    return line;
  };
  _no_name_provided__1.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_6wfw3l_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__2($indent) {
    this._$indent = $indent;
  }
  _no_name_provided__2.prototype.invoke_6wfw3l_k$ = function (line) {
    return this._$indent + line;
  };
  _no_name_provided__2.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_6wfw3l_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_0() {
    var i = new _no_name_provided__1();
    return function (p1) {
      return i.invoke_6wfw3l_k$(p1);
    };
  }
  function _no_name_provided_$factory_1($indent) {
    var i = new _no_name_provided__2($indent);
    return function (p1) {
      return i.invoke_6wfw3l_k$(p1);
    };
  }
  function isNotBlank(_this_) {
    return !isBlank(_this_);
  }
  function lines(_this_) {
    return toList(lineSequence(_this_));
  }
  function _get_lastIndex__0(_this_) {
    return charSequenceLength(_this_) - 1 | 0;
  }
  function lineSequence(_this_) {
    return splitToSequence$default(_this_, ['\r\n', '\n', '\r'], false, 0, 6, null);
  }
  function splitToSequence(_this_, delimiters, ignoreCase, limit) {
    var tmp = rangesDelimitedBy$default(_this_, delimiters, 0, ignoreCase, limit, 2, null);
    return map(tmp, _no_name_provided_$factory_2(_this_));
  }
  function splitToSequence$default(_this_, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return splitToSequence(_this_, delimiters, ignoreCase, limit);
  }
  function substring(_this_, range) {
    return toString_0(charSequenceSubSequence(_this_, range._get_start__0_k$(), range._get_endInclusive__0_k$() + 1 | 0));
  }
  function rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this_, startIndex, limit, _no_name_provided_$factory_3(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this_, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit);
  }
  function requireNonNegativeLimit(limit) {
    var tmp0_require_0 = limit >= 0;
    {
    }
    var tmp;
    if (!tmp0_require_0) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = '' + 'Limit must be non-negative, but was ' + limit;
        break $l$block;
      }
      var message_2 = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message_2));
    }return tmp;
  }
  function calcNext($this) {
    if ($this._nextSearchIndex < 0) {
      $this._nextState = 0;
      $this._nextItem = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this._this$0_1._limit > 0) {
        var tmp0_this = $this;
        tmp0_this._counter = tmp0_this._counter + 1 | 0;
        tmp_0 = tmp0_this._counter >= $this._this$0_1._limit;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        {
          tmp = $this._nextSearchIndex > charSequenceLength($this._this$0_1._input);
        }
      }
      if (tmp) {
        $this._nextItem = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__0($this._this$0_1._input));
        $this._nextSearchIndex = -1;
      } else {
        {
          var match = $this._this$0_1._getNextMatch($this._this$0_1._input, $this._nextSearchIndex);
          if (match == null) {
            $this._nextItem = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__0($this._this$0_1._input));
            $this._nextSearchIndex = -1;
          } else {
            var tmp1_container = match;
            var index = tmp1_container.component1_0_k$();
            var length = tmp1_container.component2_0_k$();
            $this._nextItem = until($this._currentStartIndex, index);
            $this._currentStartIndex = index + length | 0;
            $this._nextSearchIndex = $this._currentStartIndex + (length === 0 ? 1 : 0) | 0;
          }
        }
      }
      $this._nextState = 1;
    }
  }
  function _no_name_provided__3(this$0) {
    this._this$0_1 = this$0;
    this._nextState = -1;
    this._currentStartIndex = coerceIn(this._this$0_1._startIndex, 0, charSequenceLength(this._this$0_1._input));
    this._nextSearchIndex = this._currentStartIndex;
    this._nextItem = null;
    this._counter = 0;
  }
  _no_name_provided__3.prototype.next_0_k$ = function () {
    if (this._nextState === -1)
      calcNext(this);
    if (this._nextState === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this._nextItem;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this._nextItem = null;
    this._nextState = -1;
    return result;
  };
  _no_name_provided__3.prototype.hasNext_0_k$ = function () {
    if (this._nextState === -1)
      calcNext(this);
    return this._nextState === 1;
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this._input = input;
    this._startIndex = startIndex;
    this._limit = limit;
    this._getNextMatch = getNextMatch;
  }
  DelimitedRangesSequence.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__3(this);
  };
  DelimitedRangesSequence.$metadata$ = {
    simpleName: 'DelimitedRangesSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function findAnyOf(_this_, strings, startIndex, ignoreCase, last) {
    if (!ignoreCase ? strings._get_size__0_k$() === 1 : false) {
      var string = single(strings);
      var tmp;
      if (!last) {
        tmp = indexOf$default(_this_, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this_, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this_)) : downTo(coerceAtMost(startIndex, _get_lastIndex__0(_this_)), 0);
    if (typeof _this_ === 'string') {
      var inductionVariable = indices._first_0;
      var last_0 = indices._last;
      var step = indices._step_0;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$1;
          $l$block_1: {
            var tmp0_iterator_1 = strings.iterator_0_k$();
            while (tmp0_iterator_1.hasNext_0_k$()) {
              var element_2 = tmp0_iterator_1.next_0_k$();
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = regionMatches(element_2, 0, _this_, index_0, element_2.length, ignoreCase);
                break $l$block;
              }
              if (tmp$ret$0) {
                tmp$ret$1 = element_2;
                break $l$block_1;
              } else {
              }
            }
            tmp$ret$1 = null;
            break $l$block_1;
          }
          var matchingString = tmp$ret$1;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_0));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_1 = indices._last;
        var step_0 = indices._step_0;
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            var tmp$ret$3;
            $l$block_4: {
              var tmp0_iterator_1_0 = strings.iterator_0_k$();
              while (tmp0_iterator_1_0.hasNext_0_k$()) {
                var element_2_0 = tmp0_iterator_1_0.next_0_k$();
                var tmp$ret$2;
                $l$block_2: {
                  tmp$ret$2 = regionMatchesImpl(element_2_0, 0, _this_, index_1, element_2_0.length, ignoreCase);
                  break $l$block_2;
                }
                if (tmp$ret$2) {
                  tmp$ret$3 = element_2_0;
                  break $l$block_4;
                } else {
                }
              }
              tmp$ret$3 = null;
              break $l$block_4;
            }
            var matchingString_0 = tmp$ret$3;
            if (!(matchingString_0 == null))
              return to(index_1, matchingString_0);
          }
           while (!(index_1 === last_1));
      }
    }
    return null;
  }
  function indexOf(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this_);
      tmp = indexOf$default_0(_this_, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeIndexOf_0 = _this_;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.indexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function indexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf(_this_, string, startIndex, ignoreCase);
  }
  function lastIndexOf(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_0(_this_, string, startIndex, 0, ignoreCase, true);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeLastIndexOf_0 = _this_;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeLastIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.lastIndexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function lastIndexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = _get_lastIndex__0(_this_);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf(_this_, string, startIndex, ignoreCase);
  }
  function regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this_) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this_, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function indexOf_0(_this_, other, startIndex, endIndex, ignoreCase, last) {
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this_))) : downTo(coerceAtMost(startIndex, _get_lastIndex__0(_this_)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this_ === 'string') {
      tmp = typeof other === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var inductionVariable = indices._first_0;
      var last_0 = indices._last;
      var step = indices._step_0;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this_, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_1 = indices._last;
        var step_0 = indices._step_0;
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            if (regionMatchesImpl(other, 0, _this_, index_0, charSequenceLength(other), ignoreCase))
              return index_0;
          }
           while (!(index_0 === last_1));
      }
    }
    return -1;
  }
  function indexOf$default_0(_this_, other, startIndex, endIndex, ignoreCase, last, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last = false;
    return indexOf_0(_this_, other, startIndex, endIndex, ignoreCase, last);
  }
  function _no_name_provided__4($this_splitToSequence) {
    this._$this_splitToSequence = $this_splitToSequence;
  }
  _no_name_provided__4.prototype.invoke_em8bnc_k$ = function (it) {
    return substring(this._$this_splitToSequence, it);
  };
  _no_name_provided__4.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_em8bnc_k$(p1 instanceof IntRange ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5($delimitersList, $ignoreCase) {
    this._$delimitersList = $delimitersList;
    this._$ignoreCase = $ignoreCase;
  }
  _no_name_provided__5.prototype.invoke_w2qdfo_k$ = function ($this$$receiver, currentIndex) {
    var tmp0_safe_receiver = findAnyOf($this$$receiver, this._$delimitersList, currentIndex, this._$ignoreCase, false);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = to(tmp0_safe_receiver._first, tmp0_safe_receiver._second.length);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  _no_name_provided__5.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isCharSequence(p1) : false) ? p1 : THROW_CCE();
    return this.invoke_w2qdfo_k$(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_2($this_splitToSequence) {
    var i = new _no_name_provided__4($this_splitToSequence);
    return function (p1) {
      return i.invoke_em8bnc_k$(p1);
    };
  }
  function _no_name_provided_$factory_3($delimitersList, $ignoreCase) {
    var i = new _no_name_provided__5($delimitersList, $ignoreCase);
    return function (p1, p2) {
      return i.invoke_w2qdfo_k$(p1, p2);
    };
  }
  function Pair(first, second) {
    this._first = first;
    this._second = second;
  }
  Pair.prototype.toString = function () {
    return '' + '(' + this._first + ', ' + this._second + ')';
  };
  Pair.prototype.component1_0_k$ = function () {
    return this._first;
  };
  Pair.prototype.component2_0_k$ = function () {
    return this._second;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this_, that) {
    return new Pair(_this_, that);
  }
  function _UShort___init__impl_(data) {
    return data;
  }
  function _UShort___get_data__impl_(this_0) {
    return this_0;
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
  function IntIterator() {
  }
  IntIterator.prototype.next_0_k$ = function () {
    return this.nextInt_0_k$();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this._step = step;
    this._finalElement = last;
    this._hasNext = this._step > 0 ? first <= last : first >= last;
    this._next = this._hasNext ? first : this._finalElement;
  }
  IntProgressionIterator.prototype.hasNext_0_k$ = function () {
    return this._hasNext;
  };
  IntProgressionIterator.prototype.nextInt_0_k$ = function () {
    var value = this._next;
    if (value === this._finalElement) {
      if (!this._hasNext)
        throw NoSuchElementException_init_$Create$();
      this._hasNext = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next = tmp0_this._next + this._step | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.fromClosedRange_fcwjfj_k$ = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
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
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_0();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_0 = start;
    this._last = getProgressionLastElement(start, endInclusive, step);
    this._step_0 = step;
  }
  IntProgression.prototype._get_first__0_k$ = function () {
    return this._first_0;
  };
  IntProgression.prototype._get_last__0_k$ = function () {
    return this._last;
  };
  IntProgression.prototype.iterator_0_k$ = function () {
    return new IntProgressionIterator(this._first_0, this._last, this._step_0);
  };
  IntProgression.prototype.toString = function () {
    return this._step_0 > 0 ? '' + this._first_0 + '..' + this._last + ' step ' + this._step_0 : '' + this._first_0 + ' downTo ' + this._last + ' step ' + (-this._step_0 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_2() {
    Companion_instance_1 = this;
    this._EMPTY = new IntRange(1, 0);
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
  function IntRange(start, endInclusive) {
    Companion_getInstance_1();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start__0_k$ = function () {
    return this._get_first__0_k$();
  };
  IntRange.prototype._get_endInclusive__0_k$ = function () {
    return this._get_last__0_k$();
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__0_k$() + '..' + this._get_last__0_k$();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
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
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod_0 = a % b;
    return mod_0 >= 0 ? mod_0 : mod_0 + b | 0;
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE = -2147483648;
    this._MAX_VALUE = 2147483647;
    this._SIZE_BYTES = 4;
    this._SIZE_BITS = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE__0_k$ = function () {
    return this._MIN_VALUE;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE__0_k$ = function () {
    return this._MAX_VALUE;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES__0_k$ = function () {
    return this._SIZE_BYTES;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS__0_k$ = function () {
    return this._SIZE_BITS;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS__0_k$
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
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
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }return index;
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
    this._last_0 = -1;
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
    tmp._last_0 = tmp1;
    return this._$this.get_ha5a7z_k$(this._last_0);
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
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray_0(elements);
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
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
  ArrayList.prototype.addAll_dxd4eo_k$ = function (elements) {
    this.checkIsMutable_sv8swh_k$();
    if (elements.isEmpty_0_k$())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_plus_0 = tmp0_this._array;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = copyToArray_0(elements);
        break $l$block;
      }
      var tmp1_plus_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_plus_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.concat(tmp1_plus_0);
      break $l$block_1;
    }
    tmp._array = tmp$ret$2;
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__0_k$();
    tmp1_this._set_modCount__majfzk_k$(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
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
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_wi7j7l_k$ = function (it) {
    return isObject(it);
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
    return isNumber(it);
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
    return !(it == null) ? typeof it === 'boolean' : false;
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
    return !(it == null) ? typeof it === 'number' : false;
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
    return !(it == null) ? typeof it === 'number' : false;
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
    return !(it == null) ? typeof it === 'number' : false;
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
    return !(it == null) ? typeof it === 'number' : false;
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
    return !(it == null) ? typeof it === 'number' : false;
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
    return !(it == null) ? isArray(it) : false;
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
    return !(it == null) ? typeof it === 'string' : false;
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
    return it instanceof Error;
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
    return !(it == null) ? isBooleanArray(it) : false;
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
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__18.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__19.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__20.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__21.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__22.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23() {
  }
  _no_name_provided__23.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__23.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__24() {
  }
  _no_name_provided__24.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__24.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__25.prototype.invoke_wi7j7l_k$ = function (it) {
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
  _no_name_provided__25.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__25.$metadata$ = {
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
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_4());
    var tmp_1 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0_0 = Number;
      tmp$ret$1 = tmp0_unsafeCast_0_0;
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_5());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_unsafeCast_0_1 = Boolean;
      tmp$ret$2 = tmp0_unsafeCast_0_1;
      break $l$block_1;
    }
    var tmp_4 = tmp$ret$2;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_6());
    var tmp_5 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_unsafeCast_0_2 = Number;
      tmp$ret$3 = tmp0_unsafeCast_0_2;
      break $l$block_2;
    }
    var tmp_6 = tmp$ret$3;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_7());
    var tmp_7 = this;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_unsafeCast_0_3 = Number;
      tmp$ret$4 = tmp0_unsafeCast_0_3;
      break $l$block_3;
    }
    var tmp_8 = tmp$ret$4;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_8());
    var tmp_9 = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_unsafeCast_0_4 = Number;
      tmp$ret$5 = tmp0_unsafeCast_0_4;
      break $l$block_4;
    }
    var tmp_10 = tmp$ret$5;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_9());
    var tmp_11 = this;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_unsafeCast_0_5 = Number;
      tmp$ret$6 = tmp0_unsafeCast_0_5;
      break $l$block_5;
    }
    var tmp_12 = tmp$ret$6;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_10());
    var tmp_13 = this;
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_unsafeCast_0_6 = Number;
      tmp$ret$7 = tmp0_unsafeCast_0_6;
      break $l$block_6;
    }
    var tmp_14 = tmp$ret$7;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_11());
    var tmp_15 = this;
    var tmp$ret$8;
    $l$block_7: {
      var tmp0_unsafeCast_0_7 = Array;
      tmp$ret$8 = tmp0_unsafeCast_0_7;
      break $l$block_7;
    }
    var tmp_16 = tmp$ret$8;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_12());
    var tmp_17 = this;
    var tmp$ret$9;
    $l$block_8: {
      var tmp0_unsafeCast_0_8 = String;
      tmp$ret$9 = tmp0_unsafeCast_0_8;
      break $l$block_8;
    }
    var tmp_18 = tmp$ret$9;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_13());
    var tmp_19 = this;
    var tmp$ret$10;
    $l$block_9: {
      var tmp0_unsafeCast_0_9 = Error;
      tmp$ret$10 = tmp0_unsafeCast_0_9;
      break $l$block_9;
    }
    var tmp_20 = tmp$ret$10;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_14());
    var tmp_21 = this;
    var tmp$ret$11;
    $l$block_10: {
      var tmp0_unsafeCast_0_10 = Array;
      tmp$ret$11 = tmp0_unsafeCast_0_10;
      break $l$block_10;
    }
    var tmp_22 = tmp$ret$11;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_15());
    var tmp_23 = this;
    var tmp$ret$12;
    $l$block_11: {
      var tmp0_unsafeCast_0_11 = Uint16Array;
      tmp$ret$12 = tmp0_unsafeCast_0_11;
      break $l$block_11;
    }
    var tmp_24 = tmp$ret$12;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_16());
    var tmp_25 = this;
    var tmp$ret$13;
    $l$block_12: {
      var tmp0_unsafeCast_0_12 = Int8Array;
      tmp$ret$13 = tmp0_unsafeCast_0_12;
      break $l$block_12;
    }
    var tmp_26 = tmp$ret$13;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_17());
    var tmp_27 = this;
    var tmp$ret$14;
    $l$block_13: {
      var tmp0_unsafeCast_0_13 = Int16Array;
      tmp$ret$14 = tmp0_unsafeCast_0_13;
      break $l$block_13;
    }
    var tmp_28 = tmp$ret$14;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_18());
    var tmp_29 = this;
    var tmp$ret$15;
    $l$block_14: {
      var tmp0_unsafeCast_0_14 = Int32Array;
      tmp$ret$15 = tmp0_unsafeCast_0_14;
      break $l$block_14;
    }
    var tmp_30 = tmp$ret$15;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_19());
    var tmp_31 = this;
    var tmp$ret$16;
    $l$block_15: {
      var tmp0_unsafeCast_0_15 = Array;
      tmp$ret$16 = tmp0_unsafeCast_0_15;
      break $l$block_15;
    }
    var tmp_32 = tmp$ret$16;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_20());
    var tmp_33 = this;
    var tmp$ret$17;
    $l$block_16: {
      var tmp0_unsafeCast_0_16 = Float32Array;
      tmp$ret$17 = tmp0_unsafeCast_0_16;
      break $l$block_16;
    }
    var tmp_34 = tmp$ret$17;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_21());
    var tmp_35 = this;
    var tmp$ret$18;
    $l$block_17: {
      var tmp0_unsafeCast_0_17 = Float64Array;
      tmp$ret$18 = tmp0_unsafeCast_0_17;
      break $l$block_17;
    }
    var tmp_36 = tmp$ret$18;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_22());
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
          var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_23(arity));
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
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__7();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__8();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__23();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__24();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_23($arity) {
    var i = new _no_name_provided__25($arity);
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
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._string;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    return tmp$ret$0.length;
  };
  StringBuilder.prototype.get_ha5a7z_k$ = function (index) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getOrElse_0 = this._string;
      var tmp;
      if (index >= 0 ? index <= _get_lastIndex__0(tmp0_getOrElse_0) : false) {
        tmp = charSequenceGet(tmp0_getOrElse_0, index);
      } else {
        throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', length: ' + this._get_length__0_k$() + '}');
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  StringBuilder.prototype.subSequence_27zxwg_k$ = function (startIndex, endIndex) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this._string;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
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
  function isWhitespace(_this_) {
    return isWhitespaceImpl(_this_);
  }
  function uppercaseChar(_this_) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = _this_.toString();
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        var tmp1_unsafeCast_0 = tmp$ret$0.toUpperCase();
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this_ : charSequenceGet(uppercase, 0);
  }
  function isBlank(_this_) {
    var tmp;
    if (charSequenceLength(_this_) === 0) {
      tmp = true;
    } else {
      var tmp_0;
      if (typeof _this_ === 'string') {
        tmp_0 = _this_;
      } else {
        {
          tmp_0 = toString_0(_this_);
        }
      }
      tmp = matches(tmp_0, '^[\\s\\xA0]+$');
    }
    return tmp;
  }
  function matches(_this_, regex) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.match(regex);
      break $l$block_0;
    }
    var result = tmp$ret$1;
    return !(result == null) ? !(result.length === 0) : false;
  }
  function regionMatches(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function Companion_3() {
    Companion_instance_2 = this;
    this._MIN_VALUE_0 = new Char(0);
    this._MAX_VALUE_0 = new Char(65535);
    this._MIN_HIGH_SURROGATE = new Char(55296);
    this._MAX_HIGH_SURROGATE = new Char(56319);
    this._MIN_LOW_SURROGATE = new Char(56320);
    this._MAX_LOW_SURROGATE = new Char(57343);
    this._MIN_SURROGATE = new Char(55296);
    this._MAX_SURROGATE = new Char(57343);
    this._SIZE_BYTES_0 = 2;
    this._SIZE_BITS_0 = 16;
  }
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function Char(code) {
    Companion_getInstance_2();
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UShort___get_data__impl_(code) & 65535;
      break $l$block;
    }
    tmp._value = tmp$ret$0;
  }
  Char.prototype.compareTo_wi8o78_k$ = function (other) {
    return this._value - other._value | 0;
  };
  Char.prototype.compareTo_2c5_k$ = function (other) {
    return this.compareTo_wi8o78_k$(other instanceof Char ? other : THROW_CCE());
  };
  Char.prototype.toInt_0_k$ = function () {
    return this._value;
  };
  Char.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Char))
      return false;
    else {
    }
    return this._value === other._value;
  };
  Char.prototype.toString = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = String.fromCharCode(this._value);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
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
  function Companion_4() {
    Companion_instance_3 = this;
  }
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_3();
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype.compareTo_2bq_k$ = function (other) {
    return compareTo(this._ordinal, other._ordinal);
  };
  Enum.prototype.compareTo_2c5_k$ = function (other) {
    return this.compareTo_2bq_k$(other instanceof Enum ? other : THROW_CCE());
  };
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
    return new _no_name_provided__26(array);
  }
  function _no_name_provided__26($array) {
    this._$array = $array;
    this._index_0 = 0;
  }
  _no_name_provided__26.prototype.hasNext_0_k$ = function () {
    return !(this._index_0 === this._$array.length);
  };
  _no_name_provided__26.prototype.next_0_k$ = function () {
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
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = a;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.charCodeAt(index);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        var tmp1_Char_0 = tmp$ret$1;
        var tmp_0;
        var tmp$ret$2;
        $l$block_1: {
          Companion_getInstance_2();
          var tmp0__get_code__0_1 = new Char(0);
          tmp$ret$2 = tmp0__get_code__0_1.toInt_0_k$();
          break $l$block_1;
        }
        if (tmp1_Char_0 < tmp$ret$2) {
          tmp_0 = true;
        } else {
          {
            var tmp$ret$3;
            $l$block_2: {
              Companion_getInstance_2();
              var tmp1__get_code__0_2 = new Char(65535);
              tmp$ret$3 = tmp1__get_code__0_2.toInt_0_k$();
              break $l$block_2;
            }
            tmp_0 = tmp1_Char_0 > tmp$ret$3;
          }
        }
        if (tmp_0) {
          throw IllegalArgumentException_init_$Create$('' + 'Invalid Char code: ' + tmp1_Char_0);
        } else {
        }
        tmp$ret$4 = numberToChar(tmp1_Char_0);
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    } else {
      tmp = a.get_ha5a7z_k$(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.length;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a._get_length__0_k$();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.substring(startIndex, endIndex);
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a.subSequence_27zxwg_k$(startIndex, endIndex);
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_24(), 24, null);
  }
  function _no_name_provided__27() {
  }
  _no_name_provided__27.prototype.invoke_wi7j7l_k$ = function (it) {
    return toString_0(it);
  };
  _no_name_provided__27.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_24() {
    var i = new _no_name_provided__27();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_0_k$());
          } else {
            {
              tmp_0 = primitiveCompareTo(a, b);
            }
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 1;
          break $l$block;
        }
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 1;
          break $l$block_0;
        }
        if (ia === tmp$ret$1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            {
              tmp_1 = 1;
            }
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.compareTo_2c5_k$(b);
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
  function Companion_5() {
    Companion_instance_4 = this;
    this._MIN_VALUE_1 = new Long(0, -2147483648);
    this._MAX_VALUE_1 = new Long(-1, 2147483647);
    this._SIZE_BYTES_1 = 8;
    this._SIZE_BITS_1 = 64;
  }
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function Long(low, high) {
    Companion_getInstance_4();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.compareTo_wiekkq_k$ = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_2c5_k$ = function (other) {
    return this.compareTo_wiekkq_k$(other instanceof Long ? other : THROW_CCE());
  };
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
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_0_k$();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toShort$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toUShort_0 = numberToInt(a);
      tmp$ret$0 = _UShort___init__impl_(toShort(tmp0_toUShort_0));
      break $l$block;
    }
    return new Char(tmp$ret$0);
  }
  function toShort$outlinedJsCode$(a) {
    return a << 16 >> 16;
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
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
  function isWhitespaceImpl(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_.toInt_0_k$();
      break $l$block;
    }
    var ch = tmp$ret$0;
    return (((9 <= ch ? ch <= 13 : false) ? true : 28 <= ch ? ch <= 32 : false) ? true : ch === 160) ? true : ch > 4096 ? (((((ch === 5760 ? true : 8192 <= ch ? ch <= 8202 : false) ? true : ch === 8232) ? true : ch === 8233) ? true : ch === 8239) ? true : ch === 8287) ? true : ch === 12288 : false;
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
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
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
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  ArithmeticException.$metadata$ = {
    simpleName: 'ArithmeticException',
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
    this._value_0 = value;
  }
  AtomicRef.prototype._set_value__iav7o_k$ = function (_set___) {
    this._value_0 = _set___;
  };
  AtomicRef.prototype._get_value__0_k$ = function () {
    return this._value_0;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_0 === expect))
      return false;
    this._value_0 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_0;
    this._value_0 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this._value_0);
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
    this._value_1 = value;
  }
  AtomicBoolean.prototype._set_value__rpwsgn_k$ = function (_set___) {
    this._value_1 = _set___;
  };
  AtomicBoolean.prototype._get_value__0_k$ = function () {
    return this._value_1;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_1 === expect))
      return false;
    this._value_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_1;
    this._value_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this._value_1.toString();
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
    this._value_2 = value;
  }
  AtomicInt.prototype._set_value__majfzk_k$ = function (_set___) {
    this._value_2 = _set___;
  };
  AtomicInt.prototype._get_value__0_k$ = function () {
    return this._value_2;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_2 === expect))
      return false;
    this._value_2 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_2;
    this._value_2 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this._value_2;
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta | 0;
    return this._value_2;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 - 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.toString = function () {
    return this._value_2.toString();
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
    this._value_3 = value;
  }
  AtomicLong.prototype._set_value__kdfck9_k$ = function (_set___) {
    this._value_3 = _set___;
  };
  AtomicLong.prototype._get_value__0_k$ = function () {
    return this._value_3;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this._value_3.equals(expect))
      return false;
    this._value_3 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_3;
    this._value_3 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_3;
    tmp0_this._value_3 = tmp1.inc_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_3;
    tmp0_this._value_3 = tmp1.dec_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this._value_3;
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.plus_wiekkq_k$(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.plus_wiekkq_k$(delta);
    return this._value_3;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.inc_0_k$();
    return tmp0_this._value_3;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.dec_0_k$();
    return tmp0_this._value_3;
  };
  AtomicLong.prototype.toString = function () {
    return this._value_3.toString();
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
  function EvidenceTypeBase_init_$Create$(identifier, name, evidenceTypeClassification, validityPeriodConstraint, issuingPlace, $mask0, $marker) {
    return EvidenceTypeBase_init_$Init$(identifier, name, evidenceTypeClassification, validityPeriodConstraint, issuingPlace, $mask0, $marker, Object.create(EvidenceTypeBase.prototype));
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
  function ReferenceFramework(identifier, isDerivedFrom) {
    this._identifier_2 = identifier;
    this._isDerivedFrom = isDerivedFrom;
  }
  ReferenceFramework.$metadata$ = {
    simpleName: 'ReferenceFramework',
    kind: 'class',
    interfaces: []
  };
  function Criterion_init_$Init$(description, identifier, name, type, bias, weight, weightingConsiderationDescription, weightingType, hasConcept, hasRequirement, hasEvidenceTypeList, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      description = null;
    if (!(($mask0 & 16) === 0))
      bias = null;
    if (!(($mask0 & 32) === 0))
      weight = null;
    if (!(($mask0 & 64) === 0))
      weightingConsiderationDescription = null;
    if (!(($mask0 & 128) === 0))
      weightingType = null;
    if (!(($mask0 & 256) === 0))
      hasConcept = emptyList();
    if (!(($mask0 & 512) === 0))
      hasRequirement = emptyList();
    if (!(($mask0 & 1024) === 0))
      hasEvidenceTypeList = emptyList();
    Criterion.call($this, description, identifier, name, type, bias, weight, weightingConsiderationDescription, weightingType, hasConcept, hasRequirement, hasEvidenceTypeList);
    return $this;
  }
  function Criterion(description, identifier, name, type, bias, weight, weightingConsiderationDescription, weightingType, hasConcept, hasRequirement, hasEvidenceTypeList) {
    this._description_1 = description;
    this._identifier_3 = identifier;
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
  function Requirement() {
  }
  Requirement.$metadata$ = {
    simpleName: 'Requirement',
    kind: 'interface',
    interfaces: []
  };
  function PartialRequirement_init_$Init$(description, identifier, name, type, minRequirementsToMeet, hasConcept, hasRequirement, hasEvidenceTypeList, $mask0, $marker, $this) {
    if (!(($mask0 & 32) === 0))
      hasConcept = emptyList();
    if (!(($mask0 & 64) === 0))
      hasRequirement = emptyList();
    if (!(($mask0 & 128) === 0))
      hasEvidenceTypeList = emptyList();
    PartialRequirement.call($this, description, identifier, name, type, minRequirementsToMeet, hasConcept, hasRequirement, hasEvidenceTypeList);
    return $this;
  }
  function PartialRequirement(description, identifier, name, type, minRequirementsToMeet, hasConcept, hasRequirement, hasEvidenceTypeList) {
    this._description_2 = description;
    this._identifier_4 = identifier;
    this._name_4 = name;
    this._type_1 = type;
    this._minRequirementsToMeet = minRequirementsToMeet;
    this._hasConcept_0 = hasConcept;
    this._hasRequirement_0 = hasRequirement;
    this._hasEvidenceTypeList_0 = hasEvidenceTypeList;
  }
  PartialRequirement.$metadata$ = {
    simpleName: 'PartialRequirement',
    kind: 'class',
    interfaces: [Requirement]
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
    this._description_3 = description;
    this._identifier_5 = identifier;
    this._name_5 = name;
    this._type_2 = type;
    this._hasConcept_1 = hasConcept;
    this._hasRequirement_1 = hasRequirement;
    this._hasEvidenceTypeList_1 = hasEvidenceTypeList;
  }
  InformationRequirement.$metadata$ = {
    simpleName: 'InformationRequirement',
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
  function Constraint_init_$Init$(description, identifier, name, type, hasConcept, hasRequirement, hasEvidenceTypeList, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      hasConcept = emptyList();
    if (!(($mask0 & 32) === 0))
      hasRequirement = emptyList();
    if (!(($mask0 & 64) === 0))
      hasEvidenceTypeList = emptyList();
    Constraint.call($this, description, identifier, name, type, hasConcept, hasRequirement, hasEvidenceTypeList);
    return $this;
  }
  function Constraint(description, identifier, name, type, hasConcept, hasRequirement, hasEvidenceTypeList) {
    this._description_4 = description;
    this._identifier_6 = identifier;
    this._name_6 = name;
    this._type_3 = type;
    this._hasConcept_2 = hasConcept;
    this._hasRequirement_2 = hasRequirement;
    this._hasEvidenceTypeList_2 = hasEvidenceTypeList;
  }
  Constraint.$metadata$ = {
    simpleName: 'Constraint',
    kind: 'class',
    interfaces: [Requirement]
  };
  function AbstractRequirementBuilder() {
    this._description_5 = null;
    this._identifier_7 = null;
    this._name_7 = null;
    this._type_4 = null;
    this._hasConcept_3 = null;
    this._hasEvidenceTypeList_3 = null;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp._requirements = tmp$ret$0;
  }
  AbstractRequirementBuilder.prototype._get_description__0_k$ = function () {
    return this._description_5;
  };
  AbstractRequirementBuilder.prototype._set_identifier__qlpr75_k$ = function (_set___) {
    this._identifier_7 = _set___;
  };
  AbstractRequirementBuilder.prototype._get_identifier__0_k$ = function () {
    return this._identifier_7;
  };
  AbstractRequirementBuilder.prototype._set_name__qlpr75_k$ = function (_set___) {
    this._name_7 = _set___;
  };
  AbstractRequirementBuilder.prototype._get_name__0_k$ = function () {
    return this._name_7;
  };
  AbstractRequirementBuilder.prototype._set_type__erbbi9_k$ = function (_set___) {
    this._type_4 = _set___;
  };
  AbstractRequirementBuilder.prototype._get_type__0_k$ = function () {
    return this._type_4;
  };
  AbstractRequirementBuilder.prototype._get_hasConcept__0_k$ = function () {
    return this._hasConcept_3;
  };
  AbstractRequirementBuilder.prototype._set_hasEvidenceTypeList__i4z9ai_k$ = function (_set___) {
    this._hasEvidenceTypeList_3 = _set___;
  };
  AbstractRequirementBuilder.prototype._get_hasEvidenceTypeList__0_k$ = function () {
    return this._hasEvidenceTypeList_3;
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
  function XSDDate() {
    XSDDate_instance = this;
    CUnit_init_$Init$('xsdDate', 'XSDDate', 'Date', null, CUnitType_date_getInstance(), 8, null, this);
  }
  XSDDate.$metadata$ = {
    simpleName: 'XSDDate',
    kind: 'object',
    interfaces: []
  };
  var XSDDate_instance;
  function XSDDate_getInstance() {
    if (XSDDate_instance == null)
      new XSDDate();
    return XSDDate_instance;
  }
  function CUnit_init_$Init$(identifier, name, description, notation, type, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      notation = null;
    CUnit.call($this, identifier, name, description, notation, type);
    return $this;
  }
  function CUnit(identifier, name, description, notation, type) {
    this._identifier_8 = identifier;
    this._name_8 = name;
    this._description_6 = description;
    this._notation = notation;
    this._type_5 = type;
  }
  CUnit.prototype._get_identifier__0_k$ = function () {
    return this._identifier_8;
  };
  CUnit.prototype._get_name__0_k$ = function () {
    return this._name_8;
  };
  CUnit.prototype._get_description__0_k$ = function () {
    return this._description_6;
  };
  CUnit.prototype._get_notation__0_k$ = function () {
    return this._notation;
  };
  CUnit.prototype._get_type__0_k$ = function () {
    return this._type_5;
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
  function XSDDouble() {
    XSDDouble_instance = this;
    CUnit_init_$Init$('xsdDouble', 'XSDDouble', 'Nombre r\xE9el quelconque', null, CUnitType_number_getInstance(), 8, null, this);
  }
  XSDDouble.$metadata$ = {
    simpleName: 'XSDDouble',
    kind: 'object',
    interfaces: []
  };
  var XSDDouble_instance;
  function XSDDouble_getInstance() {
    if (XSDDouble_instance == null)
      new XSDDouble();
    return XSDDouble_instance;
  }
  function XSDString() {
    XSDString_instance = this;
    CUnit_init_$Init$('xsdString', 'XSDString', 'Cha\xEEne de caract\xE8res quelconque', null, CUnitType_string_getInstance(), 8, null, this);
  }
  XSDString.$metadata$ = {
    simpleName: 'XSDString',
    kind: 'object',
    interfaces: []
  };
  var XSDString_instance;
  function XSDString_getInstance() {
    if (XSDString_instance == null)
      new XSDString();
    return XSDString_instance;
  }
  function Hour() {
    Hour_instance = this;
    CUnit.call(this, 'hourDuration', 'Dur\xE9e en heures', 'Dur\xE9e en heures', 'h', CUnitType_number_getInstance());
  }
  Hour.$metadata$ = {
    simpleName: 'Hour',
    kind: 'object',
    interfaces: []
  };
  var Hour_instance;
  function Hour_getInstance() {
    if (Hour_instance == null)
      new Hour();
    return Hour_instance;
  }
  function Year() {
    Year_instance = this;
    CUnit.call(this, 'yearDuration', 'Dur\xE9e en ann\xE9es', 'Dur\xE9e en ann\xE9es', 'an(s)', CUnitType_number_getInstance());
  }
  Year.$metadata$ = {
    simpleName: 'Year',
    kind: 'object',
    interfaces: []
  };
  var Year_instance;
  function Year_getInstance() {
    if (Year_instance == null)
      new Year();
    return Year_instance;
  }
  function Ratio() {
    Ratio_instance = this;
    CUnit.call(this, 'ration', 'Ration', 'Ratio entre deux valeurs', '%', CUnitType_number_getInstance());
  }
  Ratio.$metadata$ = {
    simpleName: 'Ratio',
    kind: 'object',
    interfaces: []
  };
  var Ratio_instance;
  function Ratio_getInstance() {
    if (Ratio_instance == null)
      new Ratio();
    return Ratio_instance;
  }
  function XSDInt() {
    XSDInt_instance = this;
    CUnit_init_$Init$('xsdInt', 'XSDInt', 'Nombre entier quelconque', null, CUnitType_number_getInstance(), 8, null, this);
  }
  XSDInt.$metadata$ = {
    simpleName: 'XSDInt',
    kind: 'object',
    interfaces: []
  };
  var XSDInt_instance;
  function XSDInt_getInstance() {
    if (XSDInt_instance == null)
      new XSDInt();
    return XSDInt_instance;
  }
  function CUnitType_date_getInstance() {
    CUnitType_initEntries();
    return CUnitType_date_instance;
  }
  function CUnitType_number_getInstance() {
    CUnitType_initEntries();
    return CUnitType_number_instance;
  }
  function CUnitType_string_getInstance() {
    CUnitType_initEntries();
    return CUnitType_string_instance;
  }
  var cee;
  function SecteurActivite() {
    SecteurActivite_instance = this;
  }
  SecteurActivite.$metadata$ = {
    simpleName: 'SecteurActivite',
    kind: 'object',
    interfaces: []
  };
  var SecteurActivite_instance;
  function SecteurActivite_getInstance() {
    if (SecteurActivite_instance == null)
      new SecteurActivite();
    return SecteurActivite_instance;
  }
  function Denomination() {
    Denomination_instance = this;
  }
  Denomination.$metadata$ = {
    simpleName: 'Denomination',
    kind: 'object',
    interfaces: []
  };
  var Denomination_instance;
  function Denomination_getInstance() {
    if (Denomination_instance == null)
      new Denomination();
    return Denomination_instance;
  }
  function ConditionsDelivranceCertificats() {
    ConditionsDelivranceCertificats_instance = this;
  }
  ConditionsDelivranceCertificats.$metadata$ = {
    simpleName: 'ConditionsDelivranceCertificats',
    kind: 'object',
    interfaces: []
  };
  var ConditionsDelivranceCertificats_instance;
  function ConditionsDelivranceCertificats_getInstance() {
    if (ConditionsDelivranceCertificats_instance == null)
      new ConditionsDelivranceCertificats();
    return ConditionsDelivranceCertificats_instance;
  }
  function DureeVieConventionnelle() {
    DureeVieConventionnelle_instance = this;
  }
  DureeVieConventionnelle.$metadata$ = {
    simpleName: 'DureeVieConventionnelle',
    kind: 'object',
    interfaces: []
  };
  var DureeVieConventionnelle_instance;
  function DureeVieConventionnelle_getInstance() {
    if (DureeVieConventionnelle_instance == null)
      new DureeVieConventionnelle();
    return DureeVieConventionnelle_instance;
  }
  function MontantCertificatsCumac() {
    MontantCertificatsCumac_instance = this;
  }
  MontantCertificatsCumac.$metadata$ = {
    simpleName: 'MontantCertificatsCumac',
    kind: 'object',
    interfaces: []
  };
  var MontantCertificatsCumac_instance;
  function MontantCertificatsCumac_getInstance() {
    if (MontantCertificatsCumac_instance == null)
      new MontantCertificatsCumac();
    return MontantCertificatsCumac_instance;
  }
  function Annexe1() {
    Annexe1_instance = this;
  }
  Annexe1.$metadata$ = {
    simpleName: 'Annexe1',
    kind: 'object',
    interfaces: []
  };
  var Annexe1_instance;
  function Annexe1_getInstance() {
    if (Annexe1_instance == null)
      new Annexe1();
    return Annexe1_instance;
  }
  function FicheCee() {
    FicheCee_instance = this;
  }
  FicheCee.$metadata$ = {
    simpleName: 'FicheCee',
    kind: 'object',
    interfaces: []
  };
  var FicheCee_instance;
  function FicheCee_getInstance() {
    if (FicheCee_instance == null)
      new FicheCee();
    return FicheCee_instance;
  }
  function DossierCee() {
    DossierCee_instance = this;
  }
  DossierCee.$metadata$ = {
    simpleName: 'DossierCee',
    kind: 'object',
    interfaces: []
  };
  var DossierCee_instance;
  function DossierCee_getInstance() {
    if (DossierCee_instance == null)
      new DossierCee();
    return DossierCee_instance;
  }
  function DeclarationHonneur() {
    DeclarationHonneur_instance = this;
  }
  DeclarationHonneur.$metadata$ = {
    simpleName: 'DeclarationHonneur',
    kind: 'object',
    interfaces: []
  };
  var DeclarationHonneur_instance;
  function DeclarationHonneur_getInstance() {
    if (DeclarationHonneur_instance == null)
      new DeclarationHonneur();
    return DeclarationHonneur_instance;
  }
  function CerfaCode() {
    CerfaCode_instance = this;
  }
  CerfaCode.$metadata$ = {
    simpleName: 'CerfaCode',
    kind: 'object',
    interfaces: []
  };
  var CerfaCode_instance;
  function CerfaCode_getInstance() {
    if (CerfaCode_instance == null)
      new CerfaCode();
    return CerfaCode_instance;
  }
  function DateTravaux() {
    DateTravaux_instance = this;
    InformationConceptBase.call(this, 'dateTravaux', 'Date Travaux', XSDDate_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Date de travaux', null);
  }
  DateTravaux.$metadata$ = {
    simpleName: 'DateTravaux',
    kind: 'object',
    interfaces: []
  };
  var DateTravaux_instance;
  function DateTravaux_getInstance() {
    if (DateTravaux_instance == null)
      new DateTravaux();
    return DateTravaux_instance;
  }
  function DatePrecedentsTravaux() {
    DatePrecedentsTravaux_instance = this;
    InformationConceptBase.call(this, 'datePrecedentsTravaux', 'Date Pr\xE9c\xE9dents Travaux', XSDDate_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Date des pr\xE9c\xE9dents travaux', null);
  }
  DatePrecedentsTravaux.$metadata$ = {
    simpleName: 'DatePrecedentsTravaux',
    kind: 'object',
    interfaces: []
  };
  var DatePrecedentsTravaux_instance;
  function DatePrecedentsTravaux_getInstance() {
    if (DatePrecedentsTravaux_instance == null)
      new DatePrecedentsTravaux();
    return DatePrecedentsTravaux_instance;
  }
  function DateDevis() {
    DateDevis_instance = this;
    InformationConceptBase.call(this, 'dateDevis', 'Date Devis', XSDDate_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Date de devis', null);
  }
  DateDevis.$metadata$ = {
    simpleName: 'DateDevis',
    kind: 'object',
    interfaces: []
  };
  var DateDevis_instance;
  function DateDevis_getInstance() {
    if (DateDevis_instance == null)
      new DateDevis();
    return DateDevis_instance;
  }
  function CertificatProfessionnel() {
    CertificatProfessionnel_instance = this;
    var tmp0_specifiesEvidenceType = listOf_0(CertificatCerfa_getInstance());
    EvidenceTypeListBase.call(this, 'CertificatProfessionnel', 'CertificatProfessionnel', 'Certificat Professionnel', tmp0_specifiesEvidenceType);
  }
  CertificatProfessionnel.$metadata$ = {
    simpleName: 'CertificatProfessionnel',
    kind: 'object',
    interfaces: []
  };
  var CertificatProfessionnel_instance;
  function CertificatProfessionnel_getInstance() {
    if (CertificatProfessionnel_instance == null)
      new CertificatProfessionnel();
    return CertificatProfessionnel_instance;
  }
  function CertificatCerfa() {
    CertificatCerfa_instance = this;
    var tmp = CerfaCode_getInstance();
    var tmp_0 = PeriodOfTime_init_$Create$('10 ans', null, null, 6, null);
    EvidenceTypeBase_init_$Init$('CERFA-2321122', 'Certificat Cerfat', tmp, tmp_0, null, 16, null, this);
  }
  CertificatCerfa.$metadata$ = {
    simpleName: 'CertificatCerfa',
    kind: 'object',
    interfaces: []
  };
  var CertificatCerfa_instance;
  function CertificatCerfa_getInstance() {
    if (CertificatCerfa_instance == null)
      new CertificatCerfa();
    return CertificatCerfa_instance;
  }
  function SecteurApplication(requirements) {
    var tmp0_type = SecteurActivite_getInstance();
    var tmp1_hasRequirement = asList(requirements);
    Criterion_init_$Init$("Le secteur d'application de la fiche.", 'secteurApplication', 'Secteur d\u2019application', tmp0_type, null, null, null, null, null, tmp1_hasRequirement, null, 1520, null, this);
  }
  SecteurApplication.$metadata$ = {
    simpleName: 'SecteurApplication',
    kind: 'class',
    interfaces: []
  };
  function Denomination_0(description, requirements) {
    var tmp0_type = SecteurActivite_getInstance();
    var tmp1_hasRequirement = asList(requirements);
    Criterion_init_$Init$(description, 'denomination', 'D\xE9nomination', tmp0_type, null, null, null, null, null, tmp1_hasRequirement, null, 1520, null, this);
  }
  Denomination_0.$metadata$ = {
    simpleName: 'Denomination',
    kind: 'class',
    interfaces: []
  };
  function ConditionsDelivranceCertificats_0(requirements) {
    var tmp0_type = ConditionsDelivranceCertificats_getInstance();
    var tmp1_hasRequirement = asList(requirements);
    Criterion_init_$Init$('La liste des crit\xE8res \xE0 valider', 'conditionsDelivranceCertificats', 'Conditions pour la d\xE9livrance de certificats', tmp0_type, null, null, null, null, null, tmp1_hasRequirement, null, 1520, null, this);
  }
  ConditionsDelivranceCertificats_0.$metadata$ = {
    simpleName: 'ConditionsDelivranceCertificats',
    kind: 'class',
    interfaces: []
  };
  function DureeVieConventionnelle_0(requirements) {
    var tmp1_description = trimIndent("\n        Le montant de certificats d'\xE9conomies d'\xE9nergie, \xE0 attribuer suite \xE0 la r\xE9alisation d'une op\xE9ration standardis\xE9e d'\xE9conomies \n        d'\xE9nergie, figure au point 5 des fiches. Ce montant d\xE9pend de la dur\xE9e de vie conventionnelle du produit en question mentionn\xE9e\n        quant \xE0 elle au point 4. Ainsi, le produit est suppos\xE9 \xEAtre d\xE9tenu par le b\xE9n\xE9ficiaire durant toute sa dur\xE9e de vie conventionnelle \n        Par cons\xE9quent, les CEE ne peuvent \xEAtre d\xE9livr\xE9s \xE0 un m\xEAme b\xE9n\xE9ficiaire qui renouvelle une op\xE9ration d'\xE9conomies d'\xE9nergie \n        ayant d\xE9j\xE0 fait l'objet d'une d\xE9livrance de CEE dans les m\xEAmes conditions, durant la dur\xE9e de vie conventionnelle de l'op\xE9ration.\n    ");
    var tmp2_type = DureeVieConventionnelle_getInstance();
    var tmp3_hasRequirement = plus(asList(requirements), AucunPrecedentDossierPourMemeOperationEtConditions_getInstance());
    var tmp0_evidenceTypeClassification = DossierCee_getInstance();
    var tmp4_hasEvidenceTypeList = listOf_0(new EvidenceTypeListBase('Pr\xE9c\xE9dent dossier CEE pour la m\xEAme op\xE9ration et dans les m\xEAmes conditions', 'precedentDossierCee', 'Pr\xE9c\xE9dent dossier CEE', listOf_0(EvidenceTypeBase_init_$Create$('dossierCee', 'Pr\xE9c\xE9dent dossier CEE', tmp0_evidenceTypeClassification, null, null, 24, null))));
    PartialRequirement_init_$Init$(tmp1_description, 'dureeVieConventionnelle', 'Dur\xE9e de vie conventionnelle', tmp2_type, 1, null, tmp3_hasRequirement, tmp4_hasEvidenceTypeList, 32, null, this);
  }
  DureeVieConventionnelle_0.$metadata$ = {
    simpleName: 'DureeVieConventionnelle',
    kind: 'class',
    interfaces: []
  };
  function AucunPrecedentDossierPourMemeOperationEtConditions() {
    AucunPrecedentDossierPourMemeOperationEtConditions_instance = this;
    var tmp = DureeVieConventionnelle_getInstance();
    var tmp0_evidenceTypeClassification = DeclarationHonneur_getInstance();
    InformationRequirement_init_$Init$("Le b\xE9n\xE9riciaire n'a jamais b\xE9n\xE9fici\xE9 de cr\xE9dits CEE pour la m\xEAme op\xE9ration et dans les m\xEAme conditions", 'aucunPrecedentDossierPourMemeOperationEtConditions', 'Aucun pr\xE9c\xE9dent dossier pour meme operation et conditions', tmp, null, null, listOf_0(new EvidenceTypeListBase("D\xE9clare sur l'honneur ne jamais avoir b\xE9n\xE9fici\xE9 de cr\xE9dits CEE avec la m\xEAme fiche et dans les m\xEAmes conditions", 'declarationHonneurDureeVieConventionnelle', 'Declaration honneur dur\xE9e vie conventionnelle', listOf_0(EvidenceTypeBase_init_$Create$('declarationHonneurDureeVieConventionnelle', 'D\xE9claration honneur dur\xE9e vie conventionnelle', tmp0_evidenceTypeClassification, null, null, 24, null)))), 48, null, this);
  }
  AucunPrecedentDossierPourMemeOperationEtConditions.$metadata$ = {
    simpleName: 'AucunPrecedentDossierPourMemeOperationEtConditions',
    kind: 'object',
    interfaces: []
  };
  var AucunPrecedentDossierPourMemeOperationEtConditions_instance;
  function AucunPrecedentDossierPourMemeOperationEtConditions_getInstance() {
    if (AucunPrecedentDossierPourMemeOperationEtConditions_instance == null)
      new AucunPrecedentDossierPourMemeOperationEtConditions();
    return AucunPrecedentDossierPourMemeOperationEtConditions_instance;
  }
  function MontantCertificatsCumac_0(requirements) {
    var tmp0_type = MontantCertificatsCumac_getInstance();
    var tmp1_hasRequirement = asList(requirements);
    Criterion_init_$Init$("Montant en kWh/W en fonction du nombre de types dispositif de gestion de l'\xE9clairage", 'montantCertificatsCumac', 'Montant de certificats en kWh cumac', tmp0_type, null, null, null, null, null, tmp1_hasRequirement, null, 1520, null, this);
  }
  MontantCertificatsCumac_0.$metadata$ = {
    simpleName: 'MontantCertificatsCumac',
    kind: 'class',
    interfaces: []
  };
  function EstProfessionnelInformationRequirement() {
    EstProfessionnelInformationRequirement_instance = this;
    var tmp = ConditionsDelivranceCertificats_getInstance();
    InformationRequirement_init_$Init$('La mise en place est r\xE9alis\xE9e par un professionnel.', 'estProfessionnel', 'CertificatProfessionel', tmp, null, null, listOf_0(CertificatProfessionnel_getInstance()), 48, null, this);
  }
  EstProfessionnelInformationRequirement.$metadata$ = {
    simpleName: 'EstProfessionnelInformationRequirement',
    kind: 'object',
    interfaces: []
  };
  var EstProfessionnelInformationRequirement_instance;
  function EstProfessionnelInformationRequirement_getInstance() {
    if (EstProfessionnelInformationRequirement_instance == null)
      new EstProfessionnelInformationRequirement();
    return EstProfessionnelInformationRequirement_instance;
  }
  function KWhCumac() {
    KWhCumac_instance = this;
    CUnit.call(this, 'kWhCumac', 'Kilowatt-Heure CUMAC', 'kilowatt-heures cumul\xE9s et actualis\xE9s', 'kWh Cumac', CUnitType_number_getInstance());
  }
  KWhCumac.$metadata$ = {
    simpleName: 'KWhCumac',
    kind: 'object',
    interfaces: []
  };
  var KWhCumac_instance;
  function KWhCumac_getInstance() {
    if (KWhCumac_instance == null)
      new KWhCumac();
    return KWhCumac_instance;
  }
  var BAT_EN_101;
  function _no_name_provided__28() {
  }
  _no_name_provided__28.prototype.invoke_oywfzr_k$ = function ($this$criterion) {
    $this$criterion._set_identifier__qlpr75_k$('BAT-EN-101');
    $this$criterion._set_name__qlpr75_k$('Isolation de combles ou de toitures');
    $this$criterion._set_type__erbbi9_k$(FicheCee_getInstance());
    $this$criterion.unaryPlus_9n4va8_k$(new SecteurApplication([]));
    $this$criterion.unaryPlus_9n4va8_k$(new Denomination_0("Mise en place d'une isolation thermique en plancher de combles perdus ou en rampant de toiture", []));
    $this$criterion.unaryPlus_9n4va8_k$(new ConditionsDelivranceCertificats_0([EstProfessionnelInformationRequirement_getInstance(), ResistanceThermiqueMinimale_getInstance(), BesoinPareVapeur_getInstance(), DateTravauxRegles_getInstance()]));
    $this$criterion.unaryPlus_9n4va8_k$(new DureeVieConventionnelle_0([DatePrecedentsTravauxContrainte_getInstance()]));
    $this$criterion.unaryPlus_9n4va8_k$(new MontantCertificatsCumac_0([CalculCertificatsCumac_getInstance()]));
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = emptyList();
      break $l$block;
    }
    $this$criterion._set_hasEvidenceTypeList__i4z9ai_k$(tmp$ret$0);
  };
  _no_name_provided__28.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_oywfzr_k$(p1 instanceof CriterionBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_25() {
    var i = new _no_name_provided__28();
    return function (p1) {
      i.invoke_oywfzr_k$(p1);
      return Unit_getInstance();
    };
  }
  function ResistanceThermique() {
    ResistanceThermique_instance = this;
    InformationConceptBase.call(this, 'resistanceThermique', 'R\xE9sistance Thermique', SquareMeterKelvinPerWatt_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'R\xE9sistance Thermique', null);
  }
  ResistanceThermique.$metadata$ = {
    simpleName: 'ResistanceThermique',
    kind: 'object',
    interfaces: []
  };
  var ResistanceThermique_instance;
  function ResistanceThermique_getInstance() {
    if (ResistanceThermique_instance == null)
      new ResistanceThermique();
    return ResistanceThermique_instance;
  }
  function DatePrecedentsTravauxMemeBatiment() {
    DatePrecedentsTravauxMemeBatiment_instance = this;
    InformationConceptBase.call(this, 'datePrecedentsTravauxMemeBatiment', 'R\xE9sistance Thermique', XSDDate_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'R\xE9sistance Thermique', null);
  }
  DatePrecedentsTravauxMemeBatiment.$metadata$ = {
    simpleName: 'DatePrecedentsTravauxMemeBatiment',
    kind: 'object',
    interfaces: []
  };
  var DatePrecedentsTravauxMemeBatiment_instance;
  function DatePrecedentsTravauxMemeBatiment_getInstance() {
    if (DatePrecedentsTravauxMemeBatiment_instance == null)
      new DatePrecedentsTravauxMemeBatiment();
    return DatePrecedentsTravauxMemeBatiment_instance;
  }
  function SurfaceIsolant() {
    SurfaceIsolant_instance = this;
    InformationConceptBase.call(this, 'surfaceIsolant', 'Surface Isolant', SquareMeter_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Surface Isolant', null);
  }
  SurfaceIsolant.$metadata$ = {
    simpleName: 'SurfaceIsolant',
    kind: 'object',
    interfaces: []
  };
  var SurfaceIsolant_instance;
  function SurfaceIsolant_getInstance() {
    if (SurfaceIsolant_instance == null)
      new SurfaceIsolant();
    return SurfaceIsolant_instance;
  }
  function CumacPerM2Isolant() {
    CumacPerM2Isolant_instance = this;
    InformationConceptBase.call(this, 'cumacPerM2Isolant', "Montant en kWh cumac par m2 d'isolant", kWhCumacPerSquareMeter_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Montant en kWh/m2 en fonction de la zone climatique', '' + '{H1: 25, H2: 30, H3: 34}.get(${' + NombreTypesDispositifGestionEclairage_getInstance()._get_identifier__0_k$() + '})');
  }
  CumacPerM2Isolant.$metadata$ = {
    simpleName: 'CumacPerM2Isolant',
    kind: 'object',
    interfaces: []
  };
  var CumacPerM2Isolant_instance;
  function CumacPerM2Isolant_getInstance() {
    if (CumacPerM2Isolant_instance == null)
      new CumacPerM2Isolant();
    return CumacPerM2Isolant_instance;
  }
  function FacteurCorrectif() {
    FacteurCorrectif_instance = this;
    InformationConceptBase.call(this, 'facteurCorrectif', 'Facteur correctif', XSDDouble_getInstance(), ConditionsDelivranceCertificats_getInstance(), "Facteur correctif en fonction du secteur d'activit\xE9", trimIndent('' + "\n        {\n            Bureaux: 0.6,\n            Enseignement: 0.6,\n            Commerces: 0.6,\n            'H\xF4tellerie/Restauration': 0.7,\n            Sant\xE9: 1.2,\n            Autres: 0.6\n        }.get($" + SecteurActivite_getInstance_0()._get_identifier__0_k$() + ')\n    '));
  }
  FacteurCorrectif.$metadata$ = {
    simpleName: 'FacteurCorrectif',
    kind: 'object',
    interfaces: []
  };
  var FacteurCorrectif_instance;
  function FacteurCorrectif_getInstance() {
    if (FacteurCorrectif_instance == null)
      new FacteurCorrectif();
    return FacteurCorrectif_instance;
  }
  function SecteurActivite_0() {
    SecteurActivite_instance_0 = this;
    InformationConceptBase.call(this, 'secteurActivite', "Secteur d'activit\xE9", XSDString_getInstance(), ConditionsDelivranceCertificats_getInstance(), "Secteur d'activit\xE9", "in ['Bureaux', 'H\xF4tellerie/Restauration', 'Sant\xE9', 'Enseignement', 'Commerces', 'Autres']");
  }
  SecteurActivite_0.$metadata$ = {
    simpleName: 'SecteurActivite',
    kind: 'object',
    interfaces: []
  };
  var SecteurActivite_instance_0;
  function SecteurActivite_getInstance_0() {
    if (SecteurActivite_instance_0 == null)
      new SecteurActivite_0();
    return SecteurActivite_instance_0;
  }
  function ResistanceThermiqueMinimale() {
    ResistanceThermiqueMinimale_instance = this;
    var tmp = '' + ResistanceThermique_getInstance()._get_identifier__0_k$() + ' >= 6';
    var tmp_0 = trimIndent("\n        La r\xE9sistance thermique R de l'isolation install\xE9e est sup\xE9rieure ou \xE9gale \xE0 6 m\xB2.K/W \n        en plancher de comble perdu ou en rampant de toiture.\n        La r\xE9sistance thermique est \xE9valu\xE9e selon la norme NF EN 12664, la norme NF EN 12667 ou la norme NF EN 12939 \n        pour les isolants non r\xE9fl\xE9chissants et selon la norme NF EN 16012+A1 pour les isolants r\xE9fl\xE9chissants.\n    ");
    var tmp_1 = ConditionsDelivranceCertificats_getInstance();
    var tmp_2 = listOf_0(ResistanceThermique_getInstance());
    Constraint_init_$Init$(tmp, 'resistanceThermiqueMinimale', tmp_0, tmp_1, tmp_2, null, null, 96, null, this);
  }
  ResistanceThermiqueMinimale.$metadata$ = {
    simpleName: 'ResistanceThermiqueMinimale',
    kind: 'object',
    interfaces: []
  };
  var ResistanceThermiqueMinimale_instance;
  function ResistanceThermiqueMinimale_getInstance() {
    if (ResistanceThermiqueMinimale_instance == null)
      new ResistanceThermiqueMinimale();
    return ResistanceThermiqueMinimale_instance;
  }
  function BesoinPareVapeur() {
    BesoinPareVapeur_instance = this;
    var tmp = trimIndent("\n        L'isolation thermique r\xE9alis\xE9e a-t-elle n\xE9cessit\xE9 la mise en place d'un pare-vapeur ou tout autre dispositif \n        permettant d'atteindre un r\xE9suiltat \xE9quivalent\n    ");
    var tmp_0 = trimIndent("\n        Un pare-vapeur ou tout autre dispositif permettant d'atteindre un r\xE9sultat \xE9quivalent est mise en place, lorsqu'il est n\xE9cessaire \n        de prot\xE9ger les mat\xE9riaux d'isolation thermique contre les transferts d'humidit\xE9 pour garantir la performance de l'ouvrage.\n    ");
    var tmp_1 = ConditionsDelivranceCertificats_getInstance();
    InformationRequirement_init_$Init$(tmp, 'resistanceThermiqueMinimale', tmp_0, tmp_1, null, null, null, 112, null, this);
  }
  BesoinPareVapeur.$metadata$ = {
    simpleName: 'BesoinPareVapeur',
    kind: 'object',
    interfaces: []
  };
  var BesoinPareVapeur_instance;
  function BesoinPareVapeur_getInstance() {
    if (BesoinPareVapeur_instance == null)
      new BesoinPareVapeur();
    return BesoinPareVapeur_instance;
  }
  function DateTravauxRegles() {
    DateTravauxRegles_instance = this;
    var tmp = trimIndent("\n        Un d\xE9lai minimal de sept jours francs est respect\xE9 entre la date d'acceptation du devis \n        et la date de d\xE9but des travaux (pose de l'isolant).\n        Une op\xE9ration ne peut \xEAtre engag\xE9e moins de douze mois suivant \n        l'engagement d'une op\xE9ration portant sur un m\xEAme b\xE2timent et un m\xEAme b\xE9n\xE9ficiaire.\n    ");
    var tmp_0 = ConditionsDelivranceCertificats_getInstance();
    var tmp_1 = listOf([DateDevisContrainte_getInstance(), DatePrecedentsTravauxMemeBatimentContrainte_getInstance()]);
    Criterion_init_$Init$('Contraintes sur la date des travaux', 'dateTravauxRegles', tmp, tmp_0, null, null, null, null, null, tmp_1, null, 1520, null, this);
  }
  DateTravauxRegles.$metadata$ = {
    simpleName: 'DateTravauxRegles',
    kind: 'object',
    interfaces: []
  };
  var DateTravauxRegles_instance;
  function DateTravauxRegles_getInstance() {
    if (DateTravauxRegles_instance == null)
      new DateTravauxRegles();
    return DateTravauxRegles_instance;
  }
  function DateDevisContrainte() {
    DateDevisContrainte_instance = this;
    var tmp = '' + DateTravaux_getInstance()._get_identifier__0_k$() + ' - ' + DateDevis_getInstance()._get_identifier__0_k$() + ' >= 7 days';
    var tmp_0 = trimIndent("\n        Un d\xE9lai minimal de sept jours francs est respect\xE9 entre la date d'acceptation du devis \n        et la date de d\xE9but des travaux (pose de l'isolant).\n    ");
    var tmp_1 = ConditionsDelivranceCertificats_getInstance();
    var tmp_2 = listOf([DateDevis_getInstance(), DateTravaux_getInstance()]);
    Constraint_init_$Init$(tmp, 'dateDevisContrainte', tmp_0, tmp_1, tmp_2, null, null, 96, null, this);
  }
  DateDevisContrainte.$metadata$ = {
    simpleName: 'DateDevisContrainte',
    kind: 'object',
    interfaces: []
  };
  var DateDevisContrainte_instance;
  function DateDevisContrainte_getInstance() {
    if (DateDevisContrainte_instance == null)
      new DateDevisContrainte();
    return DateDevisContrainte_instance;
  }
  function DatePrecedentsTravauxMemeBatimentContrainte() {
    DatePrecedentsTravauxMemeBatimentContrainte_instance = this;
    var tmp = '' + DateTravaux_getInstance()._get_identifier__0_k$() + ' - ' + DatePrecedentsTravauxMemeBatiment_getInstance()._get_identifier__0_k$() + ' >= 7 days';
    var tmp_0 = trimIndent("\n        Une op\xE9ration ne peut \xEAtre engag\xE9e moins de douze mois suivant \n        l'engagement d'une op\xE9ration portant sur un m\xEAme b\xE2timent et un m\xEAme b\xE9n\xE9ficiaire.\n    ");
    var tmp_1 = ConditionsDelivranceCertificats_getInstance();
    var tmp_2 = listOf([DatePrecedentsTravauxMemeBatiment_getInstance(), DateTravaux_getInstance()]);
    Constraint_init_$Init$(tmp, 'datePrecedentsTravauxMemeBatimentContrainte', tmp_0, tmp_1, tmp_2, null, null, 96, null, this);
  }
  DatePrecedentsTravauxMemeBatimentContrainte.$metadata$ = {
    simpleName: 'DatePrecedentsTravauxMemeBatimentContrainte',
    kind: 'object',
    interfaces: []
  };
  var DatePrecedentsTravauxMemeBatimentContrainte_instance;
  function DatePrecedentsTravauxMemeBatimentContrainte_getInstance() {
    if (DatePrecedentsTravauxMemeBatimentContrainte_instance == null)
      new DatePrecedentsTravauxMemeBatimentContrainte();
    return DatePrecedentsTravauxMemeBatimentContrainte_instance;
  }
  function DatePrecedentsTravauxContrainte() {
    DatePrecedentsTravauxContrainte_instance = this;
    var tmp = '' + DateTravaux_getInstance()._get_identifier__0_k$() + ' - ' + DatePrecedentsTravaux_getInstance()._get_identifier__0_k$() + ' >= 30 ans';
    var tmp_0 = DureeVieConventionnelle_getInstance();
    var tmp_1 = listOf([DureeVieConventionnelleLuminaire_getInstance(), DateTravaux_getInstance()]);
    Constraint_init_$Init$(tmp, 'datePrecedentsTravauxContrainte', 'Date des pr\xE9c\xE9dents travaux', tmp_0, tmp_1, null, null, 96, null, this);
  }
  DatePrecedentsTravauxContrainte.$metadata$ = {
    simpleName: 'DatePrecedentsTravauxContrainte',
    kind: 'object',
    interfaces: []
  };
  var DatePrecedentsTravauxContrainte_instance;
  function DatePrecedentsTravauxContrainte_getInstance() {
    if (DatePrecedentsTravauxContrainte_instance == null)
      new DatePrecedentsTravauxContrainte();
    return DatePrecedentsTravauxContrainte_instance;
  }
  function CalculCertificatsCumac() {
    CalculCertificatsCumac_instance = this;
    var tmp = '' + CumacPerM2Isolant_getInstance()._get_identifier__0_k$() + ' * ' + FacteurCorrectif_getInstance()._get_identifier__0_k$() + ' * ' + SurfaceIsolant_getInstance()._get_identifier__0_k$() + ' = ' + Cumac_getInstance()._get_identifier__0_k$();
    var tmp_0 = MontantCertificatsCumac_getInstance();
    var tmp_1 = listOf([Cumac_getInstance(), CumacPerM2Isolant_getInstance(), FacteurCorrectif_getInstance(), SurfaceIsolant_getInstance()]);
    Constraint_init_$Init$(tmp, 'calculCertificatsCumac', 'Montant de certificats en kWh cumac', tmp_0, tmp_1, null, null, 96, null, this);
  }
  CalculCertificatsCumac.$metadata$ = {
    simpleName: 'CalculCertificatsCumac',
    kind: 'object',
    interfaces: []
  };
  var CalculCertificatsCumac_instance;
  function CalculCertificatsCumac_getInstance() {
    if (CalculCertificatsCumac_instance == null)
      new CalculCertificatsCumac();
    return CalculCertificatsCumac_instance;
  }
  function SquareMeter() {
    SquareMeter_instance = this;
    CUnit.call(this, 'squareMeter', 'M\xE8tre carr\xE9', 'M\xE8tre carr\xE9', 'm\xB2', CUnitType_number_getInstance());
  }
  SquareMeter.$metadata$ = {
    simpleName: 'SquareMeter',
    kind: 'object',
    interfaces: []
  };
  var SquareMeter_instance;
  function SquareMeter_getInstance() {
    if (SquareMeter_instance == null)
      new SquareMeter();
    return SquareMeter_instance;
  }
  function SquareMeterKelvinPerWatt() {
    SquareMeterKelvinPerWatt_instance = this;
    CUnit.call(this, 'squareMeterKelvinPerWatt', 'M\xE8tre carr\xE9 kelvin par watt', 'M\xE8tre carr\xE9 kelvin par watt', 'm\xB2K/W', CUnitType_number_getInstance());
  }
  SquareMeterKelvinPerWatt.$metadata$ = {
    simpleName: 'SquareMeterKelvinPerWatt',
    kind: 'object',
    interfaces: []
  };
  var SquareMeterKelvinPerWatt_instance;
  function SquareMeterKelvinPerWatt_getInstance() {
    if (SquareMeterKelvinPerWatt_instance == null)
      new SquareMeterKelvinPerWatt();
    return SquareMeterKelvinPerWatt_instance;
  }
  function kWhCumacPerSquareMeter() {
    kWhCumacPerSquareMeter_instance = this;
    CUnit.call(this, 'kwhPerSquareMeter', 'Killowatt-heure Cumac par m\xE8tre carr\xE9', 'Killowatt-heure Cumac par m\xE8tre carr\xE9', 'kWh Cumac/m\xB2', CUnitType_number_getInstance());
  }
  kWhCumacPerSquareMeter.$metadata$ = {
    simpleName: 'kWhCumacPerSquareMeter',
    kind: 'object',
    interfaces: []
  };
  var kWhCumacPerSquareMeter_instance;
  function kWhCumacPerSquareMeter_getInstance() {
    if (kWhCumacPerSquareMeter_instance == null)
      new kWhCumacPerSquareMeter();
    return kWhCumacPerSquareMeter_instance;
  }
  function Etude() {
    Etude_instance = this;
  }
  Etude.$metadata$ = {
    simpleName: 'Etude',
    kind: 'object',
    interfaces: []
  };
  var Etude_instance;
  function Etude_getInstance() {
    if (Etude_instance == null)
      new Etude();
    return Etude_instance;
  }
  function SecteurActivite_1() {
    SecteurActivite_instance_1 = this;
    InformationConceptBase.call(this, 'secteurActivite', "Secteur d'activit\xE9", XSDString_getInstance(), SecteurActivite_getInstance(), "Secteur d'activit\xE9 d'une entit\xE9", null);
  }
  SecteurActivite_1.$metadata$ = {
    simpleName: 'SecteurActivite',
    kind: 'object',
    interfaces: []
  };
  var SecteurActivite_instance_1;
  function SecteurActivite_getInstance_1() {
    if (SecteurActivite_instance_1 == null)
      new SecteurActivite_1();
    return SecteurActivite_instance_1;
  }
  function UsageLuminaire() {
    UsageLuminaire_instance = this;
    InformationConceptBase.call(this, 'usageLuminaire', 'Usage Luminaire', XSDString_getInstance(), ConditionsDelivranceCertificats_getInstance(), "Type d'utilisation d'un luminaire", null);
  }
  UsageLuminaire.$metadata$ = {
    simpleName: 'UsageLuminaire',
    kind: 'object',
    interfaces: []
  };
  var UsageLuminaire_instance;
  function UsageLuminaire_getInstance() {
    if (UsageLuminaire_instance == null)
      new UsageLuminaire();
    return UsageLuminaire_instance;
  }
  function DureeDeVieLuminaire() {
    DureeDeVieLuminaire_instance = this;
    InformationConceptBase.call(this, 'dureeVieLuminaire', 'Dur\xE9e de vie luminaire', Hour_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Dur\xE9e de vie calcul\xE9e \xE0 25\xB0C avec une chute du flux lumineux <= 20%', null);
  }
  DureeDeVieLuminaire.$metadata$ = {
    simpleName: 'DureeDeVieLuminaire',
    kind: 'object',
    interfaces: []
  };
  var DureeDeVieLuminaire_instance;
  function DureeDeVieLuminaire_getInstance() {
    if (DureeDeVieLuminaire_instance == null)
      new DureeDeVieLuminaire();
    return DureeDeVieLuminaire_instance;
  }
  function EfficaciteLumineuse() {
    EfficaciteLumineuse_instance = this;
    InformationConceptBase.call(this, 'efficaciteLumineuse', 'Efficacit\xE9 lumineuse', LumenPerW_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Flux lumineux total sortant du luminaire divis\xE9 par la puissance totale du luminaire auxiliaire d\u2019alimentation compris', null);
  }
  EfficaciteLumineuse.$metadata$ = {
    simpleName: 'EfficaciteLumineuse',
    kind: 'object',
    interfaces: []
  };
  var EfficaciteLumineuse_instance;
  function EfficaciteLumineuse_getInstance() {
    if (EfficaciteLumineuse_instance == null)
      new EfficaciteLumineuse();
    return EfficaciteLumineuse_instance;
  }
  function FacteurPuissance() {
    FacteurPuissance_instance = this;
    InformationConceptBase.call(this, 'facteurPuissance', 'Facteur de puissance', Ratio_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Facteur de puissance', null);
  }
  FacteurPuissance.$metadata$ = {
    simpleName: 'FacteurPuissance',
    kind: 'object',
    interfaces: []
  };
  var FacteurPuissance_instance;
  function FacteurPuissance_getInstance() {
    if (FacteurPuissance_instance == null)
      new FacteurPuissance();
    return FacteurPuissance_instance;
  }
  function TauxDistorsionHarmonique() {
    TauxDistorsionHarmonique_instance = this;
    InformationConceptBase.call(this, 'tauxDistorsionHarmonique', 'Taux de distorsion harmonique', Variation_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Taux de distortion harmonique', null);
  }
  TauxDistorsionHarmonique.$metadata$ = {
    simpleName: 'TauxDistorsionHarmonique',
    kind: 'object',
    interfaces: []
  };
  var TauxDistorsionHarmonique_instance;
  function TauxDistorsionHarmonique_getInstance() {
    if (TauxDistorsionHarmonique_instance == null)
      new TauxDistorsionHarmonique();
    return TauxDistorsionHarmonique_instance;
  }
  function Norme(identifier) {
    InformationConceptBase.call(this, identifier, 'Norme', XSDString_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Identifie une norme', null);
  }
  Norme.$metadata$ = {
    simpleName: 'Norme',
    kind: 'class',
    interfaces: []
  };
  function TauxDistorsionHarmoniqueNormeCalcul() {
    TauxDistorsionHarmoniqueNormeCalcul_instance = this;
    Norme.call(this, 'tauxDistorsionHarmoniqueNormeCalcul');
  }
  TauxDistorsionHarmoniqueNormeCalcul.$metadata$ = {
    simpleName: 'TauxDistorsionHarmoniqueNormeCalcul',
    kind: 'object',
    interfaces: []
  };
  var TauxDistorsionHarmoniqueNormeCalcul_instance;
  function TauxDistorsionHarmoniqueNormeCalcul_getInstance() {
    if (TauxDistorsionHarmoniqueNormeCalcul_instance == null)
      new TauxDistorsionHarmoniqueNormeCalcul();
    return TauxDistorsionHarmoniqueNormeCalcul_instance;
  }
  function NombreTypesDispositifGestionEclairage() {
    NombreTypesDispositifGestionEclairage_instance = this;
    InformationConceptBase.call(this, 'nombreTypesDispositifGestionEclairage', 'Nombre Types Dispositif Gestion Eclairage', XSDInt_getInstance(), ConditionsDelivranceCertificats_getInstance(), "Nombre de types de dispositifs de gestion de l'\xE9clairage", null);
  }
  NombreTypesDispositifGestionEclairage.$metadata$ = {
    simpleName: 'NombreTypesDispositifGestionEclairage',
    kind: 'object',
    interfaces: []
  };
  var NombreTypesDispositifGestionEclairage_instance;
  function NombreTypesDispositifGestionEclairage_getInstance() {
    if (NombreTypesDispositifGestionEclairage_instance == null)
      new NombreTypesDispositifGestionEclairage();
    return NombreTypesDispositifGestionEclairage_instance;
  }
  function DureeVieConventionnelleLuminaire() {
    DureeVieConventionnelleLuminaire_instance = this;
    InformationConceptBase.call(this, 'dureeVieConventionnelleLuminaire', 'Dur\xE9e de vie conventionnelle Luminaire', Year_getInstance(), DureeVieConventionnelle_getInstance(), "Dur\xE9e de vie conventionnelle de luminaires en fonction du dispositif de gestion d'\xE9clairage", '' + '{0: 13, 1: 14, 2: 16}.get(${' + NombreTypesDispositifGestionEclairage_getInstance()._get_identifier__0_k$() + '})');
  }
  DureeVieConventionnelleLuminaire.$metadata$ = {
    simpleName: 'DureeVieConventionnelleLuminaire',
    kind: 'object',
    interfaces: []
  };
  var DureeVieConventionnelleLuminaire_instance;
  function DureeVieConventionnelleLuminaire_getInstance() {
    if (DureeVieConventionnelleLuminaire_instance == null)
      new DureeVieConventionnelleLuminaire();
    return DureeVieConventionnelleLuminaire_instance;
  }
  function CumacParWatt() {
    CumacParWatt_instance = this;
    InformationConceptBase.call(this, 'cumacParWatt', 'Montant en kWh par Watt', KWhCumacPerW_getInstance(), ConditionsDelivranceCertificats_getInstance(), "Montant en kWh/W en fonction du nombre de types dispositif de gestion de l'\xE9clairage", '' + '{0: 25, 1: 30, 2: 34}.get(${' + NombreTypesDispositifGestionEclairage_getInstance()._get_identifier__0_k$() + '})');
  }
  CumacParWatt.$metadata$ = {
    simpleName: 'CumacParWatt',
    kind: 'object',
    interfaces: []
  };
  var CumacParWatt_instance;
  function CumacParWatt_getInstance() {
    if (CumacParWatt_instance == null)
      new CumacParWatt();
    return CumacParWatt_instance;
  }
  function Puissance() {
    Puissance_instance = this;
    InformationConceptBase.call(this, 'puissance', 'Puissance', Watt_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'Puissance en Watt', null);
  }
  Puissance.$metadata$ = {
    simpleName: 'Puissance',
    kind: 'object',
    interfaces: []
  };
  var Puissance_instance;
  function Puissance_getInstance() {
    if (Puissance_instance == null)
      new Puissance();
    return Puissance_instance;
  }
  function Cumac() {
    Cumac_instance = this;
    InformationConceptBase.call(this, 'kWhCumac', 'kWh Cumac', KWhCumac_getInstance(), ConditionsDelivranceCertificats_getInstance(), 'kWh Cumac', null);
  }
  Cumac.$metadata$ = {
    simpleName: 'Cumac',
    kind: 'object',
    interfaces: []
  };
  var Cumac_instance;
  function Cumac_getInstance() {
    if (Cumac_instance == null)
      new Cumac();
    return Cumac_instance;
  }
  function EtudeDimensionnementEclairagePrealable() {
    EtudeDimensionnementEclairagePrealable_instance = this;
    var tmp0_name = trimIndent('\n        Le document justificatif sp\xE9cifique \xE0 l\u2019op\xE9ration est l\u2019\xE9tude de dimensionnement de l\u2019\xE9clairage pr\xE9alable \xE0 la mise \n        en place des luminaires \xE0 modules LED. \n    ');
    var tmp1_specifiesEvidenceType = listOf_0(EtudeDimensionnementEclairagePrealableDocument_getInstance());
    EvidenceTypeListBase.call(this, "\xC9tude de dimensionnement de l'\xE9clairage pr\xE9alable \xE0 la mise en place des luminaires", 'etudeDimensionnementEclairagePrealable', tmp0_name, tmp1_specifiesEvidenceType);
  }
  EtudeDimensionnementEclairagePrealable.$metadata$ = {
    simpleName: 'EtudeDimensionnementEclairagePrealable',
    kind: 'object',
    interfaces: []
  };
  var EtudeDimensionnementEclairagePrealable_instance;
  function EtudeDimensionnementEclairagePrealable_getInstance() {
    if (EtudeDimensionnementEclairagePrealable_instance == null)
      new EtudeDimensionnementEclairagePrealable();
    return EtudeDimensionnementEclairagePrealable_instance;
  }
  function EtudeDimensionnementEclairagePrealableDocument() {
    EtudeDimensionnementEclairagePrealableDocument_instance = this;
    var tmp = Etude_getInstance();
    EvidenceTypeBase_init_$Init$('etudeDimensionnementEclairagePrealableDoc', 'Etude pr\xE9alable dimensionnement \xE9clairage', tmp, null, null, 24, null, this);
  }
  EtudeDimensionnementEclairagePrealableDocument.$metadata$ = {
    simpleName: 'EtudeDimensionnementEclairagePrealableDocument',
    kind: 'object',
    interfaces: []
  };
  var EtudeDimensionnementEclairagePrealableDocument_instance;
  function EtudeDimensionnementEclairagePrealableDocument_getInstance() {
    if (EtudeDimensionnementEclairagePrealableDocument_instance == null)
      new EtudeDimensionnementEclairagePrealableDocument();
    return EtudeDimensionnementEclairagePrealableDocument_instance;
  }
  function Annexe1AvecDetailsEquipement() {
    Annexe1AvecDetailsEquipement_instance = this;
    var tmp0_name = trimIndent('\n        La preuve de r\xE9alisation de l\u2019op\xE9ration mentionne la mise en place de luminaires \xE0 modules LED, la quantit\xE9 \n        d\u2019\xE9quipements install\xE9s, leur puissance, leur dur\xE9e de vie calcul\xE9e \xE0 25\xB0C, leur chute de flux lumineux \xE0 l\u2019issue de \n        leur dur\xE9e de vie, leur efficacit\xE9 lumineuse, auxiliaire d\u2019alimentation compris, leur facteur de puissance, leur taux \n        de distorsion harmonique et lorsqu\u2019il est mis en place l\u2019installation d\u2019un dispositif de gestion de l\u2019\xE9clairage en \n        pr\xE9cisant s\u2019il s\u2019agit d\u2019une d\xE9tection de pr\xE9sence et/ou d\u2019un syst\xE8me de variation de lumi\xE8re tenant compte des \n        apports de lumi\xE8re du jour. \n    ');
    var tmp1_specifiesEvidenceType = listOf_0(Annexe1AvecDetailsEquipementDocument_getInstance());
    EvidenceTypeListBase.call(this, 'Annexe 1 avec d\xE9tails des caract\xE9ristiques des \xE9quipements install\xE9s', 'annexe1Detaillee', tmp0_name, tmp1_specifiesEvidenceType);
  }
  Annexe1AvecDetailsEquipement.$metadata$ = {
    simpleName: 'Annexe1AvecDetailsEquipement',
    kind: 'object',
    interfaces: []
  };
  var Annexe1AvecDetailsEquipement_instance;
  function Annexe1AvecDetailsEquipement_getInstance() {
    if (Annexe1AvecDetailsEquipement_instance == null)
      new Annexe1AvecDetailsEquipement();
    return Annexe1AvecDetailsEquipement_instance;
  }
  function Annexe1AvecDetailsEquipementDocument() {
    Annexe1AvecDetailsEquipementDocument_instance = this;
    var tmp = Annexe1_getInstance();
    EvidenceTypeBase_init_$Init$('annexe1DetailleeDoc', 'Annexe 1 avec d\xE9tails \xE9quipements', tmp, null, null, 24, null, this);
  }
  Annexe1AvecDetailsEquipementDocument.$metadata$ = {
    simpleName: 'Annexe1AvecDetailsEquipementDocument',
    kind: 'object',
    interfaces: []
  };
  var Annexe1AvecDetailsEquipementDocument_instance;
  function Annexe1AvecDetailsEquipementDocument_getInstance() {
    if (Annexe1AvecDetailsEquipementDocument_instance == null)
      new Annexe1AvecDetailsEquipementDocument();
    return Annexe1AvecDetailsEquipementDocument_instance;
  }
  function Annexe1AvecReferencesEquipement() {
    Annexe1AvecReferencesEquipement_instance = this;
    var tmp0_name = trimIndent("\n        A d\xE9faut, la preuve de r\xE9alisation de l\u2019op\xE9ration mentionne : \n        - la mise en place d\u2019un nombre donn\xE9 de luminaires, identifi\xE9s par leur marque et r\xE9f\xE9rence ; \n        - la puissance de ces luminaires ; \n        - les marque et r\xE9f\xE9rence du dispositif de gestion de l\u2019\xE9clairage lorsqu\u2019il est mis en place en pr\xE9cisant s\u2019il s\u2019agit \n        d\u2019une d\xE9tection de pr\xE9sence et/ou d\u2019un syst\xE8me de variation de lumi\xE8re tenant compte des apports de lumi\xE8re du \n        jour. \n        Elle est compl\xE9t\xE9e dans ce cas par un document issu du fabricant indiquant que les \xE9quipements de marque et \n        r\xE9f\xE9rence install\xE9s sont des luminaires \xE0 modules LED. Ce document pr\xE9cise la dur\xE9e de vie des luminaires \n        calcul\xE9e \xE0 25\xB0C, leur chute de flux lumineux \xE0 l\u2019issue de leur dur\xE9e de vie, leur efficacit\xE9 lumineuse, auxiliaire \n        d'alimentation compris, leur facteur de puissance et leur taux de distorsion harmonique selon la norme EN 61000- \n        3-2. \n    ");
    var tmp1_specifiesEvidenceType = listOf([Annexe1AvecReferencesEquipementDocument_getInstance(), Annexe1FicheConstructeur_getInstance()]);
    EvidenceTypeListBase.call(this, 'Annexe 1 avec marques et r\xE9f\xE9rences des \xE9quipements install\xE9s, compl\xE9t\xE9e par les fiches constructeur', 'annexe1References', tmp0_name, tmp1_specifiesEvidenceType);
  }
  Annexe1AvecReferencesEquipement.$metadata$ = {
    simpleName: 'Annexe1AvecReferencesEquipement',
    kind: 'object',
    interfaces: []
  };
  var Annexe1AvecReferencesEquipement_instance;
  function Annexe1AvecReferencesEquipement_getInstance() {
    if (Annexe1AvecReferencesEquipement_instance == null)
      new Annexe1AvecReferencesEquipement();
    return Annexe1AvecReferencesEquipement_instance;
  }
  function Annexe1AvecReferencesEquipementDocument() {
    Annexe1AvecReferencesEquipementDocument_instance = this;
    var tmp = Annexe1_getInstance();
    EvidenceTypeBase_init_$Init$('annexe1ReferencesDoc', 'Annexe 1 avec r\xE9f\xE9rences \xE9quipements', tmp, null, null, 24, null, this);
  }
  Annexe1AvecReferencesEquipementDocument.$metadata$ = {
    simpleName: 'Annexe1AvecReferencesEquipementDocument',
    kind: 'object',
    interfaces: []
  };
  var Annexe1AvecReferencesEquipementDocument_instance;
  function Annexe1AvecReferencesEquipementDocument_getInstance() {
    if (Annexe1AvecReferencesEquipementDocument_instance == null)
      new Annexe1AvecReferencesEquipementDocument();
    return Annexe1AvecReferencesEquipementDocument_instance;
  }
  function Annexe1FicheConstructeur() {
    Annexe1FicheConstructeur_instance = this;
    var tmp = Annexe1_getInstance();
    EvidenceTypeBase_init_$Init$('annexe1References', 'Fiches constructeur', tmp, null, null, 24, null, this);
  }
  Annexe1FicheConstructeur.$metadata$ = {
    simpleName: 'Annexe1FicheConstructeur',
    kind: 'object',
    interfaces: []
  };
  var Annexe1FicheConstructeur_instance;
  function Annexe1FicheConstructeur_getInstance() {
    if (Annexe1FicheConstructeur_instance == null)
      new Annexe1FicheConstructeur();
    return Annexe1FicheConstructeur_instance;
  }
  var IND_BA_116;
  function _no_name_provided__29() {
  }
  _no_name_provided__29.prototype.invoke_oywfzr_k$ = function ($this$criterion) {
    $this$criterion._set_identifier__qlpr75_k$('IND-BA-116');
    $this$criterion._set_name__qlpr75_k$('Luminaires \xE0 modules LED');
    $this$criterion._set_type__erbbi9_k$(FicheCee_getInstance());
    $this$criterion.unaryPlus_9n4va8_k$(new SecteurApplication([EstBatimentIndustriel_getInstance()]));
    $this$criterion.unaryPlus_9n4va8_k$(new Denomination_0("Mise en place d'un luminaire \xE0 modules LED avec ou sans dispositif de gestion d'\xE9clairage", [DenominationTypeUsageNonMouvementOuIntrusion_getInstance()]));
    $this$criterion.unaryPlus_9n4va8_k$(new ConditionsDelivranceCertificats_0([EstProfessionnelInformationRequirement_getInstance(), DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents_getInstance(), EfficaciteLumineuseMinimale_getInstance(), FacteurPuissanceMinimal_getInstance(), TauxDistorsionHarmoniqueValide_getInstance(), EtudeDimensionnementEclairagePrealableInfo_getInstance()]));
    $this$criterion.unaryPlus_9n4va8_k$(new DureeVieConventionnelle_0([DatePrecedentsTravauxContrainte_getInstance_0()]));
    $this$criterion.unaryPlus_9n4va8_k$(new MontantCertificatsCumac_0([CalculCertificatsCumac_getInstance_0()]));
    $this$criterion._set_hasEvidenceTypeList__i4z9ai_k$(listOf([Annexe1AvecDetailsEquipement_getInstance(), Annexe1AvecReferencesEquipement_getInstance()]));
  };
  _no_name_provided__29.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_oywfzr_k$(p1 instanceof CriterionBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_26() {
    var i = new _no_name_provided__29();
    return function (p1) {
      i.invoke_oywfzr_k$(p1);
      return Unit_getInstance();
    };
  }
  function EstBatimentIndustriel() {
    EstBatimentIndustriel_instance = this;
    var tmp = '' + SecteurActivite_getInstance_1()._get_identifier__0_k$() + ' == Industriel';
    var tmp_0 = SecteurActivite_getInstance();
    var tmp_1 = listOf_0(SecteurActivite_getInstance_1());
    Constraint_init_$Init$(tmp, 'BAT-IND', "Secteur d'application", tmp_0, tmp_1, null, null, 96, null, this);
  }
  EstBatimentIndustriel.$metadata$ = {
    simpleName: 'EstBatimentIndustriel',
    kind: 'object',
    interfaces: []
  };
  var EstBatimentIndustriel_instance;
  function EstBatimentIndustriel_getInstance() {
    if (EstBatimentIndustriel_instance == null)
      new EstBatimentIndustriel();
    return EstBatimentIndustriel_instance;
  }
  function DenominationTypeUsageNonMouvementOuIntrusion() {
    DenominationTypeUsageNonMouvementOuIntrusion_instance = this;
    var tmp = '' + UsageLuminaire_getInstance()._get_identifier__0_k$() + ' !in [Intrusion, Mouvement]';
    var tmp_0 = trimIndent("\n\t\tLes installations d'\xE9clairage destin\xE9es \xE0 assurer la protection des biens lorsqu'elles sont asservies \xE0 des dispositifs\n\t\tde d\xE9tection de mouvement ou d'intrusion ne sont pas \xE9ligibles. \n\t");
    var tmp_1 = Denomination_getInstance();
    var tmp_2 = listOf_0(UsageLuminaire_getInstance());
    Constraint_init_$Init$(tmp, 'Usage non autoris\xE9', tmp_0, tmp_1, tmp_2, null, null, 96, null, this);
  }
  DenominationTypeUsageNonMouvementOuIntrusion.$metadata$ = {
    simpleName: 'DenominationTypeUsageNonMouvementOuIntrusion',
    kind: 'object',
    interfaces: []
  };
  var DenominationTypeUsageNonMouvementOuIntrusion_instance;
  function DenominationTypeUsageNonMouvementOuIntrusion_getInstance() {
    if (DenominationTypeUsageNonMouvementOuIntrusion_instance == null)
      new DenominationTypeUsageNonMouvementOuIntrusion();
    return DenominationTypeUsageNonMouvementOuIntrusion_instance;
  }
  function DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents() {
    DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents_instance = this;
    var tmp = '' + DureeDeVieLuminaire_getInstance()._get_identifier__0_k$() + ' >= 50000 heures';
    var tmp_0 = ConditionsDelivranceCertificats_getInstance();
    var tmp_1 = listOf_0(DureeDeVieLuminaire_getInstance());
    Constraint_init_$Init$(tmp, 'dureeVie25CEtChuteMax20P', 'Dur\xE9e de vie calcul\xE9e \xE0 25\xB0C >= 50 000 heures avec une chute du flux lumineux <= 20%', tmp_0, tmp_1, null, null, 96, null, this);
  }
  DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents.$metadata$ = {
    simpleName: 'DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents',
    kind: 'object',
    interfaces: []
  };
  var DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents_instance;
  function DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents_getInstance() {
    if (DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents_instance == null)
      new DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents();
    return DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents_instance;
  }
  function EfficaciteLumineuseMinimale() {
    EfficaciteLumineuseMinimale_instance = this;
    var tmp = '' + EfficaciteLumineuse_getInstance()._get_identifier__0_k$() + ' \u2265 110';
    var tmp_0 = trimIndent('\n\t\tefficacit\xE9 lumineuse (flux lumineux total sortant du luminaire divis\xE9 par \n\t\tla puissance totale du luminaire auxiliaire d\u2019alimentation compris) >= 110 lm/W\n\t');
    var tmp_1 = ConditionsDelivranceCertificats_getInstance();
    var tmp_2 = listOf_0(EfficaciteLumineuse_getInstance());
    Constraint_init_$Init$(tmp, 'efficaciteLumineuseMinimale', tmp_0, tmp_1, tmp_2, null, null, 96, null, this);
  }
  EfficaciteLumineuseMinimale.$metadata$ = {
    simpleName: 'EfficaciteLumineuseMinimale',
    kind: 'object',
    interfaces: []
  };
  var EfficaciteLumineuseMinimale_instance;
  function EfficaciteLumineuseMinimale_getInstance() {
    if (EfficaciteLumineuseMinimale_instance == null)
      new EfficaciteLumineuseMinimale();
    return EfficaciteLumineuseMinimale_instance;
  }
  function FacteurPuissanceMinimal() {
    FacteurPuissanceMinimal_instance = this;
    var tmp = '' + FacteurPuissance_getInstance()._get_identifier__0_k$() + ' > 0.9';
    var tmp_0 = ConditionsDelivranceCertificats_getInstance();
    var tmp_1 = listOf_0(FacteurPuissance_getInstance());
    Constraint_init_$Init$(tmp, 'facteurPuissanceMinimal', 'facteur de puissance > 0,9 quelle que soit la puissance', tmp_0, tmp_1, null, null, 96, null, this);
  }
  FacteurPuissanceMinimal.$metadata$ = {
    simpleName: 'FacteurPuissanceMinimal',
    kind: 'object',
    interfaces: []
  };
  var FacteurPuissanceMinimal_instance;
  function FacteurPuissanceMinimal_getInstance() {
    if (FacteurPuissanceMinimal_instance == null)
      new FacteurPuissanceMinimal();
    return FacteurPuissanceMinimal_instance;
  }
  function TauxDistorsionHarmoniqueValide() {
    TauxDistorsionHarmoniqueValide_instance = this;
    var tmp = trimIndent('\n        conformit\xE9 \xE0 la norme EN 61000-3-2 au niveau harmonique avec un taux de distorsion harmonique sur le \n        courant inf\xE9rieur \xE0 25 %\n    ');
    var tmp_0 = ConditionsDelivranceCertificats_getInstance();
    var tmp_1 = listOf([TauxDistorsionHarmoniqueMaximal_getInstance(), TauxDistorsionHarmoniqueCalculSelonNorme_getInstance()]);
    Criterion_init_$Init$('Liste de contraintes sur le taux de distorsion harmonique', 'tauxDistorsionHarmoniqueMaximal', tmp, tmp_0, null, null, null, null, null, tmp_1, null, 1520, null, this);
  }
  TauxDistorsionHarmoniqueValide.$metadata$ = {
    simpleName: 'TauxDistorsionHarmoniqueValide',
    kind: 'object',
    interfaces: []
  };
  var TauxDistorsionHarmoniqueValide_instance;
  function TauxDistorsionHarmoniqueValide_getInstance() {
    if (TauxDistorsionHarmoniqueValide_instance == null)
      new TauxDistorsionHarmoniqueValide();
    return TauxDistorsionHarmoniqueValide_instance;
  }
  function TauxDistorsionHarmoniqueMaximal() {
    TauxDistorsionHarmoniqueMaximal_instance = this;
    var tmp = '' + TauxDistorsionHarmonique_getInstance()._get_identifier__0_k$() + ' < 25%';
    var tmp_0 = ConditionsDelivranceCertificats_getInstance();
    var tmp_1 = listOf_0(TauxDistorsionHarmonique_getInstance());
    Constraint_init_$Init$(tmp, 'tauxDistorsionHarmoniqueMaximal', 'taux de distorsion harmonique sur le courant inf\xE9rieur \xE0 25 %', tmp_0, tmp_1, null, null, 96, null, this);
  }
  TauxDistorsionHarmoniqueMaximal.$metadata$ = {
    simpleName: 'TauxDistorsionHarmoniqueMaximal',
    kind: 'object',
    interfaces: []
  };
  var TauxDistorsionHarmoniqueMaximal_instance;
  function TauxDistorsionHarmoniqueMaximal_getInstance() {
    if (TauxDistorsionHarmoniqueMaximal_instance == null)
      new TauxDistorsionHarmoniqueMaximal();
    return TauxDistorsionHarmoniqueMaximal_instance;
  }
  function TauxDistorsionHarmoniqueCalculSelonNorme() {
    TauxDistorsionHarmoniqueCalculSelonNorme_instance = this;
    var tmp = '' + TauxDistorsionHarmoniqueNormeCalcul_getInstance()._get_identifier__0_k$() + ' == EN 61000-3-2';
    var tmp_0 = ConditionsDelivranceCertificats_getInstance();
    var tmp_1 = listOf_0(TauxDistorsionHarmoniqueNormeCalcul_getInstance());
    Constraint_init_$Init$(tmp, 'tauxDistorsionHarmoniqueNorme', 'le taux de distorsion harmonique sur le courant est d\xE9termin\xE9 conform\xE9ment \xE0 la norme EN 61000-3-2.', tmp_0, tmp_1, null, null, 96, null, this);
  }
  TauxDistorsionHarmoniqueCalculSelonNorme.$metadata$ = {
    simpleName: 'TauxDistorsionHarmoniqueCalculSelonNorme',
    kind: 'object',
    interfaces: []
  };
  var TauxDistorsionHarmoniqueCalculSelonNorme_instance;
  function TauxDistorsionHarmoniqueCalculSelonNorme_getInstance() {
    if (TauxDistorsionHarmoniqueCalculSelonNorme_instance == null)
      new TauxDistorsionHarmoniqueCalculSelonNorme();
    return TauxDistorsionHarmoniqueCalculSelonNorme_instance;
  }
  function EtudeDimensionnementEclairagePrealableInfo() {
    EtudeDimensionnementEclairagePrealableInfo_instance = this;
    var tmp = trimIndent('\n        La mise en place des luminaires \xE0 modules LED fait l\u2019objet d\u2019une \xE9tude pr\xE9alable de dimensionnement de \n        l\u2019\xE9clairage effectu\xE9e, dat\xE9e et sign\xE9e par un professionnel ou un bureau d\u2019\xE9tude. Cette \xE9tude dresse l\u2019\xE9tat des lieux \n        des \xE9quipements en place avant r\xE9novation, identifie les besoins afin de garantir le bon \xE9clairage des locaux et la \n        ma\xEEtrise des consommations d\u2019\xE9nergie, indique les caract\xE9ristiques, le nombre et l\u2019implantation des nouveaux \n        luminaires et dimensionne les \xE9conomies d\u2019\xE9nergie attendues. \n    ');
    var tmp_0 = ConditionsDelivranceCertificats_getInstance();
    InformationRequirement_init_$Init$('', 'etudeDimensionnementEclairagePrealableInfo', tmp, tmp_0, null, null, listOf_0(EtudeDimensionnementEclairagePrealable_getInstance()), 48, null, this);
  }
  EtudeDimensionnementEclairagePrealableInfo.$metadata$ = {
    simpleName: 'EtudeDimensionnementEclairagePrealableInfo',
    kind: 'object',
    interfaces: []
  };
  var EtudeDimensionnementEclairagePrealableInfo_instance;
  function EtudeDimensionnementEclairagePrealableInfo_getInstance() {
    if (EtudeDimensionnementEclairagePrealableInfo_instance == null)
      new EtudeDimensionnementEclairagePrealableInfo();
    return EtudeDimensionnementEclairagePrealableInfo_instance;
  }
  function DatePrecedentsTravauxContrainte_0() {
    DatePrecedentsTravauxContrainte_instance_0 = this;
    var tmp = '' + DateTravaux_getInstance()._get_identifier__0_k$() + ' - ' + DatePrecedentsTravaux_getInstance()._get_identifier__0_k$() + ' >= ' + DureeVieConventionnelleLuminaire_getInstance()._get_identifier__0_k$() + ' ans';
    var tmp_0 = DureeVieConventionnelle_getInstance();
    var tmp_1 = listOf([DureeVieConventionnelleLuminaire_getInstance(), DateTravaux_getInstance()]);
    Constraint_init_$Init$(tmp, 'datePrecedentsTravaux', 'Date des pr\xE9c\xE9dents travaux', tmp_0, tmp_1, null, null, 96, null, this);
  }
  DatePrecedentsTravauxContrainte_0.$metadata$ = {
    simpleName: 'DatePrecedentsTravauxContrainte',
    kind: 'object',
    interfaces: []
  };
  var DatePrecedentsTravauxContrainte_instance_0;
  function DatePrecedentsTravauxContrainte_getInstance_0() {
    if (DatePrecedentsTravauxContrainte_instance_0 == null)
      new DatePrecedentsTravauxContrainte_0();
    return DatePrecedentsTravauxContrainte_instance_0;
  }
  function CalculCertificatsCumac_0() {
    CalculCertificatsCumac_instance_0 = this;
    var tmp = '' + CumacParWatt_getInstance()._get_identifier__0_k$() + ' * ' + Puissance_getInstance()._get_identifier__0_k$() + ' = ' + Cumac_getInstance()._get_identifier__0_k$();
    var tmp_0 = MontantCertificatsCumac_getInstance();
    var tmp_1 = listOf([CumacParWatt_getInstance(), Cumac_getInstance(), Puissance_getInstance()]);
    Constraint_init_$Init$(tmp, 'calculCertificatsCumac', 'Montant de certificats en kWh cumac', tmp_0, tmp_1, null, null, 96, null, this);
  }
  CalculCertificatsCumac_0.$metadata$ = {
    simpleName: 'CalculCertificatsCumac',
    kind: 'object',
    interfaces: []
  };
  var CalculCertificatsCumac_instance_0;
  function CalculCertificatsCumac_getInstance_0() {
    if (CalculCertificatsCumac_instance_0 == null)
      new CalculCertificatsCumac_0();
    return CalculCertificatsCumac_instance_0;
  }
  function LumenPerW() {
    LumenPerW_instance = this;
    CUnit.call(this, 'lumenPerWatt', 'Lumen par Watt', 'Lumen par Watt', 'lm/W', CUnitType_number_getInstance());
  }
  LumenPerW.$metadata$ = {
    simpleName: 'LumenPerW',
    kind: 'object',
    interfaces: []
  };
  var LumenPerW_instance;
  function LumenPerW_getInstance() {
    if (LumenPerW_instance == null)
      new LumenPerW();
    return LumenPerW_instance;
  }
  function Variation() {
    Variation_instance = this;
    CUnit.call(this, 'variation', 'Variation', "Variation d'une valeur \xE0 une autre", '%', CUnitType_number_getInstance());
  }
  Variation.$metadata$ = {
    simpleName: 'Variation',
    kind: 'object',
    interfaces: []
  };
  var Variation_instance;
  function Variation_getInstance() {
    if (Variation_instance == null)
      new Variation();
    return Variation_instance;
  }
  function KWhCumacPerW() {
    KWhCumacPerW_instance = this;
    CUnit.call(this, 'kwhCumacPerWatt', 'Kilowatt-heures Cumac par Watt', 'Kilowatt-heures cumul\xE9s et actualis\xE9s par Watt', 'kWh Cumac/W', CUnitType_number_getInstance());
  }
  KWhCumacPerW.$metadata$ = {
    simpleName: 'KWhCumacPerW',
    kind: 'object',
    interfaces: []
  };
  var KWhCumacPerW_instance;
  function KWhCumacPerW_getInstance() {
    if (KWhCumacPerW_instance == null)
      new KWhCumacPerW();
    return KWhCumacPerW_instance;
  }
  function Watt() {
    Watt_instance = this;
    CUnit.call(this, 'watt', 'Watt', 'Watt', 'W', CUnitType_number_getInstance());
  }
  Watt.$metadata$ = {
    simpleName: 'Watt',
    kind: 'object',
    interfaces: []
  };
  var Watt_instance;
  function Watt_getInstance() {
    if (Watt_instance == null)
      new Watt();
    return Watt_instance;
  }
  IntIterator.prototype.hasNext_0_k$ = Iterator.prototype.hasNext_0_k$;
  AbstractMutableList.prototype.get_ha5a7z_k$ = List.prototype.get_ha5a7z_k$;
  KClassImpl.prototype._get_simpleName__0_k$ = KClass.prototype._get_simpleName__0_k$;
  functionClasses = functionClasses$init$();
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  cee = new ReferenceFramework('Cee', listOf_0(IND_BA_116));
  BAT_EN_101 = criterion(_no_name_provided_$factory_25());
  IND_BA_116 = criterion(_no_name_provided_$factory_26());
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

//# sourceMappingURL=cccev-cee-cccev-dsl-cee.js.map