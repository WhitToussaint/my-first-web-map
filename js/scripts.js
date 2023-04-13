// a list of MDIs and CDFIs in New York City sourced from FDIC.gov
const pizzaData = [

    {
        "first-name": "Industrial Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "382 West 125 Street",
        "longitude": -73.95366039,
        "latitude": 40.81123737,
        "program": "African American"
    },
    {
        "first-name": "Cathay Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "40-14/16 Main Street",
        "longitude": -73.83089794,
        "latitude": 40.76595706,
        "program": "Asian American"
    },
    {
        "first-name": "Cathay Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "82-62 Broadway",
        "longitude": -73.88146829,
        "latitude": 40.74562382,
        "program": "Asian American"
    },
    {
        "first-name": "Cathay Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "235 5th Ave",
        "longitude": -73.98754436,
        "latitude": 40.74638054,
        "program": "Asian American"
    },
    {
        "first-name": "Cathay Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "45 East Broadway",
        "longitude": -73.99579824,
        "latitude": 40.71880309,
        "program": "Asian American"
    },
    {
        "first-name": "Cathay Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "5402 Eighth Avenue",
        "longitude": -74.00772269,
        "latitude": 40.64516077,
        "program": "Asian American"
    },
    {
        "first-name": "Cathay Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "41-48 Main Street",
        "longitude": -73.83039309,
        "latitude": 40.76372883,
        "program": "Asian American"
    },
    {
        "first-name": "Cathay Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "36-54 Main Street",
        "longitude": -73.83192791,
        "latitude": 40.76803724,
        "program": "Asian American"
    },
    {
        "first-name": "Cathay Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "6912 18th Avenue",
        "longitude": -73.99442309,
        "latitude": "40.62086523",
        "program": "Asian American"
    },
    {
        "first-name": "Ctbc Bank Corp. (Usa)",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "41-99 Main Street",
        "longitude": -73.82982552,
        "latitude": 40.76153694,
        "program": "Asian American"
    },
    {
        "first-name": "Ctbc Bank Corp. (Usa)",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "54-18 8th Avenue",
        "longitude": -74.0066015,
        "latitude": 40.64378349,
        "program": "Asian American"
    },
    {
        "first-name": "United Orient Bank",
        "pizza-shop-name": "Headquarters",
        "place": "10 Chatham Sq",
        "longitude": -73.9979634,
        "latitude": 40.7141864,
        "program": "Asian American"
    },
    {
        "first-name": "United Orient Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "185 Canal Street",
        "longitude": -73.99766299,
        "latitude": 40.71726029,
        "program": "Asian American"
    },
    {
        "first-name": "Hanmi Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "325 Fifth Avenue",
        "longitude": -73.98455541,
        "latitude": 40.75706515,
        "program": "Asian American"
    },
    {
        "first-name": "International Finance Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "623 5th Avenue, Suite Tbd",
        "longitude": -73.97640983,
        "latitude": 40.75803366,
        "program": "Hispanic American"
    },
    {
        "first-name": "Woori America Bank",
        "pizza-shop-name": "Headquarters",
        "place": "330 5th Ave",
        "longitude": -73.98526168,
        "latitude": 40.75016113,
        "program": "Asian American"
    },
    {
        "first-name": "Woori America Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "136-88 39th Avenue",
        "longitude": -73.82708374,
        "latitude": 40.76427954,
        "program": "Asian American"
    },
    {
        "first-name": "Woori America Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "43-22 50th Street",
        "longitude": -73.91591049,
        "latitude": 40.74625968,
        "program": "Asian American"
    },
    {
        "first-name": "Woori America Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "215-10 Northern Boulevard",
        "longitude": -73.97427535,
        "latitude": 40.75757324,
        "program": "Asian American"
    },
    {
        "first-name": "Woori America Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "164-25 Northern Blvd",
        "longitude": -73.80116287,
        "latitude": 40.76297936,
        "program": "Asian American"
    },
    {
        "first-name": "Eastbank, National Association",
        "pizza-shop-name": "Headquarters",
        "place": "183 Centre St",
        "longitude": -73.99979952,
        "latitude": 40.71857297,
        "program": "Asian American"
    },
    {
        "first-name": "Eastbank, National Association",
        "pizza-shop-name": "Limited Service - Drive Thru/Detached Facility",
        "place": "136-81 Roosevelt Avenue",
        "longitude": -73.82737379,
        "latitude": 40.76075736,
        "program": "Asian American"
    },
    {
        "first-name": "Bank Of Hope",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "50-15 Roosevelt Avenue",
        "longitude": -73.9143467,
        "latitude": 40.74720242,
        "program": "Asian American"
    },
    {
        "first-name": "Bank Of Hope",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "138-02 Northern Boulevard",
        "longitude": -73.82734216,
        "latitude": 40.7647339,
        "program": "Asian American"
    },
    {
        "first-name": "Bank Of Hope",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "16 West 32nd Street",
        "longitude": -73.98702932,
        "latitude": 40.75109819,
        "program": "Asian American"
    },
    {
        "first-name": "Bank Of Hope",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "209-07 Northern Blvd.",
        "longitude": -73.77361215,
        "latitude": 40.76213354,
        "program": "Asian American"
    },
    {
        "first-name": "Bank Of Hope",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "162-05 Crocheron Ave",
        "longitude": -73.80382455,
        "latitude": 40.76551399,
        "program": "Asian American"
    },
    {
        "first-name": "Bank Of Hope",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "13802 Northern Blvd",
        "longitude": -73.82860005,
        "latitude": 40.7663503,
        "program": "Asian American"
    },
    {
        "first-name": "Bank Of Hope",
        "pizza-shop-name": "Limited Service - Drive Thru/Detached Facility",
        "place": "485 Great Neck Rd",
        "longitude": -73.73148993,
        "latitude": 40.77839423,
        "program": "Asian American"
    },
    {
        "first-name": "Keb Hana Bank Usa, National Association",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "309 5th Avenue",
        "longitude": -73.98689699,
        "latitude": 40.76033472,
        "program": "Asian American"
    },
    {
        "first-name": "Keb Hana Bank Usa, National Association",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "156-44 Northern Blvd",
        "longitude": -73.80836916,
        "latitude": 40.77385588,
        "program": "Asian American"
    },
    {
        "first-name": "Amerasia Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "214-01 Northern Blvd",
        "longitude": -73.76986432,
        "latitude": 40.76319917,
        "program": "Asian American"
    },
    {
        "first-name": "Amerasia Bank",
        "pizza-shop-name": "Headquarters",
        "place": "4106 Main St",
        "longitude": -73.83028913,
        "latitude": 40.76137889,
        "program": "Asian American"
    },
    {
        "first-name": "Amerasia Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "86-26 Broadway",
        "longitude": -73.87749601,
        "latitude": 40.74018186,
        "program": "Asian American"
    },
    {
        "first-name": "Carver Federal Savings Bank",
        "pizza-shop-name": "Headquarters",
        "place": "75 W 125th St",
        "longitude": -73.94618202,
        "latitude": 40.81956904,
        "program": "African American"
    },
    {
        "first-name": "Carver Federal Savings Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "1392 Fulton Street",
        "longitude": -73.979141,
        "latitude": 40.69786326,
        "program": "African American"
    },
    {
        "first-name": "Carver Federal Savings Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "1009 Nostrand Avenue",
        "longitude": -73.95167518,
        "latitude": 40.67287044,
        "program": "African American"
    },
    {
        "first-name": "Carver Federal Savings Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "115-02 Merrick Blvd",
        "longitude": -73.77864051,
        "latitude": 40.70098671,
        "program": "African American"
    },
    {
        "first-name": "Carver Federal Savings Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "142 Malcolm X Boulevard",
        "longitude": -73.94686866,
        "latitude": 40.80865583,
        "program": "African American"
    },
    {
        "first-name": "Carver Federal Savings Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "4 Hanson Place",
        "longitude": -73.97708106,
        "latitude": 40.69421906,
        "program": "African American"
    },
    {
        "first-name": "Carver Federal Savings Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "833 Flatbush Avenue",
        "longitude": -73.96266151,
        "latitude": 40.66297486,
        "program": "African American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "952 Southern Boulevard, 2nd Floor",
        "longitude": -73.89193753,
        "latitude": 40.83550641,
        "program": "Hispanic American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Headquarters",
        "place": "2244 Westchester Ave",
        "longitude": -73.85142544,
        "latitude": 40.84485691,
        "program": "Hispanic American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "207 E 106th St",
        "longitude": -73.941376,
        "latitude": 40.80224949,
        "program": "Hispanic American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "37-47 82nd Street",
        "longitude": -73.87820462,
        "latitude": 40.75857448,
        "program": "Hispanic American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "51 East 170th St.",
        "longitude": -73.91185025,
        "latitude": 40.85108985,
        "program": "Hispanic American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "169 Smith Street",
        "longitude": -73.99081448,
        "latitude": 40.70081703,
        "program": "Hispanic American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "5560 Broadway",
        "longitude": -73.90429714,
        "latitude": 40.88899425,
        "program": "Hispanic American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "1900 Ralph Avenue",
        "longitude": -73.9216424,
        "latitude": 40.637640532305085,
        "program": "Hispanic American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "3405 Broadway",
        "longitude": -73.92352322,
        "latitude": 40.773656,
        "program": "Hispanic American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "100-20 Queens Blvd",
        "longitude": -73.8582919,
        "latitude": 40.73984783,
        "program": "Hispanic American"
    },
    {
        "first-name": "Ponce Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "319 1st Avenue",
        "longitude": -73.98394802,
        "latitude": 40.74609063,
        "program": "Hispanic American"
    },
    {
        "first-name": "East West Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "77 Bowery",
        "longitude": -73.99511398,
        "latitude": 40.73223587,
        "program": "Asian American"
    },
    {
        "first-name": "East West Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "38-05 Union Street",
        "longitude": -73.82482589,
        "latitude": 40.77176825,
        "program": "Asian American"
    },
    {
        "first-name": "East West Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "208 Canal Street",
        "longitude": -73.9999205,
        "latitude": 40.7306749,
        "program": "Asian American"
    },
    {
        "first-name": "East West Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "135-11 Roosevelt Avenue",
        "longitude": -73.83512557,
        "latitude": 40.77176825,
        "program": "Asian American"
    },
    {
        "first-name": "East West Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "5801 8th Avenue",
        "longitude": -74.01639999,
        "latitude": 40.65153778,
        "program": "Asian American"
    },
    {
        "first-name": "East West Bank",
        "pizza-shop-name": "Limited Service - Drive Thru/Detached Facility",
        "place": "535 Madison Avenue, 8th Floor",
        "longitude": -73.9683348,
        "latitude": 40.77540821,
        "program": "Asian American"
    },
    {
        "first-name": "Abacus Federal Savings Bank",
        "pizza-shop-name": "Headquarters",
        "place": "6 Bowery",
        "longitude": -73.999921,
        "latitude": 40.72842395,
        "program": "Asian American"
    },
    {
        "first-name": "Abacus Federal Savings Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "4824 8th Ave",
        "longitude": -73.99648777,
        "latitude": 40.65397268,
        "program": "Asian American"
    },
    {
        "first-name": "Abacus Federal Savings Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "36-30 Main Street",
        "longitude": -73.83581272,
        "latitude": 40.77575871,
        "program": "Asian American"
    },
    {
        "first-name": "Abacus Federal Savings Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "116 Nassau Street",
        "longitude": -74.01090733,
        "latitude": 40.72426104,
        "program": "Asian American"
    },
    {
        "first-name": "Shinhan Bank America",
        "pizza-shop-name": "Headquarters",
        "place": "475 Park Ave S",
        "longitude": -73.96009607,
        "latitude": 40.75530698,
        "program": "Asian American"
    },
    {
        "first-name": "Shinhan Bank America",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "136-20 38th Avenue",
        "longitude": -73.83169336,
        "latitude": 40.77090926,
        "program": "Asian American"
    },
    {

        "first-name": "Shinhan Bank America",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "150-29 Northern Blvd",
        "longitude": -73.81178064,
        "latitude": 40.79586529,
        "program": "Asian American"
    },
    {
        "first-name": "Shinhan Bank America",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "211-11 Northern Boulevard",
        "longitude": -73.77744836,
        "latitude": 40.78702777,
        "program": "Asian American"
    },
    {
        "first-name": "Shinhan Bank America",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "252-20 Northern Blvd.",
        "longitude": -73.71565026,
        "latitude": 40.78130874,
        "program": "Asian American"
    },
    {
        "first-name": "Preferred Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "41-60 Main Street",
        "longitude": -73.82997682,
        "latitude": 40.75904009,
        "program": "Asian American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "285 Madison Avenue",
        "longitude": -73.97626641,
        "latitude": 40.75392819,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Headquarters",
        "place": "85 Broad St",
        "longitude": -74.01011563,
        "latitude": 40.70705922,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "1979 Ralph Avenue",
        "longitude": -73.91272434,
        "latitude": 40.63157037,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "301 East Fordham Road",
        "longitude": -73.89139067,
        "latitude": 40.8654168,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "180 Dyckman Street",
        "longitude": -73.9197148,
        "latitude": 40.86710442,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "539 Eastern Parkway",
        "longitude": -73.94974912,
        "latitude": 40.67291426,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "1620 Pitkin Avenue",
        "longitude": -73.9124986,
        "latitude": 40.67135189,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "43 West 14th Street",
        "longitude": -73.99460023,
        "latitude": 40.73925945,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "134 Delancey Street",
        "longitude": -73.98258393,
        "latitude": 40.72143807,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "15-25a Graham Avenue",
        "longitude": -73.94430345,
        "latitude": 40.70491326,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "164 East 116th Street",
        "longitude": -73.93531201,
        "latitude": 40.80019918,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "83-20/22 Baxter Avenue",
        "longitude": -73.87830373,
        "latitude": 40.75006774,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "615 West 181st Street",
        "longitude": -73.92715298,
        "latitude": 40.85230239,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "730 Columbus Avenue",
        "longitude": -73.96335384,
        "latitude": 40.79534007,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "645 East Tremont Ave",
        "longitude": -73.88538487,
        "latitude": 40.84906363,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "374 East 149th Street",
        "longitude": -73.90546925,
        "latitude": 40.818801510915804,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "4043 Broadway",
        "longitude": -73.93448002,
        "latitude": 40.84503814,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "71-24 Austin Street",
        "longitude": -73.83870926,
        "latitude": 40.72228433,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "4502 Fifth Avenue",
        "longitude": -74.0077839,
        "latitude": 40.65101244,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "30-26 Steinway Street",
        "longitude": -73.91334471,
        "latitude": 40.76814654,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "918 Seneca Avenue",
        "longitude": -73.89792701,
        "latitude": 40.70277879,
        "program": "Hispanic American"
    },
    {
        "first-name": "Popular Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "11 West 51st Street",
        "longitude": -73.98622277,
        "latitude": 40.76185998,
        "program": "Hispanic American"
    },
    {
        "first-name": "First Ic Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "204-08 Northern Boulevard",
        "longitude": -73.77880247,
        "latitude": 40.75264275,
        "program": "Asian American"
    },
    {
        "first-name": "New Millennium Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "209-35 Northern Boulevard",
        "longitude": -73.82343493,
        "latitude": 40.77067664,
        "program": "Asian American"
    },
    {
        "first-name": "New Millennium Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "312 Fifth Ave, 3rd Floor",
        "longitude": -73.98479663,
        "latitude": 40.7566347,
        "program": "Asian American"
    },
    {
        "first-name": "New Millennium Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "141-28  Northern Blvd",
        "longitude": -73.79322253,
        "latitude": 40.77483664,
        "program": "Asian American"
    },
    {
        "first-name": "Pcb Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "220-34 And 220-36 Northern Blvd",
        "longitude": -73.73896428,
        "latitude": 40.77603631,
        "program": "Asian American"
    },
    {
        "first-name": "Quontic Bank",
        "pizza-shop-name": "Headquarters",
        "place": "1 Rockefeller Plz",
        "longitude": -73.97843579,
        "latitude": 40.75818472,
        "program": "CDFI"
    },
    {
        "first-name": "Quontic Bank",
        "pizza-shop-name": "Full Service - Home Banking",
        "place": "31-05 Broadway",
        "longitude": -73.92499138,
        "latitude": 40.76213594,
        "program": "CDFI"
    },
    {
        "first-name": "Metro City Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "212-45 Northern Boulevard",
        "longitude": -73.75915835,
        "latitude": 40.76607619,
        "program": "Asian American"
    },
    {
        "first-name": "Metro City Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "13835 39th Avenue",
        "longitude": -73.81992648,
        "latitude": 40.76581616,
        "program": "Asian American"
    },
    {
        "first-name": "Noah Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "154-08 Northern Blvd.",
        "longitude": -73.80413376,
        "latitude": 40.77045412,
        "program": "Asian American"
    },
    {
        "first-name": "Noah Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "308 Fifth Avenue",
        "longitude": -73.97503137,
        "latitude": 40.7524028,
        "program": "Asian American"
    },
    {
        "first-name": "Noah Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "350 North Broadway",
        "longitude": -73.5321498,
        "latitude": 40.78646674,
        "program": "Asian American"
    },
    {
        "first-name": "Newbank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "45-68 Frances Lewis Blvd.",
        "longitude": -73.73830768,
        "latitude": 40.77562568,
        "program": "Asian American"
    },
    {
        "first-name": "Newbank",
        "pizza-shop-name": "Headquarters",
        "place": "14601 Northern Blvd",
        "longitude": -73.78087971,
        "latitude": 40.78602443,
        "program": "Asian American"
    },
    {
        "first-name": "Newbank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "25 West 32nd Street",
        "longitude": -73.91683552,
        "latitude": 40.77146572,
        "program": "Asian American"
    },
    {
        "first-name": "Global Bank",
        "pizza-shop-name": "Headquarters",
        "place": "8 Catherine St",
        "longitude": -73.99634911,
        "latitude": 40.71577207,
        "program": "Asian American"
    },
    {
        "first-name": "Promiseone Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "21919 Northern Blvd",
        "longitude": -73.76193682,
        "latitude": 40.76181081,
        "program": "Asian American"
    },
    {
        "first-name": "Spring Bank",
        "pizza-shop-name": "Headquarters",
        "place": "69 E 167th St",
        "longitude": -73.91747046,
        "latitude": 40.83680074,
        "program": "CDFI"
    },
    {
        "first-name": "Spring Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "2049 Frederick Douglass Blvd",
        "longitude": -73.95463146,
        "latitude": 40.80224143,
        "program": "CDFI"
    },
    {
        "first-name": "Royal Business Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "5503 Eighth Avenue",
        "longitude": -73.99080585,
        "latitude": 40.6422337,
        "program": "Asian American"
    },
    {
        "first-name": "Royal Business Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "179 Canal Street",
        "longitude": -73.98599933,
        "latitude": 40.72086145,
        "program": "Asian American"
    },
    {
        "first-name": "Royal Business Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "4208 Main Street",
        "longitude": -73.81069142,
        "latitude": 40.76076478,
        "program": "Asian American"
    },
    {
        "first-name": "Royal Business Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "86-55 Broadway",
        "longitude": -73.86665302,
        "latitude": 40.74255899,
        "program": "Asian American"
    },
    {
        "first-name": "Royal Business Bank",
        "pizza-shop-name": "Full Service - Brick And Mortar",
        "place": "135-34 Roosevelt Avenue",
        "longitude": -73.81206471,
        "latitude": 40.76440534503527,
        "program": "Asian American"
    },
    {
        "first-name": "Piermont Bank",
        "pizza-shop-name": "Headquarters",
        "place": "4 Bryant Park, 3rd Floor",
        "longitude": -73.98450485,
        "latitude": 40.75415045906498,
        "program": "Multi-Racial American"
    }
]

