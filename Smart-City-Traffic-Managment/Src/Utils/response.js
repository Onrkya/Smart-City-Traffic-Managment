class Response {

    constructor(data= null , message = null ,status ){
        this.data=data
        this.message=message
        this.status=status
    }

    succses(res) {
        return res.status(200).json({
            succses :true , 
            data: this.data , 
            message : this.message ?? "İşlem başarılı"
        })
    }


    creadet (res) {
    return res.status(201).json({
        succses :true , 
        data: this.data , 
        message : this.message ?? "İşlem başarılı"
    })
}

    error500 (res) {
    return res.status(500).json({
        succses :false, 
        data: this.data , 
        message : this.message ?? "İşlem başarısız!"
    })
}
    error400 (res) {
    return res.status(400).json({
        succses :false, 
        data: this.data , 
        message : this.message ?? "İşlem başarısız!"
    })
}

    error401 (res) {
    return res.status(401).json({
        succses :false, 
        data: this.data , 
        message : this.message ?? "Lütfen Oturum açın!"
    })
}

    error404 (res) {
    return res.status(404).json({
        succses :false, 
        data: this.data , 
        message : this.message ?? "İşlem Başarısız!"
    
    })
}

    error429 (res) {
    return res.status(429).json({
        succses :false, 
        data: this.data , 
        message : this.message ?? "Çok fazla istek alındı!"
    })
}

}

module.exports = Response