import { surveyLocalization } from "survey-core";

export var swedishSurveyStrings = {
  pagePrevText: "Föregående",
  pageNextText: "Nästa",
  completeText: "Slutför",
  previewText: "Förhandsvisning",
  editText: "Redigera",
  startSurveyText: "Börja",
  otherItemText: "Annat (beskriv)",
  noneItemText: "Ingen",
  selectAllItemText: "Välj alla",
  progressText: "Sida {0} av {1}",
  indexText: "{0} av {1}",
  panelDynamicProgressText: "{0} av {1}",
  panelDynamicTabTextFormat: "Panel {panelIndex}",
  questionsProgressText: "{0} / {1} frågor besvarade",
  emptySurvey: "Det finns ingen synlig sida eller fråga i enkäten.",
  completingSurvey: "Tack för att du genomfört enkäten!!",
  completingSurveyBefore: "Våra register visar att du redan har slutfört denna undersökning.",
  loadingSurvey: "Enkäten laddas...",
  placeholder: "Välj...",
  ratingOptionsCaption: "Tryck här för att betygsätta...",
  value: "värde",
  requiredError: "Frågan är obligatorisk.",
  requiredErrorInPanel: "Vänligen svara på minst en fråga.",
  requiredInAllRowsError: "Var vänlig besvara frågorna på alla rader.",
  numericError: "Värdet ska vara numeriskt.",
  minError: "Värdet får inte vara mindre än {0}",
  maxError: "Värdet får inte vara större än {0}",
  textMinLength: "Ange minst {0} tecken.",
  textMaxLength: "Ange färre än {0} tecken.",
  textMinMaxLength: "Ange mer än {0} och färre än {1} tecken.",
  minRowCountError: "Var vänlig fyll i minst {0} rader.",
  minSelectError: "Var vänlig välj åtminstone {0} varianter.",
  maxSelectError: "Var vänlig välj inte fler än {0} varianter.",
  numericMinMax: "'{0}' ska vara lika med eller mer än {1} samt lika med eller mindre än {2}",
  numericMin: "'{0}' ska vara lika med eller mer än {1}",
  numericMax: "'{0}' ska vara lika med eller mindre än {1}",
  invalidEmail: "Var vänlig ange en korrekt e-postadress.",
  invalidExpression: "Uttrycket: {0} ska returnera 'true'.",
  urlRequestError: "Förfrågan returnerade felet '{0}'. {1}",
  urlGetChoicesError: "Antingen returnerade förfrågan ingen data eller så är egenskapen 'path' inte korrekt",
  exceedMaxSize: "Filstorleken får ej överstiga {0}.",
  otherRequiredError: "Var vänlig ange det andra värdet.",
  uploadingFile: "Din fil laddas upp. Var vänlig vänta några sekunder och försök sedan igen.",
  loadingFile: "Laddar...",
  chooseFile: "Välj fil(er) ...",
  noFileChosen: "Ingen fil vald",
  filePlaceholder: "Dra och släpp en fil här eller klicka på knappen nedan och välj en fil att ladda upp.",
  confirmDelete: "Vill du radera posten?",
  keyDuplicationError: "Detta värde ska vara unikt.",
  addColumn: "Lägg till kolumn",
  addRow: "Lägg till rad",
  removeRow: "Ta bort",
  emptyRowsText: "Det finns inga rader.",
  addPanel: "Lägg till ny",
  removePanel: "Ta bort",
  choices_Item: "Artikel",
  matrix_column: "Kolumn",
  matrix_row: "Rad",
  multipletext_itemname: "text",
  savingData: "Resultaten sparas på servern ...",
  savingDataError: "Ett fel inträffade och vi kunde inte spara resultaten.",
  savingDataSuccess: "Resultaten lyckades sparas!",
  saveAgainButton: "Försök igen",
  timerMin: "min",
  timerSec: "sek",
  timerSpentAll: "Du har spenderat {0} på den här sidan och {1} totalt.",
  timerSpentPage: "Du har spenderat {0} på den här sidan.",
  timerSpentSurvey: "Du har spenderat {0} totalt.",
  timerLimitAll: "Du har spenderat {0} av {1} på den här sidan och {2} av {3} totalt.",
  timerLimitPage: "Du har spenderat {0} av {1} på den här sidan.",
  timerLimitSurvey: "Du har spenderat {0} av {1} totalt.",
  clearCaption: "Klar",
  signaturePlaceHolder: "Signera här",
  chooseFileCaption: "Välj fil",
  takePhotoCaption: "Ta foto",
  photoPlaceholder: "Klicka på knappen nedan för att ta ett foto med kameran.",
  fileOrPhotoPlaceholder: "Dra och släpp eller välj en fil att ladda upp eller ta ett foto med kameran.",
  replaceFileCaption: "Ersätt fil",
  removeFileCaption: "Ta bort den här filen",
  booleanCheckedLabel: "Ja",
  booleanUncheckedLabel: "Nej",
  confirmRemoveFile: "Är du säker på att du vill ta bort den här filen: {0}?",
  confirmRemoveAllFiles: "Är du säker på att du vill ta bort alla filer?",
  questionTitlePatternText: "Frågetitel",
  modalCancelButtonText: "Avbryt",
  modalApplyButtonText: "Spara",
  filterStringPlaceholder: "Skriv för att söka...",
  emptyMessage: "Ingen data finns",
  noEntriesText: "Det finns inga värden än.\nKlicka på knappen nedan för att lägga till nytt värde.",
  noEntriesReadonlyText: "Det finns inga poster.",
  more: "Mer",
  tagboxDoneButtonCaption: "OKEJ",
  selectToRankEmptyRankedAreaText: "Alla val rangordnas",
  selectToRankEmptyUnrankedAreaText: "Dra och släpp val här för att rangordna dem"
};

surveyLocalization.locales["sv"] = swedishSurveyStrings;
surveyLocalization.localeNames["sv"] = "svenska";

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Panel {panelIndex}"
// filePlaceholder: "Drag and drop a file here or click the button below and choose a file to upload." => "Dra och släpp en fil här eller klicka på knappen nedan och välj en fil att ladda upp."
// emptyRowsText: "There are no rows." => "Det finns inga rader."
// noEntriesReadonlyText: "There are no entries." => "Det finns inga poster."
// tagboxDoneButtonCaption: "OK" => "OKEJ"
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Alla val rangordnas"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Dra och släpp val här för att rangordna dem"// takePhotoCaption: "Take Photo" => "Ta foto"
// photoPlaceholder: "Click the button below to take a photo using the camera." => "Klicka på knappen nedan för att ta ett foto med kameran."
// fileOrPhotoPlaceholder: "Drag and drop or select a file to upload or take a photo using the camera." => "Dra och släpp eller välj en fil att ladda upp eller ta ett foto med kameran."
// replaceFileCaption: "Replace file" => "Ersätt fil"