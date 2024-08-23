<template>
    <main class="main legal-main">
        <div class="container">
            <div>
                <h1>Tests</h1>
                <div>current as of {{ $dayjs().utc().format('DD/MM/YYYY') }}</div>
            </div>

            <pre class="legend">
                LEGEND for details table
                1st - date 
                2nd - # 
                3rd - mark in days in schengen country
                4th - calculated days left in schengen area
                5th - mark for hypothetical days in schengen area
                6th - calculated days left in schengen area + hypothetical day in schengen area
                7th - estimated days of stay in the schengen area when entering on that date
            </pre>

            <template
                v-for="(test, i) in tests"
                :key="i+test.name"
            >
                <h4>{{test.name}}</h4>
                <table style="border: 1px;">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Country name</th>
                            <th>Start (arival)</th>
                            <th>End (departure)</th>
                            <th>Nights</th>
                            <th>Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                            v-for="(seg, j) in test.segments"
                            :key="j"
                        >
                            <td>{{j + 1}}</td>
                            <td>{{seg.countryName}}</td>
                            <td>{{$dayjs(seg.arivalDate).utc().format('DD/MM/YYYY')}}</td>
                            <td>{{$dayjs(seg.departureDate).utc().format('DD/MM/YYYY')}}</td>
                            <td>{{$dayjs(seg.departureDate).utc().diff(seg.arivalDate, 'days')}}</td>
                            <td>{{$dayjs(seg.departureDate).utc().diff(seg.arivalDate, 'days') + 1}}</td>
                        </tr>
                    </tbody>
                </table>
                <div><b>Total travelled days: </b>{{ test.daysMap[$dayjs().utc().format('YYYY-MM-DD')].daysInSchengen }}</div>
                <div>
                    <b>Remaining days: </b>{{ test.remainingDays }} 
                    <small>
                        {{ `${test.remainingDays >= 1 ? test.remainingDate + ' you\'re gonna have to leave' : ''}` }}
                        {{`${test.remainingDays === 1 && test.daysMap[$dayjs().utc().format('YYYY-MM-DD')].daysQty === 1 ? ' [last day, TODAY!!]' : ''} `}} 
                        {{`${test.assumingSchengen && test.daysMap[$dayjs().utc().format('YYYY-MM-DD')].daysInSchengen === 90 ? ' Assuming we\'re in the Schengen zone today... <Total travelled days> + 1 = violation' : ''}` }}
                    </small>
                </div>
                <template v-if="test.remainingDays === 0">
                    <div><b>The nearest return date: </b>{{ test.remainingDateInFuture }}</div>
                    <div><b>Maximum duration of the next visit (in days): </b>{{ test.remainingDaysQtyInFuture }}</div>
                </template>
                <div><b>Ticks: </b>{{ test.ticks }}</div>

                <div>
                    <button @click="() => {details[i] = !details[i]}">Show/Hide details</button>
                    <button @click="() => {downloadJson(i)}">Download json</button>
                </div>

                <div class="row">
                    <div>
                        <label :for="`date_${i}`">entrance date</label>
                        <input v-model="foundEnterDate[i]" @change="findDays($event, i)" :id="`date_${i}`" type="text" placeholder="YYYY-MM-DD" />
                    </div>
                    <div>
                        <label :for="'days_' + i">available days qty</label>
                        <input v-model="foundEnterDays[i]" @change="findDate($event, i)" :id="`days_${i}`" type="text" placeholder="int" />
                    </div>
                </div>

                <pre v-if="details[i] === true">
                    <div><b>date - # - days in schengen - days left in schengen - country</b></div>
                    <template v-for="(day, date) in test.daysMap" :key="day">
                        <div
                            :class="{'today': day.isToday}"
                        >{{ date }} - {{ day.idx + 1 }} - {{ day.daysQty }} - <span :class="{'error': day.daysInSchengen > 90}">{{ day.daysInSchengen === undefined ? '--' : day.daysInSchengen }}</span> - {{ day.isTodayPlus ? 1 : 0 }}<!-- - {{ day.daysInSchengenPlusFuture }}--> - {{ day.daysInSchengenPlusToday }} - {{ day.daysInSchengenIfEnterToday }} - {{ day.remainingDate }} - {{ day.countryName }}
                        </div>
                    </template>
                </pre>
            </template>


        </div>
    </main>
