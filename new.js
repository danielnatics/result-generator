const patientName = document.getElementById("patient_name");
const recieptNo = document.getElementById("reciept_no");
const patientAge = document.getElementById("age_input");
const sex = document.getElementById("sex_input");
const labNumber = document.getElementById("lab_no_input");
const natureOfSpecimen = document.getElementById("nature_of_specimen_input");
const dateOfCollection = document.getElementById("date_of_collection_input");
const timeOfCollection = document.getElementById("time_of_collection_input");
const examinationRequired = document.getElementById(
  "examination_required_input"
);
const address = document.getElementById("address_input");
const companyHealth = document.getElementById("company_health_input");
const companyIdHealth = document.getElementById(
  "company_health_insurance_ID_input"
);

const urinalysisInput = document.getElementById("urinalysis_input");
const appearance = document.getElementById("appearance_input");
const ph = document.getElementById("ph_value");
const protein = document.getElementById("protein_value");
const glucose = document.getElementById("glucose_value");
const blood = document.getElementById("blood_value");
const bilirubin = document.getElementById("bilirubin_value");
const urobilinogen = document.getElementById("urobilinogen_value");
const ketone = document.getElementById("ketone_value");
const nitrite = document.getElementById("nitrite_value");
const ascorbicAcid = document.getElementById("ascorbic_acid_value");

const leucoytes = document.getElementById("leucoytes_value");
const specificGravity = document.getElementById("specific_gravity_value");

const wbc = document.getElementById("wbc_value");
const rbc = document.getElementById("rbc_value");
const cast = document.getElementById("cast_value");
const crystals = document.getElementById("crystals_value");
const bacteriaDebris = document.getElementById("bacteria_debris_value");
const epithelial = document.getElementById("epithelial_cells_value");
const others = document.getElementById("others_value");

const occultBlood = document.getElementById("occult_blood_value");
const bloodMicrofileria = document.getElementById("blood_microfileria_value");

const o_antigen1 = document.getElementById("o-antigen_1");
const o_antigen2 = document.getElementById("o-antigen_2");
const o_antigen3 = document.getElementById("o-antigen_3");
const o_antigen4 = document.getElementById("o-antigen_4");
const h_antigen1 = document.getElementById("h-antigen_1");
const h_antigen2 = document.getElementById("h-antigen_2");
const h_antigen3 = document.getElementById("h-antigen_3");
const h_antigen4 = document.getElementById("h-antigen_4");

const comment1 = document.getElementById("comment1_value");
const HBSAG = document.getElementById("HBSAG");
const HCV = document.getElementById("HCV");
const VDRL = document.getElementById("VDRL");
const helicobacter = document.getElementById("helicobacter_value");
const bloodPregnancyTest = document.getElementById(
  "blood_pregnancy_test_value"
);
const mantoux = document.getElementById("mantoux");
const dateOfInoculation = document.getElementById("date_of_inoculation");
const diameterOfInduration = document.getElementById("diameter_of_induration");
const ref = document.getElementById("ref");
const result = document.getElementById("result");
const comment2 = document.getElementById("comment2_value");

const datePage2 = document.getElementById("date_page2");
const specimen1 = document.getElementById("specimen1");
const appearance_page2 = document.getElementById("appearance");
const specimen2 = document.getElementById("specimen2");
const microscopy = document.getElementById("microscopy");
const cultureTextarea = document.getElementById("culture_textarea");

const s1_Row1 = document.getElementById("s1-row1");
const s1_Row2 = document.getElementById("s1-row2");
const s1_Row3 = document.getElementById("s1-row3");
const s1_Row4 = document.getElementById("s1-row4");
const s1_Row5 = document.getElementById("s1-row5");
const s1_Row6 = document.getElementById("s1-row6");
const s1_Row7 = document.getElementById("s1-row7");
const s1_Row8 = document.getElementById("s1-row8");
const s1_Row9 = document.getElementById("s1-row9");
const s1_Row10 = document.getElementById("s1-row10");
const s1_Row11 = document.getElementById("s1-row11");
const s1_Row12 = document.getElementById("s1-row12");
const s1_Row13 = document.getElementById("s1-row13");
const s1_Row14 = document.getElementById("s1-row14");
const s1_Row15 = document.getElementById("s1-row15");

