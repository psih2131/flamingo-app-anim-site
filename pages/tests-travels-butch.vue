<template>
    <main class="main legal-main">
        <div class="container">
            <pre>homeRegion: {{ getHomeRegion() }}; totalVisits: {{ log.length }}</pre>
            <div>
                <button @click="reload">regenerate</button>
            </div>
            <div>
                <button @click="downloadJson">downloadJson</button>
            </div>
            <div>
                <button @click="calcCSV">calculate csv</button>
            </div>
            <textarea v-model="csvLog"></textarea>
            <div class="tiny">https://www.gpsvisualizer.com/map_input?form=leaflet&units=metric</div>
            <div>
                <button @click="()=>{showLog = !showLog}">{{ !showLog ? 'show' : 'hide' }} log</button>
            </div>
            <pre v-if="showLog">
                {{ log }}
            </pre>
            <div>
                <button @click="()=>{calcTravels();/* markCityOnlyDays(); */}">calc & show travels</button>
            </div>
            <div v-if="travels.length > 0">
                <pre>homeRegion: {{ getHomeRegion() }}; totalVisits: {{ log.length }}</pre>
                <pre>
                    <table>
                        <tr>
                            <th>usaStateCode</th>
                            <th>arrivalDateString</th>
                            <th>departureDateString</th>
                            <th>isHome</th>
                            <th>isCandidateToCollapse</th>
                        </tr>
                        <tr v-for="travel in travels">
                            <td>{{ travel.usaStateCode }}</td>
                            <td>{{ travel.arrivalDateString }}</td>
                            <td>{{ travel.departureDateString }}</td>
                            <td>{{ travel.isHome }}</td>
                            <td>{{ travel.isCandidateToCollapse || '' }}</td>
                        </tr>
                    </table>
                </pre>
            </div>
            <div v-if="travels.length > 0">
                <pre>
                    <table>
                        <tr>
                            <th>dates in NYC</th>
                            <th>flag</th>
                        </tr>
                        <tr v-for="(val, key) in nycCard">
                            <td>{{ key }}</td>
                            <td>{{ val }}</td>
                        </tr>
                    </table>
                </pre>
            </div>
        </div>

    </main>
</template>


<script>
import { useDayjs } from '#dayjs'

