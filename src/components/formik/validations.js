import { object, string, boolean } from 'yup';
import * as Yup from 'yup' 


const phoneRegExp = "/^(?:0)[0-9]{10}$/"

const validationMessages = {
    firstName: {
        required: 'Lütfen isminizi giriniz',
        min: 'Lütfen isminizi en az 3 karakter giriniz',
    },
    lastName: {
        required: 'Lütfen soyisminizi giriniz',
        min: 'Lütfen soyisminizi en az 3 karakter giriniz',
    },
    email: {
        required: 'Lütfen email giriniz',
        format: 'Doğru formatta email yazdığınızdan emin olun',
    },
    password: {
        required: 'Lütfen şifre giriniz',
        min: 'Lütfen en az 6 karakter şifre giriniz',
    },
    confirmPassword: {
        required: 'Lütfen şifre giriniz',
        match: 'Şifreler uyuşmuyor',
    },
    phoneNumber: {
        required: 'Lütfen telefon numaranızı giriniz',
        isNumber: 'Geçerli bir formatta giriş yapınız'
    },
    gender: {
        selected: 'Lütfen cinsiyetinizi işaretleyiniz',
    },
    confirmBox: {
        selected: '"Onaylıyorum" kutusunu işaretlemelisiniz',
    },
};

let userSchema = object({

    firstName: string().required(validationMessages.firstName.required).min(3, validationMessages.firstName.min),
    lastName: string().required(validationMessages.lastName.required).min(3, validationMessages.lastName.min),
    email: string().email(validationMessages.email.format).required(validationMessages.email.required),
    password: string().required(validationMessages.password.required).min(6, validationMessages.password.min),
    confirmPassword: string().oneOf([Yup.ref('password')],validationMessages.confirmPassword.match).required(validationMessages.confirmPassword.required),
    phoneNumber: string().matches(phoneRegExp, validationMessages.phoneNumber.isNumber).required(validationMessages.phoneNumber.required),
    gender: string().required(validationMessages.gender.selected),
    confirmBox: boolean().required(validationMessages.confirmBox.selected),
});

export default userSchema
