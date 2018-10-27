const model = require('./model');

class CreateMockData {
    static createDashboardReading(param) {
        let mock = {};
        Object.assign(mock, model.dashboard_reading);
        mock.current = param.current;
        mock.enabled = param.enabled;
        mock.status = param.status;
        return mock;
    }

    createSensorData (obj) {
        let mock = {};
        Object.assign(mock, model.sensors);
        mock["Humidity"] = this.createDashboardReading(obj[0]);
        mock["Nutrient Concentration"] = this.createDashboardReading(obj[1]);
        mock["Oxygen"] = this.createDashboardReading(obj[2]);
        mock["Temperature"] = this.createDashboardReading(obj[3]);
        mock["ph"] = this.createDashboardReading(obj[4]);
        return mock;
    }

    static createSystemData(updated_date, id, name) {
        let mock = {};
        Object.assign(mock, model.system);
        mock["lastUpdated"] = updated_date;
        mock["systemId"] = id;
        mock["systemName"] = name;
        return mock;
    }
}

export default CreateMockData;