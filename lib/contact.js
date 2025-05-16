import prisma from './prisma'

export async function submitContactForm(formData) {
    try {
        const contact = await prisma.contactForm.create({
            data: {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
        })
        return { success: true, data: contact }
    } catch (error) {
        console.error('Error submitting form:', error)
        return { success: false, error: error.message }
    }
}