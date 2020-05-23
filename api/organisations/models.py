from __future__ import unicode_literals 
import uuid 
import datetime
from django.db import models
from django.utils.formats import get_format

from django.contrib.gis.db import models
from simple_history.models import HistoricalRecords
from django.core.validators import MaxValueValidator, MinValueValidator

from api.helpers import PathAndRename


class Organisation(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    name = models.CharField(blank=False, max_length=255)
    short_name = models.CharField(blank=False, max_length=12)

    active = models.BooleanField(default=True)


    ORGANISATION_TYPE = [

        ('GO', 'Government'), 
        ('LC', 'Local Authority'), 
        
        ('ER', 'Enterprise'), 
        ('SM', 'SME Company'), 

        ('NA', 'Not Available'),   
    ]

    organisation_type = models.CharField(
        max_length=2,
        choices=ORGANISATION_TYPE,
        default='NA',
    )            

    created_date = models.DateTimeField(auto_now=True)

    history = HistoricalRecords()

    def __str__(self):
        return self.name
