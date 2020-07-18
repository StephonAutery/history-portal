const mongoose = require("mongoose");
const db = require("../models");

// Connect to MongoDB via Mongoose
mongoose.connect(
	// process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
	process.env.MONGODB_URI || "mongodb://a-new-game:1history@ds331568.mlab.com:31568/heroku_vm824khm"
);

// create the data objects
const sueSeed = [
    {
    question: "President Eisenhower is most known for which event in the civil rights movement?",
    a: "Granting permission for the March on Washington",
    b: "Urging the Brooklyn Dodgers to sign Jackie Robinson",
    c: "Using federal troops to integrate schools in Little Rock",
    answer: "c",
    info: "On May 17, 1954, the U.S. Supreme Court ruled in Brown vs. Topeka Board of Education that segregated schools are \"inherently unequal.\" In September 1957, as a result of that ruling, nine African-American students enrolled at Central High School in Little Rock, Arkansas. The ensuing struggle between segregationists and integrationists, the State of Arkansas and the federal government, President Dwight D. Eisenhower and Arkansas Governor Orval Faubus, has become known in modern American history as the \"Little Rock Crisis.\" The crisis gained world-wide attention. When Governor Faubus ordered the Arkansas National Guard to surround Central High School to keep the nine students from entering the school, President Eisenhower ordered the 101st Airborne Division into Little Rock to insure the safety of the \"Little Rock Nine\" and that the rulings of the Supreme Court were upheld.",
    links: [
        { link: "https://www.zinnedproject.org/materials/a-school-year-like-no-other/" },
        { link: "https://www.eisenhowerlibrary.gov/research/online-documents/civil-rights-little-rock-school-integration-crisis" }
    ]
},
{
    question: "Which of the following were causes supported by Emma Goldman?",
    a: "Birth control information for women",
    b: "Atheism",
    c: "Anarchism",
    answer: "all",
    info: "",
    links: [
        { link: "" },
        { link: "" }
    ]
},
{
    question: "In what year did women obtain the right to vote in the United States?",
    a: "1920",
    b: "1880",
    c: "1962",
    answer: "a",
    info: "",
    links: [
        { link: "" },
        { link: "" }
    ]
},
{
    question: "In what state was gold found during the 1949 Gold Rush?",
    a: "New York.",
    b: "California.",
    c: "Texas",
    answer: "b",
    info: "",
    links: [
        { link: "" },
        { link: "" }
    ]
},
{
    question: "Which geographical advantage did the United States gain with the Louisiana Purchase?",
    a: "A Mississippi River port on the Gulf of Mexico.",
    b: "Access to southern ports on the Pacific Ocean.",
    c: "Control of land west of the Rocky Mountains",
    answer: "a",
    info: "",
    links: [
        { link: "" },
        { link: "" }
    ]
},
{
    question: "Which was the policy of the Federal Government in the late 1880s as exemplified by the Dawes Act?",
    a: "Granting full citizenship rights to Native Americans",
    b: "Moving Native Americans to cities to supply labor",
    c: "Breaking up tribal lands compelling Native Americans to abandon their cultural traditions and assimilate",
    answer: "c",
    info: "",
    links: [
        { link: "" },
        { link: "" }
    ]
},
{
    question: "Which of the following groups DID receive labor protections such as social security benefits under the New Deal ?",
    a: "Educational workers",
    b: "Agricultural workers.",
    c: "Industrial workers",
    answer: "c",
    info: "",
    links: [
        { link: "" },
        { link: "" }
    ]
},
{
    question: "Which of the following is true about Fred Korematsu ?",
    a: "He was a U.S.Citizen",
    b: "He refused to evacuate San Leandro, CA and be moved to a Japanese internment camp",
    c: "He lost his challenge in 1944 when the Supreme Court ruled that civil liberties could be denied on the basis of race / national origin",
    answer: "all",
    info: "",
    links: [
        { link: "" },
        { link: "" }
    ]
},
{
    question: "What is the name of the FBI’s counterintelligence program in the 1960’s / 70’s targeting activists such as the Black freedom movement ?",
    a: "ACLU",
    b: "COINTELPRO",
    c: "ANC",
    answer: "b",
    info: "",
    links: [
        { link: "" },
        { link: "" }
    ]
},
{
    question: "Which American revolutionary thinker published African Slavery in America, indicting the colonists’ advocacy for their own freedom while supporting slavery ?",
    a: "Thomas Paine",
    b: "Thomas Jefferson", 
    c: "Alexander Hamilton",
    answer: "a",
    info: "",
    links: [
        { link: "" },
        { link: "" }
    ]
},
{
    question: "May 1, International Workers Day, began as a commemoration of which event ?",
    a: "The 1866 Memphis Massacre.",
    b: "The 1970 Kent State Massacre.",
    c: "The 1886 Haymarket Tragedy",
    answer: "c",
    info: "",
    links: [
        { link: "" },
        { link: "" }
    ]
}
];

db.Sue.remove({})
  .then(() => db.Sue.collection.insertMany(sueSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });