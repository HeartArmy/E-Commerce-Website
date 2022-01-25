
export function seedDatabase(firebase) {
    function getUUID() {
      // eslint gets funny about bitwise
      /* eslint-disable */
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
      /* eslint-enable */
    }
    firebase.firestore().collection('Fruits').add({
        id: getUUID(),
        title: 'Banana',
        price: 20.54,
        rating: 4,
        image:"/images/fruits/banana.jpg"
    });
    firebase.firestore().collection('Fruits').add({
        id: getUUID(),
        title: 'Orange',
        price: 30.10,
        rating: 3,
        image:"/images/fruits/orange.jpg"
    });
    firebase.firestore().collection('Fruits').add({
        id: getUUID(),
        title: 'Pineapple',
        price: 11.96,
        rating: 4,
        image:"/images/fruits/pineapple.jpg"
    });
    firebase.firestore().collection('Vegetables').add({
        id: getUUID(),
        title: 'Pepper',
        price: 34.5,
        rating: 3,
        image:"/images/vegetables/pepper.jpg"
    });
    firebase.firestore().collection('Vegetables').add({
        id: getUUID(),
        title: 'Broccoli',
        price: 40,
        rating: 4,
        image:"/images/vegetables/brocoli.jpg"
    });
    firebase.firestore().collection('Vegetables').add({
        id: getUUID(),
        title: 'Greenleaf',
        price: 45,
        rating: 3,
        image:"/images/vegetables/greenleaf.jpg"
    });
    firebase.firestore().collection('Others').add({
        id: getUUID(),
        title: 'Beef',
        price: 23.7,
        rating: 4,
        image:"/images/others/beef.jpg"
    });
    firebase.firestore().collection('Others').add({
        id: getUUID(),
        title: 'Rice',
        price: 23.7,
        rating: 4,
        image:"/images/others/rice.jpg"
    });
    firebase.firestore().collection('Others').add({
        id: getUUID(),
        title: 'Chicken',
        price: 29.6,
        rating: 5,
        image:"/images/others/chicken.jpg"
    });
}