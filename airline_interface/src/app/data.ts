
export const flight_data = [
    {
        source: 'BWI',
        destination: 'ATL',
        flightName: 'AA-111',
        departure_time: '2019-03-24:06:00',
        arrival_time: '2019-03-24:11:00',
        cost: '300'
    },
    {
        source: 'ATL',
        destination: 'BWI',
        flightName: 'AA-212',
        departure_time: '2019-03-25:10:00',
        arrival_time: '2019-03-25:13:00',
        cost: '280'
    },
    {
        source: 'BWI',
        destination: 'ATL',
        flightName: 'DL-999',
        departure_time: '2019-03-24:12:00',
        arrival_time: '2019-03-24:16:00',
        cost: '500'
    },
    {
        source: 'ATL',
        destination: 'BWI',
        flightName: 'DL-219',
        departure_time: '2019-03-25:8:00',
        arrival_time: '2019-03-25:12:00',
        cost: '600'
    },
    {
        source: 'MSP',
        destination: 'ANC',
        flightName: 'AK-321',
        departure_time: '2019-03-23:09:00',
        arrival_time: '2019-03-23:15:00',
        cost: '800'
    },
    {
        source: 'ANC',
        destination: 'MSP',
        flightName: 'AK-324',
        departure_time: '2019-03-27:11:00',
        arrival_time: '2019-03-27:16:00',
        cost: '650'
    },
    {
        source: 'MSP',
        destination: 'ANC',
        flightName: 'AK-322',
        departure_time: '2019-03-26:11:00',
        arrival_time: '2019-03-26:17:00',
        cost: '700'
    },
    {
        source: 'ANC',
        destination: 'MSP',
        flightName: 'AK-323',
        departure_time: '2019-03-23:13:00',
        arrival_time: '2019-03-23:19:00',
        cost: '600'
    },
    {
        source: 'JFK',
        destination: 'ORD',
        flightName: 'UA-521',
        departure_time: '2019-03-24:16:00',
        arrival_time: '2019-03-24:19:00',
        cost: '750'
    },
    {
        source: 'ORD',
        destination: 'JFK',
        flightName: 'UA-429',
        departure_time: '2019-03-25:22:00',
        arrival_time: '2019-03-25:24:00',
        cost: '600'
    },
    {
        source: 'IAD',
        destination: 'LAX',
        flightName: 'SW-821',
        departure_time: '2019-03-25:08:00',
        arrival_time: '2019-03-25:12:00',
        cost: '780'
    },
    {
        source: 'LAX',
        destination: 'IAD',
        flightName: 'SW-721',
        departure_time: '2019-03-26:11:00',
        arrival_time: '2019-03-26:14:00',
        cost: '1100'
    }
];

export const config_data = {
    max_passengers: 6,
    error_msg_required: 'Please select all required manidatory fields',
    error_msg_validentries: 'Source & destination should not be same'
}