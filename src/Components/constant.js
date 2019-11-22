const countries = [
    { label: 'Afghanistan'   },

    { label: 'Albania'   },

    { label: 'Algeria'   },

    { label: 'American Samoa'   },

    { label: 'Andorra'   },

    { label: 'Angola'   },

    { label: 'Anguilla'   },

    { label: 'Antarctica'   },

    { label: 'Antigua and Barbuda'   },

    { label: 'Argentina'   },

    { label: 'Armenia'   },

    { label: 'Aruba'   },

    { label: 'Australia'   },

    { label: 'Austria'   },

    { label: 'Azerbaijan'   },

    { label: 'Bahamas'   },

    { label: 'Bahrain'                                       },
    { label: 'Bangladesh'                                       },
    { label: 'Barbados'                                       },
    { label: 'Belarus'                                     },

    { label: 'Belgium'                                     },
    { label: 'Belize'                                     },
    { label: 'Benin'                                     },
    { label: 'Bermuda'                                     },

    { label: 'Bhutan'                                     },
    { label: 'Bolivia'                                     },
    { label: 'Bosnia and Herzegovina'                                     },
    { label: 'Botswana'                                     },

    { label: 'Brazil'                                     },
    { label: 'British Indian Ocean Territory'                                     },
    { label: 'British Virgin Islands'                                     },
    { label: 'Brunei'                                     },

    { label: 'Bulgaria'                                     },
    { label: 'Burkina Faso'                                     },
    { label: 'Burundi'                                     },
    { label: 'Cambodia'                                     },

    { label: 'Cameroon'                                     },
    { label: 'Canada'                                     },
    { label: 'Cape Verde'                                     },
    { label: 'Cayman Islands'                                     },

    { label: 'Central African Republic'                                     },
    { label: 'Chad'                                     },
    { label: 'Chile'                                     },
    { label: 'China'                                     },

    { label: 'Christmas Island'                                     },
    { label: 'Cocos Islands'                                     },
    { label: 'Colombia'                                     },
    { label: 'Comoros'                                     },

    { label: 'Cook Islands'                                     },
    { label: 'Costa Rica'                                     },
    { label: 'Croatia'                                     },
    { label: 'Cuba'                                     },

    { label: 'Curacao'                                     },
    { label: 'Cyprus'                                     },
    { label: 'Czech Republic'                                     },
    { label: 'Democratic Republic of the Congo'                                     },

    { label: 'Denmark'                                     },
    { label: 'Djibouti'                                     },
    { label: 'Dominica'                                     },
    { label: 'Dominican Republic'                                     },

    { label: 'East Timor'                                     },
    { label: 'Ecuador'                                     },
    { label: 'Egypt'                                     },
    { label: 'El Salvador'                                     },

    { label: 'Equatorial Guinea'                                     },
    { label: 'Eritrea'                                     },
    { label: 'Estonia'                                     },
    { label: 'Ethiopia'                                     },

    { label: 'Falkland Islands'                                     },
    { label: 'Faroe Islands'                                     },
    { label: 'Fiji'                                     },
    { label: 'Finland'                                     },

    { label: 'France'                                     },
    { label: 'French Polynesia'                                     },
    { label: 'Gabon'                                     },
    { label: 'Gambia'                                     },

    { label: 'Georgia'                                     },
    { label: 'Germany'                                     },
    { label: 'Ghana'                                     },
    { label: 'Gibraltar'                                     },

    { label: 'Greece'                                     },
    { label: 'Greenland'                                     },
    { label: 'Grenada'                                     },
    { label: 'Guam'                                     },

    { label: 'Guatemala'                                     },
    { label: 'Guernsey'                                     },
    { label: 'Guinea'                                     },
    { label: 'Guinea-Bissau'                                     },

    { label: 'Guyana'                                     },
    { label: 'Haiti'                                     },
    { label: 'Honduras'                                     },
    { label: 'Hong Kong'                                     },

    { label: 'Hungary'                                     },
    { label: 'Iceland'                                     },
    { label: 'India'                                     },
    { label: 'Indonesia'                                     },

    { label: 'Iran'                                     },
    { label: 'Iraq'                                     },
    { label: 'Ireland'                                     },
    { label: 'Isle of Man'                                     },

    { label: 'Israel'                                     },
    { label: 'Italy'                                     },
    { label: 'Ivory Coast'                                     },
    { label: 'Jamaica'                                     },

    { label: 'Japan'                                     },
    { label: 'Jersey'                                     },
    { label: 'Jordan'                                     },
    { label: 'Kazakhstan'                                     },

    { label: 'Kenya'                                     },
    { label: 'Kiribati'                                     },
    { label: 'Kosovo'                                     },
    { label: 'Kuwait'                                     },

    { label: 'Kyrgyzstan'                                     },
    { label: 'Laos'                                     },
    { label: 'Latvia'                                     },
    { label: 'Lebanon'                                     },

    { label: 'Lesotho'                                     },
    { label: 'Liberia'                                     },
    { label: 'Libya'                                     },
    { label: 'Liechtenstein'                                     },

    { label: 'Lithuania'                                     },
    { label: 'Luxembourg'                                     },
    { label: 'Macau'                                     },
    { label: 'Macedonia'                                     },

    { label: 'Madagascar'                                     },
    { label: 'Malawi'                                     },
    { label: 'Malaysia'                                     },
    { label: 'Maldives'                                     },

    { label: 'Mali'                                     },
    { label: 'Malta'                                     },
    { label: 'Marshall Islands'                                     },
    { label: 'Mauritania'                                     },

    { label: 'Mauritius'                                     },
    { label: 'Mayotte'                                     },
    { label: 'Mexico'                                     },
    { label: 'Micronesia'                                     },

    { label: 'Moldova'                                     },
    { label: 'Monaco'                                     },
    { label: 'Mongolia'                                     },
    { label: 'Montenegro'                                     },

    { label: 'Montserrat'                                     },
    { label: 'Morocco'                                     },
    { label: 'Mozambique'                                     },
    { label: 'Myanmar'                                     },

    { label: 'Namibia'                                     },
    { label: 'Nauru'                                     },
    { label: 'Nepal'                                     },
    { label: 'Netherlands'                                     },

    { label: 'Netherlands Antilles'                                     },
    { label: 'New Caledonia'                                     },
    { label: 'New Zealand'                                     },
    { label: 'Nicaragua'                                     },

    { label: 'Niger'                                     },
    { label: 'Nigeria'                                     },
    { label: 'Niue'                                     },
    { label: 'North Korea'                                     },

    { label: 'Northern Mariana Islands'                                     },
    { label: 'Norway'                                     },
    { label: 'Oman'                                     },
    { label: 'Pakistan'                                     },

    { label: 'Palau'                                     },
    { label: 'Palestine'                                     },
    { label: 'Panama'                                     },
    { label: 'Papua New Guinea'                                     },

    { label: 'Paraguay'                                     },
    { label: 'Peru'                                     },
    { label: 'Philippines'                                     },
    { label: 'Pitcairn'                                     },

    { label: 'Poland'                                     },
    { label: 'Portugal'                                     },
    { label: 'Puerto Rico'                                     },
    { label: 'Qatar'                                     },

    { label: 'Republic of the Congo'                                     },
    { label: 'Reunion'                                     },
    { label: 'Romania'                                     },
    { label: 'Russia'                                     },

    { label: 'Rwanda'                                     },
    { label: 'Saint Barthelemy'                                     },
    { label: 'Saint Helena'                                     },
    { label: 'Saint Kitts and Nevis'                                     },

    { label: 'Saint Lucia'                                     },
    { label: 'Saint Martin'                                     },
    { label: 'Saint Pierre and Miquelon'                                     },
    { label: 'Saint Vincent and the Grenadines'                                     },

    { label: 'Samoa'                                     },
    { label: 'San Marino'                                     },
    { label: 'Sao Tome and Principe'                                     },
    { label: 'Saudi Arabia'                                     },

    { label: 'Senegal'                                     },
    { label: 'Serbia'                                     },
    { label: 'Seychelles'                                     },
    { label: 'Sierra Leone'                                     },

    { label: 'Singapore'                                     },
    { label: 'Sint Maarten'                                     },
    { label: 'Slovakia'                                     },
    { label: 'Slovenia'                                     },

    { label: 'Solomon Islands'                                     },
    { label: 'Somalia'                                     },
    { label: 'South Africa'                                     },
    { label: 'South Korea'                                     },

    { label: 'South Sudan'                                     },
    { label: 'Spain'                                     },
    { label: 'Sri Lanka'                                     },
    { label: 'Sudan'                                     },

    { label: 'Suriname'                                     },
    { label: 'Svalbard and Jan Mayen'                                     },
    { label: 'Swaziland'                                     },
    { label: 'Sweden'                                     },

    { label: 'Switzerland'                                     },
    { label: 'Syria'                                     },
    { label: 'Taiwan'                                     },
    { label: 'Tajikistan'                                     },

    { label: 'Tanzania'                                     },
    { label: 'Thailand'                                     },
    { label: 'Togo'                                     },
    { label: 'Tokelau'                                     },

    { label: 'Tonga'                                     },
    { label: 'Trinidad and Tobago'                                     },
    { label: 'Tunisia'                                     },
    { label: 'Turkey'                                     },

    { label: 'Turkmenistan'                                     },
    { label: 'Turks and Caicos Islands'                                     },
    { label: 'Tuvalu'                                     },
    { label: 'U.S. Virgin Islands'                                     },

    { label: 'Uganda'                                     },
    { label: 'Ukraine'                                     },
    { label: 'United Arab Emirates'                                     },
    { label: 'United Kingdom'                                     },

    { label: 'United States'                                     },
    { label: 'Uruguay'                                     },
    { label: 'Uzbekistan'                                     },
    { label: 'Vanuatu'                                     },

    { label: 'Vatican'                                     },
    { label: 'Venezuela'                                     },
    { label: 'Vietnam'                                     },
    { label: 'Wallis and Futuna'                                     },

    { label: 'Western Sahara'                                     },
    { label: 'Yemen'                                     },
    { label: 'Zambia'                                     },
    { label: 'Zimbabwe' }
];
export {

    countries,

}