const r1_Row1 = document.getElementById("r1-row1");
const r1_Row2 = document.getElementById("r1-row2");
const r1_Row3 = document.getElementById("r1-row3");
const r1_Row4 = document.getElementById("r1-row4");
const r1_Row5 = document.getElementById("r1-row5");
const r1_Row6 = document.getElementById("r1-row6");
const r1_Row7 = document.getElementById("r1-row7");
const r1_Row8 = document.getElementById("r1-row8");
const r1_Row9 = document.getElementById("r1-row9");
const r1_Row10 = document.getElementById("r1-row10");
const r1_Row11 = document.getElementById("r1-row11");
const r1_Row12 = document.getElementById("r1-row12");
const r1_Row13 = document.getElementById("r1-row13");
const r1_Row14 = document.getElementById("r1-row14");
const r1_Row15 = document.getElementById("r1-row15");

const s2_Row1 = document.getElementById("s2-row1");
const s2_Row2 = document.getElementById("s2-row2");
const s2_Row3 = document.getElementById("s2-row3");
const s2_Row4 = document.getElementById("s2-row4");
const s2_Row5 = document.getElementById("s2-row5");
const s2_Row6 = document.getElementById("s2-row6");
const s2_Row7 = document.getElementById("s2-row7");
const s2_Row8 = document.getElementById("s2-row8");
const s2_Row9 = document.getElementById("s2-row9");
const s2_Row10 = document.getElementById("s2-row10");
const s2_Row11 = document.getElementById("s2-row11");
const s2_Row12 = document.getElementById("s2-row12");
const s2_Row13 = document.getElementById("s2-row13");
const s2_Row14 = document.getElementById("s2-row14");
const s2_Row15 = document.getElementById("s2-row15");

const r2_Row1 = document.getElementById("r2-row1");
const r2_Row2 = document.getElementById("r2-row2");
const r2_Row3 = document.getElementById("r2-row3");
const r2_Row4 = document.getElementById("r2-row4");
const r2_Row5 = document.getElementById("r2-row5");
const r2_Row6 = document.getElementById("r2-row6");
const r2_Row7 = document.getElementById("r2-row7");
const r2_Row8 = document.getElementById("r2-row8");
const r2_Row9 = document.getElementById("r2-row9");
const r2_Row10 = document.getElementById("r2-row10");
const r2_Row11 = document.getElementById("r2-row11");
const r2_Row12 = document.getElementById("r2-row12");
const r2_Row13 = document.getElementById("r2-row13");
const r2_Row14 = document.getElementById("r2-row14");
const r2_Row15 = document.getElementById("r2-row15");

const s3_Row1 = document.getElementById("s3-row1");
const s3_Row2 = document.getElementById("s3-row2");
const s3_Row3 = document.getElementById("s3-row3");
const s3_Row4 = document.getElementById("s3-row4");
const s3_Row5 = document.getElementById("s3-row5");
const s3_Row6 = document.getElementById("s3-row6");
const s3_Row7 = document.getElementById("s3-row7");
const s3_Row8 = document.getElementById("s3-row8");
const s3_Row9 = document.getElementById("s3-row9");
const s3_Row10 = document.getElementById("s3-row10");
const s3_Row11 = document.getElementById("s3-row11");
const s3_Row12 = document.getElementById("s3-row12");
const s3_Row13 = document.getElementById("s3-row13");
const s3_Row14 = document.getElementById("s3-row14");
const s3_Row15 = document.getElementById("s3-row15");

const r3_Row1 = document.getElementById("r3-row1");
const r3_Row2 = document.getElementById("r3-row2");
const r3_Row3 = document.getElementById("r3-row3");
const r3_Row4 = document.getElementById("r3-row4");
const r3_Row5 = document.getElementById("r3-row5");
const r3_Row6 = document.getElementById("r3-row6");
const r3_Row7 = document.getElementById("r3-row7");
const r3_Row8 = document.getElementById("r3-row8");
const r3_Row9 = document.getElementById("r3-row9");
const r3_Row10 = document.getElementById("r3-row10");
const r3_Row11 = document.getElementById("r3-row11");
const r3_Row12 = document.getElementById("r3-row12");
const r3_Row13 = document.getElementById("r3-row13");
const r3_Row14 = document.getElementById("r3-row14");
const r3_Row15 = document.getElementById("r3-row15");

