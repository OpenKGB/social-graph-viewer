/**
 * data for the chart
 * @returns {{0: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null,null,null,null,null]}, 1: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null]}, 2: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null]}, 3: {id: number, name: string, load: number, confusionmatrix: [null,null]}, 4: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null]}, 5: {id: number, name: string, load: number, confusionmatrix: [null,null]}, 6: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null]}, 7: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null]}}}
 */
function chart_data() {
    var data = {
        "0": {
            id: 0,
            name: "James Bell",
            load: Math.random(),
            // confusionmatrix: [
            //     [7293, 1224],
            //     [7293, 1224]
            // ],
            ref: [{
                from: 0,
                to: 1,
                edge_width: Math.random(),
            }, {
                from: 0,
                to: 4,
                edge_width: Math.random(),
            }, {
                from: 0,
                to: 5,
                edge_width: Math.random(),
            }, {
                from: 0,
                to: 6,
                edge_width: Math.random(),
            }, {
                from: 0,
                to: 7,
                edge_width: Math.random(),
            },]
        },
        "1": {
            id: 1,
            name: "Robert Miller",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 1,
                to: 2,
                edge_width: Math.random(),
            },]
        },
        "2": {
            id: 2,
            name: "William Taylor",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 2,
                to: 3,
                edge_width: Math.random(),
            },]
        },
        "3": {
            id: 3,
            name: "Richard Wilson",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
        },
        "4": {
            id: 4,
            name: "Joseph Russel",
            load: Math.random(),
            // confusionmatrix: [
            //     [7293, 1224],
            //     [7293, 1224]
            // ],
            ref: [{
                from: 4,
                to: 2,
                edge_width: Math.random(),
            },]
        },
        "5": {
            id: 5,
            name: "Mark Vitek",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
        },
        "6": {
            id: 6,
            name: "Edward Diaz",
            load: Math.random(),
            // confusionmatrix: [
            //     [7293, 1224],
            //     [7293, 1224]
            // ],
            ref: [{
                from: 6,
                to: 2,
                edge_width: Math.random(),
            },]
        },
        "7": {
            id: 7,
            name: "Timothy Wood",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 7,
                to: 3,
                edge_width: Math.random(),
            },]
        },
    };
    return data;
}

function refreshed_data() {
    return {
        "0": {
            id: 0,
            name: "systemA",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 0,
                to: 1,
                edge_width: Math.random(),
            }, {
                from: 0,
                to: 4,
                edge_width: Math.random(),
            }, {
                from: 0,
                to: 5,
                edge_width: Math.random(),
            },
                /*
                            {
                                    from:0,
                                    to:6,
                                    edge_width:Math.random(),
                            },
                            */
                {
                    from: 0,
                    to: 7,
                    edge_width: Math.random(),
                }, ]
        },
        "1": {
            id: 1,
            name: "systemB",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 1,
                to: 2,
                edge_width: Math.random(),
            }, ]
        },
        "2": {
            id: 2,
            name: "systemC",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 2,
                to: 3,
                edge_width: Math.random(),
            }, ]
        },
        "3": {
            id: 3,
            name: "systemD",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
        },
        "4": {
            id: 4,
            name: "systemE",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 4,
                to: 2,
                edge_width: Math.random(),
            }, {
                from: 4,
                to: 8,
                edge_width: Math.random(),
            }, ]
        },
        "5": {
            id: 5,
            name: "systemF",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
        },
        "8": { // change 6 to 8
            id: 8,
            name: "systemI",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 8,
                to: 7,
                edge_width: Math.random(),
            }, ]
        },
        "7": {
            id: 7,
            name: "systemH",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 7,
                to: 3,
                edge_width: Math.random(),
            }, ]
        },
    };
}
