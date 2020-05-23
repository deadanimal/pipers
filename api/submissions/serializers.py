from datetime import datetime
from calendar import timegm
import json

from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers


from django.utils.timezone import now


from .models import (
    Submission,
    SubmissionDocument,
    SubmissionTask
)


class SubmissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Submission
        fields = '__all__'

class SubmissionDocumentSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubmissionDocument
        fields = '__all__'

class SubmissionTaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubmissionTask
        fields = '__all__'                
