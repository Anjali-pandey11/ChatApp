 const userId = req.user._id;
    const filteredUser = await User.find({_id:{$ne: userId}}) // Translation: "Wo sab users jinka _id is userId ke barabar NAHI hai"


**`mongoose.Schema.Types` kya hai?** | Mongoose ke special data types ka collection |
| **Kyun use karte hain?** | Taaki MongoDB ka proper ObjectId format use ho |
| **Bina iske kya hoga?** | Plain string store hoga, proper linking nahi hogi |
| **`ref: "User"` kya karta hai?** | Batata hai kis collection se link hai |
| **Dono saath kyun?** | Type batata hai "kya store hoga", ref batata hai "kiska reference hai" |


# ++++++++++++++++  In messageController
#  $or: [
        {senderId:myId , received: selectedUserId}, 
        {senderId:selectedUserId,receiverId:myId} ✅✅✅   //  Yani hum dono direction ke messages nikal rahe hain: Jo maine bheje (senderId = myId) Aur jo saamne wale ne bheje (senderId = selectedUserId)
      ]
    })
    
   await Message.updateMany({senderId:selectedUserId,receiverId:myId, seen:true})  ✅✅✅   //jo dusre user ne bheje hain (selectedUserId) aur maine receive kiye hain (receiverId = myId)