mapboxgl.accessToken = 'pk.eyJ1Ijoid2hpdHRvdXNzYWludCIsImEiOiJjbGc1cTkwZjcwM29uM2ZvZGVrN3o3dmpvIn0.vjFrPBBbMA0FjhY7VhNbZA';

const NYC_COORDINATES = [-74.00214, 40.71882]

const BRONX_ZOO_COORDINATES = [-73.87708, 40.85999]

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: NYC_COORDINATES, // starting position [lng, lat]
    zoom: 10, // starting zoom
    bearing: 0,
    pitch: 0
});


// real markers, made with REAL data

pizzaData.forEach(function (pizzaRecord) {
    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `${pizzaRecord['first-name']} ${pizzaRecord['pizza-shop-name']} location on ${pizzaRecord.place}. (${pizzaRecord.program})`
    );

    // figure out the color of the marker based on the program variable

    // by default, use gray
    let color = '#ccc'

    if (pizzaRecord.program === 'Asian American') {
        color = '#0fa8f5'
    }

    if (pizzaRecord.program === 'Multi-Racial American') {
        color = '#1ed94a'
    }

    if (pizzaRecord.program === 'Hispanic American') {
        color = '#f5b00f'
    }

    if (pizzaRecord.program === 'CDFI') {
        color = '#e356af'
    }

    if (pizzaRecord.program === 'African American') {
        color = '#8751cf'
    }



    // map center point
    new mapboxgl.Marker({
        color: color
    })
        .setLngLat([pizzaRecord.longitude, pizzaRecord.latitude])
        .setPopup(popup)
        .addTo(map);
})

