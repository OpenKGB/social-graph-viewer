/**
 * data for the chart
 * @returns {{0: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null,null,null,null,null]}, 1: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null]}, 2: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null]}, 3: {id: number, name: string, load: number, confusionmatrix: [null,null]}, 4: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null]}, 5: {id: number, name: string, load: number, confusionmatrix: [null,null]}, 6: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null]}, 7: {id: number, name: string, load: number, confusionmatrix: [null,null], ref: [null]}}}
 */
function chart_data() {
    var data = {
        "0": {
            id: 0,
            name: "root",
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
            name: "systemA",
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
            name: "systemB",
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
            name: "systemC",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
        },
        "4": {
            id: 4,
            name: "systemD",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 4,
                to: 2,
                edge_width: Math.random(),
            },]
        },
        "5": {
            id: 5,
            name: "systemE",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
        },
        "6": {
            id: 6,
            name: "systemF",
            load: Math.random(),
            confusionmatrix: [
                [7293, 1224],
                [7293, 1224]
            ],
            ref: [{
                from: 6,
                to: 2,
                edge_width: Math.random(),
            },]
        },
        "7": {
            id: 7,
            name: "systemG",
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
