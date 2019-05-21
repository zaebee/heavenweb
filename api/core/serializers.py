# core/serializers.py

from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = ("id", "name", "ingredients", "picture", "difficulty", "prep_time", "prep_guide")



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()

    def create(self, validated_data):
        user = User(**validated_data)
        # Hash the user's password.
        user.set_password(validated_data['password'])
        user.save()
        return user
