const mongoose = require("mongoose");
const db = require("../models");

// Connect to MongoDB via Mongoose
mongoose.connect(
    // process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
    process.env.MONGODB_URI || "mongodb://a-new-game:1history@ds331568.mlab.com:31568/heroku_vm824khm"
);

// create the data objects
const presidentSeed = [
    {
        "number": 01,
        "president": "George Washington",
        "birth_year": 1732,
        "death_year": 1799,
        "took_office": "1789-04-30",
        "left_office": "1797-03-04",
        "party": "No Party",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 02,
        "president": "John Adams",
        "birth_year": 1735,
        "death_year": 1826,
        "took_office": "1797-03-04",
        "left_office": "1801-03-04",
        "party": "Federalist",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 03,
        "president": "Thomas Jefferson",
        "birth_year": 1743,
        "death_year": 1826,
        "took_office": "1801-03-04",
        "left_office": "1809-03-04",
        "party": "Democratic-Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 04, "president": "James Madison",
        "birth_year": 1751,
        "death_year": 1836,
        "took_office": "1809-03-04",
        "left_office": "1817-03-04",
        "party": "Democratic-Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 05, "president": "James Monroe",
        "birth_year": 1758,
        "death_year": 1831,
        "took_office": "1817-03-04",
        "left_office": "1825-03-04",
        "party": "Democratic-Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 06, "president": "John Quincy Adams",
        "birth_year": 1767,
        "death_year": 1848,
        "took_office": "1825-03-04",
        "left_office": "1829-03-04",
        "party": "Democratic-Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 07,
        "president": "Andrew Jackson",
        "birth_year": 1767,
        "death_year": 1845,
        "took_office": "1829-03-04",
        "left_office": "1837-03-04",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 08,
        "president": "Martin Van Buren",
        "birth_year": 1782,
        "death_year": 1862,
        "took_office": "1837-03-04",
        "left_office": "1841-03-04",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 09,
        "president": "William Henry Harrison",
        "birth_year": 1773,
        "death_year": 1841,
        "took_office": "1841-03-04",
        "left_office": "1841-04-04",
        "party": "Whig",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 10,
        "president": "John Tyler",
        "birth_year": 1790,
        "death_year": 1862,
        "took_office": "1841-04-04",
        "left_office": "1845-03-04",
        "party": "Whig",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 11,
        "president": "James K Polk",
        "birth_year": 1795,
        "death_year": 1849,
        "took_office": "1845-03-04",
        "left_office": "1849-03-04",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 12,
        "president": "Zachary Taylor",
        "birth_year": 1784,
        "death_year": 1850,
        "took_office": "1849-03-04",
        "left_office": "1850-07-09",
        "party": "Whig",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 13,
        "president": "Millard Fillmore",
        "birth_year": 1800,
        "death_year": 1874,
        "took_office": "1850-07-09",
        "left_office": "1853-03-04",
        "party": "Whig",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 14,
        "president": "Franklin Pierce",
        "birth_year": 1804,
        "death_year": 1869,
        "took_office": "1853-03-04",
        "left_office": "1857-03-04",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 15,
        "president": "James Buchanan",
        "birth_year": 1791,
        "death_year": 1868,
        "took_office": "1857-03-04",
        "left_office": "1861-03-04",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 16,
        "president": "Abraham Lincoln",
        "birth_year": 1809,
        "death_year": 1865,
        "took_office": "1861-03-04",
        "left_office": "1865-04-15",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 17,
        "president": "Andrew Johnson",
        "birth_year": 1808,
        "death_year": 1875,
        "took_office": "1865-04-15",
        "left_office": "1869-03-04",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 18,
        "president": "Ulysses S Grant",
        "birth_year": 1822,
        "death_year": 1885,
        "took_office": "1869-03-04",
        "left_office": "1877-03-04",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 19,
        "president": "Rutherford B Hayes",
        "birth_year": 1822,
        "death_year": 1893,
        "took_office": "1877-03-04",
        "left_office": "1881-03-04",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 20,
        "president": "James A Garfield",
        "birth_year": 1831,
        "death_year": 1881,
        "took_office": "1881-03-04",
        "left_office": "1881-09-19",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 21,
        "president": "Chester A Arthur",
        "birth_year": 1829, "death_year": 1886,
        "took_office": "1881-09-19",
        "left_office": "1885-03-04",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 22,
        "president": "Grover Cleveland",
        "birth_year": 1837,
        "death_year": 1908,
        "took_office": "1885-03-04",
        "left_office": "1889-03-04",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 23,
        "president": "Benjamin Harrison",
        "birth_year": 1833,
        "death_year": 1901,
        "took_office": "1889-03-04",
        "left_office": "1893-03-04",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 24,
        "president": "Grover Cleveland",
        "birth_year": 1837,
        "death_year": 1908,
        "took_office": "1893-03-04",
        "left_office": "1897-03-04",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 25,
        "president": "William McKinley",
        "birth_year": 1843,
        "death_year": 1901,
        "took_office": "1897-03-04",
        "left_office": "1901-09-14",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 26,
        "president": "Theodore Roosevelt",
        "birth_year": 1858,
        "death_year": 1919,
        "took_office": "1901-09-14",
        "left_office": "1909-03-04",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 27,
        "president": "William Howard Taft",
        "birth_year": 1857,
        "death_year": 1930,
        "took_office": "1909-03-04",
        "left_office": "1913-03-04",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 28,
        "president": "Woodrow Wilson",
        "birth_year": 1856,
        "death_year": 1924,
        "took_office": "1913-03-04",
        "left_office": "1921-03-04",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 29,
        "president": "Warren G Harding",
        "birth_year": 1865,
        "death_year": 1923,
        "took_office": "1921-03-04",
        "left_office": "1923-08-02",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 30,
        "president": "Calvin Coolidge",
        "birth_year": 1872,
        "death_year": 1933,
        "took_office": "1923-08-02",
        "left_office": "1929-03-04",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 31,
        "president": "Herbert Hoover",
        "birth_year": 1874, "death_year": 1964,
        "took_office": "1929-03-04",
        "left_office": "1933-03-04",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 32,
        "president": "Franklin D Roosevelt",
        "birth_year": 1882,
        "death_year": 1945,
        "took_office": "1933-03-04",
        "left_office": "1945-04-12", "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 33,
        "president": "Harry S Truman",
        "birth_year": 1884,
        "death_year": 1972,
        "took_office": "1945-04-12",
        "left_office": "1953-01-20",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 34,
        "president": "Dwight D Eisenhower",
        "birth_year": 1890,
        "death_year": 1969,
        "took_office": "1953-01-20",
        "left_office": "1961-01-20",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 35,
        "president": "John F Kennedy",
        "birth_year": 1917,
        "death_year": 1963,
        "took_office": "1961-01-20",
        "left_office": "1963-11-22",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 36,
        "president": "Lyndon B Johnson",
        "birth_year": 1908,
        "death_year": 1973,
        "took_office": "1963-11-22",
        "left_office": "1969-01-20",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 37,
        "president": "Richard Nixon",
        "birth_year": 1913,
        "death_year": 1994,
        "took_office": "1969-01-20",
        "left_office": "1974-08-09",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 38,
        "president": "Gerald Ford",
        "birth_year": 1913,
        "death_year": 2006,
        "took_office": "1974-08-09",
        "left_office": "1977-01-20",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 39,
        "president": "Jimmy Carter",
        "birth_year": 1924,
        "death_year": null,
        "took_office": "1977-01-20",
        "left_office": "1981-01-20",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 40,
        "president": "Ronald Reagan",
        "birth_year": 1911,
        "death_year": 2004,
        "took_office": "1981-01-20",
        "left_office": "1989-01-20",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 41,
        "president": "George H W Bush",
        "birth_year": 1924,
        "death_year": 2018,
        "took_office": "1989-01-20",
        "left_office": "1993-01-20",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 42,
        "president": "Bill Clinton",
        "birth_year": 1946,
        "death_year": null,
        "took_office": "1993-01-20",
        "left_office": "2001-01-20",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 43,
        "president": "George W Bush",
        "birth_year": 1946,
        "death_year": null,
        "took_office": "2001-01-20",
        "left_office": "2009-01-20",
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 44,
        "president": "Barack Obama",
        "birth_year": 1961,
        "death_year": null,
        "took_office": "2009-01-20",
        "left_office": "2017-01-20",
        "party": "Democratic",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    },
    {
        "number": 45,
        "president": "Donald J Trump",
        "birth_year": 1946,
        "death_year": null,
        "took_office": "2017-01-20",
        "left_office": null,
        "party": "Republican",
        info: "",
        links: [
            { link: "" },
            { link: "" }
        ]
    }
]


db.Presidents.remove({})
    .then(() => db.Presidents.collection.insertMany(presidentSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });