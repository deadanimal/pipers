from __future__ import unicode_literals 
import uuid 
import datetime
from django.db import models
from django.utils.formats import get_format

from django.contrib.gis.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from api.helpers import PathAndRename

from users.models import CustomUser


class Note(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)

    NOTE_TYPE = [

        ('MM', 'Minutes of Meeting'),

        ('RB', 'Business Requirements'),   
        ('RU', 'User Requirements'),   
        ('RS', 'System Requirements'),   

        ('NA', 'Not Available'),   
    ]

    note_type = models.CharField(
        max_length=2,
        choices=NOTE_TYPE,
        default='NA',
    )  

    creator = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    created_date = models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return self.name

class NoteChart(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)   

    chart_text = models.TextField()

    note = models.ForeignKey(Note, on_delete=models.CASCADE, null=True)

    created_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name         

class NoteItem(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)

    note = models.ForeignKey(Note, on_delete=models.CASCADE, null=True)

    text_note = models.TextField()

    created_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class NoteAttachment(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)

    note = models.ForeignKey(Note, on_delete=models.CASCADE, null=True)
    attachment = models.FileField(upload_to=PathAndRename('piper/note-attachments'))

    NOTE_ATTACHMENT_TYPE = [

        ('NA', 'Not Available'),   
    ]

    note_attachment_type = models.CharField(
        max_length=2,
        choices=NOTE_ATTACHMENT_TYPE,
        default='NA',
    )  

    created_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
