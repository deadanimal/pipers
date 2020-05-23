import datetime
import uuid
import tempfile

from django.http import JsonResponse
from django.shortcuts import render
from django.db.models import Q
from django.core.files.storage import default_storage
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from api.helpers import PathAndRename

from submissions.models import (
    Submission
)

from .models import (
    Notification, 
)

from .serializers import (
    NotificationSerializer, 
)



class NotificationViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Notification.objects.all()
        return queryset  
        

    @action(methods=['GET'], detail=True)
    def approve(self, request, *args, **kwargs):
        notification = self.get_object()
        notification.status = 'SM'
        notification.save()

        new_submission = Submission(
            status='CR', 
            notification=notification,
            project=notification.project,
            client=notification.client,
            submission_date=notification.submission_date)
        new_submission.save()        

        serializer =  NotificationSerializer(notification)
        return Response(serializer.data)    

    @action(methods=['GET'], detail=True)
    def reject(self, request, *args, **kwargs):
        notification = self.get_object()
        notification.status = 'AR'
        notification.save()

        serializer =  NotificationSerializer(notification)
        return Response(serializer.data)      

    @action(methods=['GET'], detail=False)
    def archived(self, request, *args, **kwargs):
        notifications = Notification.objects.filter(status='AR')
        serializer =  NotificationSerializer(notifications, many=True)
        return Response(serializer.data)    

    @action(methods=['GET'], detail=False)
    def created(self, request, *args, **kwargs):
        notifications = Notification.objects.filter(status='CR')
        serializer =  NotificationSerializer(notifications, many=True)
        return Response(serializer.data)   

    @action(methods=['GET'], detail=False)
    def submitted(self, request, *args, **kwargs):
        notifications = Notification.objects.filter(status='SM')
        serializer =  NotificationSerializer(notifications, many=True)
        return Response(serializer.data)                                

          
