# core/views.py

from django.contrib.auth import get_user_model
from rest_framework import viewsets

from rest_framework.mixins import CreateModelMixin

from .serializers import RecipeSerializer, UserSerializer
from .models import Recipe, Post


class RecipeViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()


class CreateUserView(CreateModelMixin, viewsets.GenericViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
