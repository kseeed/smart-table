import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const skipEmptyTargetValuesRule = rules.skipEmptyTargetValues();
    const searchRule = rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false);
    const compare = createComparison(['skipEmptyTargetValues'], [searchRule]);

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(row => compare(row, state));
        // return data;
    }
}