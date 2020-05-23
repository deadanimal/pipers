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
from notifications.models import Notification
from users.models import CustomUser


class Submission(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    codename = models.CharField(null=True, max_length=255)
    project = models.CharField(null=True, max_length=255)
    client = models.ForeignKey(Organisation, on_delete=models.CASCADE, null=True)
    submission_date = models.DateField(null=True, blank=True)

    notification = models.ForeignKey(Notification, on_delete=models.CASCADE, null=True)

    STATUS_TYPE = [
  
        ('CR', 'Created'),
        ('FL', 'Failed To Submit'),
        ('IP', 'In Progress'),
        ('RJ', 'Rejected'),
        ('SM', 'Submitted'),   

    ]

    status = models.CharField(
        max_length=2,
        choices=STATUS_TYPE,
        default='CR',
    )        

    history = HistoricalRecords()

    def __str__(self):
        return self.name

class SubmissionDocument(models.Model):  

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(null=False, max_length=255)
    document_file = models.FileField(null=True, upload_to=PathAndRename('piper/documents'))

    DOCUMENT_TYPE = [
        ('PD', 'Provided'),   
        ('RV', 'Revised Document'),   

        ('NA', 'Not Available'),   
    ]

    document_type = models.CharField(
        max_length=2,
        choices=DOCUMENT_TYPE,
        default='NA',
    )        

    history = HistoricalRecords()

    def __str__(self):
        return self.name          


class SubmissionTask(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(null=False, max_length=255)

    notification = models.ForeignKey(Notification, on_delete=models.CASCADE, null=False)

    TASK_TYPE = [
        # Financial
        ('CP', 'Company Details'),


        # Technical

        ('PP', 'Proposal'),
        ('PT', 'Prototype'),
        ('VD', 'Video'), 
        ('WF', 'Wireframe'), 

        ('NA', 'Not Availabl'),   
    ]   

    task_type = models.CharField(
        max_length=2,
        choices=TASK_TYPE,
        default='NA',
    )      

    TASK_STATUS = [
        ('CR', 'Created'),   
        ('AS', 'Assigned'),   
        ('MK', 'In Progress'),
        ('MR', 'In Rectification'),   
        ('CC', 'To Review'),
        ('CM', 'Completed'),          
    ]   

    task_status = models.CharField(
        max_length=2,
        choices=TASK_STATUS,
        default='NA',
    )          

    checker = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=False, related_name='task_checker')
    maker = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=False, related_name='task_maker')

    checker_by_date = models.DateTimeField(null=True, blank=True)
    maker_by_date = models.DateTimeField(null=True, blank=True)

    checker_real_date = models.DateTimeField(null=True, blank=True)
    maker_real_date = models.DateTimeField(null=True, blank=True)    

    history = HistoricalRecords()

    def __str__(self):
        return self.name