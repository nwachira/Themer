import frappe

def get_context(context):
    context.detail = frappe.get_doc("Product Category", "l62013260l")
    return context