</template>


<script>
import { useDayjs } from '#dayjs'

const getRnd = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export default {
    name: "tests",
    data() {
        return {}
    },
    setup() {
        const details = ref({});
        const foundEnterDays = ref([]);
        const foundEnterDate = ref([]);
        const dayjs = useDayjs();
        const tests = [
            {
                name: '1. 90 in the beginning, 1 segment',
                segments: [
                    {
                        countryName: 'Spain',
                        days: 90,
                        daysFromStart180Period: 0
                    }
                ]
            }, {
                name: '2. 89 in the beginning, 1 segment',
                segments: [
                    {
                        countryName: 'Spain',
                        days: 89,
                        daysFromStart180Period: 0
                    }
                ]
            }, {
                name: '3. 90 at the end, 1 segment',
                segments: [
                    {
                        countryName: 'Italy',
                        days: 90,
                        daysFromStart180Period: 89
                    }
                ]
            }, {
                name: '4. 89 at the end, 1 segment',
                segments: [
                    {
                        countryName: 'Italy',
                        days: 89,
                        daysFromStart180Period: 90
                    }
                ]
            }, {
                name: '5. 90 in the middle, 1 segment',
                segments: [
                    {
                        countryName: 'Germany',
                        days: 90,
                        daysFromStart180Period: 69
                    }
                ]
            }, {
                name: '6. 89 in the middle, 1 segment',
                segments: [
                    {
                        countryName: 'Germany',
                        days: 89,
                        daysFromStart180Period: 70
                    }
                ]
            }, {
                name: '7. 80 in the beginning 2 segments',
                segments: [
                    {
                        countryName: 'Spain',
                        days: 80,
                        daysFromStart180Period: 2
                    }, {
                        countryName: 'Belgium',
                        days: 10,
                        daysFromStart180Period: 170
                    }
                ]
            }, {
                name: '8. 90 in the beginning + 1 day, 1 segment',
                segments: [
                    {
                        countryName: 'Spain',
                        days: 90,
                        daysFromStart180Period: 1
                    }
                ]
            }, {
                name: '9. 90 at the end, 1 segment, end today',
                segments: [
                    {
                        countryName: 'Italy',
                        days: 90,
                        daysFromStart180Period: 90
                    }
                ]
            }, {
                name: '10. 88 at the end, 1 segment, ends day before yesterday',
                segments: [
                    {
                        countryName: 'Italy',
                        days: 88,
                        daysFromStart180Period: 90
                    }
                ]
            }, {
                name: '11. 90 days, 2 segments, at start and end',
                segments: []
            }, {
                name: '12. 89 days, 2 segments, at start and end',
                segments: []
            }, {
                name: '13. 88 days, 2 segments, at start and end',
                segments: []
            }, {
                name: '14. 90 days, 2 segments, at start and middle',
                segments: []
            }, {
                name: '15. 89 days, 2 segments, at start and middle',
                segments: []
            }, {
                name: '16. 88 days, 2 segments, at start and middle',
                segments: []
            }, {
                name: '17. 90 days, 2 segments, at middle and end',
                segments: []
            }, {
                name: '18. 89 days, 2 segments, at middle and end',
                segments: []
            }, {
                name: '19. 88 days, 2 segments, at middle and end',
                segments: []
            }, {
                name: 'n+1. 1 day at 1 day intervals 90 segments',
                segments: [
                    {
                        countryName: 'Poland',
                        days: 1,
                        daysFromStart180Period: 0
                    }, {
                        countryName: 'Poland',
                        days: 1,
                        daysFromStart180Period: 2
                    }
                ]
            }, {
                name: 'n+2. 1 day at 1 day intervals 89 segments',
                segments: [
                    {
                        countryName: 'Poland',
                        days: 1,
                        daysFromStart180Period: 0
                    }, {
                        countryName: 'Poland',
                        days: 1,
                        daysFromStart180Period: 2
                    }
                ]
            }
        ];

        // generate zebra test
        for (let t = 2; t < 178; t += 2) {
            tests[tests.length - 2].segments.push({
                countryName: 'Poland',
                days: 1,
                daysFromStart180Period: 2 + t
            });
            if (t < 176) {
                tests[tests.length - 1].segments.push({
                    countryName: 'Poland',
                    days: 1,
                    daysFromStart180Period: 2 + t
                });
            }
        }

        // generate tests 10-12, 2 seg
        for (let t = 10; t <= 12; t++) {
            const el = tests[t];
            let rndDays = getRnd(15, 75);
            let secondSegDays = 90 - rndDays - (t - 10);
            let secondSegOffset = 180 - secondSegDays - 1;
            el.segments.push({
                countryName: 'Lithuania',
                days: rndDays,
                daysFromStart180Period: 0
            });
            el.segments.push({
                countryName: 'Croatia',
                days: secondSegDays,
                daysFromStart180Period: secondSegOffset
            });
        }

        // generate tests 13-16, 2 seg
        for (let t = 13; t <= 15; t++) {
            const el = tests[t];
            let rndDays = getRnd(15, 65);
            let secondSegDays = 90 - rndDays - (t - 13);
            let secondSegOffset = 180 - secondSegDays - getRnd(10, 45);
            el.segments.push({
                countryName: 'Malta',
                days: rndDays,
                daysFromStart180Period: 0
            });
            el.segments.push({
                countryName: 'Luxembourg',
                days: secondSegDays,
                daysFromStart180Period: secondSegOffset
            });
        }

        // generate tests 16-18, 2 seg
        for (let t = 16; t <= 18; t++) {
            const el = tests[t];
            let rndDays = getRnd(15, 65);
            let secondSegDays = 90 - rndDays - (t - 16);
            let secondSegOffset = 180 - secondSegDays - 1;
            el.segments.push({
                countryName: 'Slovakia',
                days: rndDays,
                daysFromStart180Period: 180 - secondSegDays - rndDays - 1 - getRnd(3, rndDays)
            });
            el.segments.push({
                countryName: 'Austria',
                days: secondSegDays,
                daysFromStart180Period: secondSegOffset
            });
        }

        // generate random tests
        for (let t = 0; t < 4; t++) {
            let rndSegments = getRnd(1, 20);
            let countries = ["Germany","Austria","Belgium","Croatia","Czech Republic","Denmark","Estonia","Finland","France","Greece","Hungary","Iceland",
            "Italy","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Netherlands","Norway","Poland","Portugal","Slovakia","Slovenia","Spain",
            "Sweden","Switzerland"];
            tests.push({
                name: `rnd ${t + 1}`,
                segments: []
            });
            let lastStartOfTrip = 0;
            let totalTripsLength = 0;
            for (let y = 0; y < rndSegments; y++) {
                let rndDays = getRnd(1, 10);
                let rndPause = getRnd(0,10);

                if (totalTripsLength + rndDays > 90) break;

                tests[tests.length - 1].segments.push({
                    countryName: countries[Math.floor(Math.random() * countries.length)],
                    days: rndDays,
                    daysFromStart180Period: lastStartOfTrip
                });

                totalTripsLength += rndDays;
                lastStartOfTrip = lastStartOfTrip + rndDays + rndPause;
            }
        }
        
        console.log('+++++++++++++');
        console.time();
        let _today = dayjs().utc().hour(0).minute(0).second(0).format('YYYY-MM-DD');
        // prepare daysMap AND mark all daysInCountry
        for (let i = 0; i < tests.length; i++) {
            const test = tests[i];
            let ticks = 0;

            // prepare daysMap
            test.daysMap = {};
            let _d = dayjs().utc().hour(0).minute(0).second(0).subtract(179, 'days');
            for (let j = 0; j < 360; j++) {
                let key = _d.utc().add(j, 'days').format('YYYY-MM-DD');
                test.daysMap[key] = {
                    idx: j,
                    date: _d.utc().add(j, 'days').toJSON(),
                    daysQty: 0,
                    countryName: '',
                }
                if (key === _today) {
                    test.daysMap[key].isToday = true;
                }

                ticks++;
            }
            console.timeLog(undefined, i + 1, 'test: prepare daysMap finished');

            //calculate arival/departureDate AND mark all daysInCountry on daysMap
            for (let j = 0; j < test.segments.length; j++) {
                const seg = test.segments[j];
                seg.arivalDate = dayjs().utc().hour(0).minute(0).second(0).subtract((179 - seg.daysFromStart180Period), 'days').toJSON();
                seg.departureDate = dayjs(seg.arivalDate).utc().add((seg.days - 1), 'days').toJSON();
                seg.daysInSchengen = 0;

                _d = dayjs(seg.arivalDate).utc();
                for (let k = 0; k < seg.days; k++) {
                    test.daysMap[_d.utc().format('YYYY-MM-DD')]['daysQty'] = 1;
                    test.daysMap[_d.utc().format('YYYY-MM-DD')]['countryName'] += (seg.countryName + '; ');
                    _d = _d.add(1, 'days');

                    ticks++;
                }
            }
            console.timeLog(undefined, i + 1, 'test: calculate arival/departureDate AND mark all daysInCountry on daysMap finished');

            //calculate daysInSchengen and remainingDays for test
            _d = dayjs().utc().hour(0).minute(0).second(0);
            let remaining = -1;
            for (let j = 0; j < 180 + 1; j++) {
                let daysInSchengen = 0;
                let daysInSchengenPlusFuture = 0;
                test.daysMap[_d.utc().format('YYYY-MM-DD')].isTodayPlus = true;
                for (let k = 0; k < 180; k++) {
                    let key = _d.utc().subtract(k, 'days').format('YYYY-MM-DD');
                    if (test.daysMap[key] && test.daysMap[key].daysQty === 1) {
                        daysInSchengen += 1;
                        daysInSchengenPlusFuture +=1;
                    }

                    if (test.daysMap[key] && test.daysMap[key].isTodayPlus) {
                        daysInSchengenPlusFuture +=1;
                    }

                    ticks++;
                }
                test.daysMap[_d.utc().format('YYYY-MM-DD')].daysInSchengen = daysInSchengen;
                // test.daysMap[_d.utc().format('YYYY-MM-DD')].daysInSchengenPlusFuture = daysInSchengenPlusFuture;
                test.daysMap[_d.utc().format('YYYY-MM-DD')].daysInSchengenPlusToday = daysInSchengen + 1;
                // test.daysMap[_d.utc().format('YYYY-MM-DD')].daysInSchengenIfEnterToday_ = 90 - daysInSchengen;

                // // check if today in cshengen zone
                // if (test.daysMap[_today].daysQty !== 1) {
                //     daysInSchengen += 1;
                //     test.assumingSchengen = 1;
                //     // console.log('daysInSchengen += 1;');
                // }
                
                if (remaining === -1 && (daysInSchengen >= 91 || daysInSchengenPlusFuture >= 91)) {
                    remaining = j;
                    test.daysMap[_d.utc().format('YYYY-MM-DD')].remainingDate = _d.utc().subtract(1, 'days').format('YYYY-MM-DD');
                    test.remainingDate = test.daysMap[_d.utc().format('YYYY-MM-DD')].remainingDate;
                }
                _d = _d.add(1, 'days');
            }
            console.timeLog(undefined, i + 1, 'test: calculate daysInSchengen and remainingDays for test finished');

            // if never overflow 90days
            if (remaining === -1) {
                remaining = 90;
            }
            test.remainingDays = remaining;

            // calculate for every day in future how many days available to stay in schengen area
            _d = dayjs().utc().hour(0).minute(0).second(0);
            for (let i = 0; i < 180 + 1; i++) {
                if (test.daysMap[_d.utc().format('YYYY-MM-DD')].daysInSchengenPlusToday <= 90) {
                    let _d2 = dayjs(_d.utc().toJSON());
                    let key = _d2.format('YYYY-MM-DD');
                    // console.log('===========', _d.utc().toJSON(), _d2.utc().toJSON(), key);
                    for (let l = 1; l <= 90; l++) {
                        // console.log('-----', _d.utc().format('YYYY-MM-DD'), key, l);
                        if (!test.daysMap[key] || !test.daysMap[key].daysInSchengen) {
                            // console.log('no key: break cycly', test.daysMap[key].daysInSchengen, key);
                            break;
                        }
                        if (test.daysMap[key].daysInSchengen && test.daysMap[key].daysInSchengen + l >= 91) {
            //                 console.log(key, test.daysMap[key].daysInSchengen, l, 90 - test.daysMap[key].daysInSchengen);
                            test.daysMap[_d.utc().format('YYYY-MM-DD')].daysInSchengenIfEnterToday = 90 - test.daysMap[key].daysInSchengen;
                            // console.log('break cycle !!!', key); 
                            break;
                        }

                        _d2 = _d2.add(1, 'days');
                        key = _d2.utc().format('YYYY-MM-DD');

                        ticks++;
                    }

                    if (!test.daysMap[_d.utc().format('YYYY-MM-DD')].daysInSchengenIfEnterToday) {
                        test.daysMap[_d.utc().format('YYYY-MM-DD')].daysInSchengenIfEnterToday = 90;
                        // console.log('force set for !!!', _d.utc().format('YYYY-MM-DD'));
                    }
                }
                _d = _d.add(1, 'days');
            }
            console.timeLog(undefined, i + 1, 'test: calculate for every day in future how many days available to stay in schengen area');

            // find first entrance date if today remainingDays = 0
            // if (test.remainingDays === 0) {
            //     _d = dayjs().utc().hour(0).minute(0).second(0);
            //     let remainingDateInFuture;
            //     let remainingDaysQtyInFuture = 0;
            //     for (let i = 0; i < 180; i++) {
            //         let key = _d.utc().format('YYYY-MM-DD');
            //         if (test.daysMap[key].daysInSchengenPlusToday <= 90 && !remainingDateInFuture) {
            //             remainingDateInFuture = key;
            //         }

            //         if (remainingDateInFuture && remainingDaysQtyInFuture < 90) {
            //             remainingDaysQtyInFuture++;
            //         } else if (remainingDateInFuture && remainingDaysQtyInFuture === 91) {
            //             console.log('stop cicle');
            //             break;
            //         }

            //         remainingDaysQtyInFuture++;
            //         _d = _d.add(1, 'days');
            //     }
            //     test.remainingDateInFuture = remainingDateInFuture;
            //     test.remainingDaysQtyInFuture = remainingDaysQtyInFuture;
            // }

            // find first entrance date if today remainingDays = 0
            if (test.remainingDays === 0) {
                _d = dayjs().utc().hour(0).minute(0).second(0);
                let remainingDateInFuture;
                let remainingDaysQtyInFuture = 0;
                for (let i = 0; i < 180; i++) {
                    let key = _d.utc().format('YYYY-MM-DD');
                    const el = test.daysMap[key];
                    if (el.daysInSchengenIfEnterToday >= 1) {
                        remainingDateInFuture = key;
                        remainingDaysQtyInFuture = el.daysInSchengenIfEnterToday;
                        break;
                    }
                    // console.log('---', i, el.daysInSchengenIfEnterToday, this.foundEnterDays[testNumber]);
                    _d = _d.add(1, 'days');

                    ticks++;
                }
                test.remainingDateInFuture = remainingDateInFuture;
                test.remainingDaysQtyInFuture = remainingDaysQtyInFuture;
            }
            console.timeLog(undefined, i + 1, 'test: find first entrance date if today remainingDays = 0');

            test.ticks = ticks;
            console.timeLog(undefined, i + 1, 'test FINISHED');
            console.log('-------------');
        }
        console.timeEnd();

        return {
            tests,
            details,
            foundEnterDays,
            foundEnterDate
        }
    },
    methods: {
        scrollTo(value) {
            window.scrollTo({
                top: document.querySelector(`.${value}`).offsetTop - 100,
                behavior: 'smooth'
            })
        },
        downloadJson(testNumber) {
            const dayjs = useDayjs();
            let countryCode = {
                "Germany": "DE",
                "Austria": "AT",
                "Belgium": "BE",
                "Croatia": "HR",
                "Czech Republic": "CZ",
                "Denmark": "DK",
                "Estonia": "EE",
                "Finland": "FI",
                "France": "FR",
                "Greece": "GR",
                "Hungary": "HU",
                "Iceland": "IS",
                "Italy": "IT",
                "Latvia": "LV",
                "Liechtenstein": "LI",
                "Lithuania": "LT",
                "Luxembourg": "LU",
                "Malta": "MT",
                "Netherlands": "NL",
                "Norway": "NO",
                "Poland": "PL",
                "Portugal": "PT",
                "Slovakia": "SK",
                "Slovenia": "SI",
                "Spain": "ES",
                "Sweden": "SE",
                "Switzerland": "SZ"
            }
            let tpl = {
                "id":"00000000-E6A3-4FAE-A19F-B5A5B14339B1",
                "arrivalDateString":"07.04.2024 11:38",
                "departureDateString":"07.04.2024 11:38",
                "latitude":-65.24577803919941,
                "longitude":-64.25792901768757,
                "localDate":"2024-04-07T11:38:14+0530",
                "isHome":false,
                "isAuto":true,
                "countryCode":"IN",
                "usaStateCode":"",
                "isTransfer":false,
                "state":"none",
                "isCurrent":false,
                "timezone":0,
            }
            let t = {"visitsRaw":[],"domiciles":[],"residences":[],"citizenships":[],
                "travels":[]
            };
            for (let i = 0; i < this.tests[testNumber].segments.length; i++) {
                const seg = this.tests[testNumber].segments[i];
                let _tpl = {...tpl};
                _tpl.id = `${('00000000' + (i + 1)).substr(-8)}-E6A3-4FAE-A19F-B5A5B14339B1`;
                _tpl.arrivalDateString = dayjs(seg.arivalDate).utc().format('DD.MM.YYYY HH:mm');
                _tpl.departureDateString = dayjs(seg.departureDate).utc().format('DD.MM.YYYY HH:mm');
                _tpl.localDate = dayjs(seg.arivalDate).utc().toJSON();
                _tpl.countryCode = countryCode[seg.countryName];
                t.travels.push(_tpl);
            }
            this.saveTextAsFile(JSON.stringify(t),`${dayjs().format('YYYYMMDD_HHmm')}_test_${testNumber}.json`);
        },
        saveTextAsFile(textToWrite, fileNameToSaveAs) {
            var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            if (window.webkitURL != null)
            {
                // Chrome allows the link to be clicked
                // without actually adding it to the DOM.
                downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            }
            else
            {
                // Firefox requires the link to be added to the DOM
                // before it can be clicked.
                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
            }
        
            downloadLink.click();
        },
        findDays(e, testNumber) {
            console.log('**** findDays START');
            console.time();
            // console.log(testNumber, e, this.foundEnterDate[testNumber], this.tests[testNumber].daysMap[this.foundEnterDate[testNumber]]);
            if (this.tests[testNumber].daysMap[this.foundEnterDate[testNumber]]) {
                this.foundEnterDays[testNumber] = this.tests[testNumber].daysMap[this.foundEnterDate[testNumber]].daysInSchengenIfEnterToday;
            } else {
                this.foundEnterDays[testNumber] = '';
            }
            console.timeLog(undefined, '**** findDays FINISHED');
            console.timeEnd();
        },
        findDate(e, testNumber) {
            console.log('**** findDate START');
            console.time();
            const dayjs = useDayjs();
            let _d = dayjs().utc().hour(0).minute(0).second(0);
            // console.log(testNumber, e, this.foundEnterDays[testNumber]);
            if (this.foundEnterDays[testNumber] > 0 && this.foundEnterDays[testNumber] < 91) {
                for (let i = 0; i < 180; i++) {
                    let key = _d.utc().format('YYYY-MM-DD');
                    const el = this.tests[testNumber].daysMap[key];
                    if (el.daysInSchengenIfEnterToday >= this.foundEnterDays[testNumber]) {
                        this.foundEnterDate[testNumber] = key;
                        break;
                    }
                    // console.log('---', i, el.daysInSchengenIfEnterToday, this.foundEnterDays[testNumber]);
                    _d = _d.add(1, 'days');
                }
            } else {
                this.foundEnterDate[testNumber] = 'wrong input';
            }
            console.timeLog(undefined, '**** findDate FINISHED');
            console.timeEnd();
        }
    }
}
</script>

<style>
    * {
        user-select: initial;
        -webkit-user-select: initial;
        -moz-user-select: initial;
    }
    body::-webkit-scrollbar {
        width: 10pt;
    }
    h4 {
        margin-top: 20pt;
    }
    table {
        border-collapse: collapse;
    }
    td, th {
        border: 1px solid black;
        padding: 6px;
    }
    pre {
        line-height: 1.7pt;
    }
    button{
        margin-right: 5pt;
    }
    label {
        display: block;
        margin-top: 2pt;
    }
    input {
        border: 1pt solid black;
        margin: 1pt 5pt 0 0;
        padding: 2pt;
    }
    .error {
        color: darkred;
        font-weight: 900;
    }
    .today {
        font-weight: 900;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .legend {
        line-height: 9pt;
        position: fixed;
        top: 90pt;
        right: 0;
        white-space: pre;
    }
</style>