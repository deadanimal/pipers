# users/models.py
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from simple_history.models import HistoricalRecords

from api.helpers import PathAndRename

from organisations.models import Organisation


class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=True, max_length=255)

    active = models.BooleanField(default=False)

    organisation = models.ForeignKey(Organisation, on_delete=models.CASCADE, null=True)
    profile_picture = models.ImageField(null=True, upload_to=PathAndRename('piper/profile-pictures'))

    USER_TYPE = [

        ('AN', 'Analyst'), 
        ('DE', 'Developer'), 
        ('TM', 'Technical Manager'), 
        
        ('BE', 'Business Executive'), 
        ('SE', 'Sales Executive'), 
        ('SM', 'Sales Manager'), 

        ('CL', 'Client'), 

        ('NA', 'Not Available'),   
    ]

    user_type = models.CharField(
        max_length=2,
        choices=USER_TYPE,
        default='NA',
    )        

    history = HistoricalRecords()
   
    
    def __str__(self):
        return self.username



class UserSettings(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=True, max_length=255)

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)

    history = HistoricalRecords()

    def __str__(self):
        return self.name            