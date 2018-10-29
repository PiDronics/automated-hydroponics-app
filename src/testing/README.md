# Testing strategies

1. Check if UI components have rendered
2. Check for change in state upon event
3. Decouple dependencies
4. Test data from firebase follows the schema (found at ./model.json)


## Component rendering
Shallow rendering should be used to test if components have rendered into the UI. Will render the component and it's children. If any of its children are other components, their children will not be rendered.

## Change of State
* Updates when a button is clicked
* Updates when data is returned from firebase
* Calculations

## Decouple Dependencies
Replace the callback function in the .on() method in the firebase library to change the state to mock data. Using jest.fn() will replace implementation

## Notes about the DB schema
* The root of the DB contains "systems" and "users". "sensorList" values resides in a deeper part of the database. It was abstracted out due to repetition in the database <u> only for the purpose of testing. </u>