from __future__ import absolute_import, unicode_literals
from celery import task, shared_task
from celery.decorators import periodic_task
from celery.task.schedules import crontab
from decouple import config

from django.core.mail import EmailMultiAlternatives, EmailMessage
from django.template import Context
from django.template.loader import render_to_string
from anymail.message import attach_inline_image_file

import requests

def contact_us_email(name, email):
    merge_data = {
        'name': name, 
        'email': email
    }
    
    plaintext_context = Context(autoescape=False)  
    subject = render_to_string("contact_us_subject.txt", merge_data)
    text_body = render_to_string("contact_us_body.txt", merge_data)
    html_body = render_to_string("contact_us_body.html", merge_data)

    message = EmailMultiAlternatives(
        subject=subject, 
        from_email="api@pipeline.com.my",
        to=["afeezaziz@pipeline.com.my"], 
        body=text_body)
    message.attach_alternative(html_body, "text/html")
    message.send()

    return True