const reportedBy = document.getElementById("reportedBy");

const checkedBy = document.getElementById("checkedBy");
const sign1 = document.getElementById("sign1");
const sign2 = document.getElementById("sign2");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");

document
  .getElementById("imageInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;
      img.alt = "Uploaded Image";

      const container = document.getElementById("imageContainer");
      container.innerHTML = ""; // Clear any previous image
      container.appendChild(img);
    };

    reader.readAsDataURL(file); // Read file as base64 data URL
  });

let state = "OFF";
async function generatePDF() {
  const labResult = `
        <div style="margin-bottom: 70px;" id="content">
        <header>
          <div class="company_details">
            <h2 class="company_title">CHUKWUNAZA MEDICAL LABORATORY</h2>
            <h4 style="font-size: 19px;" class="text-center">No. 1 Araba Street, Awka Anambra State</h4>
            <h4 style="margin-bottom: 5px;" class="text-center">
              <strong>Tel. +234 806 366 3155, +234 815 950 1354</strong>
            </h4>
            <div class="flex box_style">
            <div class="column_1"></div>
            <div class="column_2 text-center">MICROBIOLOGY FORM</div>
            <div class="column_3"></div>
            </div>
            <div style="height: 52.78px" class="patientName_recieptNo flex">
              <div class="patient_name">
                <p>PATIENT'S NAME</p>
                <p>${patientName.value}</p>
              </div>
              <div class="reciept_no">
                <p>RECIEPT NO.</p>
                <p>${recieptNo.value}</p>
              </div>
            </div>
          </div>
          <div class="services">
            <ul>
              <li>
                <p class="minus"></p>
                Diagnostic Lab
              </li>
              <li>
                <p class="minus"></p>
                Research Lab
              </li>
              <li>
                <p class="minus"></p>
                Quality Control Lab
              </li>
              <li>
                <p class="minus"></p>
                Water Analysis
              </li>
              <li>
                <p class="minus"></p>
                Blood Banking
              </li>
              <li>
                <p class="minus"></p>
                Biomedical Consultant Lab
              </li>
              <li>
                <p class="minus"></p>
                Manufactures Reps
              </li>
            </ul>
          </div>
        </header>
              <div style="height: 51.78px" class="container_1 flex ">
          <div
            style="width: 25%; border-right: 2px solid black; padding: 3px 6px"
          ></div>
          <div
            style="width: 25%; border-right: 2px solid black; padding: 3px 6px"
          >
            <p>AGE</p>
            <p>${patientAge.value}</p>
          </div>
          <div
            style="width: 25%; border-right: 2px solid black; padding: 3px 6px"
          >
            <p>SEX</p>
            <p>${sex.value}</p>
          </div>
          <div style="width: 25%; padding: 3px 6px">
            <p>LABORATORY NUMBER</p>
            <p>${labNumber.value}</p>
          </div>
        </div>
        <div style="height: 51.78px" class="container_2 flex">
          <div
            style="width: 30%; border-right: 2px solid black; padding: 3px 6px"
          >
            <p>Naure of Specimen</p>
            <p>${natureOfSpecimen.value}</p>
          </div>
          <div
            style="width: 25%; border-right: 2px solid black; padding: 3px 6px"
          >
            <p>Date of Collection</p>
            <p>${dateOfCollection.value}</p>
          </div>
          <div style="width: 45%; padding: 3px 6px">
            <p>Time of Collection</p>
            <p>${timeOfCollection.value}</p>
          </div>
        </div>

              <div class="container_3">
          <div class="border-bottom flex padding">
            <p class="p-left">Examination Required</p>
            <p>${examinationRequired.value}</p>
          </div>
          <div class="border-bottom flex padding">
            <p class="p-left">Address</p>
            <p>${address.value}</p>
          </div>
          <div class="border-bottom flex padding">
            <p class="p-left">Company Health</p>
            <p>${companyHealth.value}</p>
          </div>
          <div class="border-bottom flex padding">
            <p class="p-left">Company ID Health Insurance ID</p>
            <p>${companyIdHealth.value}</p>
          </div>
        </div>

              <table>
        <colgroup>
          <col style="width: 45%" />
          <col style="width: 55%" />
        </colgroup>
        <tr>
          <td class="border-right flex">
            <p class="p-left">URINALYSIS</p>
            <p>${urinalysisInput.value}</p>
          </td>
          <td>STOOL ANALYSIS</td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Appearance</p>
            <p>${appearance.value}</p>
          </td>
          <td>MICROSCOPY</td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">PH</p>
            <p>${ph.value}</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Protein</p>
            <p>${protein.value}</p>
          </td>
          <td>MICROSCOPY</td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Glucose</p>
            <p>${glucose.value}</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Blood</p>
            <p>${blood.value}</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Bilirubin</p>
            <p>${bilirubin.value}</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Urobilinogen</p>
            <p>${urobilinogen.value}</p>
          </td>
          <td>  <p class="p-right">
              <span style="padding-right: 50px">OCCULT BLOOD (FOB)</span> ${occultBlood.value}
            </p></td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Ketone</p>
            <p>${ketone.value}</p>
          </td>
          <td>  <p class="p-right">
              <span style="padding-right: 50px">BLOOD MICROFILERIA</span> ${bloodMicrofileria.value}
            </p></td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Nitrite</p>
            <p>${nitrite.value}</p>
          </td>
          <td>WIDAL TEST WIDAL TEST</td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Ascorbic Acid</p>
            <p>${ascorbicAcid.value}</p>
          </td>
          <td style="padding: 0; border-bottom: 0">
            <table>
              <colgroup>
                <col style="width: 40%" />
                <col style="width: 30%" />
                <col style="width: 30%" />
              </colgroup>
              <tr>
                <td class="border-right">sss</td>
                <td class="border-right">O-ANTIGEN</td>
                <td>H-ANTIGEN</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Leucoytes</p>
            <p>${leucoytes.value}</p>
          </td>
          <td style="padding: 0; border-bottom: 0">
            <table>
              <colgroup>
                <col style="width: 40%" />
                <col style="width: 30%" />
                <col style="width: 30%" />
              </colgroup>
              <tr>
                <td class="border-right">Salmonella Typhi</td>
                <td class="border-right text-center">${o_antigen1.value}</td>
                <td class="text-center">${h_antigen1.value}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Specific Gravity</p>
            <p>${specificGravity.value}</p>
          </td>
          <td style="padding: 0; border-bottom: 0">
            <table>
              <colgroup>
                <col style="width: 40%" />
                <col style="width: 30%" />
                <col style="width: 30%" />
              </colgroup>
              <tr>
                <td class="border-right">
                  Salmonella Typhi <strong>A</strong>
                </td>
                <td class="border-right text-center">${o_antigen2.value}</td>
                <td class="text-center">${h_antigen2.value}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="border-right text-center"><strong>MICROSCOPY</strong></td>
          <td style="padding: 0; border-bottom: 0">
            <table>
              <colgroup>
                <col style="width: 40%" />
                <col style="width: 30%" />
                <col style="width: 30%" />
              </colgroup>
              <tr>
                <td class="border-right">
                  Salmonella Typhi <strong>B</strong>
                </td>
                <td class="border-right text-center">${o_antigen3.value}</td>
                <td class="text-center">${h_antigen3.value}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">WBC</p>
            <p>${wbc.value}</p>
          </td>
          <td style="padding: 0; border-bottom: 0">
            <table>
              <colgroup>
                <col style="width: 40%" />
                <col style="width: 30%" />
                <col style="width: 30%" />
              </colgroup>
              <tr>
                <td class="border-right">
                  Salmonella Typhi <strong>C</strong>
                </td>
                <td class="border-right text-center">${o_antigen4.value}</td>
                <td class="text-center">${h_antigen4.value}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">RBC</p>
            <p>${rbc.value}</p>
          </td>
          <td>
            <p class="p-right">
              <span style="padding-right: 95px">Comment</span> ${comment1.value}
            </p>
          </td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Cast</p>
            <p>${cast.value}</p>
          </td>
          <td>
            <p class="p-right">
              <span style="padding-right: 105px">HBSAG</span> ${HBSAG.value}
            </p>
          </td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Crystals</p>
            <p>${crystals.value}</p>
          </td>
          <td>
            <p class="p-right">
              <span style="padding-right: 124px">HCV</span> ${HCV.value}
            </p>
          </td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Bacteria Debris</p>
            <p>${bacteriaDebris.value}</p>
          </td>
          <td>
            <p class="p-right">
              <span style="padding-right: 115px">VDRL</span> ${VDRL.value}
            </p>
          </td>
        </tr>
        <tr>
          <td class="border-right flex">
            <p class="p-left">Epithelial Cells</p>
            <p>${epithelial.value}</p>
          </td>
          <td>
            <p class="p-right">
              <span style="padding-right: 42px"> Helicobacter pylori</span>${helicobacter.value}
            </p>
          </td>
        </tr>
        <tr>
          <td class="border-right">Others</td>
          <td>
            <span style="padding-right: 20px">Blood Pregnancy Test</span>${bloodPregnancyTest.value}
          </td>
        </tr>
        <tr>
          <td class="border-right"></td>
          <td class="text-center"><strong>MANTOUX TEST</strong></td>
        </tr>
        <tr>
          <td class="border-right"></td>
          <td>Date of Inoculation Date Read</td>
        </tr>
        <tr>
          <td class="border-right remove-border-bottom">
            URINE PREGNANCY TEST
          </td>
          <td>Diameter of Induration</td>
        </tr>
        <tr>
          <td class="border-right remove-border-bottom"></td>
          <td>Ref(</td>
        </tr>
        <tr>
          <td class="border-right remove-border-bottom"></td>
          <td class="flex">
            <p class="p-left">Result</p>
            <p></p>
          </td>
        </tr>
        <tr>
          <td class="border-right remove-border-bottom"></td>
          <td class="flex">
            <p class="p-left">Comment</p>
            <p></p>
          </td>
        </tr>
      </table>

      </div>




    <div style="margin-bottom: 30px;" id="content2">
  <h2 class="text-center">AFB SMEAR MICROSCOPY</h2>
  <div class="afb_table flex column">
    <div style="height: 3.5cm" class="flex b-full center">
      <div class="border-right w-2-5cm text-14 p-round bold-600">DATE:</div>
      <div class="border-right w-2-5cm text-14 pt-5 bold-600">SPECIMEN:</div>
      <div class="border-right w-3-5cm text-14 pt-5 bold-600">APPEARANCE:</div>
      <div style="width: 11.4cm" class="flex column">
        <div
          class="border-bottom text-14 h-1cm flex align-center justify-center bold-600"
        >
          RESULT
        </div>
        <div class="flex w-full">
          <div
            class="border-right w-1-5cm flex justify-center align-center text-bold"
          >
            NDG
          </div>
          <div class="flex column w-full">
            <div
              class="border-bottom h-1cm flex justify-center align-center text-14 bold-600"
            >
              POSITIVE (GRADING)
            </div>
            <div class="flex h-1-5cm">
              <div class="border-right w-4cm">
                SCANTY <br /><strong>(Actual no. 1-9)</strong>
              </div>
              <div
                class="border-right w-2cm flex justify-center align-center text-bold p-round"
              >
                1+
              </div>
              <div
                class="border-right w-1-5cm flex justify-center align-center text-bold p-round"
              >
                2+
              </div>
              <div
                class="w-1-5cm flex justify-center align-center text-bold p-round"
              >
                3+ 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 1.4cm" class="flex border-left">
      <div class="border-right w-2-4cm"></div>
      <div
        class="border-right w-2-3cm flex justify-center align-center text-bold"
      >
        1
      </div>
      <div class=""></div>
    </div>
    <div style="height: 1.4cm" class="flex b-full">
      <div class="border-right w-2-4cm"></div>
      <div
        class="border-right w-2-3cm flex justify-center align-center text-bold"
      >
        2
      </div>
      <div class=""></div>
    </div>
  </div>

  <h2 class="center mt mb border-bottom">
    CULTURE, MICROSCOPY AND SENSITIVITY
  </h2>
  <div class="border-bottom h-1cm flex pl-20 text-14">
    <p style="font-weight: 800; margin-right: 33px">SPECIMEN:</p>
    <p style="font-weight: 600">
     ${specimen2.value}
    </p>
  </div>
  <div class="border-bottom h-1cm pl-20 flex text-14">
    <p style="font-weight: 800; margin-right: 10px">MICROSCOPY:</p>
    <p style="font-weight: 600">
      ${microscopy.value}
    </p>
  </div>
  <div class="border-bottom h-1-5cm pl-20 flex text-14">
    <p style="font-weight: 800; margin-right: 40px">CULTURE:</p>
    <p style="font-weight: 600">
      ${cultureTextarea.value}
    </p>
  </div>

  <div class="flex">
    <div class="sensitivity-test-col">
      <div
        style="height: 1cm; border-left: 0; justify-content: center"
        class="border-bottom"
      >
        SENSITIVITY TEST
      </div>
      <div style="height: 1cm; border-left: 0; border-bottom: 0"></div>
      <div style="height: 1cm; border-left: 0"></div>
      <div>Augumentin</div>
      <div>Ciprofloxacin</div>
      <div>Eethromycin</div>
      <div>Ofloxacin</div>
      <div>Cloxacilin</div>
      <div>Ceftriaxone</div>
      <div>Gentamycin</div>
      <div>Gefuroxime</div>
      <div>Azithromycin</div>
      <div>Nalidic Acid</div>
      <div>Nitrofurantoin</div>
      <div>Amolxycilin</div>
      <div>Rifampicin</div>
      <div>Streotomycin</div>
      <div>Cefpodoxine</div>
    </div>
    <div style="width: 100%" class="flex column border-right">
      <p style="font-weight: 600;" class="border-bottom h-1cm flex justify-center align-center text-bold">
        SENSITIVITY TESTING
      </p>
      <div style="width: 100%" class="flex">
        <div style="width: 33.3%" class="flex column">
          <p
            class="center border-bottom border-right h-1cm flex align-center justify-center text-bold"
          >
            1
          </p>
          <div style="width: 100%" class="flex">
            <div style="width: 50%" class="border-right">
              <p
                class="center border-bottom h-1cm flex justify-center align-center text-bold"
              >
                S
              </p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row1.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row2.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row3.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row4.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row5.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row6.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row7.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row8.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row9.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row10.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row11.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row12.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row13.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row14.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s1_Row15.value}</p>
            </div>
            <div style="width: 50%" class="border-right">
              <p
                class="center border-bottom h-1cm flex justify-center align-center text-bold"
              >
                R
              </p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row1.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row2.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row3.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row4.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row5.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row6.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row7.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row8.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row9.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row10.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row11.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row12.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row13.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row14.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r1_Row15.value}</p>
            </div>
          </div>
        </div>
        <div style="width: 33.3%" class="flex column border-right">
          <p
            class="center border-bottom h-1cm flex align-center justify-center text-bold"
          >
            2
          </p>
          <div class="flex">
            <div style="width: 50%" class="border-right">
              <p
                class="center border-bottom h-1cm flex justify-center align-center text-bold"
              >
                S
              </p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row1.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row2.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row3.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row4.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row5.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row6.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row7.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row8.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row9.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row10.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row11.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row12.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row13.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row14.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${s2_Row15.value}</p>
            </div>
            <div style="width: 50%" class="">
              <p
                class="center border-bottom h-1cm flex justify-center align-center text-bold"
              >
                R
              </p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row1.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row2.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row3.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row4.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row5.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row6.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row7.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row8.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row9.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row10.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row11.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row12.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row13.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row14.value}</p>
              <p class="w-full center text-15 border-bottom h-0-7cm">${r2_Row15.value}</p>
            </div>
          </div>
        </div>
        <div style="width: 33.3%" class="flex column">
          <p
            class="center border-bottom h-1cm text-bold flex justify-center align-center"
          >
            3
          </p>
          <div class="flex">
            <div style="width: 50%">
              <p
                class="center border-right border-bottom h-1cm flex justify-center align-center text-bold"
              >
                S
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row1.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row2.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row3.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row4.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row5.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row6.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row7.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row8.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row9.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row10.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row11.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row12.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row13.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row14.value}
              </p>
              <p
                class="w-full text-15 h-0-7cm border-right text-center border-bottom"
              >
                ${s3_Row15.value}
              </p>
            </div>
            <div style="width: 50%">
              <p
                class="center border-bottom flex justify-center align-center h-1cm text-bold"
              >
                R
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row1.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row2.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row3.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row4.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row5.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row6.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row7.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row8.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row9.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row10.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row11.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row12.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row13.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row14.value}
              </p>
              <p class="w-full text-15 h-0-7cm text-center border-bottom">
                ${r3_Row15.value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    style="
      border-bottom: 1px solid black;
      display: flex;
      justify-content: end;
      margin-bottom: 10px;
    "
  >
    <div
      style="
        margin-right: 20px;
        margin-top: 10px;
        font-size: 14px;
        font-weight: 600;
      "
    >
      <p>Key: S = Sensitive</p>
      <p style="padding-left: 37px">R = Resistant</p>
    </div>
  </div>
  <div
    style="
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 10px;
      align-items: center;
    "
    class="flex"
  >
    <p style="padding-right: 5px">Report By:</p>
    <p style="margin-right: 7px; width: 290px; border-bottom: 1px solid black">
      ${reportedBy.value}
    </p>
    <p style="padding-right: 5px">Sign:</p>
    <p style="margin-right: 7px; border-bottom: 1px solid black; width: 140px">
      
    </p>
    <p style="padding-right: 10px">Date:</p>
    <p style="border-bottom: 1px solid black; width: 150px">${date1.value}</p>
  </div>

  <div
    style="font-size: 14px; font-weight: 600; align-items: center"
    class="flex"
  >
    <p style="padding-right: 5px">Checked By:</p>
    <p style="margin-right: 7px; width: 278px; border-bottom: 1px solid black">
      ${checkedBy.value}
    </p>
    <p style="padding-right: 5px">Sign:</p>
    <div
      style="margin-right: 7px; border-bottom: 1px solid black; width: 140px"
      id="imageContainer"
    ></div>

    <!-- <p style="margin-right: 7px; border-bottom: 1px solid black; width: 140px;">qwertyuiop</p> -->
    <p style="padding-right: 10px">Date:</p>
    <p style="border-bottom: 1px solid black; width: 147px">${date2.value}</p>
  </div>
</div>

  `;
  const container = document.createElement("div");
  container.innerHTML = labResult;
  // container.style.position = "fixed";
  // container.style.top = "-10000px"; // move off screen
  const previewBox = document.getElementById("preview");
  const previewHtml = previewBox.innerHTML;

  if (state === "OFF") {
    previewBox.appendChild(container);
    document.querySelector(".form-field").style.display = "none";

    state = "ON";
    console.log(container);
  }

  const editBtn = document.createElement("button");
  editBtn.innerText = "⬅ Go Back";
  editBtn.className = "edit-btn";
  editBtn.id = "editBtn";
  if (state === "ON") {
    editBtn.addEventListener("click", () => {
      previewBox.style.display = "none";
      document.querySelector(".form-field").style.display = "block";
      location.reload();
    });
  }

  const generateBtn = document.createElement("button");
  generateBtn.innerText = "Generate PDF";
  generateBtn.className = "generate-btn";
  generateBtn.id = "generateBtn";
  previewBox.appendChild(generateBtn);
  previewBox.appendChild(editBtn);

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });
  // STEP 1: Render page 1 into canvas, convert to image
  const page1Element = document.getElementById("content");
  const canvas1 = await html2canvas(page1Element, { scale: 1.2 });
  const imgData1 = canvas1.toDataURL("image/png", 0.8);
  doc.addImage(imgData1, "PNG", 10, 10, 190, 0); // auto height

  // STEP 2: Make page2 visible, render to image
  const page2Element = document.getElementById("content2");
  page2Element.style.display = "block";
  const canvas2 = await html2canvas(page2Element, { scale: 1.2 });
  const imgData2 = canvas2.toDataURL("image/png", 0.8);
  // page2Element.style.display = "none";

  // STEP 3: Add new page and draw image
  doc.addPage();
  doc.addImage(imgData2, "PNG", 10, 10, 190, 0);

  // STEP 4: Save
  generateBtn.addEventListener("click", () => {
    doc.save(`${patientName.value}-result.pdf`);
  });
}

let acc = document.getElementsByClassName("accordion");

let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      this.classList.remove("active");

      panel.style.display = "none";
    } else {
      this.classList.add("active");

      panel.style.display = "block";
    }
  });
}