const getRnd = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export default {
    name: "tests-city-tax",
    data() {
        return {
            showLog: false
        }
    },
    watch: {
        // scrollVal() {
        //     this.drawTimeline()
        // },
        // zoomVal() {
        //     this.drawTimeline()
        // }
    },
    mounted() {
        // this.ctx = this.timeline.getContext("2d");
        // this.drawTimeline(); // Initial draw
    },
    setup() {

        const dayjs = useDayjs();
        const VERBOSE = 1;
        const scrollVal = ref(10);
        const zoomVal = ref(2);

        const timeline = ref(null);
        const ctx = ref(null);
       
        
        if (VERBOSE > 0) console.log('+++++++++++++');
        if (VERBOSE > 0) console.time();
        let _today = dayjs().utc().hour(0).minute(0).second(0).format('YYYY-MM-DD');
        // prepare daysMap AND mark all daysInCountry

        if (VERBOSE > 0) console.timeEnd();

         // Generate random events spread over 10 days
        //  const events = Array.from({ length: 1000 }, () => ({
        //     time: Math.random() * 864000, // Random time in seconds within 10 days
        //     color: `hsl(${Math.random() * 360}, 100%, 50%)` // Assign a random color
        // }));        

        // ---- generator ----

        const CONFIG = {
            DAYS: 365 * 5,
            TRIPS_PER_DAY: [0, 1],
            POINTS_PER_TRIP: [1, 5],
            BATCH_SIZE: [1, 3],
            TIME_BETWEEN_BATCHES: [5, 45],
            TIME_BETWEEN_TRIPS: 60,
            NIGHT_OUTS: 2000,
            DAY_START_HOUR: 8,
            DAY_END_HOUR: 22,
            REGION_SWITCH_PROBABILITY: 0.2
        };

        const regions = [
            // New Jarsey
            [[40.7512, -74.0210], [40.7450, -74.0300], [40.7550, -74.0250], [40.7480, -74.0350], [40.7580, -74.0280], [40.7500, -74.0320], [40.7512, -74.0210], [40.7450, -74.0300], [40.7550, -74.0250], [40.7480, -74.0350], [40.7580, -74.0280], [40.7500, -74.0320], [40.7400, -74.0330], [40.7700, -74.0100], [40.7800, -74.0200], [40.7650, -74.0150], [40.7900, -74.0050], [40.7200, -74.0250], [40.7850, -74.0120], [40.7600, -74.0220], [40.7950, -74.0180], [40.7512, -74.0210], [40.7450, -74.0300], [40.7550, -74.0250], [40.7480, -74.0350], [40.7580, -74.0280], [40.7500, -74.0320], [40.7400, -74.0380], [40.7450, -74.0250], [40.7520, -74.0200], [40.7490, -74.0310], [40.7600, -74.0270], [40.7510, -74.0330], [40.735, -74.045], [40.742, -74.060], [40.720, -74.070], [40.715, -74.050], [40.730, -74.035], [40.745, -74.055], [40.725, -74.065], [40.718, -74.048], [40.738, -74.040], [40.748, -74.062], [40.722, -74.072], [40.717, -74.052], [40.732, -74.037], [40.747, -74.057], [40.727, -74.067], [40.720, -74.050], [40.740, -74.042], [40.750, -74.064], [40.724, -74.074], [40.719, -74.054], [40.734, -74.039], [40.749, -74.059], [40.729, -74.069], [40.722, -74.052], [40.742, -74.044], [40.752, -74.066], [40.726, -74.076], [40.721, -74.056], [40.736, -74.041], [40.751, -74.061], [40.731, -74.071], [40.724, -74.054], [40.744, -74.046], [40.754, -74.068], [40.728, -74.078], [40.723, -74.058], [40.738, -74.043], [40.753, -74.063], [40.733, -74.073], [40.726, -74.056], [40.746, -74.048], [40.756, -74.070], [40.730, -74.080], [40.725, -74.060], [40.745, -74.050], [40.755, -74.072], [40.735, -74.082], [40.728, -74.062], [40.748, -74.052]],
            // New York
            [[40.9370, -73.8255], [40.9382, -73.8241], [40.9391, -73.8237], [40.9347, -73.8222], [40.9321, -73.8215], [40.9289, -73.8209], [40.9274, -73.8251], [40.9332, -73.8262], [40.9361, -73.8293], [40.9388, -73.8281], [40.9396, -73.8264], [40.9349, -73.8232], [40.9338, -73.8221], [40.9352, -73.8237], [40.9305, -73.8250], [40.9291, -73.8268], [40.9323, -73.8282], [40.9367, -73.8271], [40.9341, -73.8262], [40.9395, -73.8277], [40.9402, -73.8255], [40.9387, -73.8240], [40.9355, -73.8219], [40.9342, -73.8205], [40.9327, -73.8238], [40.9359, -73.8248], [40.9367, -73.8217], [40.9392, -73.8252], [40.9325, -73.8238], [40.9311, -73.8260], [40.9343, -73.8284], [40.9361, -73.8291], [40.9375, -73.8273], [40.9387, -73.8241], [40.9393, -73.8233], [40.9354, -73.8220], [40.9332, -73.8212], [40.9308, -73.8205], [40.9284, -73.8217], [40.9296, -73.8249], [40.9313, -73.8258], [40.9347, -73.8234], [40.9368, -73.8261], [40.9372, -73.8292], [40.9338, -73.8277], [40.9319, -73.8263], [40.9306, -73.8229], [40.9341, -73.8218], [40.9384, -73.8209], [40.9371, -73.8244], [40.9362, -73.8261], [40.9377, -73.8252], [40.9381, -73.8236], [40.9345, -73.8230], [40.9329, -73.8214], [40.9304, -73.8209], [40.9292, -73.8231], [40.9321, -73.8248], [40.9363, -73.8274], [40.9392, -73.8281], [40.9398, -73.8267], [40.9346, -73.8237], [40.9331, -73.8224], [40.9350, -73.8229], [40.9308, -73.8242], [40.9282, -73.8259], [40.9315, -73.8285], [40.9358, -73.8273], [40.9336, -73.8260], [40.9391, -73.8272], [40.9404, -73.8249], [40.9382, -73.8242], [40.9357, -73.8216], [40.9344, -73.8202], [40.9323, -73.8232], [40.9354, -73.8257], [40.9368, -73.8236], [40.9383, -73.8231], [40.9332, -73.8216], [40.9317, -73.8203], [40.9296, -73.8221], [40.9282, -73.8239], [40.9335, -73.8252], [40.9369, -73.8282], [40.9384, -73.8279], [40.9393, -73.8261], [40.9342, -73.8235], [40.9336, -73.8220], [40.9353, -73.8231], [40.9310, -73.8244], [40.9288, -73.8262], [40.9316, -73.8290], [40.9362, -73.8275], [40.9340, -73.8264], [40.9392, -73.8268], [40.9401, -73.8247], [40.9384, -73.8238], [40.9359, -73.8217], [40.9345, -73.8204], [40.9328, -73.8235], [40.9360, -73.8245], [40.9371, -73.8233], [40.9389, -73.8227], [40.9341, -73.8209], [40.9325, -73.8201], [40.9309, -73.8218], [40.9287, -73.8234], [40.9342, -73.8249], [40.9373, -73.8283], [40.9394, -73.8275], [40.9395, -73.8263], [40.9351, -73.8234], [40.9334, -73.8216], [40.9354, -73.8224], [40.9306, -73.8237], [40.9281, -73.8253], [40.9317, -73.8277], [40.9359, -73.8269], [40.9337, -73.8261], [40.9390, -73.8274], [40.9405, -73.8256], [40.9386, -73.8241], [40.9362, -73.8225], [40.9341, -73.8208], [40.9329, -73.8231], [40.9355, -73.8249], [40.9369, -73.8229], [40.9382, -73.8222], [40.9339, -73.8212], [40.9322, -73.8202], [40.9302, -73.8224], [40.9284, -73.8245], [40.9346, -73.8256], [40.9367, -73.8285], [40.9386, -73.8277], [40.9391, -73.8265], [40.9347, -73.8233], [40.9332, -73.8219], [40.9351, -73.8227], [40.9313, -73.8239], [40.9289, -73.8258], [40.9322, -73.8288], [40.9368, -73.8270], [40.9343, -73.8265], [40.9389, -73.8278], [40.9403, -73.8254], [40.9381, -73.8237], [40.9358, -73.8218], [40.9344, -73.8206], [40.9326, -73.8238], [40.9363, -73.8244], [40.9374, -73.8231], [40.9390, -73.8224], [40.9343, -73.8207], [40.9327, -73.8200], [40.9306, -73.8216], [40.9283, -73.8233], [40.9344, -73.8248], [40.9377, -73.8284], [40.9395, -73.8272], [40.9394, -73.8262], [40.9352, -73.8238], [40.9333, -73.8217], [40.9356, -73.8225], [40.9311, -73.8238], [40.9286, -73.8252], [40.9325, -73.8278], [40.9361, -73.8266], [40.9339, -73.8260], [40.9388, -73.8275], [40.9402, -73.8257], [40.9383, -73.8243], [40.9365, -73.8222], [40.9343, -73.8208], [40.9324, -73.8236]],
            // Connecticut
            [[41.9839, -73.4310],[41.5620, -72.5637],[41.0257, -71.8674],[41.2202, -73.2924],[41.8504, -72.5221],[41.8192, -72.5688],[41.1681, -71.8148],[41.6945, -72.7907],[41.8414, -72.9169],[41.4864, -73.5359],[41.2567, -72.7893],[41.7321, -72.3456],[41.1234, -73.1234],[41.5678, -72.6789],[41.3456, -73.2345],[41.7890, -72.4567],[41.2345, -72.9876],[41.6789, -73.3456],[41.4567, -72.1234],[41.8901, -72.6789],[41.3456, -73.4567],[41.5678, -72.2345],[41.1234, -73.5678],[41.7890, -72.3456],[41.2345, -72.4567],[41.6789, -73.6789],[41.4567, -72.5678],[41.8901, -72.7890],[41.3456, -73.7890],[41.5678, -72.8901]],
            // Italy
            [[45.792, 9.3652],[46.292, 9.3652],[44.592, 9.3652],[42.0063, 12.1299],[45.4893, 10.0212],[43.5567, 12.9701],[40.3427, 15.2852],[43.2708, 11.6084]],
            // France
            [[50.7621, 2.5215],[43.5176, 5.3795],[47.7566, -1.8234],[44.0577, 5.1396],[49.126, 6.3317],[45.292, 7.1082],[44.5621, 3.3013],[47.2398, 1.9307],[47.0995, 6.7218]],
            // Germany
            [[51.5648, 10.3026],[52.2153, 9.1394],[52.5127, 7.4387],[52.7971, 10.3061],[53.1004, 13.576],[50.0785, 11.1137],[50.3876, 10.1345],[51.7948, 12.4951],[52.9203, 8.0827],[48.624, 11.8138],[52.7208, 12.1078],[52.9555, 7.2944],[48.5287, 11.3689],[47.8521, 11.2552],[50.8511, 9.8965],[53.3279, 11.6723],[51.3368, 8.1804],[49.3541, 7.2702],[48.3818, 7.8676],[52.0246, 10.2211],[52.2257, 9.812],[51.3386, 10.4193],[51.7781, 8.6305]],
            // Poland
            [[52.0191, 21.8941],[50.8975, 16.225],[52.0268, 16.7796],[51.2872, 16.2768],[51.973, 16.2179],[51.0915, 20.7304],[49.8515, 21.0803],[53.4714, 20.9661],[52.6876, 19.705],[53.8956, 14.4416],[51.0857, 15.6141],[49.242, 22.1635],[50.5629, 21.4578],[52.4339, 19.5947],[51.2208, 21.1271],[53.9685, 15.0923],[50.3488, 16.5107],[53.252, 18.108],[52.4458, 18.3606],[53.7641, 15.5877]]
            // NYC
            // [[40.7652, -73.9841], [40.7439, -74.0082], [40.7788, -73.9685], [40.7305, -74.0155], [40.7600, -73.9920], [40.7820, -73.9750], [40.7280, -74.0000], [40.7680, -73.9880], [40.7850, -73.9700], [40.7350, -74.0100], [40.7720, -73.9950], [40.7900, -73.9650], [40.7250, -74.0050], [40.7750, -73.9800], [40.7880, -73.9780], [40.7380, -74.0180], [40.7700, -73.9980], [40.7920, -73.9620], [40.7320, -74.0020], [40.7652, -73.9841], [40.7439, -74.0082], [40.7788, -73.9685], [40.7305, -74.0155], [40.7600, -73.9920], [40.7820, -73.9750], [40.7280, -74.0000], [40.7680, -73.9880], [40.7850, -73.9700], [40.7350, -74.0100], [40.7720, -73.9950], [40.7900, -73.9650], [40.7250, -74.0050], [40.7750, -73.9800], [40.7880, -73.9780], [40.7380, -74.0180], [40.7700, -73.9980], [40.7920, -73.9620], [40.7320, -74.0020], [40.7630, -73.9820], [40.7800, -73.9730], [40.7270, -74.0030], [40.7730, -73.9930], [40.7480, -73.9900], [40.7250, -73.9850], [40.7550, -74.0000], [40.7300, -73.9950], [40.7400, -73.9800], [40.7750, -73.9980], [40.7500, -73.9930], [40.7350, -74.0080], [40.7450, -73.9880], [40.7652, -73.9841], [40.7439, -74.0082], [40.7788, -73.9685], [40.7305, -74.0155], [40.7600, -73.9920], [40.7820, -73.9750], [40.7280, -74.0000], [40.7680, -73.9880], [40.7850, -73.9700], [40.7350, -74.0100], [40.7720, -73.9950], [40.7900, -73.9650], [40.7250, -74.0050], [40.7750, -73.9800], [40.7880, -73.9780], [40.7380, -74.0180], [40.7700, -73.9980], [40.7920, -73.9620], [40.7320, -74.0020], [40.7620, -73.9900], [40.7800, -73.9720], [40.7200, -74.0080], [40.7580, -73.9990], [40.7710, -73.9820], [40.7390, -74.0150], [40.7630, -74.0030], [40.7800, -73.9780], [40.7280, -74.0090], [40.7690, -73.9890], [40.7880, -73.9690], [40.7320, -74.0120], [40.7740, -73.9940], [40.7920, -73.9640], [40.7260, -74.0060], [40.7770, -73.9790], [40.7850, -73.9750], [40.7400, -74.0170], [40.7710, -73.9970], [40.7930, -73.9630]]

        ];

        function randomInRange([min, max]) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function formatTime(currentTime) {
            const d = new Date(currentTime);
            return ("0" + d.getDate()).slice(-2) + "." + ("0"+(d.getMonth()+1)).slice(-2) + "." + d.getFullYear() + " " + 
            ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
        }
        
        let homeRegion;
        const logColors = [];
        function generateGeoLog() {
            homeRegion = Math.floor(Math.random() * 7);
            let log = [];
            let awayNights = 0;
            let lastRegion = homeRegion;

            for (let day = 0; day < CONFIG.DAYS; day++) {
                let tripsCount = randomInRange(CONFIG.TRIPS_PER_DAY);
                let currentTime = new Date();
                currentTime.setDate(currentTime.getDate() - CONFIG.DAYS + day);
                currentTime.setHours(CONFIG.DAY_START_HOUR, 0, 0, 0);
                // log.push({"t":" ------------- new day ------------- " + new Date(currentTime).toISOString()});

                for (let trip = 0; trip < tripsCount; trip++) {
                    let pointsCount = randomInRange(CONFIG.POINTS_PER_TRIP);
                    let tripRegions = [lastRegion];
                    while (Math.random() < CONFIG.REGION_SWITCH_PROBABILITY) {
                        let nextRegion = (tripRegions[tripRegions.length - 1] + getRnd(1, 6)) % 6;
                        tripRegions.push(nextRegion);
                    }

                    for (let region of tripRegions) {
                        let pointsLeft = pointsCount;
                        while (pointsLeft > 0) {
                            let batchSize = Math.min(pointsLeft, randomInRange(CONFIG.BATCH_SIZE));
                            let batch = [];
                            for (let i = 0; i < batchSize; i++) {
                                const location = regions[region][Math.floor(Math.random() * regions[region].length)];
                                batch.push({ source: 'VisitsNative', startDate: formatTime(currentTime), endDate: formatTime(currentTime), localDate: currentTime.toISOString(), latitude: location[0], longitude: location[1] });
                                // batch.push(`d:${formatTime(currentTime).slice(0,5)},${location[0]},${location[1]}`);
                                currentTime.setSeconds(currentTime.getSeconds() + Math.floor(Math.random() * 100) + 5);

                                logColors.push(`hsl(${Math.random() * 360}, 100%, 50%)`);
                            }
                            log.push(...batch);
                            // log.push({"t":" -- new batch -- "});
                            currentTime.setMinutes(currentTime.getMinutes() + randomInRange(CONFIG.TIME_BETWEEN_BATCHES));
                            pointsLeft -= batchSize;
                        }
                    }
                    lastRegion = tripRegions[tripRegions.length - 1];
                    currentTime.setMinutes(currentTime.getMinutes() + CONFIG.TIME_BETWEEN_TRIPS);
                }

                if (awayNights < CONFIG.NIGHT_OUTS && Math.random() < 0.3) {
                    lastRegion = (lastRegion + 1) % 6;
                    awayNights++;
                    // log.push({"time":new Date(currentTime).toISOString(), "location":regions[lastRegion][0], "reason":"----- not home ----- "});
                } else {
                    lastRegion = homeRegion;
                }
                // log.push({"time":new Date(currentTime).toISOString(), "location":regions[lastRegion][0]});
                const location = regions[lastRegion][Math.floor(Math.random() * regions[lastRegion].length)];
                log.push({ source: 'VisitsNative', startDate: formatTime(currentTime), endDate: formatTime(currentTime), localDate: currentTime.toISOString(), latitude: location[0], longitude: location[1] });
                // log.push(`d:${formatTime(currentTime).slice(0,5)},${location[0]},${location[1]}`);
            }
            return log;
        }
        const log = generateGeoLog();

        // console.log(JSON.stringify(generateGeoLog()));

        
        // ---- visualisator ----

        function drawTimeline() {
            // console.log(zoomVal, scrollVal);
            
            this.ctx.clearRect(0, 0, this.timeline.width, this.timeline.height); // Clear previous frame
            this.ctx.font = "12px Arial";
            
            let pxPerSecond = zoomVal.value / 100; // Scale factor for zoom
            let totalWidth = 86400 * CONFIG.DAYS * pxPerSecond; // Total width of the timeline in pixels
            let visibleStart = scrollVal.value; // Start of the visible timeline range
            let visibleEnd = visibleStart + this.timeline.width / pxPerSecond; // End of the visible range
            
            // Draw day and hour markers
            for (let d = 0; d <= CONFIG.DAYS + 1; d++) {
                for (let h = 0; h < 24; h++) {
                    let x = ((d * 86400) + (h * 3600) - visibleStart) * pxPerSecond; // Position based on time
                    if (x >= 0 && x <= this.timeline.width) { // Draw only if within visible area
                        this.ctx.fillStyle = "black";
                        this.ctx.fillText(`D:${d} ${h}:00`, x, 20); // Label each hour
                        this.ctx.fillRect(x, 30, 1, 40); // Draw tick mark for each hour
                    }
                }
            }
            
            // Draw event markers on the timeline
            // const startEvent = new Date(log[0].startDate);
            // console.log(startEvent);
            const startEventTime = (new Date(log[0].localDate.slice(0,10))).getTime() / 1000;            
            log.forEach((event, i) => {
                const eventTime = (new Date(event.localDate)).getTime() / 1000;
                let x = (eventTime - startEventTime - visibleStart) * pxPerSecond; // Compute event position
                if (x >= 0 && x <= this.timeline.width) { // Only draw if within view
                    this.ctx.fillStyle = logColors[i];
                    this.ctx.fillRect(x, 70, 5, 20); // Draw small rectangle for the event
                }
                // let x = (event.time - visibleStart) * pxPerSecond; // Compute event position
                // if (x >= 0 && x <= this.timeline.width) { // Only draw if within view
                //     this.ctx.fillStyle = randomColor;
                //     this.ctx.fillRect(x, 70, 5, 20); // Draw small rectangle for the event
                // }
            });
        }
        
        let csvLog = ref('');
        const travels = ref([]);
        const nycCard = ref({});
        const collapsCard = ref({});
        return {
            zoomVal,
            scrollVal,
            timeline,
            drawTimeline,
            ctx,
            log,
            logColors,
            homeRegion,
            csvLog,
            regions,
            travels,
            nycCard,
            scrollWidth: (CONFIG.DAYS + 1) * 86400,
            collapsCard
        }
    },
    methods: {
        reload() {
            reloadNuxtApp({
                ttl: 10
                // force?: boolean
                // path?: string
                // persistState?: boolean
            });
            // this.$nuxt.refresh();
        },
        getHomeRegion() {
            let r = ['New Jarsey State', 'New York State', 'Connecticut State', 'Italy', 'France', 'Germany', 'Poland'];
            return r[this.homeRegion];
        },
        getColor(num) {
            let r = ['maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua'];
            return r[num];
        },
        calcCSV() {
            this.csvLog = 'name,latitude,longitude,new_track,color\n';
            let prev = '';
            let color = 'red';
            let nextColor = 0;
            for (let i = 0; i < this.log.length; i++) {
                const el = this.log[i];
                if (prev != el.startDate.slice(0,5)) {
                    nextColor += 1;
                    if (nextColor > 11) nextColor = 0;
                    color = this.getColor(nextColor)
                }
                this.csvLog += `${el.startDate.slice(0,5)},${el.latitude},${el.longitude},${prev != el.startDate.slice(0,5) ? 1 : ''},${color}\n`;
                prev = el.startDate.slice(0,5);
            }
        },

        zoomUpdHandler() {
            // this.drawTimeline();
        },
        scrollTo(value) {
            window.scrollTo({
                top: document.querySelector(`.${value}`).offsetTop - 100,
                behavior: 'smooth'
            })
        },
        downloadJson() {
            const dayjs = useDayjs();

            let tpl = {
                "id": "00000000-E6A3-4FAE-A19F-B5A5B14339B1",
                "order": 1
            }
            for (let i = 0; i < this.log.length; i++) {
                const seg = this.log[i];
                let _tpl = {...tpl};
                _tpl.id = `${('00000000' + (i + 1)).substr(-8)}-E6A3-4FAE-A19F-B5A5B14339B1`;
                _tpl.order = i + 1;
            }
            this.saveTextAsFile(JSON.stringify(this.log),`raw_gps_home[${this.getHomeRegion().replace(' ','_').toLowerCase()}]_${dayjs().format('YYYYMMDD_HHmm')}.json`);
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
        },
        calcTravels() {
            this.travels = [];
            for (let i = 0; i < this.log.length; i++) {
                const el = this.log[i];
                const regionsList = ['New Jarsey State', 'New York State', 'Connecticut State', 'Italy', 'France', 'Germany', 'Poland'];
                let newTravel = {
                    "id":`352132B7-B326-4994-${Math.floor(Math.random() * 10000)}-2E08D3DB4E81`,
                    "latitude":0,
                    "longitude":0,
                    "departureDateString":"28.02.2025 11:02",
                    "arrivalDateString":"26.02.2025 11:53",
                    "localDate":"28.02.2025",
                    "timezone":0,
                    "countryCode":"US",
                    "state":"none",
                    "usaStateCode":"",
                    "isCurrent":false,
                    "isAuto":true,
                    "isHome":false,
                    "isTransfer":false,
                };
                let region;
                if (this.regions[0].find((e) => {return e[0] === el.latitude && e[1] === el.longitude})) {
                    region = regionsList[0];
                } else if (this.regions[1].find((e) => {return e[0] === el.latitude && e[1] === el.longitude})) {
                    region = regionsList[1];
                } else if (this.regions[2].find((e) => {return e[0] === el.latitude && e[1] === el.longitude})) {
                    region = regionsList[2];
                } else if (this.regions[3].find((e) => {return e[0] === el.latitude && e[1] === el.longitude})) {
                    region = regionsList[3];
                } else if (this.regions[4].find((e) => {return e[0] === el.latitude && e[1] === el.longitude})) {
                    region = regionsList[4];
                } else if (this.regions[5].find((e) => {return e[0] === el.latitude && e[1] === el.longitude})) {
                    region = regionsList[5];
                } else if (this.regions[6].find((e) => {return e[0] === el.latitude && e[1] === el.longitude})) {
                    region = regionsList[6];
                }

                // console.log(region,this.nycCard);
                // if (region === 'NYC' && !this.nycCard[el.startDate.substring(0,10)]) {
                //     this.nycCard[el.startDate.substring(0,10)] = true;
                // }

                if (this.travels.length === 0 || (this.travels[this.travels.length - 1].usaStateCode != region)) {
                    this.travels.push(newTravel);
                    this.travels[this.travels.length - 1].latitude = el.latitude;
                    this.travels[this.travels.length - 1].longitude = el.longitude;
                    this.travels[this.travels.length - 1].arrivalDateString = el.startDate;
                    this.travels[this.travels.length - 1].departureDateString = el.endDate;
                    this.travels[this.travels.length - 1].localDate = el.localDate;
                    this.travels[this.travels.length - 1].usaStateCode = region;
                }
                this.travels[this.travels.length - 1].departureDateString = el.endDate;
                this.travels[this.travels.length - 1].isHome = this.getHomeRegion() === region;
            }

            // console.log(this.travels);
        },
        markCityOnlyDays() {
            this.collapsCard;
            for (let i = 0; i < this.travels.length; i++) {
                const t = this.travels[i];

                if (!this.collapsCard[t.arrivalDateString.substring(0,10)]) this.collapsCard[t.arrivalDateString.substring(0,10)] = {};
                if (!this.collapsCard[t.departureDateString.substring(0,10)]) this.collapsCard[t.departureDateString.substring(0,10)] = {};
                this.collapsCard[t.arrivalDateString.substring(0,10)][t.usaStateCode] = true;
                this.collapsCard[t.departureDateString.substring(0,10)][t.usaStateCode] = true;
            }

            let lastRegion = 'New Jarsey State';
            Object.entries(this.collapsCard).forEach(v => {
                if (v[1]['NYC'] && v[1]['New Jarsey State'] && !v[1]['New York State'] && lastRegion === 'New Jarsey State') {
                    for (let i = 0; i < this.travels.length; i++) {
                        const t = this.travels[i];
                        if ((t.arrivalDateString.substring(0,10) === v[0] || t.departureDateString.substring(0,10) === v[0])
                                && t.arrivalDateString.substring(0,10) === t.departureDateString.substring(0,10)
                                && t.usaStateCode === 'NYC') {
                            t.isCandidateToCollapse = true;
                            lastRegion = this.travels[i - 1].usaStateCode;
                        }
                    }
                }
            });

            console.log(this.collapsCard);
        },
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
    canvas { border: 1px solid #ccc; }
    .controls { margin-top: 10px; }
    input { width: 100%; }
    textarea {width: 60%; height: 180px;}
    .tiny {font-size: 9px;}
    th {padding: 0 10px 0 0;}
</style>