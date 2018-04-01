module.exports = {
    readCar: (req, res) => {
        let { id } = req.params;
        const dbInstance = req.app.get('db');
        dbInstance.read_car(id).then(prod => {
            res.status(200).send(prod);
        });
    },
    readCars: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_cars().then(products => {
            res.status(200).send(products);
        });
    },
    createCar: (req, res) => {
      let { make , model, year, price } = req.body;
      let newCar = {
          make, 
          model, 
          year, 
          price
      };
      const dbInstance = req.app.get('db');
      dbInstance.create_car(newCar).then(products => {
          res.status(200).send(products);
      });  
    },
    updateCar: (req, res) => {
        let { id } = req.params;
        let { make, model, year, price } = req.body;
        let updatedCar = {
            id, 
            make, 
            model, 
            year, 
            price,
        };
        const dbInstance = req.app.get('db');
        dbInstance.update_car(updatedCar).then(products => {
            res.status(200).send(products);
        });
    },
    deleteCar: (req, res) => {
        let { id } = req.params;
        const dbInstance = req.app.get('db');
        dbInstance.delete_car(id).then(product => {
            res.status(200).send(product);
        });
    }
}