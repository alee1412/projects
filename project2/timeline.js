
  var container = document.getElementById('visualization');

  // note that months are zero-based in the JavaScript Date object
  var items = new vis.DataSet([
    {id: 'A', content: 'Recession', start: '2007-12-31', end: '2009-06-01', type: 'background'},
    {id: 'B', content: 'Occupy Wall Street', start: '2011-9-17', end: '2012-01-01', type: 'background'},
    {id: 'C', content: 'Government shuts down from 1-16th due to ACA', start: '2013-01-01', end: '2013-01-16', type: 'background'},    

    {start: new Date(2008,1,22),  content: 'Housing Bubble Pops'},
    {start: new Date(2008,2,5),  content: 'US Stock Market Starts to Plunge'},
    {start: new Date(2008,2,12),  content: 'Writer Strike Ends'},
    {start: new Date(2008,3,18), content: 'Fed Begins Bailouts'},
    {start: new Date(2008,4,28), content: 'General Motors start huge layoffs starting with 3 plants and cutting production of vehicles'},
    {start: new Date(2008,6,27), content: 'Bill Gates steps down from Microsoft'},
    {start: new Date(2008,9,7), content: 'US Govt takes control of Fannie Mae and Freddie Mac'},
    {start: new Date(2008,9,15), content: 'Lehman Brothers fails and triggers global panic'},
    {start: new Date(2008,9,16), content: 'AIG shortly gets bought by Fed '},
    {start: new Date(2008,9,26), content: 'WaMu goes bankrupt'},
    {start: new Date(2008,9,29), content: 'Largest one day drop in stock market history'},
    {start: new Date(2008,10,3),  content: 'Congress approves $700B bailout for Too-Big-To-Fail'},
    {start: new Date(2008,10,6),  content: 'Global Markets Fail'},
    {start: new Date(2008,10,7),  content: '$1.7T loan program introduced by Fed'},
    {start: new Date(2008,10,21),  content: '$540B loan from fed to bail out Money Market Funds '},
    {start: new Date(2008, 11, 1), content: 'Obama Elected'},
    {start: new Date(2008,12,1),content: 'Big 3: GM, Chrysler, Ford get bailout money'},
    {start: new Date(2009,1,9),  content: 'Labor Department reports that US Economy lost nearly 2 million jobs from Sept-Dec '},
    {start: new Date(2009,2,17), content: 'American Recovery and Reinvestment Act passed '},
    {start: new Date(2009,3,5),  content: 'Dow drops 53.4% worse since Great Depression of 1929'},
    {start: new Date(2009,3,13),  content: 'Fed reports that US families on average lost 18% of their wealth'},
    {start: new Date(2009,4,1), content: 'Unemployment hits 9% for the first time since 1982 '},
    {start: new Date(2009,5,9),  content: 'Obama announces vehicle emission and mileage requirements, Congress passes a bill imposing regulations on credit card industry'},
    {start: new Date(2009,6,1), content: 'Great Recession officially ends, however unemployment is at 9.5%'},
    {start: new Date(2009,10,1),content: 'Unemployment hits 10%'},
    {start: new Date(2009,11,1), content: 'CIT, a lender for small businesses, files bankruptcy they do not have to pay back TARP $2B'},
    {start: new Date(2010, 1, 27),  content: 'First State of the Union Address by Obama'},
    {start: new Date(2010, 2, 18),  content: 'Obama establishes National Commission on Fiscal Responsibility and Reform to regulate spending'},
    {start: new Date(2010, 3, 23),  content: 'ObamaCare AKA Affordable Care Act is passed'},
    {start: new Date(2010, 6, 19),  content: 'China announces it will raise yuan against USD, increasing prices for goods from China'},
    {start: new Date(2010, 7, 15),  content: 'BP Oil Spill'},
    {start: new Date(2010, 7, 21),  content: 'Dodd-Frank Wall Street Reform Act'},
    {start: new Date(2010,8,1),  content: 'Start of the 2010-2013 Southern US & Mexico Draught '},
    {start: new Date(2010, 12, 17),  content: 'Tax relief Act'},
    {start: new Date(2010, 12, 21),  content: 'Net neutrality laws passed'},
    {start: new Date(2011, 2, 7),  content: 'AOL Purchases Huffington Post'},
    {start: new Date(2011, 2, 14),  content: 'Deficit even after budget cuts is $1T'},
    {start: new Date(2011, 3, 16),  content: 'Wholesale food prices rose by the largest monthly increase since 1974, 3.9%'},
    {start: new Date(2011, 6, 21),  content: 'FDA requires cigarette packs to feature graphic images'},
    {start: new Date(2011, 7, 23),  content: '4000 employees of US Federal Aviation Admin are furloughed due to program lapsing'},
    {start: new Date(2011, 7, 26),  content: 'USPS sent list of 3,653 possible closures'},
    {start: new Date(2011, 8, 2),  content: 'Budget Control Act of 2011 raising debt-ceiling crisis '},
    {start: new Date(2011, 8, 9),  content: 'Fed announces it will continue to keep the interest at really low levels'},
    {start: new Date(2011, 8, 31),  content: 'Solyndra declares bankruptcy after taking $500M from fed 2 years prior'},
    {start: new Date(2011, 9, 8),  content: 'American Jobs Act a.k.a. Third Stimulus Package announced'},
    {start: new Date(2011, 9, 12),  content: 'Bank of America announces 30,000 layoffs'},
    {start: new Date(2011, 10, 11),  content: 'American Jobs Act fails to pass Senate'},
    {start: new Date(2011, 11, 21),  content: 'US debt finally tops US GDP - first time since late 1940'},
    {start: new Date(2011, 11, 29),  content: 'AMR American Airlines parent company files bankruptcy'},
    {start: new Date(2012, 1, 1),  content: 'Beginning of the 2012-2013 North American Draught'},
    {start: new Date(2012, 1, 18),  content: 'Telephone Consumer Protection Act'},
    {start: new Date(2012, 6, 15),  content: 'Obama presidential order to stop deporting some illegal immigrants '},
    {start: new Date(2012, 6, 18),  content: 'Supreme Court upholds Affordable Care Act'},
    {start: new Date(2012, 11, 6),  content: 'Obama re-elected'},
    {start: new Date(2012, 11, 15),  content: 'Deepwater Horizon Oil Spill'},
    {start: new Date(2012, 11, 16),  content: 'Hostess Brands announces bankruptcy'},
    {start: new Date(2012, 12, 7),  content: 'Toyota pays $1B in multiple lawsuits for sudden acceleration'},
    {start: new Date(2013, 1, 2),  content: 'Obama signs the American Taxpayer Relief Act of 2012'},
    {start: new Date(2013, 1, 3),  content: 'Subaru issues recall for 634,000 cars'},
    {start: new Date(2013, 1, 7),  content: '10 Large bank settle to stop mortgage foreclosure audits for $8.5B'},
    {start: new Date(2013, 1, 23),  content: 'THQ a formerly $2B video game company declares bankruptcy'},
    {start: new Date(2013, 2, 5),  content: 'Dell announces it will go private after $24B buyout'},
    {start: new Date(2013, 2, 6),  content: 'USPS announces it will no longer deliver first-class mail on Saturdays'},
    {start: new Date(2013, 2, 14),  content: 'US Airways and American Airlines announce merger to American Airlines'},
    {start: new Date(2013, 1, 13),  content: '2013 Federal Budget Sequestration begins'},
    {start: new Date(2013, 3, 23),  content: 'Senate approves federal budget by a vote of 50-49'},
    {start: new Date(2013, 4, 3),  content: 'Disney shuts down LucasArts'},
    {start: new Date(2013, 4, 10),  content: 'USPS forced by Congress to continue mail on Saturdays'},
    {start: new Date(2013, 9, 2),  content: 'Verizon buys Vodafone for $130B '},
    {start: new Date(2013, 9, 3),  content: 'Microsoft purchases Nokia mobile device division $7.2B'},
    {start: new Date(2013, 11, 16),  content: 'US Labor Department states unemployment is down to 7% as 203,000 jobs were added'},
    {start: new Date(2013, 12, 16),  content: 'Google purchases Boston Dynamics'},
    {start: new Date(2013, 12, 26),  content: '2013 bipartisan budget deal passed'},
    {start: new Date(2014, 1, 1),  content: '13 states increase minimum wages'},
    {start: new Date(2014, 1, 1),  content: 'Colorado allows sale of recreational cannabis '},
    {start: new Date(2014, 1, 1),  content: 'Provisions of Energy Independence and Security Act of 2007 bans sale of 40 to 60 watt incandescent light bulbs'},
    {start: new Date(2014, 2, 12),  content: 'Obama signs executive order increasing federal worker minimum wage from $7.25 to $10.10'},
    {start: new Date(2014, 2, 13),  content: 'Comcast buys Time Warner Cable $45B'},
    {start: new Date(2014, 2, 14),  content: 'Workers at Volkswagen Chattanooga Assembly Plant in Tennessee reject unionization'},
    {start: new Date(2014, 3, 13),  content: 'Obama signs executive order directed at DOL to regulating overtime pay more closely'},
    {start: new Date(2014, 3, 24),  content: 'Disney purchases Maker Studios $500M'},
    {start: new Date(2014, 3, 26),  content: 'Connecticut raises minimum wage from $8.70 to $10.10'},
    {start: new Date(2014, 4, 23),  content: 'FCC reverses decision on Net Neutrality'},
    {start: new Date(2014, 4, 24),  content: 'FDA starts regulating E-Cigs'},
    {start: new Date(2014, 5, 15),  content: 'FCC starts Net Neutrality up once again'},
    {start: new Date(2014, 6, 2),  content: 'Seattle raises minimum wage to $15/hr making it highest in the US '},
    {start: new Date(2014, 7, 16),  content: 'Obama announces sanctions targeting Russia Banking and energy sectors due to Ukraine Crisis and Crimea annexation'},
    {start: new Date(2014, 8, 26),  content: 'Amazon purchases Twitch for $970M '},
    {start: new Date(2014, 9, 3),  content: 'CVS phases out cigarette sales'},
    {start: new Date(2014, 9, 15),  content: 'Microsoft purchases Mojang for $2B'},
    {start: new Date(2014, 10, 1),  content: 'US DOL reports unemployment at 5.9%'},
    {start: new Date(2014, 11, 12),  content: 'US and China agree to start reducing CO2 emissions'},
    {start: new Date(2014, 11, 20),  content: 'Obama announces that he will use executive action to grant citizenship to nearly 4.4 million illegal immigrants'},
    {start: new Date(2014, 12, 17),  content: 'US Embargo against Cuba ends and normal relations resume'},
    {start: new Date(2014, 12, 17),  content: 'New York becomes first state to issue a full and complete ban on hydraulic fracturing (oil)'},
    {start: new Date(2014, 12, 28),  content: 'US and UK officially start the withdrawal of troops from Afghanistan'},
    {start: new Date(2015, 1, 1),  content: 'ACA starts giving out larger payments to physicians'},
    {start: new Date(2015, 1, 1),  content: '7 states raise minimum wage (AR, CT, FL, OH, MD, MA, RI)'},
    {start: new Date(2015, 1, 5),  content: 'California starts construction of $68B California High Speed Rail System trying to connect LA to SF by 2029'},
    {start: new Date(2015, 2, 5),  content: 'RadioShack files for bankruptcy'},
    {start: new Date(2015, 2, 26),  content: 'FCC rules in favor of net neutrality'},
    {start: new Date(2015, 4, 1),  content: 'Gov. Brown signs executive order for all of California to reduce water use by 25% due to severe drought'},
    {start: new Date(2015, 6, 30),  content: 'US and Brazil announce a statement that they will be lowering greenhouse gas emissions and to have 20% of electricity from renewable energy sources by 2020'},
    {start: new Date(2015, 7, 2),  content: 'BP pays DoJ $18.7B for 2010 BP Oil Spill, largest fine in US history'},
    {start: new Date(2015, 7, 24),  content: 'US DOT opens national investigation for airline price gouging'},
    {start: new Date(2015, 7, 26),  content: "Verizon employees in 9 states go on strike if wages don't increase (CT, DE, MD, MA, NJ, NY, PA, RI, VA, DC)"},
    {start: new Date(2015, 8, 3),  content: 'Clean Power Plan introduced'},
    {start: new Date(2015, 8, 23),  content: 'McDonalds and Tyson severs tie with farm based off expose video detailing animal cruelty'},
    {start: new Date(2015, 9, 18),  content: 'Obama orders Volkswagen to recall 500,000 vehicles for failure to follow Clean Air Act emission levels'},
    {start: new Date(2015, 10, 1),  content: 'Unemployment drops to 5%, or where it was before the Great Recession'},
    {start: new Date(2016, 1, 16),  content: 'Obama announces federal state of emergency in Flint, Michigan due to contamination of tap water'},
    {start: new Date(2016, 4, 5),  content: 'Pharma companies Pfizer and Allergan terminate $160B merger due to Obama Administrations new regulation on tax inversion'},
    {start: new Date(2016, 4, 28),  content: 'Comcast purchases DreamWorks Animation $3.8B'},
    {start: new Date(2016, 12, 14),  content: 'Fed Reserve raises interest rates'},
    {start: new Date(2016, 12, 19),  content: 'Donald Trump is elected'},
    {start: new Date(2016, 12, 23),  content: 'US and Canada agree to permanently ban oil and gas drilling in most of Arctic and Atlantic Oceans'},
    {start: new Date(2017, 1, 23),  content: 'Trump signs executive order withdrawing US from TPP'},
    {start: new Date(2017, 1, 23),  content: 'Trump executive order in freezing hiring to fed government'},
    {start: new Date(2017, 1, 24),  content: 'Trump signs memorandum to allow Dakota Access Pipeline and Keystone XL pipeline '},
    {start: new Date(2017, 1, 24),  content: 'Trump freezes all new research grants and contracts for EPA '},
    {start: new Date(2017, 2, 3),  content: 'Trump signs executive order to scale back Dodd-Frank Wall Street Reform and Consumer Protection Act put in place during Great Recession'},
    {start: new Date(2017, 3, 15),  content: 'US Fed Raises rates again'},
    {start: new Date(2017, 3, 28),  content: 'Trump signs executive order for Energy Independence increasing coal and fossil fuel production'},
    {start: new Date(2017, 6, 1),  content: 'Trump announces intentions to withdraw the US from Paris Agreement'},
    {start: new Date(2017, 6, 14),  content: 'Fed Raises rates for a record second time and rates are at highest levels since 2008'},
    {start: new Date(2017, 9, 5),  content: 'Deferred Action for Childhood Arrivals, DACA, will be scrapped'},
    {start: new Date(2017, 9, 18),  content: 'Toys “R” Us files for Bankruptcy'},
    {start: new Date(2017, 11, 13),  content: 'Senate passes Tax Cuts and Jobs Act of 2017, 2nd, Fed raises interest rates for 3rd time '},
    {start: new Date(2017, 12, 14),  content: 'Disney announces it will buy 21st Century Fox for $52.4B, Net neutrality repealed'},
    {start: new Date(2017, 12, 18),  content: 'Trump announces climate change is dropped as a national security threat '},
    {start: new Date(2018, 3, 1),  content: 'Trump announces tariffs of 25% on steel and 10% on aluminum'},
    {start: new Date(2018, 3, 16),  content: 'Cambridge Analytica accused of mishandling Facebook user data'},
    {start: new Date(2018, 3, 22),  content: 'Trump announces tariffs on Chinese Goods to limit China’s investment in the US'},
    {start: new Date(2018, 4, 4),  content: 'China announces 25% tariffs on 106 US Products including cars and soybeans'},
    {start: new Date(2018, 5, 4),  content: 'Fed Labor Department reports unemployment at 3.9% lowest since 2000'},
    {start: new Date(2018, 5, 5),  content: 'California becomes world’s 5th largest economy with GDP surpassing the UK'},
    {start: new Date(2018, 5, 9),  content: 'CA introduces 2019 Building Energy Efficiency Standards, first state to enact that all new homes to be fitted with solar power'},
    {start: new Date(2018, 5, 20),  content: 'US puts tariffs on Chinese imports on hold to avert trade war'},
    {start: new Date(2018, 5, 21),  content: 'Law prevents employees from filing class action lawsuits against employers over pay and hour disputes'},
    {start: new Date(2018, 5, 31),  content: 'Trump admin announces tariffs on EU, Mexico, and Canada on the steel 25% and aluminum 10%'},
    {start: new Date(2018, 6, 25),  content: 'Harley-Davidson that it will shift some production outside the US due to tariffs'},
    {start: new Date(2018, 7, 6),  content: 'US Tariffs on China begin and China announces immediate retaliatory tariffs'},
    {start: new Date(8, 1, 2018),  content: 'US Department of Commerce applies tariffs on Canadian newsprint'},
    {start: new Date(),  content: ''},

    // {start: new Date(1945,3,16), content: 'Battle of Berlin - End of the Third Reich'}
  ]);

  var options = {
    // Set global item type. Type can also be specified for items individually
    // Available types: 'box' (default), 'point', 'range'
    start: '2008-01-10',
    end: '2008-12-31',
    editable: false,
    type: 'point',
    showMajorLabels: true, //changes whether year shows up or not
    // autoResize: true
  };

  var timeline = new vis.Timeline(container, items, options);

    /**
     * Move the timeline a given percentage to left or right
     * @param {Number} percentage   For example 0.1 (left) or -0.1 (right)
     */
    function move (percentage) {
        var range = timeline.getWindow();
        var interval = range.end - range.start;

        timeline.setWindow({
            start: range.start.valueOf() - interval * percentage,
            end:   range.end.valueOf()   - interval * percentage
        });
    }

    // attach events to the navigation buttons
    document.getElementById('zoomIn').onclick    = function () { timeline.zoomIn( 0.2); };
    document.getElementById('zoomOut').onclick   = function () { timeline.zoomOut( 0.2); };
    document.getElementById('moveLeft').onclick  = function () { move( 0.2); };
    document.getElementById('moveRight').onclick = function () { move(-0.2); };