// event listeners


$('#mdi-study').on('click', function () {
    window.open('https://www.fdic.gov/regulations/resources/minority/study.html', '_blank');
});

$('#mdis-cdfi-news').on('click', function () {
    window.open('https://www.nationalbankers.org/press-releases-1/statement-from-the-national-bankers-association-on-silicon-valley-bank-and-signature-bank', '_blank');
});

$('#mdis-cdfi-stability').on('click', function () {
    window.open('https://www.bloomberg.com/news/videos/2023-03-20/minority-banks-are-well-capitalized-elam-video', 'blank');
});

$('#us-treasury-support').on('click', function () {
    window.open('https://www.bloomberg.com/news/videos/2023-03-20/minority-banks-are-well-capitalized-elam-video', 'blank');
});

const legendItems = [
    { name: 'African American', color: '#8751cf' },
    { name: 'Asian American', color: '#0fa8f5' },
    { name: 'CDFI', color: '#e356af' },
    { name: 'Hispanic American', color: '#e8af33' },
    { name: 'Multi-Racial American', color: '#1ed94a' }
];

legendItems.forEach(item => {
    const legendItem = $('<div>').addClass('legend-item');
    const legendColor = $('<div>').addClass('legend-color').css('background-color', item.color);
    const legendText = $('<span>').text(item.name);
    legendItem.append(legendColor).append(legendText);
    $('#legend').append(legendItem);
});

const legendControl = new mapboxgl.Control({ element: $('#legend')[0] });
map.addControl(legendControl);









