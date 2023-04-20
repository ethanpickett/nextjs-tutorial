
//This is an api endpoint

// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' }); 
  }