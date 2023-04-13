class CustomerController{

    getAll(_,res) {
        res.json({name:"Gabriel", idade:27, job:'desenvolvedor ruim'})
    }

}

module.exports = new CustomerController();