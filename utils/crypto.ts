// Adapted from https://gist.github.com/vlucas/2bd40f62d20c1d49237a109d491974eb
const crypto = require("crypto")

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY // Must be 256 bits (32 characters) encoded as base64
const IV_LENGTH = 16 // For AES, this is always 16

const MISSING_KEY_ERROR = new Error(
  "You must set the ENCRYPTION_KEY environment variable. In the project root, run `node scripts/generate-encryption-key.js`"
)

export function encrypt(text: string) {
  if (!ENCRYPTION_KEY) throw MISSING_KEY_ERROR

  let iv = crypto.randomBytes(IV_LENGTH)
  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY, "base64"), iv)
  let encrypted = cipher.update(text)

  encrypted = Buffer.concat([encrypted, cipher.final()])

  return iv.toString("hex") + ":" + encrypted.toString("hex")
}

export function decrypt(text: string) {
  if (!ENCRYPTION_KEY) throw MISSING_KEY_ERROR

  let textParts = text.split(":")
  let iv = Buffer.from(textParts.shift() as any, "hex")
  let encryptedText = Buffer.from(textParts.join(":"), "hex")
  let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY, "base64"), iv)
  let decrypted = decipher.update(encryptedText)

  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString()
}
