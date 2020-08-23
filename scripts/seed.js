const mongoose = require("mongoose");
const db = require("../models");

// Connect to MongoDB via Mongoose
mongoose.connect(
	// process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
    process.env.MONGODB_URI || "mongodb+srv://sla-data-user:M1ng2DB1ne.@historyportal-8strt.mongodb.net/HistoryPortal?retryWrites=true&w=majority"
);

// create the data objects
const eraSeed = [
	{
		era: "Colonial Period",
		start: "1607",
		end: "1765",
		description: "The colonial history of the United States covers the history of European colonization of America from the early 16th century until the incorporation of the colonies into the United States of America. In the late 16th century, England, France, Castile, and the Dutch Republic launched major colonization programs in America. The death rate was very high among those who arrived first, and some early attempts disappeared altogether, such as the English Lost Colony of Roanoke. Nevertheless, successful colonies were established within several decades.",
        links: [
			{ link: "https://en.wikipedia.org/wiki/Colonial_history_of_the_United_States" }
		]
    },
	{
		era: "American Revolution",
		start: "1765",
		end: "1783",
		description: "The American Revolution was an ideological and political revolution which occurred in colonial North America between 1765 and 1783. The American Patriots in the Thirteen Colonies defeated the British in the American Revolutionary War (1775–1783) with the assistance of France, winning independence from Great Britain and establishing the United States of America.",
        links: [{ link: "https://en.wikipedia.org/wiki/American_Revolution" }]
    },
	{
		era: "Confederation Period",
		start: "1783",
		end: "1788",
		description: "The Confederation Period was the era of United States history in the 1780s after the American Revolution and prior to the ratification of the United States Constitution. In 1781, the United States ratified the Articles of Confederation and prevailed in the Battle of Yorktown, the last major land battle between British and American forces in the American Revolutionary War. American independence was confirmed with the 1783 signing of the Treaty of Paris. The fledgling United States faced several challenges, many of which stemmed from the lack of a strong national government and unified political culture. The period ended in 1789 following the ratification of the United States Constitution, which established a new, more powerful, national government.",
        links: [{ link: "https://en.wikipedia.org/wiki/American_Revolution" }]
    },
	{
		era: "Federalist Era",
		start: "1788",
		end: "1801",
		description: "The Federalist Era in American history ran from 1788–1800, a time when the Federalist Party and its predecessors were dominant in American politics. During this period, Federalists generally controlled Congress and enjoyed the support of President George Washington and President John Adams. The era saw the creation of a new, stronger federal government under the United States Constitution, a deepening of support for nationalism, and diminished fears of tyranny by a central government. The era began with the ratification of the United States Constitution and ended with the Democratic-Republican Party's victory in the 1800 elections.",
        links: [{ link: "https://en.wikipedia.org/wiki/Federalist_Era" }]
    },
	{
		era: "Jeffersonian Era",
		start: "1801",
		end: "1817",
		description: "Jeffersonian democracy, named after its advocate Thomas Jefferson, was one of two dominant political outlooks and movements in the United States from the 1790s to the 1820s. The Jeffersonians were deeply committed to American republicanism, which meant opposition to what they considered to be artificial aristocracy, opposition to corruption, and insistence on virtue, with a priority for the 'yeoman farmer', 'planters', and the 'plain folk'. They were antagonistic to the aristocratic elitism of merchants, bankers, and manufacturers, distrusted factory workers, and were on the watch for supporters of the dreaded British system of government.",
        links: [{ link: "https://en.wikipedia.org/wiki/Jeffersonian_democracy" }]
    },
	{
		era: "Era of Good Feelings",
		start: "1817",
		end: "1825",
		description: "The Era of Good Feelings marked a period in the political history of the United States that reflected a sense of national purpose and a desire for unity among Americans in the aftermath of the War of 1812.[1][2] The era saw the collapse of the Federalist Party and an end to the bitter partisan disputes between it and the dominant Democratic-Republican Party during the First Party System.[3][4] President James Monroe strove to downplay partisan affiliation in making his nominations, with the ultimate goal of national unity and eliminating political parties altogether from national politics.[1][5][6] The period is so closely associated with Monroe's presidency (1817–1825) and his administrative goals that his name and the era are virtually synonymous.",
        links: [{ link: "https://en.wikipedia.org/wiki/Era_of_Good_Feelings" }]
    },
	{
		era: "Jacksonian Era",
		start: "1825",
		end: "1849",
		description: "Jacksonian democracy was a 19th-century political philosophy in the United States that expanded suffrage to most white men over the age of 21, and restructured a number of federal institutions. Originating with the seventh U.S. president, Andrew Jackson and his supporters, it became the nation's dominant political worldview for a generation. The term itself was in active use by the 1830s.",
        links: [{ link: "https://en.wikipedia.org/wiki/Jacksonian_democracy" }]
    },
	{
		era: "Civil War Era",
		start: "1850",
		end: "1865",
		description: "The American Civil War (also known by other names) was a civil war in the United States from 1861 to 1865, fought between northern states loyal to the Union and southern states that had seceded from the Union to form the Confederate States of America.[e] The civil war began primarily as a result of the long-standing controversy over the enslavement of black people. War broke out in April 1861 when secessionist forces attacked Fort Sumter in South Carolina just over a month after Abraham Lincoln had been inaugurated as the President of the United States. The loyalists of the Union in the North, which also included some geographically western and southern states, proclaimed support for the Constitution. They faced secessionists of the Confederate States in the South, who advocated for states' rights to uphold slavery.",
        links: [{ link: "https://en.wikipedia.org/wiki/American_Civil_War" }]
    },
	{
		era: "Reconstruction Era",
		start: "1865",
		end: "1877",
		description: "The Reconstruction era was the period in American history that lasted from 1863 to 1877 following the American Civil War (1861–65) and is a significant chapter in the history of American civil rights. Reconstruction ended the remnants of Confederate secession and abolished slavery, making the newly freed slaves citizens with civil rights ostensibly guaranteed by three new constitutional amendments. Reconstruction also refers to the attempt to transform the 11 Southern former Confederate states, as directed by Congress, and the role of the Union states in that transformation.",
        links: [{ link: "https://en.wikipedia.org/wiki/Reconstruction_era" }]
    },
	{
		era: "Gilded Age",
		start: "1877",
		end: "1895",
		description: "In United States history, the Gilded Age was an era that occurred during the late 19th century, from the 1870s to about 1900. The Gilded Age was an era of rapid economic growth, especially in the Northern United States and the Western United States. As American wages grew much higher than those in Europe, especially for skilled workers, the period saw an influx of millions of European immigrants. The rapid expansion of industrialization led to a real wage growth of 60%, between 1860 and 1890, and spread across the ever-increasing labor force. The average annual wage per industrial worker (including men, women, and children) rose from $380 in 1880, to $564 in 1890, a gain of 48%.[1] Conversely, the Gilded Age was also an era of abject poverty and inequality, as millions of immigrants—many from impoverished regions—poured into the United States, and the high concentration of wealth became more visible and contentious.",
        links: [{ link: "https://en.wikipedia.org/wiki/Gilded_Age" }]
    },
	{
		era: "Progressive Era",
		start: "1896",
		end: "1916",
		description: "The Progressive Era was a period of widespread social activism and political reform across the United States that spanned the 1890s to the 1920s. The main objectives of the Progressive movement were addressing problems caused by industrialization, urbanization, immigration, and political corruption. The movement primarily targeted political machines and their bosses. By taking down these corrupt representatives in office, a further means of direct democracy would be established. They also sought regulation of monopolies (trustbusting) and corporations through antitrust laws, which were seen as a way to promote equal competition for the advantage of legitimate competitors. They also advocated for new government roles and regulations, and new agencies to carry out those roles, such as the FDA.",
        links: [{ link: "https://en.wikipedia.org/wiki/Progressive_Era" }]
    },
	{
		era: "World War I",
		start: "1917",
		end: "1919",
		description: "The United States declared war on Germany on April 6, 1917, nearly three years after World War I started. A ceasefire and Armistice was declared on November 11, 1918. Before entering the war, the U.S. had remained neutral, though it had been an important supplier to the United Kingdom, France, and the other Allied powers.",
        links: [{ link: "https://en.wikipedia.org/wiki/United_States_in_World_War_I" }]
    },
	{
		era: "Roaring Twenties",
		start: "1920",
		end: "1929",
		description: "The Roaring Twenties (sometimes stylized as the Roarin' Twenties) refers to the decade of the 1920s in Western society and Western culture. It was a period of economic prosperity with a distinctive cultural edge in the United States and Europe, particularly in major cities such as Berlin,[1] Chicago,[2] London,[3] Los Angeles,[4] New York City,[5] Paris,[6] and Sydney.[7] In France, the decade was known as the 'années folles' ('crazy years'),[8] emphasizing the era's social, artistic and cultural dynamism. Jazz blossomed, the flapper redefined the modern look for British and American women,[9][10] and Art Deco peaked.[11] In the wake of the patriotism of World War I, President Warren G. Harding 'brought back normalcy' to the politics of the United States. This period saw the large-scale development and use of automobiles, telephones, movies, radio, and electrical appliances being installed in the lives of millions of Westerners. Aviation soon became a business. Nations saw rapid industrial and economic growth, accelerated consumer demand, and introduced significantly new changes in lifestyle and culture. The media, funded by the new industry of mass-market advertising driving consumer demand, focused on celebrities, especially sports heroes and movie stars, as cities rooted for their home teams and filled the new palatial cinemas and gigantic sports stadiums. In many major democratic states, women won the right to vote.",
        links: [{ link: "https://en.wikipedia.org/wiki/Roaring_Twenties" }]
    },
	{
		era: "Great Depression",
		start: "1929",
		end: "1941",
		description: "The Great Depression began with the Wall Street Crash in October 1929. The stock market crash marked the beginning of a decade of high unemployment, poverty, low profits, deflation, plunging farm incomes, and lost opportunities for economic growth as well as for personal advancement. Altogether, there was a general loss of confidence in the economic future.",
        links: [{ link: "https://en.wikipedia.org/wiki/Great_Depression_in_the_United_States" }]
    },
	{
		era: "World War II",
		start: "1941",
		end: "1945",
		description: "The military history of the United States in World War II covers the war against the Axis powers, starting with the 7 December 1941 attack on Pearl Harbor. During the first two years of World War II, the United States had maintained formal neutrality as made official in the Quarantine Speech delivered by U.S. President Franklin D. Roosevelt in 1937, while supplying Britain, the Soviet Union, and China with war material through the Lend-Lease Act which was signed into law on 11 March 1941, as well as deploying the U.S. military to replace the British forces stationed in Iceland. Following the 'Greer incident' Roosevelt publicly confirmed the 'shoot on sight' order on 11 September 1941, effectively declaring naval war on Germany and Italy in the Battle of the Atlantic.[1] In the Pacific Theater, there was unofficial early U.S. combat activity such as the Flying Tigers.",
		links: [{ link: "https://en.wikipedia.org/wiki/Military_history_of_the_United_States_during_World_War_II"}]
    },
	{
		era: "Post-War Era",
		start: "1945",
		end: "1964",
		description: "For the United States, 1945–1964 was a time of high economic growth and general prosperity. It was also a time of confrontation as the capitalist United States and its allies politically opposed the Soviet Union and other communist countries; the Cold War had begun. African Americans united and organized, and a triumph of the Civil Rights Movement ended Jim Crow segregation in the South. Further laws were passed that made discrimination illegal and provided federal oversight to guarantee voting rights.",
        links: [{ link: "https://en.wikipedia.org/wiki/History_of_the_United_States_(1945%E2%80%931964)" }]
    },
	{
		era: "Civil Rights Era",
		start: "1965",
		end: "1980",
		description: "The history of the United States from 1964 through 1980 includes the climax and victory of the Civil Rights Movement; the escalation and ending of the Vietnam War; the drama of a generational revolt with its sexual freedoms and use of drugs; and the continuation of the Cold War, with its Space Race to put a man on the Moon. The economy was prosperous and expanding until the recession of 1969–70, then faltered under new foreign competition and the 1973 oil crisis. American society was polarized by the ultimately futile war and by antiwar and antidraft protests, as well as by the shocking Watergate affair, which revealed corruption and gross misconduct at the highest level of government. By 1980 and the seizure of the American Embassy in Iran, including a failed rescue attempt by U.S. armed forces, there was a growing sense of national malaise.",
        links: [{ link: "https://en.wikipedia.org/wiki/History_of_the_United_States_(1964%E2%80%931980)" }]
    },
	{
		era: "Reagan Era",
		start: "1981",
		end: "1991",
		description: "The Reagan Era or Age of Reagan is a periodization of recent American history used by historians and political observers to emphasize that the conservative 'Reagan Revolution' led by President Ronald Reagan in domestic and foreign policy had a lasting impact. It overlaps with what political scientists call the Sixth Party System. Definitions of the Reagan Era universally include the 1980s, while more extensive definitions may also include the late 1970s, the 1990s, the 2000s, the 2010s, and even the 2020s. In his 2008 book, The Age of Reagan: A History, 1974–2008, historian and journalist Sean Wilentz argues that Reagan dominated this stretch of American history in the same way that Franklin D. Roosevelt and his New Deal legacy dominated the four decades that preceded it.",
        links: [{ link: "https://en.wikipedia.org/wiki/Reagan_Era" }]
    },
	{
		era: "Post Cold War Era",
		start: "1991",
		end: "2008",
		description: "The history of the United States from 1991 to 2008 began after the fall of the Soviet Union which signaled the end of the Cold War and left the U.S. unchallenged as the world's dominant superpower. The U.S. took a leading role in military involvement in the Middle East. The U.S. expelled an Iraqi invasion force from Kuwait, a Middle Eastern ally of the U.S., in the Persian Gulf War. On the domestic front, the Democrats won a return to the White House with the election of Bill Clinton in 1992. In the 1994 midterm election, the Republicans won control of Congress for the first time in 40 years. Strife between Clinton and the Republicans in Congress initially resulted in a federal government shutdown following a budget crisis, but later they worked together to pass welfare reform, the Children's Health Insurance Program, and a balanced budget. Charges from the Lewinsky scandal led to the 1998 impeachment of Clinton by the House of Representatives but he was later acquitted by the Senate. The U.S. economy boomed in the enthusiasm for high-technology industries in the 1990s until the NASDAQ crashed as the dot-com bubble burst and the early 2000s recession marked the end of the sustained economic growth.",
        links: [{ link: "https://en.wikipedia.org/wiki/History_of_the_United_States_(1945%E2%80%931964)" }]
    },
	{
		era: "Modern Day",
		start: "2008",
		end: "present",
		description: "The history of the United States from 2008 to the present began with the collapse of the housing bubble, which led to the Great Recession, and helped the Democrats win the presidency in 2008 with the election of Barack Obama, the country's first African-American president. The government issued large loans and enacted economic stimulus packages that aimed to improve the economy. Obama's domestic initiatives also included the Patient Protection and Affordable Care Act, which by means of large reforms to the American healthcare system, created a National Health Insurance program. President Obama eventually withdrew combat troops from Iraq, and shifted the country's efforts in the War on Terror to Afghanistan, where a troop surge was initiated in 2009. In 2010, due to continued public discontent with the economic situation, unemployment, and federal spending, Republicans regained control of the House of Representatives and reduced the Democratic majority in the Senate.",
        links: [{ link: "https://en.wikipedia.org/wiki/History_of_the_United_States_(2008%E2%80%93present)" }]
    },
];

db.Era.remove({})
	.then(() => db.Era.collection.insertMany(eraSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});