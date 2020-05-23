from __future__ import unicode_literals 
import uuid 
import datetime
from django.db import models
from django.utils.formats import get_format

from django.contrib.gis.db import models
from simple_history.models import HistoricalRecords
from django.core.validators import MaxValueValidator, MinValueValidator

from api.helpers import PathAndRename

from organisations.models import Organisation
from users.models import CustomUser


class Notification(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    project = models.CharField(null=False, max_length=255)
    client = models.ForeignKey(Organisation, on_delete=models.CASCADE, null=True)
    submission_date = models.DateTimeField(null=True, blank=True)

    BRIEFING_REQUIRED = [
        ('TR', 'True'),   
        ('FL', 'False'),     
    ]

    briefing_required = models.CharField(
        max_length=2,
        choices=BRIEFING_REQUIRED,
        default='FL',
    )   

    briefing_date = models.DateTimeField(null=True, blank=True)

    PURCHASE_REQUIRED = [
        ('TR', 'True'),   
        ('FL', 'False'),     
    ]

    purchase_required = models.CharField(
        max_length=2,
        choices=PURCHASE_REQUIRED,
        default='FL',
    )      


    
    SOURCE_TYPE = [

        ('EP', 'e-Perolehan'),
        ('T2', 'Tender2U'),   
        ('TD', 'Tender Direct'),   

        ('NA', 'Not Available'),   
    ]

    source = models.CharField(
        max_length=2,
        choices=SOURCE_TYPE,
        default='NA',
    )  

    STATUS = [

        ('AR', 'Archive'),   
        ('CR', 'Created'),
        ('SM', 'Submission'),   

    ]

    status = models.CharField(
        max_length=2,
        choices=STATUS,
        default='CR',
    )      
    

    #creator = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    created_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    history = HistoricalRecords()
    

    def __str__(self):
        return self.project
