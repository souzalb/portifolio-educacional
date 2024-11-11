// const fs = require("fs")
// const { google } = require("googleapis")

// const GOOGLE_API_FOLDER_ID = "1FHVIr5weso33OVgqoFc0MMZZ2cUvFpEE"

// export async function uploadFile() {
//   try {
//     const auth = new google.auth.GoogleAuth({
//       keyFile: "gdrive.json",
//       scopes: ["https://www.googleapis.com/auth/drive"],
//     })

//     const driveService = google.drive({
//       version: "v3",
//       auth,
//     })

//     const fileMetaData = {
//       name: "ti.png",
//       parents: [GOOGLE_API_FOLDER_ID],
//     }

//     const media = {
//       mimeType: "image/png",
//       body: fs.createReadStream("ti.png"),
//     }

//     const response = await driveService.files.create({
//       resource: fileMetaData,
//       media: media,
//       field: "id",
//     })
//     return response.data.id
//   } catch (err) {
//     console.log("Upload file error", err)
//   }
// }

// // uploadFile().then((data) => {
// //   console.log(data)
// //   //https://drive.google.com/uc?export=view&id=
// // })
