
from django.shortcuts import render
from django.db.models import Q

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin


from django_filters.rest_framework import DjangoFilterBackend


from .models import (
    Meeting, 
    MeetingInvitation
)

from .serializers import (
    MeetingSerializer, 
    MeetingInvitationSerializer
)


class MeetingViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 

        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Meeting.objects.all()

        return queryset  



class MeetingInvitationViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = MeetingInvitation.objects.all()
    serializer_class = MeetingInvitationSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 

        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        return MeetingInvitation.objects.filter(meeting__id=self.kwargs['parent_lookup_meeting'])